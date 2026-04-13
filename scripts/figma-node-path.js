const fs = require('fs');
const path = require('path');
const https = require('https');

const FIGMA_FILE_KEY = 'O2gEdQJCPCsSmtYEZ5mvVh';

function readEnvLocal() {
  const envPath = path.resolve(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) return {};
  const raw = fs.readFileSync(envPath, 'utf8');
  const out = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

function httpsGetJson(url, headers) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers }, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
          return;
        }
        reject(new Error(`HTTP ${res.statusCode || 0}: ${data.slice(0, 300)}`));
      });
    });
    req.on('error', reject);
  });
}

function normalizeNodeId(id) {
  if (!id) return id;
  if (id.includes(':')) return id;
  return id.replace('-', ':');
}

function findPath(root, targetId) {
  const target = normalizeNodeId(targetId);
  const stack = [];
  let found = null;

  function dfs(node) {
    if (!node || found) return;
    stack.push(node);
    if (node.id === target) {
      found = [...stack];
      return;
    }
    const children = node.children;
    if (Array.isArray(children)) {
      for (const c of children) {
        dfs(c);
        if (found) return;
      }
    }
    stack.pop();
  }

  dfs(root);
  return found;
}

async function main() {
  const args = process.argv.slice(2);
  const frameIdRaw = args[0];
  const targetIdRaw = args[1];

  if (!frameIdRaw || !targetIdRaw) {
    process.stderr.write('Usage: node scripts/figma-node-path.js <frameId> <targetNodeId>\n');
    process.exit(1);
  }

  const frameId = normalizeNodeId(frameIdRaw);
  const targetId = normalizeNodeId(targetIdRaw);

  const envLocal = readEnvLocal();
  const token = process.env.FIGMA_ACCESS_TOKEN || envLocal.FIGMA_ACCESS_TOKEN;
  if (!token) {
    process.stderr.write('Missing FIGMA_ACCESS_TOKEN (set in .env.local or env)\n');
    process.exit(2);
  }

  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(
    frameId,
  )}`;
  const json = await httpsGetJson(url, { 'X-Figma-Token': token });
  const doc = json && json.nodes && json.nodes[frameId] && json.nodes[frameId].document;
  if (!doc) {
    process.stderr.write(`Node not found: ${frameId}\n`);
    process.exit(3);
  }

  const pathNodes = findPath(doc, targetId);
  if (!pathNodes) {
    process.stderr.write(`Target not found: ${targetId}\n`);
    process.exit(4);
  }

  for (const n of pathNodes) {
    process.stdout.write(`${n.id}\t${n.type}\t${n.name || ''}\n`);
  }

  const parent = pathNodes.length >= 2 ? pathNodes[pathNodes.length - 2] : null;
  if (parent && Array.isArray(parent.children)) {
    process.stdout.write('--- Siblings ---\n');
    for (const s of parent.children) {
      process.stdout.write(`${s.id}\t${s.type}\t${s.name || ''}\n`);
    }
  }
}

main().catch((err) => {
  process.stderr.write(`${err && err.message ? err.message : String(err)}\n`);
  process.exit(99);
});

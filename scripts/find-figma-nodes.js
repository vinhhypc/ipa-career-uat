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

function walk(node, fn) {
  fn(node);
  const children = node && node.children;
  if (!Array.isArray(children)) return;
  for (const c of children) walk(c, fn);
}

async function main() {
  const args = process.argv.slice(2);
  const frameIdRaw = args[0];
  const patternRaw = args[1] || '';
  const maxRaw = args[2] || '200';

  if (!frameIdRaw) {
    process.stderr.write(
      'Usage: node scripts/find-figma-nodes.js <frameId> [namePattern] [max=200]\n',
    );
    process.exit(1);
  }

  const frameId = normalizeNodeId(frameIdRaw);
  const max = Number.isFinite(Number(maxRaw)) ? Number(maxRaw) : 200;
  const re = patternRaw ? new RegExp(patternRaw, 'i') : null;

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

  const hits = [];
  walk(doc, (n) => {
    if (!n || !n.id) return;
    if (re && !re.test(String(n.name || ''))) return;
    hits.push({ id: n.id, type: n.type, name: n.name });
  });

  for (const h of hits.slice(0, max)) {
    process.stdout.write(`${h.id}\t${h.type}\t${h.name}\n`);
  }
  process.stdout.write(`Total matches: ${hits.length}\n`);
}

main().catch((err) => {
  process.stderr.write(`${err && err.message ? err.message : String(err)}\n`);
  process.exit(99);
});

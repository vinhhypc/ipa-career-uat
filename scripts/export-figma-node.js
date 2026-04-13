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
        reject(new Error(`HTTP ${res.statusCode || 0}: ${data.slice(0, 200)}`));
      });
    });
    req.on('error', reject);
  });
}

function httpsDownload(url, outPath) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const file = fs.createWriteStream(outPath);

    const req = https.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close(() => {
          fs.unlinkSync(outPath);
          httpsDownload(res.headers.location, outPath).then(resolve, reject);
        });
        return;
      }

      if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
        file.close(() => {
          try {
            fs.unlinkSync(outPath);
          } catch {}
          reject(new Error(`Asset download failed: HTTP ${res.statusCode || 0}`));
        });
        return;
      }

      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });

    req.on('error', (err) => {
      file.close(() => {
        try {
          fs.unlinkSync(outPath);
        } catch {}
        reject(err);
      });
    });
  });
}

function normalizeNodeId(id) {
  if (!id) return id;
  if (id.includes(':')) return id;
  return id.replace('-', ':');
}

async function main() {
  const args = process.argv.slice(2);
  const nodeIdRaw = args[0];
  const outPathRaw = args[1];
  const scale = args[2] || '2';
  const format = args[3] || 'png';

  if (!nodeIdRaw || !outPathRaw) {
    process.stderr.write(
      'Usage: node scripts/export-figma-node.js <nodeId> <outPath> [scale=2] [format=png]\n',
    );
    process.exit(1);
  }

  const nodeId = normalizeNodeId(nodeIdRaw);
  const outPath = path.resolve(process.cwd(), outPathRaw);

  const envLocal = readEnvLocal();
  const token = process.env.FIGMA_ACCESS_TOKEN || envLocal.FIGMA_ACCESS_TOKEN;
  if (!token) {
    process.stderr.write('Missing FIGMA_ACCESS_TOKEN (set in .env.local or env)\n');
    process.exit(2);
  }

  const imagesUrl = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(
    nodeId,
  )}&format=${encodeURIComponent(format)}&scale=${encodeURIComponent(scale)}`;

  const json = await httpsGetJson(imagesUrl, { 'X-Figma-Token': token });
  const assetUrl = (json && json.images && json.images[nodeId]) || null;
  if (!assetUrl) {
    process.stderr.write(`Image not found for nodeId: ${nodeId}\n`);
    process.exit(3);
  }

  await httpsDownload(assetUrl, outPath);
  process.stdout.write(`Saved: ${outPath}\n`);
}

main().catch((err) => {
  process.stderr.write(`${err && err.message ? err.message : String(err)}\n`);
  process.exit(99);
});

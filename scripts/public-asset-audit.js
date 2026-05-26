const fs = require('fs');
const path = require('path');

function listFilesRecursive(dirAbs) {
  const out = [];
  const entries = fs.readdirSync(dirAbs, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(dirAbs, e.name);
    if (e.isDirectory()) {
      out.push(...listFilesRecursive(abs));
      continue;
    }
    if (e.isFile()) out.push(abs);
  }
  return out;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildAlternationRegex(literals) {
  const uniq = Array.from(new Set(literals.filter(Boolean)));
  if (uniq.length === 0) return null;
  uniq.sort((a, b) => b.length - a.length);
  return new RegExp(uniq.map(escapeRegExp).join('|'), 'g');
}

function shouldSkipPath(abs, repoRoot, excludeDirs) {
  const rel = path.relative(repoRoot, abs);
  const parts = rel.split(path.sep);
  for (const p of parts) {
    if (excludeDirs.has(p)) return true;
  }
  return false;
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const publicRoot = path.join(repoRoot, 'public');
  const outAll = path.join(repoRoot, 'public-asset-audit.all.csv');
  const outNoMatch = path.join(repoRoot, 'public-asset-audit.no-match.csv');

  const excludeDirs = new Set([
    'node_modules',
    '.next',
    'dist',
    'build',
    'coverage',
    'out',
    '.git',
    'public',
  ]);

  const includeExt = new Set([
    '.ts',
    '.tsx',
    '.js',
    '.jsx',
    '.md',
    '.mdx',
    '.json',
    '.css',
    '.scss',
    '.html',
    '.yml',
    '.yaml',
    '.svg',
  ]);

  if (!fs.existsSync(publicRoot)) {
    process.stderr.write(`Missing public folder: ${publicRoot}\n`);
    process.exit(2);
  }

  const publicFilesAbs = listFilesRecursive(publicRoot);
  const publicItems = publicFilesAbs.map((abs) => {
    const rel = path.relative(publicRoot, abs).split(path.sep).join('/');
    const pathRef = `/${rel}`.toLowerCase();
    const basename = path.basename(abs).toLowerCase();
    return { abs, rel, pathRef, basename };
  });

  const pathRefs = publicItems.map((x) => x.pathRef);
  const basenames = publicItems.map((x) => x.basename);
  const rePath = buildAlternationRegex(pathRefs);
  const reBase = buildAlternationRegex(basenames);

  const codeFilesAbs = listFilesRecursive(repoRoot).filter((abs) => {
    if (shouldSkipPath(abs, repoRoot, excludeDirs)) return false;
    return includeExt.has(path.extname(abs).toLowerCase());
  });

  const pathCounts = new Map();
  const baseCounts = new Map();

  if (rePath || reBase) {
    for (const abs of codeFilesAbs) {
      let raw = '';
      try {
        raw = fs.readFileSync(abs, 'utf8');
      } catch {
        continue;
      }

      const text = raw.toLowerCase();

      if (rePath) {
        for (const m of text.matchAll(rePath)) {
          const k = m[0];
          pathCounts.set(k, (pathCounts.get(k) || 0) + 1);
        }
      }

      if (reBase) {
        for (const m of text.matchAll(reBase)) {
          const k = m[0];
          baseCounts.set(k, (baseCounts.get(k) || 0) + 1);
        }
      }
    }
  }

  const rows = publicItems.map((x) => {
    const matchPath = pathCounts.get(x.pathRef) || 0;
    const matchBase = baseCounts.get(x.basename) || 0;
    const total = matchPath + matchBase;
    return {
      public_file: x.rel,
      basename: x.basename,
      match_path: matchPath,
      match_basename: matchBase,
      match_total: total,
      no_match: total === 0 ? 'true' : 'false',
    };
  });

  rows.sort((a, b) => a.public_file.localeCompare(b.public_file));

  const header = Object.keys(rows[0] || {}).join(',');
  const toCsvLine = (obj) =>
    Object.values(obj)
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(',');

  fs.writeFileSync(outAll, `${header}\n${rows.map(toCsvLine).join('\n')}\n`, 'utf8');
  const noMatch = rows.filter((r) => r.no_match === 'true');
  fs.writeFileSync(outNoMatch, `${header}\n${noMatch.map(toCsvLine).join('\n')}\n`, 'utf8');

  process.stdout.write(
    `PUBLIC_FILES=${publicItems.length}; CODE_FILES=${codeFilesAbs.length}; NO_MATCH=${noMatch.length}\n`,
  );
  process.stdout.write(`OUT_ALL=${outAll}\n`);
  process.stdout.write(`OUT_NO_MATCH=${outNoMatch}\n`);
}

main();

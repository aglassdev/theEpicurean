/**
 * pruneChains.js
 * --------------
 * Removes every brand listed in excludedChains.js from the guide: atlas pins,
 * detail pages and their source JSX.
 *
 * Runs as part of `npm run build`, so however an excluded brand gets back in
 * (a re-geocode from restaurants.csv, a dataset re-import) it is gone again by
 * the time anything ships. Safe and quiet to re-run.
 *
 * Usage: node scripts/pruneChains.js [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { EXCLUDED_CHAINS, isExcludedChain } from './excludedChains.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const COMPONENTS = path.join(ROOT, 'public', 'components');
const SRC = path.join(ROOT, 'src');
const GEO = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const quiet = process.argv.includes('--quiet');

let pins = 0;
let pages = 0;
let sources = 0;

// ── Atlas pins ───────────────────────────────────────────────────────────────
if (fs.existsSync(GEO)) {
  const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
  const before = geo.restaurants.length;
  geo.restaurants = geo.restaurants.filter((r) => !isExcludedChain(r.n));
  pins = before - geo.restaurants.length;
  if (pins) {
    geo.count = geo.restaurants.length;
    fs.writeFileSync(GEO, JSON.stringify(geo));
  }
}

// ── Detail pages, and the JSX they are generated from ────────────────────────
const walk = (dir, onFile) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, onFile);
    else onFile(p, e.name);
  }
};

if (fs.existsSync(COMPONENTS)) {
  walk(COMPONENTS, (p, name) => {
    if (!name.endsWith('.json') || name === 'index.json') return;
    let d;
    try { d = JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return; }
    if (!isExcludedChain(d.restaurantName || d.pageTitle)) return;
    fs.rmSync(p);
    pages++;
    const jsx = path.join(SRC, path.relative(COMPONENTS, p).replace(/\.json$/, '.jsx'));
    if (fs.existsSync(jsx)) { fs.rmSync(jsx); sources++; }
  });
}

if (!quiet || pins || pages) {
  console.log(
    `  chains pruned  ${EXCLUDED_CHAINS.length} brands: ` +
    `${pins} atlas pins, ${pages} pages, ${sources} source files`
  );
}

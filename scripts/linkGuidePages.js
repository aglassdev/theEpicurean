/**
 * linkGuidePages.js
 * ─────────────────────────────────────────────────────────────────────────
 * Enriches public/data/restaurants-geo.json with an in-guide page path (`p`)
 * for every restaurant that already has a detail page under public/components.
 * The Atlas popups then open the in-guide page instead of the external site.
 *
 *   Run:  npm run link-pages     (fast, no network — pure file matching)
 *
 * Matching mirrors the generator's createComponentName() exactly (strip
 * non-alphanumerics, PascalCase, join) so names line up with the on-disk
 * filenames; duplicate names are disambiguated by city. Restaurants without
 * a detail page keep their website link. Safe to re-run.
 *
 * Note: the geocoded list (from restaurants.csv) and the detail-page dataset
 * only partially overlap, so expect a fraction to match — that's expected.
 * ───────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEO_PATH = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const COMPONENTS = path.join(ROOT, 'public', 'components');

// ── Name transforms (exact replica of generateRestaurants.js) ─────────────────
const compName = (s) => (s || '')
  .replace(/[^a-zA-Z0-9\s]/g, '')
  .split(/\s+/).filter(Boolean)
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
  .join('');
const cityAcr = (c) => (c || '').replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase();
const citySlug = (s) => compName(s).toLowerCase().replace(/[^a-z0-9]/g, '');

// ── Guard ─────────────────────────────────────────────────────────────────────
if (!fs.existsSync(GEO_PATH)) {
  console.error(`\n✗ ${path.relative(ROOT, GEO_PATH)} not found.`);
  console.error('  Run  npm run geocode  first to create it.\n');
  process.exit(1);
}

// ── Index every detail page: filename → [{ route, citySlug }] ─────────────────
console.log('Indexing in-guide detail pages…');
const files = fs.readdirSync(COMPONENTS, { recursive: true })
  .filter((f) => f.endsWith('.json') && !/index\.json$/.test(f) && !/(^|[\\/])Restaurants\.json$/i.test(f));

const index = new Map();
const add = (key, entry) => {
  if (!key) return;
  if (!index.has(key)) index.set(key, []);
  const bucket = index.get(key);
  if (!bucket.some((e) => e.route === entry.route)) bucket.push(entry);
};
for (const rel of files) {
  const parts = rel.split(path.sep);
  const base = parts[parts.length - 1].replace(/\.json$/, '');
  const cslug = (parts[parts.length - 2] || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const route = '/' + parts.join('/').replace(/\.json$/, '');
  const entry = { route, citySlug: cslug };
  add(base.toLowerCase(), entry);
  // Filenames get shortened by hand (PattyOsCafe.json holds "Patty O's Cafe &
  // Bakery"), so index the name the page actually declares as well.
  try {
    const d = JSON.parse(fs.readFileSync(path.join(COMPONENTS, rel), 'utf8'));
    const declared = compName(d.restaurantName || d.pageTitle).toLowerCase();
    if (declared && declared !== base.toLowerCase()) add(declared, entry);
  } catch { /* unreadable page — the filename key still stands */ }
}
console.log(`  ${files.length} detail pages · ${index.size} unique names\n`);

// ── Enrich ──────────────────────────────────────────────────────────────────
const geo = JSON.parse(fs.readFileSync(GEO_PATH, 'utf8'));
const list = geo.restaurants || [];

const findRoute = (name, city) => {
  // Sources disagree about the leading article ("The Inn at Little Washington"
  // vs InnAtLittleWashington.json), so try the name both ways.
  const variants = [name, String(name || '').replace(/^the\s+/i, ''), `The ${name}`];
  const keys = [];
  for (const v of variants) {
    keys.push(compName(v).toLowerCase(), (compName(v) + cityAcr(city)).toLowerCase());
  }
  const cand = [];
  const seen = new Set();
  for (const k of keys) {
    for (const c of index.get(k) || []) {
      if (seen.has(c.route)) continue;
      seen.add(c.route);
      cand.push(c);
    }
  }
  if (!cand.length) return null;
  if (cand.length === 1) return cand[0].route;
  const cs = citySlug(city);
  return (cand.find((c) => c.citySlug === cs) || cand[0]).route;
};

let linked = 0;
for (const r of list) {
  if (r.lng == null) { if (r.p) delete r.p; continue; }
  const route = findRoute(r.n, r.c);
  if (route) { r.p = route; linked++; }
  else if (r.p) delete r.p; // clear any stale link
}

geo.linked = linked;
fs.writeFileSync(GEO_PATH, JSON.stringify(geo));

const placed = list.filter((r) => r.lng != null).length;
console.log(`✓ Linked ${linked} of ${placed} placed restaurants to in-guide pages (${(100 * linked / placed).toFixed(1)}%).`);
console.log(`  The rest keep their website link — they have no detail page in the guide.`);
console.log(`  → ${path.relative(ROOT, GEO_PATH)}`);

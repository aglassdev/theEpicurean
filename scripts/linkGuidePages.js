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
import { countrySlugFrom } from './countrySlug.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEO_PATH = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const COMPONENTS = path.join(ROOT, 'public', 'components');

// ── Name transforms (exact replica of generateRestaurants.js) ─────────────────
const pascal = (s) => (s || '')
  .replace(/[^a-zA-Z0-9\s]/g, '')
  .split(/\s+/).filter(Boolean)
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
  .join('');
// A name made only of marks strips to nothing: Ñ, the bar in Osaka, and KŌEN in
// the Maldives. Folding the accents away gives N and KOEN, which is what the
// page generator names their files. Same fallback, same order, both sides.
const compName = (s) =>
  pascal(s) || pascal(String(s || '').normalize('NFD').replace(/\p{M}+/gu, ''));
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
const displayNameForSlug = () => {
  const file = path.join(ROOT, 'public/data/destinations.json');
  const names = new Map();
  if (!fs.existsSync(file)) return names;
  const { countries = [] } = JSON.parse(fs.readFileSync(file, 'utf8'));
  // Every slug the country's cities actually sit under, not just the first one:
  // Türkiye's are split across turkey/ and trkiye/, and taking one of those left
  // the other unmapped.
  //
  // The slug goes to whichever country holds most of the cities under it. One
  // Austrian village is filed in the usa/other bucket, and on a first-one-wins
  // rule that single page made "usa" mean Austria and relabelled five thousand
  // American restaurants.
  const tally = new Map();
  for (const c of countries)
    for (const city of c.regions?.flatMap((rg) => rg.cities || []) || []) {
      const slug = city.path ? city.path.split('/')[1] : null;
      if (!slug) continue;
      if (!tally.has(slug)) tally.set(slug, new Map());
      const m = tally.get(slug);
      m.set(c.name, (m.get(c.name) || 0) + 1);
    }
  for (const [slug, m] of tally)
    names.set(slug, [...m].sort((a, b) => b[1] - a[1])[0][0]);
  return names;
};
const nameForSlug = displayNameForSlug();

/**
 * The country two things belong to, comparable across both spellings the tree
 * uses. Directories are slugs the sources happened to write (chinese-mainland,
 * trkiye, turkey, usa) while records carry a country name, and once a record's
 * label has been corrected to the name the site displays, the two no longer
 * look alike. Both sides go through the display name first, so China matches
 * chinese-mainland and Turkiye matches both of its directories.
 */
const countryKey = (x) => countrySlugFrom(nameForSlug.get(String(x).toLowerCase()) || x);

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
  const entry = { route, citySlug: cslug, country: countryKey(parts[0]), name: '' };
  add(base.toLowerCase(), entry);
  // Filenames get shortened by hand (PattyOsCafe.json holds "Patty O's Cafe &
  // Bakery"), so index the name the page actually declares as well.
  try {
    const d = JSON.parse(fs.readFileSync(path.join(COMPONENTS, rel), 'utf8'));
    entry.name = String(d.restaurantName || d.pageTitle || '').trim();
    const declared = compName(entry.name).toLowerCase();
    if (declared && declared !== base.toLowerCase()) add(declared, entry);
    // A page may list other names its sources use, e.g. a merged record that used
    // to be two entries. Those spellings should reach it too.
    for (const alias of d.aliases || []) add(compName(alias).toLowerCase(), entry);
  } catch { /* unreadable page — the filename key still stands */ }
}
console.log(`  ${files.length} detail pages · ${index.size} unique names\n`);

// Countries the tree files pages under. A record whose country field holds a city
// ("Canberra", "San Francisco") will not be in here, and is left to match on name
// as before rather than being refused a page it may well belong to.
const KNOWN_COUNTRIES = new Set(
  fs.readdirSync(COMPONENTS, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => countryKey(e.name))
);

// ── Enrich ──────────────────────────────────────────────────────────────────
const geo = JSON.parse(fs.readFileSync(GEO_PATH, 'utf8'));
const list = geo.restaurants || [];

const findRoute = (name, city, country, address) => {
  // Sources spell the same restaurant several ways: with or without a leading
  // article, "&" or "and", and sometimes with the city tacked on the end
  // ("Sushi Nakazawa Washington DC"). Try each shape before giving up.
  const raw = String(name || '');
  const cityWords = String(city || '').replace(/[^a-zA-Z ]/g, ' ').trim();
  const trimmed = cityWords
    ? raw.replace(new RegExp(`[\\s,-]+${cityWords.replace(/\s+/g, '\\s+')}(\\s+d\\.?c\\.?)?$`, 'i'), '').trim()
    : raw;
  const base = [raw, trimmed, raw.replace(/[\s,-]+d\.?c\.?$/i, '').trim()];
  const variants = [];
  for (const b of base) {
    if (!b) continue;
    variants.push(b, b.replace(/^the\s+/i, ''), `The ${b}`,
      b.replace(/\s*&\s*/g, ' and '), b.replace(/\s+and\s+/gi, ' & '));
  }
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

  // A name on its own is not an identity. Tri is a dining room on Koggala Lake in
  // Sri Lanka and also a restaurant in Agger, Denmark; Acanto is in Milan and in
  // Chicago; Ad Hoc is in Napa and in Osaka. Matching on the name alone handed
  // every one of them the first page found, so the others lost the page they
  // should have had and their cities never reached Destinations.
  //
  // A page in another country is therefore never the same restaurant. Where the
  // record's country field is unreadable or holds a city, there is nothing to
  // check against and the old behaviour stands.
  const rc = countryKey(country);
  let inSameCountry = cand.filter((c) => c.country === rc);
  // The country field is the least reliable thing on a record: it holds cities,
  // postcodes and, where a page has been refiled, the country the restaurant
  // used to be in. When it rules out every candidate, the tail of the address
  // gets a say before the record is left unlinked.
  if (!inSameCountry.length && address) {
    const tail = String(address).split(',').map((x) => x.trim()).filter(Boolean).pop();
    const ac = tail && countryKey(tail);
    if (ac && ac !== rc) inSameCountry = cand.filter((c) => c.country === ac);
  }
  const usable = inSameCountry.length ? inSameCountry
    : (rc && KNOWN_COUNTRIES.has(rc) ? [] : cand);
  if (!usable.length) return null;
  if (usable.length === 1) return usable[0].route;

  // "Washington D.C" and a page filed under washington are the same place, so
  // the city test allows one to be a prefix of the other rather than demanding
  // they be written identically.
  const cs = citySlug(city);
  const sameCity = (c) => c.citySlug === cs
    || (cs && c.citySlug && (cs.startsWith(c.citySlug) || c.citySlug.startsWith(cs)));
  const inCity = usable.filter(sameCity);
  const pool = inCity.length ? inCity : usable;
  // "À Table" and "Table" are two Paris restaurants whose filenames both come
  // out as Table, because the accent is stripped before the name is PascalCased.
  // The page still says which one it is, so an exact name beats a shaped one.
  const exact = pool.find((c) => c.name && c.name.toLowerCase() === String(name || '').trim().toLowerCase());
  return (exact || pool[0]).route;
};

/**
 * Sources put all sorts of things in the country field: a city (Canberra,
 * Toronto, Bangkok), a state (Hawaii, California), a postcode (9620), a
 * misspelling (Austraila, Greence). The Atlas prints that field under the
 * restaurant's name, so "Honolulu · Hawaii" and "Tokyo · Tokyo Japan" are both
 * visible mistakes.
 *
 * Once a record is linked, its page path says where the guide has decided the
 * restaurant is, and that decision is what every listing, hero and breadcrumb
 * on the site is built from. So the page wins and the label follows it.
 *
 * The exceptions are the places that are deliberately filed inside a larger
 * country: Scotland under uk/, Hong Kong under china/. There the label is not a
 * mistake and is left exactly as it is.
 */
const FILED_INSIDE = {
  uk: ['scotland', 'wales', 'england'],
  china: ['hong-kong', 'macau', 'macao'],
};

let linked = 0;
let relabelled = 0;
for (const r of list) {
  if (r.lng == null) { if (r.p) delete r.p; continue; }
  const route = findRoute(r.n, r.c, r.co, r.a);
  if (route) {
    r.p = route;
    linked++;
    const slug = route.split('/')[1];
    const proper = nameForSlug.get(slug);
    // Compared on the raw label, not the slug: countrySlugFrom already folds
    // Scotland into uk, which is right for matching and useless for this test.
    const plain = String(r.co || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const fold = (x) => String(x || '').normalize('NFD').replace(/\p{M}+/gu, '').toLowerCase();
    const allowed = (FILED_INSIDE[slug] || []).includes(plain)
      // Never trade an accented spelling for its own plain fold.
      || (fold(r.co) === fold(proper) && r.co !== fold(r.co));
    if (proper && !allowed && r.co !== proper) {
      r.co = proper;
      relabelled++;
    }
  } else if (r.p) delete r.p; // clear any stale link
}

geo.linked = linked;
fs.writeFileSync(GEO_PATH, JSON.stringify(geo));

const placed = list.filter((r) => r.lng != null).length;
console.log(`✓ Linked ${linked} of ${placed} placed restaurants to in-guide pages (${(100 * linked / placed).toFixed(1)}%).`);
console.log(`  The rest keep their website link — they have no detail page in the guide.`);
if (relabelled) console.log(`  ${relabelled} country labels disagreed with their page and took the page's country.`);
console.log(`  → ${path.relative(ROOT, GEO_PATH)}`);

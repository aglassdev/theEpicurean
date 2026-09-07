/**
 * pagesForAtlasOnly.js
 * --------------------
 * Gives a detail page to every restaurant that exists only as an atlas pin.
 *
 * Destinations is built from public/components, so a city only appears in the
 * browse tree once something there has a page. The geocoded set is much larger
 * than the paged one, which is why India showed fifteen cities on the map and
 * one under Destinations.
 *
 * Every atlas record carries a name, address, city, country and website, so each
 * becomes a concise page filed at {country}/{region}/{city}. buildDestinations
 * then picks the new directories up and writes their listings as usual.
 *
 * Existing pages are never touched: a record is skipped if it already links to a
 * page, or if the target file exists. Safe to re-run.
 *
 * Usage: node scripts/pagesForAtlasOnly.js [--write] [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { feature } from 'topojson-client';
import { isExcludedChain } from './excludedChains.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const COMPONENTS = path.join(ROOT, 'public', 'components');
const GEO = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const WRITE = process.argv.includes('--write');
const quiet = process.argv.includes('--quiet');

// ── Slugging, matching importDatasets.js exactly so new pages land in the
//    directories that already exist rather than beside them ──────────────────
const slugify = (t) => (t || '').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
  .replace(/-+/g, '-').replace(/^-+|-+$/g, '').trim();
const componentName = (n) => (n || '').replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(Boolean)
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');

const STATES = {
  AL: 'alabama', AK: 'alaska', AZ: 'arizona', AR: 'arkansas', CA: 'california', CO: 'colorado',
  CT: 'connecticut', DE: 'delaware', FL: 'florida', GA: 'georgia', HI: 'hawaii', ID: 'idaho',
  IL: 'illinois', IN: 'indiana', IA: 'iowa', KS: 'kansas', KY: 'kentucky', LA: 'louisiana',
  ME: 'maine', MD: 'maryland', MA: 'massachusetts', MI: 'michigan', MN: 'minnesota',
  MS: 'mississippi', MO: 'missouri', MT: 'montana', NE: 'nebraska', NV: 'nevada',
  NH: 'new-hampshire', NJ: 'new-jersey', NM: 'new-mexico', NY: 'new-york', NC: 'north-carolina',
  ND: 'north-dakota', OH: 'ohio', OK: 'oklahoma', OR: 'oregon', PA: 'pennsylvania',
  RI: 'rhode-island', SC: 'south-carolina', SD: 'south-dakota', TN: 'tennessee', TX: 'texas',
  UT: 'utah', VT: 'vermont', VA: 'virginia', WA: 'washington', WV: 'west-virginia',
  WI: 'wisconsin', WY: 'wyoming', DC: 'dc',
};

// State names as they appear in the country field, and the directory each maps to.
const STATE_SLUG = Object.fromEntries(
  Object.values(STATES).map((slug) => [slug.replace(/-/g, ' '), slug])
);
const STATE_NAMES = new Set(Object.keys(STATE_SLUG));

function countrySlugFrom(text) {
  const s = (text || '').toLowerCase();
  if (/\busa\b|united states/.test(s)) return 'usa';
  if (/hong kong/.test(s)) return 'hong-kong';
  if (/macau/.test(s)) return 'macau';
  if (/united kingdom|england|scotland|wales|northern ireland|\buk\b/.test(s)) return 'uk';
  if (/south korea|korea/.test(s)) return 'south-korea';
  if (/czech/.test(s)) return 'czechia';
  if (/united arab emirates|dubai|abu dhabi/.test(s)) return 'uae';
  if (/ireland/.test(s)) return 'ireland';
  // Natural Earth abbreviates a few names; use the spelling the tree already has.
  if (/dominican/.test(s)) return 'dominican-republic';
  if (/bosnia/.test(s)) return 'bosnia-and-herzegovina';
  return slugify((text || '').split(',').pop().trim()) || '';
}

/** A country value has to look like a place, not a postcode or a city. */
const plausibleCountry = (v) =>
  typeof v === 'string' && v.trim().length > 1 && /\p{L}/u.test(v) && !/^\d/.test(v.trim());

// ── Country from coordinates, used only to repair bad text ───────────────────
// The geo file's country field is free text and sometimes holds a state or city:
// Hawaii, Canberra, Bangkok, "Modena Italy", "Austraila", "greence". Those are
// resolved by point-in-polygon against Natural Earth.
//
// The lookup is a fallback, never an override. At 110m resolution it puts
// Singapore in Malaysia and Hong Kong in mainland China, and the guide keeps
// both as their own directories; it also reads Scotland and Wales as the United
// Kingdom, which is right but loses a distinction the tree already makes. So a
// value that already names a country the guide recognises is left alone.
const world = createRequire(import.meta.url)('world-atlas/countries-110m.json');
const COUNTRIES = feature(world, world.objects.countries).features.map((f) => {
  const rings = f.geometry.type === 'Polygon' ? [f.geometry.coordinates]
    : f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [];
  let minX = 180, minY = 90, maxX = -180, maxY = -90;
  for (const poly of rings) for (const [x, y] of poly[0]) {
    if (x < minX) minX = x; if (y < minY) minY = y;
    if (x > maxX) maxX = x; if (y > maxY) maxY = y;
  }
  return { name: f.properties.name, rings, bbox: [minX, minY, maxX, maxY] };
})
  // A polygon spanning the antimeridian (Fiji, Russia) has a bbox covering the
  // whole globe and a ring that wraps it, which makes the crossing test claim
  // points on the other side of the planet. Not worth resolving for a fallback.
  .filter((c) => c.bbox[2] - c.bbox[0] < 350);

const inRing = (ring, x, y) => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

function countryAt(lng, lat) {
  for (const c of COUNTRIES) {
    const [minX, minY, maxX, maxY] = c.bbox;
    if (lng < minX || lng > maxX || lat < minY || lat > maxY) continue;
    for (const poly of c.rings) {
      // First ring is the outer boundary; the rest are holes.
      if (!inRing(poly[0], lng, lat)) continue;
      if (poly.slice(1).some((hole) => inRing(hole, lng, lat))) continue;
      return c.name;
    }
  }
  return null;
}

// Country slugs the tree already uses, plus everything Natural Earth names.
const KNOWN = new Set([
  ...fs.readdirSync(COMPONENTS, { withFileTypes: true })
    .filter((e) => e.isDirectory()).map((e) => e.name),
  ...COUNTRIES.map((c) => countrySlugFrom(c.name)),
  'scotland', 'wales', 'england', 'northern-ireland',
].filter(Boolean));

function locate(rec) {
  const text = (rec.co || '').trim();
  const fromText = countrySlugFrom(text);
  // A country field naming a US state means the USA, whatever the coordinates say.
  // The Banyan Tree is filed under "Hawaii" and geocoded into Puerto Rico.
  //
  // Deliberately not inferred from a state code in the address: Italian addresses
  // carry province codes in the same shape, so "Milan, MI 20121" would read as
  // Michigan.
  const cs = STATE_NAMES.has(text.toLowerCase()) ? 'usa'
    // Otherwise trust the text when it names a country we recognise, else the map.
    : KNOWN.has(fromText) ? fromText
    : countrySlugFrom(countryAt(rec.lng, rec.lat) || text);
  const city = (rec.c || '').trim();
  if (!cs || !KNOWN.has(cs) || !city) return null;

  if (cs === 'usa') {
    const m = (rec.a || '').match(/,\s*([A-Z]{2})[,\s]+\d{5}/);
    // The country field may itself name the state ("Hawaii").
    const region = STATES[(m && m[1]) || ''] || STATE_SLUG[text.toLowerCase()] || 'other';
    return {
      countrySlug: 'usa',
      regionSlug: region,
      citySlug: region === 'dc' ? 'washington' : slugify(city),
    };
  }
  const citySlug = slugify(city);
  if (!citySlug) return null;
  // Outside the USA the tree repeats the city at the region level.
  return { countrySlug: cs, regionSlug: citySlug, citySlug };
}

// ── Run ──────────────────────────────────────────────────────────────────────
const geo = JSON.parse(fs.readFileSync(GEO, 'utf8')).restaurants || [];

const stats = { candidates: 0, written: 0, existing: 0, unplaceable: 0, excluded: 0 };
const newCities = new Set();
const perCountry = {};
const writes = [];
const taken = new Set();

for (const r of geo) {
  if (r.p) continue;                                   // already has a page
  stats.candidates++;
  if (isExcludedChain(r.n, r.w)) { stats.excluded++; continue; }
  if (!plausibleCountry(r.co)) { stats.unplaceable++; continue; }

  const loc = locate(r);
  const comp = componentName(r.n);
  if (!loc || !comp) { stats.unplaceable++; continue; }

  const relDir = `${loc.countrySlug}/${loc.regionSlug}/${loc.citySlug}`;
  let file = path.join(COMPONENTS, relDir, `${comp}.json`);
  if (fs.existsSync(file)) { stats.existing++; continue; }
  // Two unpaged restaurants in one city can share a name; keep both.
  let n = 2;
  while (taken.has(file)) file = path.join(COMPONENTS, relDir, `${comp}${n++}.json`);
  taken.add(file);

  if (!fs.existsSync(path.join(COMPONENTS, relDir))) newCities.add(relDir);
  perCountry[loc.countrySlug] = (perCountry[loc.countrySlug] || 0) + 1;

  writes.push({
    file,
    json: {
      restaurantName: r.n,
      pageTitle: r.n,
      address: r.a || '',
      cuisine: '',
      priceRange: '',
      website: r.w || '',
      tags: [],
      awards: [],
      bio: '',
    },
  });
}

if (WRITE) {
  for (const w of writes) {
    fs.mkdirSync(path.dirname(w.file), { recursive: true });
    fs.writeFileSync(w.file, JSON.stringify(w.json, null, 2));
    stats.written++;
  }
}

if (!quiet) {
  const top = Object.entries(perCountry).sort((a, b) => b[1] - a[1]).slice(0, 10);
  console.log(`
  ${WRITE ? 'Wrote' : 'Would write'} pages for atlas-only restaurants
  ─────────────────────────────────────────────
  atlas pins with no page   ${stats.candidates.toLocaleString()}
  excluded chains skipped   ${stats.excluded.toLocaleString()}
  no usable city/country    ${stats.unplaceable.toLocaleString()}
  already had a page there  ${stats.existing.toLocaleString()}
  pages to create           ${writes.length.toLocaleString()}
  new city directories      ${newCities.size.toLocaleString()}
  ─────────────────────────────────────────────
  by country: ${top.map(([k, v]) => `${k} ${v}`).join(', ')}
`);
}

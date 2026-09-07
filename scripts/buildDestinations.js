/**
 * buildDestinations.js
 * --------------------
 * Single source of truth for browsing the guide.
 *
 * Scans public/components/** for every directory that holds restaurant pages and:
 *   1. writes an index.json city listing into EVERY one of them (USA included), so
 *      /{country}/{region}/{city}/restaurants always resolves to a real city page;
 *   2. writes public/data/destinations.json — the country → region → city tree the
 *      Destinations page renders, with live counts.
 *
 * Directory slugs are messy (usa/other, usa/newyork, chinese-mainland, trkiye …), so
 * display names are normalised and variants that resolve to the same place are merged:
 * the listing written into each variant is the UNION, so whichever URL a reader lands
 * on shows the whole city. Cities parked under usa/other are re-filed by ZIP prefix.
 *
 * Every restaurant URL is verified against the file DynamicPage would actually fetch —
 * entries that cannot resolve are dropped rather than shipped as dead links.
 *
 * Usage: node scripts/buildDestinations.js [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { mesh } from 'topojson-client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS = path.join(__dirname, '../public/components');
const DATA = path.join(__dirname, '../public/data');
const quiet = process.argv.includes('--quiet');

// ── Display names ────────────────────────────────────────────────────────────

const COUNTRY_NAMES = {
  usa: 'United States',
  uk: 'United Kingdom',
  uae: 'United Arab Emirates',
  'united-arab-emirates': 'United Arab Emirates',
  'chinese-mainland': 'China',
  'principality-of-monaco': 'Monaco',
  'the-philippines': 'Philippines',
  trkiye: 'Türkiye',
  turkey: 'Türkiye',
  'south-korea': 'South Korea',
  'new-zealand': 'New Zealand',
  'south-africa': 'South Africa',
  'hong-kong': 'Hong Kong',
  'costa-rica': 'Costa Rica',
  'dominican-republic': 'Dominican Republic',
  'north-macedonia': 'North Macedonia',
  'bosnia-and-herzegovina': 'Bosnia and Herzegovina',
  'san-marino': 'San Marino',
  'saudi-arabia': 'Saudi Arabia',
  'sri-lanka': 'Sri Lanka',
  czechia: 'Czechia',
  macau: 'Macau',
};

// USA state directory slugs → proper names (covers the un-hyphenated legacy slugs).
const STATE_NAMES = {
  dc: 'District of Columbia',
  newyork: 'New York',
  'new-york': 'New York',
  northcarolina: 'North Carolina',
  'north-carolina': 'North Carolina',
  southcarolina: 'South Carolina',
  'south-carolina': 'South Carolina',
  westvirginia: 'West Virginia',
  'west-virginia': 'West Virginia',
  newjersey: 'New Jersey',
  'new-jersey': 'New Jersey',
  newmexico: 'New Mexico',
  'new-mexico': 'New Mexico',
  newhampshire: 'New Hampshire',
  'new-hampshire': 'New Hampshire',
  rhodeisland: 'Rhode Island',
  'rhode-island': 'Rhode Island',
  northdakota: 'North Dakota',
  southdakota: 'South Dakota',
  puertorico: 'Puerto Rico',
  'puerto-rico': 'Puerto Rico',
};

// USPS code → state name, for ZIP-prefix recovery of the usa/other bucket.
const USPS = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', DC: 'District of Columbia',
  FL: 'Florida', GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois',
  IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana',
  ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota',
  MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada',
  NH: 'New Hampshire', NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York',
  NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon',
  PA: 'Pennsylvania', PR: 'Puerto Rico', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
};

// [lowPrefix, highPrefix, USPS] over the first three ZIP digits.
const ZIP_RANGES = [
  [5, 5, 'NY'], [6, 9, 'PR'], [10, 27, 'MA'], [28, 29, 'RI'], [30, 38, 'NH'],
  [39, 49, 'ME'], [50, 59, 'VT'], [60, 69, 'CT'], [70, 89, 'NJ'], [100, 149, 'NY'],
  [150, 196, 'PA'], [197, 199, 'DE'], [200, 205, 'DC'], [206, 219, 'MD'],
  [220, 246, 'VA'], [247, 268, 'WV'], [270, 289, 'NC'], [290, 299, 'SC'],
  [300, 319, 'GA'], [320, 349, 'FL'], [350, 369, 'AL'], [370, 385, 'TN'],
  [386, 397, 'MS'], [398, 399, 'GA'], [400, 427, 'KY'], [430, 459, 'OH'],
  [460, 479, 'IN'], [480, 499, 'MI'], [500, 528, 'IA'], [530, 549, 'WI'],
  [550, 567, 'MN'], [570, 577, 'SD'], [580, 588, 'ND'], [590, 599, 'MT'],
  [600, 629, 'IL'], [630, 658, 'MO'], [660, 679, 'KS'], [680, 693, 'NE'],
  [700, 714, 'LA'], [716, 729, 'AR'], [730, 749, 'OK'], [750, 799, 'TX'],
  [800, 816, 'CO'], [820, 831, 'WY'], [832, 838, 'ID'], [840, 847, 'UT'],
  [850, 865, 'AZ'], [870, 884, 'NM'], [885, 885, 'TX'], [889, 898, 'NV'],
  [900, 961, 'CA'], [967, 968, 'HI'], [970, 979, 'OR'], [980, 994, 'WA'],
  [995, 999, 'AK'],
];

const stateFromZip = (zip) => {
  const p = parseInt(zip.slice(0, 3), 10);
  if (Number.isNaN(p)) return null;
  const hit = ZIP_RANGES.find(([lo, hi]) => p >= lo && p <= hi);
  return hit ? USPS[hit[2]] : null;
};

const SMALL = new Set(['de', 'del', 'la', 'le', 'les', 'du', 'des', 'da', 'di', 'dos',
  'el', 'y', 'and', 'the', 'of', 'on', 'in', 'sur', 'sous', 'aux', 'au', 'lez', 'op',
  'aan', 'am', 'im', 'an', 'der', 'den', 'auf', 'bei', 'by', 'upon', 'under', 'les']);

// Small words stay lowercase only inside compound names (Cand-sur-Beuvron), never
// in a two-word name where the second word is the noun (Big Sur, Los Altos).
const titleCase = (slug) => {
  const parts = slug.split('-');
  return parts
    .map((w, i) => {
      if (!w) return w;
      if (i > 0 && i < parts.length - 1 && parts.length > 2 && SMALL.has(w)) return w;
      if (/^(st|ste)$/.test(w)) return w === 'st' ? 'St.' : 'Ste.';
      if (/^\d/.test(w)) return w;
      return w[0].toUpperCase() + w.slice(1);
    })
    .join(' ');
};

// Addresses read "street, City, ZIP, Country" — take the ZIP from its own field so a
// street number ("47900 CA-1, Big Sur, 93920, USA") can't be mistaken for one.
const zipFromAddress = (address) => {
  const parts = String(address).split(',').map((s) => s.trim());
  for (let i = parts.length - 1; i >= 0; i--) {
    const m = parts[i].match(/^(\d{5})(?:-\d{4})?$/);
    if (m) return m[1];
  }
  return null;
};

// ── City banner artwork ──────────────────────────────────────────────────────
// Convention: public/images/{citySlugWithoutPunctuation}header.png. A handful of
// files were named before the convention existed, so those are mapped by hand.
const HERO_OVERRIDES = {
  copenhagen: 'kopenhagenheader.png',
  'new-york': 'newyorkcityheader.png',
  newyorkcity: 'newyorkcityheader.png',
};
// Keyed by "regionSlug/citySlug" where the city name alone is ambiguous.
const HERO_OVERRIDES_BY_REGION = {
  'dc/washington': 'washingtondcheader.png',
  'virginia/washington': 'washingtonva.png',
};

function cityHero(regionSlug, citySlug) {
  const candidates = [
    HERO_OVERRIDES_BY_REGION[`${regionSlug}/${citySlug}`],
    HERO_OVERRIDES[citySlug],
    `${citySlug.replace(/[^a-z0-9]/g, '')}header.png`,
  ].filter(Boolean);
  for (const file of candidates) {
    if (fs.existsSync(path.join(__dirname, '../public/images', file))) return `/images/${file}`;
  }
  return null;
}

const countryName = (slug) => COUNTRY_NAMES[slug] || titleCase(slug);
const regionName = (countrySlug, slug) =>
  countrySlug === 'usa' ? STATE_NAMES[slug] || titleCase(slug) : titleCase(slug);

// ── Restaurant URL resolution ────────────────────────────────────────────────

// PascalCase filename → URL slug. DynamicPage rebuilds the filename by capitalising
// each hyphen-separated word, so this must be its exact inverse.
const compToSlug = (comp) =>
  (comp.match(/[A-Z][a-z0-9]*|[a-z0-9]+/g) || []).map((p) => p.toLowerCase()).join('-');
const toPascal = (slug) =>
  slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');

// Pick the URL segment DynamicPage will resolve back to this exact file.
const resolvableSegment = (comp) => {
  const slug = compToSlug(comp);
  if (slug && toPascal(slug) === comp) return slug;      // normal case
  if (toPascal(comp) === comp) return comp;              // DynamicPage also tries the raw segment
  return comp;                                           // accented names (Jônt, Métier)
};

// ── Award ranking, so the best tables lead each city ─────────────────────────

const awardRank = (awards) => {
  if (!Array.isArray(awards)) return { rank: 0, label: '' };
  let best = { rank: 0, label: '' };
  for (const a of awards) {
    const name = String(a?.name || '');
    const n = /three/i.test(name) ? 3 : /two/i.test(name) ? 2 : /one/i.test(name) ? 1 : 0;
    let cand = null;
    if (/michelin star/i.test(name)) {
      cand = { rank: 100 + (a?.count || n), label: '★'.repeat(a?.count || n || 1) };
    } else if (/bib gourmand/i.test(name)) {
      cand = { rank: 50, label: 'Bib Gourmand' };
    } else if (/50 best/i.test(name)) {
      const pos = parseInt(String(a?.rank ?? a?.count ?? '').replace(/\D/g, ''), 10);
      cand = { rank: 80, label: pos ? `World's 50 Best · No. ${pos}` : "World's 50 Best" };
    } else if (/green star/i.test(name)) {
      cand = { rank: 40, label: 'Green Star' };
    }
    if (cand && cand.rank > best.rank) best = cand;
  }
  return best;
};

// ── Scan ─────────────────────────────────────────────────────────────────────

const readJson = (p) => {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
};

/** Every directory under public/components that holds at least one restaurant page. */
function findCityDirs() {
  const out = [];
  const walk = (dir) => {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    const hasPages = entries.some(
      (e) => e.isFile() && e.name.endsWith('.json') && e.name !== 'index.json'
    );
    if (hasPages) out.push(dir);
    for (const e of entries) if (e.isDirectory()) walk(path.join(dir, e.name));
  };
  walk(COMPONENTS);
  return out.sort();
}

const stats = {
  dirs: 0, restaurants: 0, dropped: 0, listings: 0,
  refiled: 0, merged: 0, countries: 0, cities: 0,
};

const places = new Map(); // mergeKey → place

for (const dir of findCityDirs()) {
  stats.dirs++;
  const rel = path.relative(COMPONENTS, dir).split(path.sep);
  const countrySlug = rel[0];

  // Directory depth varies: country/city, country/region/city, country/region/sub/city.
  let regionSlug, citySlug;
  if (rel.length === 1) { regionSlug = rel[0]; citySlug = rel[0]; }
  else if (rel.length === 2) { regionSlug = rel[1]; citySlug = rel[1]; }
  else { regionSlug = rel[1]; citySlug = rel[rel.length - 1]; }

  // Read the pages, keeping only URLs that actually resolve.
  const restaurants = [];
  const zips = [];
  const addressCountries = [];
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith('.json') || f === 'index.json') continue;
    const d = readJson(path.join(dir, f));
    if (!d) { stats.dropped++; continue; }
    const comp = f.slice(0, -5);
    const segment = resolvableSegment(comp);
    const name = d.restaurantName || d.pageTitle || titleCase(compToSlug(comp));

    const address = String(d.address || '');
    const tail = address.split(',').map((s) => s.trim()).filter(Boolean).pop();
    if (tail) addressCountries.push(tail);
    // Only US addresses get a ZIP vote — an Italian CAP (20090) looks exactly like
    // a Washington ZIP, and Cusago is not in the District of Columbia.
    if (/^USA$/i.test(tail || '')) {
      const zip = zipFromAddress(address);
      if (zip) zips.push(zip);
    }

    const { rank, label } = awardRank(d.awards);
    const image = Array.isArray(d.headerImages) ? d.headerImages[0] : null;
    restaurants.push({
      name,
      cuisine: d.cuisine || '',
      price: d.priceRange || '',
      path: `/${rel.join('/')}/${segment}`,
      ...(label ? { award: label } : {}),
      ...(image ? { image } : {}),
      _rank: rank,
      // Duplicate page files exist for some restaurants; keep the fullest one.
      _score: (label ? 8 : 0) + (image ? 4 : 0) + (d.cuisine ? 2 : 0) +
        (d.priceRange ? 1 : 0) + Math.min(String(d.bio || '').length / 500, 2),
    });
    stats.restaurants++;
  }
  if (!restaurants.length) continue;

  // usa/other is a dumping ground — recover the real state from ZIP prefixes.
  let country = countryName(countrySlug);
  let region = regionName(countrySlug, regionSlug);
  // Outside the USA the region level is almost always a copy of the city; a region
  // recovered below (or a real US state) is genuine and should group the tree.
  let regionIsReal = regionSlug !== citySlug;
  if (countrySlug === 'usa' && regionSlug === 'other') {
    const votes = {};
    for (const z of zips) {
      const s = stateFromZip(z);
      if (s) votes[s] = (votes[s] || 0) + 1;
    }
    const winner = Object.entries(votes).sort((a, b) => b[1] - a[1])[0];
    if (winner) { region = winner[0]; regionIsReal = true; stats.refiled++; }
    else {
      // Not a US address at all (a handful of European towns landed here), or no
      // address to go on. Either way "Other" is not a place — drop the region.
      const foreign = addressCountries.find((c) => c && !/^USA$/i.test(c));
      if (foreign) country = foreign;
      region = null;
      regionIsReal = false;
    }
  }
  // usa/dc holds Washington pages both directly and under /washington.
  if (countrySlug === 'usa' && regionSlug === 'dc') {
    region = 'District of Columbia';
    regionIsReal = true;
  }
  const city =
    countrySlug === 'usa' && regionSlug === 'dc' && citySlug === 'dc'
      ? 'Washington'
      : titleCase(citySlug);

  const meaningfulRegion = regionIsReal ? region : null;

  const variant = {
    dir, rel, restaurants, country, region: meaningfulRegion,
    city, citySlug, regionSlug, countrySlug,
  };

  const key = `${country}||${meaningfulRegion || '*'}||${city}`.toLowerCase();
  if (places.has(key)) { places.get(key).variants.push(variant); stats.merged++; }
  else places.set(key, { country, region: meaningfulRegion, city, variants: [variant] });
}

// Fold region-less variants into the same city under a named region, when there is
// exactly one candidate (uk/london/london → uk/england/london).
for (const [key, place] of [...places]) {
  if (place.region) continue;
  const candidates = [...places.values()].filter(
    (p) => p !== place && p.region && p.country === place.country && p.city === place.city
  );
  if (candidates.length === 1) {
    candidates[0].variants.push(...place.variants);
    places.delete(key);
    stats.merged++;
  }
}

// ── Write one listing per directory (the union across merged variants) ───────

const tree = {};
let totalListedRestaurants = 0;

for (const place of places.values()) {
  const best = new Map();
  for (const v of place.variants) {
    for (const r of v.restaurants) {
      const k = r.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const prev = best.get(k);
      if (!prev || r._score > prev._score) best.set(k, r);
    }
  }
  const union = [...best.values()];
  union.sort((a, b) => (b._rank - a._rank) || a.name.localeCompare(b.name, 'en'));
  const restaurants = union.map(({ _rank, _score, ...r }) => r);

  // The canonical URL prefers the variant whose directory names a real region over
  // one that just repeats the city: /spain/catalonia/barcelona reads as an address,
  // /spain/barcelona/barcelona does not. Page count only breaks the tie.
  const canonical = [...place.variants].sort((a, b) => {
    const realA = a.regionSlug !== a.citySlug ? 1 : 0;
    const realB = b.regionSlug !== b.citySlug ? 1 : 0;
    return realB - realA || b.restaurants.length - a.restaurants.length;
  })[0];
  const canonicalPath = `/${canonical.rel.join('/')}/restaurants`;

  // One banner for the place, taken from whichever variant has artwork.
  const hero = place.variants.map((v) => cityHero(v.regionSlug, v.citySlug)).find(Boolean) || null;

  for (const v of place.variants) {
    const listing = {
      title: place.city,
      country: place.country,
      countrySlug: v.countrySlug,
      region: place.region,
      regionSlug: v.regionSlug,
      city: place.city,
      citySlug: v.citySlug,
      path: `/${v.rel.join('/')}/restaurants`,
      canonicalPath,
      count: restaurants.length,
      ...(hero ? { hero } : {}),
      restaurants,
    };
    fs.writeFileSync(path.join(v.dir, 'index.json'), JSON.stringify(listing, null, 2));
    stats.listings++;
  }

  totalListedRestaurants += restaurants.length;
  stats.cities++;

  tree[place.country] ??= {};
  const bucket = place.region || '';
  tree[place.country][bucket] ??= {};
  tree[place.country][bucket][place.city] = { path: canonicalPath, count: restaurants.length };
}

// ── Destinations manifest ────────────────────────────────────────────────────

const countries = Object.keys(tree)
  .sort((a, b) => a.localeCompare(b, 'en'))
  .map((name) => {
    const regions = Object.keys(tree[name])
      .sort((a, b) => (a === '' ? -1 : b === '' ? 1 : a.localeCompare(b, 'en')))
      .map((rName) => {
        const cities = Object.entries(tree[name][rName])
          .sort((a, b) => a[0].localeCompare(b[0], 'en'))
          .map(([cName, meta]) => ({ name: cName, path: meta.path, count: meta.count }));
        return {
          name: rName || null,
          cities,
          count: cities.reduce((s, c) => s + c.count, 0),
        };
      });
    const cityCount = regions.reduce((s, r) => s + r.cities.length, 0);
    return {
      name,
      regions,
      cityCount,
      count: regions.reduce((s, r) => s + r.count, 0),
    };
  });

stats.countries = countries.length;

// The Atlas plots more than the guide can page: restaurants charted from the
// geocoded set that have no detail page yet. Only the pin count is published.
//
// Deliberately NOT derived from the geo file: city and country counts. Those
// fields are free text straight from the source datasets, so the distinct values
// include '9620', 'San Francisco', 'Modena Italy', 'California' and 'Austraila'.
// Counting them gave 169 countries against the tree's real 62. Anything needing
// a place count must use the normalised totals above.
let atlas = null;
const geo = readJson(path.join(DATA, 'restaurants-geo.json'));
if (geo?.restaurants?.length) {
  atlas = { restaurants: geo.restaurants.length };

  // A thinned sample of real coordinates for the spinning globe on Home. One point
  // per ~1.6° cell, so Paris doesn't become a blob while Patagonia disappears — the
  // result traces where the guide actually reaches. Two decimals is well under a
  // pixel at globe scale.
  const cell = 1.6;
  const taken = new Set();
  const points = [];
  for (const r of geo.restaurants) {
    if (typeof r.lng !== 'number' || typeof r.lat !== 'number') continue;
    const key = `${Math.round(r.lng / cell)}:${Math.round(r.lat / cell)}`;
    if (taken.has(key)) continue;
    taken.add(key);
    points.push([+r.lng.toFixed(2), +r.lat.toFixed(2)]);
  }

  // Coastlines and borders, so the dots land on recognisable shapes rather than a
  // bare sphere. Natural Earth 110m via world-atlas (public domain), reduced to
  // plain polylines here so the browser needs no topojson at runtime.
  //
  // world-atlas is a devDependency; if a build environment skips those, keep the
  // outlines already committed in globe.json rather than shipping a bare sphere.
  let world = null;
  try {
    world = createRequire(import.meta.url)('world-atlas/countries-110m.json');
  } catch {
    const prev = readJson(path.join(DATA, 'globe.json'));
    if (prev?.coast?.length) {
      fs.writeFileSync(
        path.join(DATA, 'globe.json'),
        JSON.stringify({ cell, points, coast: prev.coast, borders: prev.borders || [] })
      );
      console.warn('  ! world-atlas not installed — kept the existing globe outlines');
    } else {
      fs.writeFileSync(path.join(DATA, 'globe.json'), JSON.stringify({ cell, points }));
      console.warn('  ! world-atlas not installed and no outlines on disk — globe will be bare');
    }
    stats.globePoints = points.length;
    world = undefined;
  }

  const toLines = (geom, minPoints) =>
    geom.coordinates
      .map((line) => {
        const out = [];
        let prev = null;
        for (const [lng, lat] of line) {
          // ~11 km of precision; the whole globe is 460 px, where 1° is about 1.3 px.
          const p = [Math.round(lng * 10) / 10, Math.round(lat * 10) / 10];
          if (prev && p[0] === prev[0] && p[1] === prev[1]) continue;
          out.push(p);
          prev = p;
        }
        return out;
      })
      // Drop specks that would only read as noise at this size.
      .filter((line) => line.length >= minPoints);

  if (world) {
    const coast = toLines(mesh(world, world.objects.land), 5);
    const borders = toLines(
      mesh(world, world.objects.countries, (a, b) => a !== b),
      4
    );
    fs.writeFileSync(
      path.join(DATA, 'globe.json'),
      JSON.stringify({ cell, points, coast, borders })
    );
    stats.globePoints = points.length;
    stats.globeCoast = coast.reduce((s, l) => s + l.length, 0);
    stats.globeBorders = borders.reduce((s, l) => s + l.length, 0);
  }
}

fs.mkdirSync(DATA, { recursive: true });
fs.writeFileSync(
  path.join(DATA, 'destinations.json'),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      totals: {
        countries: countries.length,
        cities: stats.cities,
        restaurants: totalListedRestaurants,
        ...(atlas ? { atlas } : {}),
      },
      countries,
    },
    null,
    2
  )
);

if (!quiet) {
  console.log(`
  Destinations rebuilt
  ────────────────────
  directories scanned   ${stats.dirs.toLocaleString()}
  restaurant pages      ${stats.restaurants.toLocaleString()}
  unreadable / dropped  ${stats.dropped.toLocaleString()}
  variants merged       ${stats.merged.toLocaleString()}
  usa/other re-filed    ${stats.refiled.toLocaleString()} cities
  ────────────────────
  city listings written ${stats.listings.toLocaleString()}
  browsable cities      ${stats.cities.toLocaleString()}
  countries             ${stats.countries.toLocaleString()}
  listed restaurants    ${totalListedRestaurants.toLocaleString()}
  globe sample          ${(stats.globePoints || 0).toLocaleString()} points
  globe outlines        ${(stats.globeCoast || 0).toLocaleString()} coast + ${(stats.globeBorders || 0).toLocaleString()} border vertices
`);
}

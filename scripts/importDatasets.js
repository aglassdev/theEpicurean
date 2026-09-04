/**
 * importDatasets.js
 * ─────────────────────────────────────────────────────────────────────────
 * Imports the three source datasets into the guide:
 *
 *   michelin_my_maps.csv        19,460 rows — rich (award, price, cuisine,
 *                               description, phone, website) + coordinates
 *   WorldsBestRestaurants.csv    1,050 rows / 271 unique — rank + coordinates
 *   afternoontea.csv               728 rows — UK/IE venues + coordinates
 *
 * All three carry Latitude/Longitude, so nothing here needs geocoding.
 *
 * It produces three things:
 *   1. A detail page  public/components/{country}/{region}/{city}/{Name}.json
 *   2. A city listing public/components/{country}/{region}/{city}/index.json
 *   3. Atlas pins in  public/data/restaurants-geo.json  (merged, deduped)
 *
 * HANDMADE PAGES ARE NEVER TOUCHED. Any restaurant whose component name
 * already exists anywhere in the tree is skipped for page creation (the
 * carousel core, and the DC / NoVA / Little Washington pages), and its atlas
 * pin is linked to the existing handmade page instead. Everything else —
 * including the rest of DC — gets filled in.
 *
 *   Dry run (default): node scripts/importDatasets.js
 *   Write:             node scripts/importDatasets.js --write
 * ───────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const COMPONENTS = path.join(ROOT, 'public', 'components');
const GEO_PATH = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const WRITE = process.argv.includes('--write');

// ── CSV ───────────────────────────────────────────────────────────────────
function parseCSV(text) {
  const rows = []; let row = []; let cur = ''; let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
      else cur += c;
    } else {
      if (c === '"') q = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else if (c === '\r') { /* skip */ }
      else cur += c;
    }
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  return rows;
}
const readCSV = (file) => {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) return [];
  const rows = parseCSV(fs.readFileSync(p, 'utf8'));
  const head = rows[0].map((h) => h.trim());
  return rows.slice(1).filter((r) => r.length > 1).map((r) =>
    Object.fromEntries(head.map((k, i) => [k, (r[i] || '').trim()])));
};

// ── Naming / paths (mirrors generateRestaurants.js conventions) ───────────
const slugify = (t) => (t || '').toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
  .replace(/-+/g, '-').replace(/^-+|-+$/g, '').trim();
const componentName = (n) => (n || '').replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(Boolean)
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');

const STATES = {
  AL:'alabama',AK:'alaska',AZ:'arizona',AR:'arkansas',CA:'california',CO:'colorado',CT:'connecticut',
  DE:'delaware',FL:'florida',GA:'georgia',HI:'hawaii',ID:'idaho',IL:'illinois',IN:'indiana',IA:'iowa',
  KS:'kansas',KY:'kentucky',LA:'louisiana',ME:'maine',MD:'maryland',MA:'massachusetts',MI:'michigan',
  MN:'minnesota',MS:'mississippi',MO:'missouri',MT:'montana',NE:'nebraska',NV:'nevada',NH:'new-hampshire',
  NJ:'new-jersey',NM:'new-mexico',NY:'new-york',NC:'north-carolina',ND:'north-dakota',OH:'ohio',
  OK:'oklahoma',OR:'oregon',PA:'pennsylvania',RI:'rhode-island',SC:'south-carolina',SD:'south-dakota',
  TN:'tennessee',TX:'texas',UT:'utah',VT:'vermont',VA:'virginia',WA:'washington',WV:'west-virginia',
  WI:'wisconsin',WY:'wyoming',
  DC:'dc', // existing tree uses /usa/dc/washington/…
};

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
  const last = (text || '').split(',').pop().trim();
  return slugify(last) || 'other';
}

/** Derive {countrySlug, regionSlug, citySlug, cityDisplay, countryDisplay}. */
function locationInfo({ location, address, countryHint }) {
  const parts = (location || '').split(',').map((s) => s.trim()).filter(Boolean);
  const cityDisplay = parts[0] || '';
  const countryDisplay = countryHint || parts[parts.length - 1] || '';
  const cs = countrySlugFrom(countryDisplay || location);

  if (cs === 'usa') {
    // "City, ST, USA" → state from the middle token; fall back to the address.
    let st = parts.length >= 3 ? parts[1].toUpperCase() : '';
    if (!STATES[st]) {
      const m = (address || '').match(/,\s*([A-Z]{2})[,\s]+\d{5}/);
      st = m ? m[1] : '';
    }
    const region = STATES[st] || 'other';
    return { countrySlug: 'usa', regionSlug: region,
      citySlug: region === 'dc' ? 'washington' : slugify(cityDisplay),
      cityDisplay, countryDisplay: 'United States' };
  }
  const region = parts.length >= 2 ? slugify(parts[parts.length - 2]) : slugify(cityDisplay);
  return { countrySlug: cs, regionSlug: region || 'other', citySlug: slugify(cityDisplay) || region || 'other',
    cityDisplay, countryDisplay };
}

// ── Existing component index (protects handmade + prior pages) ────────────
const existingFiles = fs.existsSync(COMPONENTS)
  ? fs.readdirSync(COMPONENTS, { recursive: true })
      .filter((f) => f.endsWith('.json') && !/index\.json$/.test(f) && !/(^|[\\/])Restaurants\.json$/i.test(f))
  : [];
const existingByName = new Map(); // lowercased component base → route
for (const rel of existingFiles) {
  const parts = rel.split(path.sep);
  const base = parts[parts.length - 1].replace(/\.json$/, '');
  const route = '/' + parts.join('/').replace(/\.json$/, '');
  if (!existingByName.has(base.toLowerCase())) existingByName.set(base.toLowerCase(), route);
}

// ── Normalisers ───────────────────────────────────────────────────────────
const michelinAward = (award, greenStar) => {
  const out = [];
  const org = 'Michelin Guide';
  if (/3 stars/i.test(award)) out.push({ name: 'Three Michelin Stars', organization: org, count: 3 });
  else if (/2 stars/i.test(award)) out.push({ name: 'Two Michelin Stars', organization: org, count: 2 });
  else if (/1 star/i.test(award)) out.push({ name: 'One Michelin Star', organization: org, count: 1 });
  else if (/bib gourmand/i.test(award)) out.push({ name: 'Bib Gourmand', organization: org, image: '/images/michelin.png' });
  else if (award) out.push({ name: 'Michelin Selected', organization: org, image: '/images/michelin.png' });
  if (String(greenStar) === '1') out.push({ name: 'Green Star', organization: org, image: '/images/greenstar.png' });
  return out;
};

function fromMichelin(r) {
  const li = locationInfo({ location: r.Location, address: r.Address });
  return {
    source: 'michelin', rank: 3,
    name: r.Name, address: r.Address, cuisine: r.Cuisine, price: r.Price,
    phone: r.PhoneNumber, website: r.WebsiteUrl, bio: r.Description,
    awards: michelinAward(r.Award, r.GreenStar),
    tags: (r.FacilitiesAndServices || '').split(',').map((s) => s.trim()).filter(Boolean).slice(0, 8).map((n) => ({ name: n })),
    lng: parseFloat(r.Longitude), lat: parseFloat(r.Latitude), ...li,
  };
}

function fromWorldsBest(group) {
  // group = all yearly rows for one restaurant; keep the best (lowest) rank.
  const best = group.reduce((a, b) => (+b.rank < +a.rank ? b : a));
  const latest = group.reduce((a, b) => (+b.year > +a.year ? b : a));
  const li = locationInfo({ location: `${best.location}, ${best.country}`, countryHint: best.country });
  return {
    source: 'worldsbest', rank: 1,
    name: best.restaurant, address: '', cuisine: '', price: '', phone: '', website: '', bio: '',
    awards: [{ name: `World's 50 Best · No. ${best.rank}`, organization: "The World's 50 Best Restaurants", year: latest.year, image: '/images/worlds50best.png' }],
    tags: [],
    lng: parseFloat(best.lng), lat: parseFloat(best.lat), ...li,
  };
}

function fromAfternoonTea(r) {
  const isIE = /ireland/i.test(r.region || '');
  const cityDisplay = r.area || r.region || '';
  const countryDisplay = isIE ? 'Ireland' : 'United Kingdom';
  const flags = [
    r.vegan === 'True' && 'Vegan options', r.vegetarian === 'True' && 'Vegetarian options',
    r.gluten_free === 'True' && 'Gluten free', r.outdoor_seating === 'True' && 'Outdoor seating',
    r.dogs === 'True' && 'Dog friendly', r.disabled_access === 'True' && 'Step-free access',
    r.gardens === 'True' && 'Gardens',
  ].filter(Boolean).map((n) => ({ name: n }));
  return {
    source: 'afternoontea', rank: 2,
    name: r.name, address: r.address, cuisine: 'Afternoon Tea', price: r.starting_price,
    phone: '', website: r.venue_url, bio: r.about,
    awards: r.award_winner === 'True' ? [{ name: 'Afternoon Tea Award Winner', organization: 'AfternoonTea.co.uk' }] : [],
    tags: flags,
    lng: parseFloat(r.longitude), lat: parseFloat(r.latitude),
    countrySlug: isIE ? 'ireland' : 'uk',
    regionSlug: slugify(r.region) || 'other',
    citySlug: slugify(cityDisplay) || slugify(r.region) || 'other',
    cityDisplay, countryDisplay,
  };
}

// ── Load + normalise ──────────────────────────────────────────────────────
const michelin = readCSV('michelin_my_maps.csv').map(fromMichelin);

const wbRaw = readCSV('WorldsBestRestaurants.csv');
const wbGroups = new Map();
for (const r of wbRaw) {
  const k = `${r.restaurant}|${r.location}`.toLowerCase();
  if (!wbGroups.has(k)) wbGroups.set(k, []);
  wbGroups.get(k).push(r);
}
const worldsBest = [...wbGroups.values()].map(fromWorldsBest);

const afternoon = readCSV('afternoontea.csv').map(fromAfternoonTea);

// ── Merge across datasets (richest wins; awards combine) ──────────────────
const merged = new Map();
for (const rec of [...michelin, ...afternoon, ...worldsBest]) {
  if (!rec.name || Number.isNaN(rec.lng) || Number.isNaN(rec.lat)) continue;
  const comp = componentName(rec.name);
  if (!comp) continue;
  const key = `${comp.toLowerCase()}|${rec.citySlug}`;
  const prev = merged.get(key);
  if (!prev) { merged.set(key, { ...rec, comp }); continue; }
  // keep the richer record, but union the awards
  const winner = rec.rank > prev.rank ? { ...rec, comp } : prev;
  const loser = rec.rank > prev.rank ? prev : rec;
  winner.awards = [...(winner.awards || []), ...(loser.awards || [])]
    .filter((a, i, arr) => arr.findIndex((b) => b.name === a.name) === i);
  merged.set(key, winner);
}
const records = [...merged.values()];

// ── Build outputs ─────────────────────────────────────────────────────────
const stats = { total: records.length, michelin: michelin.length, worldsBest: worldsBest.length,
  afternoon: afternoon.length, pagesExisting: 0, pagesNew: 0, cities: new Set(), dcNew: 0, geo: 0 };

const pagesToWrite = [];   // { file, json }
const cityIndex = new Map(); // dir → { title, restaurants[] }
const geoEntries = [];

for (const r of records) {
  const dir = path.join(COMPONENTS, r.countrySlug, r.regionSlug, r.citySlug);
  const relDir = `${r.countrySlug}/${r.regionSlug}/${r.citySlug}`;

  // Protect handmade / already-generated pages: match by component name anywhere.
  const existingRoute = existingByName.get(r.comp.toLowerCase());
  let route;
  if (existingRoute) {
    route = existingRoute;
    stats.pagesExisting++;
  } else {
    route = `/${relDir}/${r.comp}`;
    stats.pagesNew++;
    if (r.regionSlug === 'dc') stats.dcNew++;
    pagesToWrite.push({
      file: path.join(dir, `${r.comp}.json`),
      json: {
        restaurantName: r.name,
        address: r.address,
        cuisine: r.cuisine,
        priceRange: r.price,
        phoneNumber: r.phone,
        website: r.website,
        tags: r.tags,
        awards: r.awards,
        bio: r.bio,
        pageTitle: r.name,
      },
    });
    // only list newly created pages in the city index we manage
    if (!cityIndex.has(relDir)) cityIndex.set(relDir, { title: r.cityDisplay || r.citySlug, restaurants: [] });
    cityIndex.get(relDir).restaurants.push({ name: r.name, cuisine: r.cuisine, price: r.price, path: route });
  }
  stats.cities.add(relDir);
  geoEntries.push({ n: r.name, a: r.address, c: r.cityDisplay, co: r.countryDisplay,
    w: r.website, lng: +r.lng.toFixed(6), lat: +r.lat.toFixed(6), p: route });
}

// Merge atlas pins with whatever is already geocoded.
let geoAll = [];
const seenGeo = new Set();
if (fs.existsSync(GEO_PATH)) {
  try {
    const prev = JSON.parse(fs.readFileSync(GEO_PATH, 'utf8'));
    for (const g of prev.restaurants || []) {
      const k = `${(g.n || '').toLowerCase()}|${(g.c || '').toLowerCase()}`;
      if (g.lng == null || seenGeo.has(k)) continue;
      seenGeo.add(k); geoAll.push(g);
    }
  } catch { /* start fresh */ }
}
const preExisting = geoAll.length;
for (const g of geoEntries) {
  const k = `${g.n.toLowerCase()}|${(g.c || '').toLowerCase()}`;
  if (seenGeo.has(k)) continue;
  seenGeo.add(k); geoAll.push(g);
}
stats.geo = geoAll.length;

// ── Report ────────────────────────────────────────────────────────────────
console.log(`\nThe Epicurean · dataset import ${WRITE ? '(WRITING)' : '(dry run — pass --write to apply)'}\n`);
console.log(`  michelin_my_maps        ${michelin.length}`);
console.log(`  WorldsBestRestaurants   ${worldsBest.length} unique (from ${wbRaw.length} yearly rows)`);
console.log(`  afternoontea            ${afternoon.length}`);
console.log(`  ─ unique after merge    ${stats.total}\n`);
console.log(`  pages already present   ${stats.pagesExisting}  (handmade + previously generated — untouched)`);
console.log(`  pages to create         ${stats.pagesNew}`);
console.log(`    …of those, in DC      ${stats.dcNew}`);
console.log(`  city listings touched   ${cityIndex.size}`);
console.log(`  atlas pins              ${stats.geo}  (${preExisting} kept + ${stats.geo - preExisting} added)\n`);

if (!WRITE) {
  console.log('  sample new pages:');
  pagesToWrite.slice(0, 5).forEach((p) => console.log('   ', path.relative(ROOT, p.file)));
  process.exit(0);
}

// ── Write ─────────────────────────────────────────────────────────────────
let written = 0;
for (const p of pagesToWrite) {
  fs.mkdirSync(path.dirname(p.file), { recursive: true });
  fs.writeFileSync(p.file, JSON.stringify(p.json, null, 2));
  if (++written % 2000 === 0) process.stdout.write(`\r  pages written ${written}/${pagesToWrite.length}`);
}
process.stdout.write(`\r  pages written ${written}/${pagesToWrite.length}\n`);

let idx = 0;
for (const [relDir, listing] of cityIndex) {
  const file = path.join(COMPONENTS, relDir, 'index.json');
  let out = listing;
  if (fs.existsSync(file)) {
    try {
      const prev = JSON.parse(fs.readFileSync(file, 'utf8'));
      const have = new Set((prev.restaurants || []).map((x) => x.path));
      out = { title: prev.title || listing.title,
        restaurants: [...(prev.restaurants || []), ...listing.restaurants.filter((x) => !have.has(x.path))] };
    } catch { /* overwrite a corrupt index */ }
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(out, null, 2));
  idx++;
}
console.log(`  city listings written ${idx}`);

fs.mkdirSync(path.dirname(GEO_PATH), { recursive: true });
fs.writeFileSync(GEO_PATH, JSON.stringify({
  generated: new Date().toISOString(), count: geoAll.length,
  provider: 'dataset-coordinates', restaurants: geoAll,
}));
console.log(`  atlas written ${geoAll.length} pins → ${path.relative(ROOT, GEO_PATH)}\n✓ done.\n`);

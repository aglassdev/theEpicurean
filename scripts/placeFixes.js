/**
 * Places the sources got wrong.
 *
 * A few records arrive with the country repeated in the city field and an
 * address that names neither the settlement nor the island. Turks and Caicos is
 * the worst of them: both restaurants were filed in a city called "Turks and
 * Caicos Islands", and Brine's coordinates put it on Providenciales, seventy-five
 * kilometres from the island it is actually on.
 *
 * Corrections live here rather than in the CSV because the CSV is re-downloaded,
 * and rather than in the component tree because a re-geocode rewrites every
 * record from source. scripts/fixPlaces.js applies them, inside `npm run build`.
 *
 * Matched on the restaurant name and the country, so a namesake elsewhere is
 * left alone.
 */

export const PLACE_FIXES = [
  {
    name: 'Parallel 23',
    country: /turks/i,
    city: 'Providenciales',
    address: 'The Bight Settlement, Providenciales, Turks and Caicos Islands',
    // Grace Bay Club on Bonaventure Crescent, the hotel the dining room is in,
    // rather than the middle of the settlement around it.
    lat: 21.799031,
    lng: -72.172797,
  },
  {
    name: 'Brine',
    country: /turks/i,
    city: 'South Caicos',
    address: 'Cockburn Harbour, South Caicos, Turks and Caicos Islands',
    // Sailrock Resort, up the east side of South Caicos. The old pin was on
    // Providenciales, seventy-five kilometres away across the bank.
    lat: 21.535387,
    lng: -71.497465,
  },
  {
    // The country field holds a postcode, "236022", so nothing could tell this
    // apart from Seasons in Riga and it was given the Latvian page.
    name: 'SEASONS',
    country: /^236022$/,
    city: 'Kaliningrad',
    countryName: 'Russia',
    address: 'Prospekt Mira 74, Kaliningrad, 236022, Russia',
    // OpenStreetMap has the restaurant on that address by name.
    lat: 54.720722,
    lng: 20.479907,
  },
  {
    // "Gorriti 3780, C1172 Cdad. Autónoma de Buenos Aires" defeated the primary
    // geocoder, so the chain fell through to Photon, which answered with a spot
    // in Patagonia 1,685km away. OpenStreetMap has the restaurant by name at the
    // address as written.
    name: 'Fogón Asado',
    country: /argentina/i,
    city: 'Buenos Aires',
    address: 'Gorriti 3780, Palermo, Buenos Aires, Argentina',
    lat: -34.595542,
    lng: -58.418348,
  },
  {
    name: 'Le Golfe',
    country: /tunisia/i,
    city: 'Tunis',
    // Its own site calls it an "institution marsoise depuis 1955" and gives the
    // address as "La Marsa - 5 Rue Larbi Zarrouk". The record said only Tunis,
    // so the geocoder put the pin 120km down the coast, near Monastir.
    address: '5 Rue Larbi Zarrouk, La Marsa, Tunis, Tunisia',
    // the50.com puts it at the top of Rue Larbi Zarrouk, which agrees with the
    // address the restaurant publishes and with the house numbers on that
    // street: the mapped ones run 13 to 35 and fall as they go north-west, so 5
    // lands within 100m of where the50 has it.
    //
    // OpenStreetMap has a node named "Restaurant Le Golfe" a kilometre south on
    // Rue Abdelaziz Chtioui. Two sources agreeing on the street beat one that
    // disagrees with it.
    lat: 36.890785,
    lng: 10.323801,
  },
];

const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** The correction for a geo record, or null. */
export const placeFixFor = (rec) =>
  PLACE_FIXES.find(
    (f) => norm(f.name) === norm(rec.n) && (!f.country || f.country.test(String(rec.co || '')))
  ) || null;

/** Apply in place; returns true when something changed. */
export const applyPlaceFix = (rec) => {
  const fix = placeFixFor(rec);
  if (!fix) return false;
  let changed = false;
  for (const key of [['city', 'c'], ['countryName', 'co'], ['address', 'a'], ['lat', 'lat'], ['lng', 'lng']]) {
    const [from, to] = key;
    if (fix[from] !== undefined && rec[to] !== fix[from]) { rec[to] = fix[from]; changed = true; }
  }
  // A corrected coordinate is a stated one, so it is no longer a guess.
  if (fix.lat !== undefined && (rec.ap || rec.acc === 'photon')) {
    delete rec.ap;
    rec.acc = 'stated';
    changed = true;
  }
  return changed;
};

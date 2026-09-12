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
  {
    // "Monaco" with no house number fell through to the city-centre fallback,
    // which searched without a country and answered with Noumea, New Caledonia,
    // 16,000km away and French enough to look plausible to a machine.
    name: 'Elsa',
    country: /france|monaco/i,
    city: 'Monaco',
    countryName: 'Monaco',
    address: 'Monte-Carlo Beach, avenue Princesse-Grace, Roquebrune-Cap-Martin, 98000 Monaco',
    // The Monte-Carlo Beach hotel, which the restaurant is inside. The building
    // stands just over the French line at Roquebrune-Cap-Martin even though it
    // carries a Monegasque address, so the pin is where the dining room is
    // rather than where the postcode says.
    lat: 43.750957,
    lng: 7.444215,
  },
  {
    // The same city-centre fallback, this time asked for "Kalkara" with nothing
    // to say which Kalkara, and answered with a spot in upstate New York.
    // OpenStreetMap has the restaurant by name on the Kalkara waterfront.
    name: 'Marea',
    country: /malta/i,
    city: 'Kalkara',
    address: 'Dawret Fra Giovanni Bichi, Kalkara KKR 1320, Malta',
    lat: 35.891641,
    lng: 14.523872,
  },
  {
    // "Lampedusa" landed in Texas. The island is real and so is the street:
    // Via Giulio Bonfiglio, up at Cala Creta on the east side.
    name: 'Lipadusa',
    country: /italy/i,
    city: 'Lampedusa',
    address: 'via Giulio Bonfiglio 16, Lampedusa, 92031, Italy',
    lat: 35.50281,
    lng: 12.61254,
  },
  {
    // the50 published Seoul coordinates for a Taipei bar, 1,455km out. Nothing
    // in the guide carries the bar by name, so the pin sits on Lane 83 itself,
    // which is about a hundred metres end to end.
    name: 'Bar Otani',
    country: /taiwan/i,
    city: 'Taipei',
    address: 'No. 5-1, Lane 83, Section 1, Zhongshan N Road, Zhongshan District, Taipei, 10491',
    lat: 25.050343,
    lng: 121.523303,
  },
  {
    // the50 published Delhi coordinates for a Mexico City taqueria. Avenida
    // Yucatan 84 in Roma Norte is a single address shared by several kitchens,
    // and OpenStreetMap has all of them on the same corner.
    name: 'Expendio de Maiz Sin Nombre',
    country: /mexico/i,
    city: 'Mexico City',
    address: 'Av. Yucatan 84, Roma Norte, Cuauhtemoc, Mexico City, 06700',
    lat: 19.414185,
    lng: -99.162631,
  },
  {
    // White River Junction is in Vermont. The record said Australia, so a page
    // was built for it under australia/ and the pin, which was always correct,
    // read as fifteen thousand kilometres outside its own country.
    name: 'Wolf Tree (Bar)',
    country: /australia/i,
    city: 'White River Junction',
    countryName: 'United States',
    address: '40 Currier St, White River Junction, VT 05001, USA',
    lat: 43.64839,
    lng: -72.319482,
  },
  {
    // Another unconstrained Photon answer: asked for the Banyan Tree it returned
    // a spot in Puerto Rico, 9,400km from Maui. The restaurant is the dining
    // room at the Ritz-Carlton Maui, up the coast from Lahaina at Kapalua,
    // which is why the address reads Lahaina and the pin does not.
    name: 'The Banyan Tree',
    country: /united states|usa/i,
    city: 'Lahaina',
    address: '1 Ritz Carlton Dr, Kapalua, HI 96761',
    lat: 21.00001,
    lng: -156.65427,
  },
  {
    // The record had it on the Transpeninsular at El Maneadero, which is south
    // of Ensenada in Baja California, eleven hundred kilometres up the peninsula
    // from the Los Cabos in its own name, and the pin dutifully followed. Its
    // own site gives the address as Palmilla Dunes, San José del Cabo, in Baja
    // California Sur, so the pin sits in Palmilla.
    name: 'Il Splendido Los Cabos',
    country: /mexico|united states|usa/i,
    city: 'San José del Cabo',
    countryName: 'Mexico',
    address: 'Carretera Transpeninsular km 27.5, Local 8, Palmilla Dunes, San José del Cabo, B.C.S., Mexico',
    lat: 23.014455,
    lng: -109.720556,
  },
  {
    // Two restaurants are called Aurum: one in Gmunden and one in Los Altos.
    // This record is the Californian, filed with "Austria" in the country field
    // and the state abbreviation in the city field, which was enough to attach
    // it to the Austrian one's page. OpenStreetMap has it by name at its own
    // address on State Street.
    name: 'Aurum',
    // Both records say Austria, so the country cannot tell them apart and the
    // site address does.
    web: /aurumca\.com/i,
    city: 'Los Altos',
    countryName: 'United States',
    address: '132 State St, Los Altos, CA 94022, USA',
    lat: 37.380143,
    lng: -122.115692,
  },
  {
    // The city fallback asked for "Playa del Carmen" and answered near Mexicali
    // on the California line, three thousand kilometres up the wrong coast. The
    // restaurant is inside Chable Maroma, at Km 51 of the Cancun-Tulum highway,
    // which is Punta Maroma.
    name: 'Bu\u2019ul',
    country: /mexico|united states|usa/i,
    city: 'Playa del Carmen',
    countryName: 'Mexico',
    address: 'Carretera Federal Cancun - Tulum Km. 51, Punta Maroma, Playa del Carmen, 77710, Mexico',
    lat: 20.737543,
    lng: -86.967237,
  },
  {
    // the50 had the latitude right and the longitude as -1.69 instead of 2.79,
    // which put a restaurant in the Aude on the Spanish side of the Basque
    // coast. OpenStreetMap has it by name at the address it publishes.
    name: "L'Auberge du Vieux Puits",
    country: /france/i,
    city: 'Fontjoncouse',
    address: '5 Avenue de Saint-Victor, Fontjoncouse, 11360, France',
    lat: 43.04859,
    lng: 2.788613,
  },
];

const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** The correction for a geo record, or null. */
export const placeFixFor = (rec) =>
  PLACE_FIXES.find(
    (f) => norm(f.name) === norm(rec.n)
      && (!f.country || f.country.test(String(rec.co || '')))
      && (!f.web || f.web.test(String(rec.w || '')))
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
  // A corrected coordinate is a stated one, so it is no longer a guess, whatever
  // the geocoder that got it wrong had called its own confidence.
  if (fix.lat !== undefined && (rec.ap || rec.acc !== 'stated')) {
    delete rec.ap;
    rec.acc = 'stated';
    changed = true;
  }
  return changed;
};

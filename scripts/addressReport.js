/**
 * addressReport.js
 * ----------------
 * Lists the restaurants no geocoder can place at a door, because the record does
 * not say where the door is. They are pinned at the centre of their town and show
 * as pale pins on the Atlas.
 *
 * Two kinds: records carrying no address at all, and records carrying an address
 * that names a town but no street.
 *
 * Usage: node scripts/addressReport.js [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEO = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const OUT = path.join(ROOT, 'reports', 'restaurants-without-addresses.txt');
const quiet = process.argv.includes('--quiet');

// Words that mean "this part is a street", across the languages the guide covers.
const STREET = new RegExp(
  '\\b(st|street|str|strada|road|rd|ave|avenue|av|avenida|avinguda|lane|ln|blvd|'
  + 'boulevard|bulevar|bulevardi|drive|dr|rue|route|chemin|impasse|quai|via|viale|'
  + 'vicolo|corso|largo|piazza|piazzale|calle|carrer|carrera|camino|paseo|passeig|'
  + 'ronda|rua|travessa|praca|praça|strasse|straße|gasse|weg|allee|platz|ufer|damm|'
  + 'chaussee|steenweg|straat|laan|plein|gade|gata|gatan|vei|veien|katu|tie|utca|'
  + 'korut|körút|ter|tér|ulica|ulice|ulitsa|namesti|náměstí|nabrezi|nábřeží|plac|'
  + 'aleja|bulwar|prospekt|naberezhnaya|pereulok|shosse|rruga|sokak|sokagi|sokağı|'
  + 'cadde|caddesi|jalan|lorong|soi|thanon|dori|dōri|chome|banchi|gil|marg|nagar|'
  + 'plaza|calzada|prolongacion|prolongación|andador|privada|retorno|cerrada|'
  + 'quay|wharf|walk|way|place|pl|square|sq|terrace|hill|park|court|close|crescent|'
  + 'row|gate|bridge|market|promenade|esplanade|passage|alley|mews|parade|circus|'
  + 'embankment|highway|hwy|pike|turnpike|trail)\\b', 'i'
);

/**
 * An address names a street if a street word appears anywhere before the country,
 * or if the first field opens with a number, which is how "1 Fourth St" and
 * "278, Docheogwit-Ro" are written.
 *
 * A digit further along is not evidence: "Meads Bay, British West Indies 2640"
 * carries a postcode, not a street number. Nor is every street marked with a
 * word, so a bare "Cobos, Mendoza, Argentina" is listed even though Cobos is a
 * street; the list is meant to be worked through, not trusted blindly.
 */
const namesAStreet = (address) => {
  const fields = String(address).split(',').map((s) => s.trim()).filter(Boolean);
  if (!fields.length) return false;
  const head = fields.length > 1 ? fields.slice(0, -1) : fields;
  return head.some((f) => STREET.test(f)) || /\d/.test(fields[0]);
};

const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
const placed = (geo.restaurants || []).filter((r) => r.lng != null);

const none = [];
const vague = [];
for (const r of placed) {
  const a = String(r.a || '').trim();
  if (a.length < 5) none.push(r);
  else if (!namesAStreet(a)) vague.push(r);
}

const order = (a, b) =>
  String(a.co || '').localeCompare(String(b.co || ''))
  || String(a.c || '').localeCompare(String(b.c || ''))
  || String(a.n || '').localeCompare(String(b.n || ''));
none.sort(order);
vague.sort(order);

const pad = (s, n) => String(s ?? '').padEnd(n).slice(0, n);
const rule = '─'.repeat(100);
const L = [];
L.push('THE EPICUREAN · RESTAURANTS WITHOUT A USABLE ADDRESS');
L.push(`Generated ${new Date().toISOString().slice(0, 10)} from public/data/restaurants-geo.json`);
L.push('');
L.push('No geocoder can place these at a door, because the record does not say where');
L.push('the door is. They are pinned at the centre of their town instead, which is why');
L.push('they show as pale pins on the Atlas.');
L.push('');
L.push(`  ${none.length} carry no address at all`);
L.push(`  ${vague.length} carry an address that names a town but no street`);
L.push(`  ${none.length + vague.length} in total, of ${placed.length} restaurants`);
L.push('', '');
L.push(rule);
L.push(`NO ADDRESS AT ALL  (${none.length})`);
L.push(rule);
L.push(pad('RESTAURANT', 46) + pad('CITY', 24) + 'COUNTRY');
L.push('');
for (const r of none) L.push(pad(r.n, 46) + pad(r.c, 24) + (r.co || ''));
L.push('', '');
L.push(rule);
L.push(`AN ADDRESS, BUT NO STREET IN IT  (${vague.length})`);
L.push(rule);
L.push(pad('RESTAURANT', 38) + pad('CITY', 20) + pad('COUNTRY', 18) + 'WHAT THE RECORD SAYS');
L.push('');
for (const r of vague) L.push(pad(r.n, 38) + pad(r.c, 20) + pad(r.co, 18) + (r.a || ''));
L.push('');

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, L.join('\n'));

if (!quiet) {
  console.log(`\n  ${none.length} with no address · ${vague.length} with no street · ${placed.length} restaurants`);
  console.log(`  → ${path.relative(ROOT, OUT)}\n`);
}

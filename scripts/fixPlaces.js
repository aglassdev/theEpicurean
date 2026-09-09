/**
 * fixPlaces.js
 * ------------
 * Applies scripts/placeFixes.js to the geocoded set, so a record the sources
 * placed badly is corrected however it got there: a fresh geocode, a re-import,
 * or a CSV downloaded again.
 *
 * Runs inside `npm run build`, before the tree is rebuilt from it.
 *
 * Usage: node scripts/fixPlaces.js [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { applyPlaceFix, PLACE_FIXES } from './placeFixes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GEO = path.join(__dirname, '../public/data/restaurants-geo.json');
const quiet = process.argv.includes('--quiet');

if (!fs.existsSync(GEO)) {
  if (!quiet) console.log('  ! no geocoded set yet — nothing to correct');
  process.exit(0);
}

const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
const fixed = (geo.restaurants || []).filter(applyPlaceFix);
if (fixed.length) fs.writeFileSync(GEO, JSON.stringify(geo));

if (!quiet) {
  console.log(`\n  place fixes  ${PLACE_FIXES.length} rules: ${fixed.length} records corrected`);
  for (const r of fixed) console.log(`    ${r.n} → ${r.c}, ${r.co}`);
  console.log('');
}

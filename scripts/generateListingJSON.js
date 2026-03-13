/**
 * generateListingJSON.js
 * ----------------------
 * Generates public/components/{country}/{region}/{city}/index.json for every
 * NON-USA city directory.  DynamicPage fetches this at runtime when a user
 * navigates to /{country}/{region}/{city}/restaurants — no Vite bundle needed.
 *
 * Usage:
 *   node scripts/generateListingJSON.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC       = path.join(__dirname, '../src');
const PUB       = path.join(__dirname, '../public/components');

const SKIP = new Set([
  'Restaurants.jsx', 'App.jsx', 'main.jsx', 'Home.jsx',
  'Destinations.jsx', 'Methodology.jsx', 'InteractiveMap.jsx',
  'RestaurantTemplate.jsx',
]);

function extractMeta(jsx) {
  const nameMatch    = jsx.match(/restaurantName="([^"]+)"/);
  const cuisineMatch = jsx.match(/cuisine="([^"]+)"/);
  const priceMatch   = jsx.match(/priceRange="([^"]+)"/);
  if (!nameMatch) return null;
  return {
    name:    nameMatch[1],
    cuisine: cuisineMatch ? cuisineMatch[1] : '',
    price:   priceMatch  ? priceMatch[1]   : '',
  };
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim();
}

function toTitle(dirName) {
  return dirName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

let written = 0, empty = 0, skipped = 0;

for (const country of fs.readdirSync(SRC).sort()) {
  if (country === 'usa' || country.startsWith('.')) continue; // USA handled by Vite glob

  const countryPath = path.join(SRC, country);
  if (!fs.statSync(countryPath).isDirectory()) continue;

  for (const region of fs.readdirSync(countryPath)) {
    const regionPath = path.join(countryPath, region);
    if (!fs.statSync(regionPath).isDirectory()) continue;

    for (const city of fs.readdirSync(regionPath)) {
      const cityPath = path.join(regionPath, city);
      if (!fs.statSync(cityPath).isDirectory()) continue;

      const jsxFiles = fs.readdirSync(cityPath).filter(
        f => f.endsWith('.jsx') && !SKIP.has(f)
      );

      if (jsxFiles.length === 0) { empty++; continue; }

      const restaurants = [];
      for (const file of jsxFiles.sort()) {
        const jsx  = fs.readFileSync(path.join(cityPath, file), 'utf-8');
        const meta = extractMeta(jsx);
        if (!meta) continue;
        restaurants.push({
          ...meta,
          path: `/${country}/${region}/${city}/${slugify(meta.name)}`,
        });
      }

      if (restaurants.length === 0) { empty++; continue; }

      // Write public/components/{country}/{region}/{city}/index.json
      const outDir  = path.join(PUB, country, region, city);
      const outFile = path.join(outDir, 'index.json');
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, JSON.stringify({
        title: toTitle(city),
        country, region, city,
        restaurants,
      }, null, 2));

      written++;
      if (written % 500 === 0) process.stdout.write(`  ✓ ${written} index files written...\n`);
    }
  }
}

console.log(`\n✅  Listing JSON done!`);
console.log(`   Written : ${written}`);
console.log(`   Empty   : ${empty}`);

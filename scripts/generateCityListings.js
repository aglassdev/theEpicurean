/**
 * generateCityListings.js
 * ----------------------
 * Scans every city directory under src/ and generates (or refreshes) a
 * Restaurants.jsx listing page for it. Existing listing pages are always
 * regenerated so newly-added restaurants appear.
 *
 * Usage:
 *   node scripts/generateCityListings.js           # regenerate all
 *   node scripts/generateCityListings.js --new-only # only create missing ones
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '../src');

const newOnly = process.argv.includes('--new-only');

// Files to skip when scanning a city directory for restaurant JSX files
const SKIP = new Set([
  'Restaurants.jsx', 'App.jsx', 'main.jsx', 'Home.jsx',
  'Destinations.jsx', 'Methodology.jsx', 'InteractiveMap.jsx',
  'RestaurantTemplate.jsx',
]);

// ── Extract restaurant metadata from a JSX file ──────────────────────────────
function extractMeta(jsx) {
  // restaurantName prop
  const nameMatch = jsx.match(/restaurantName="([^"]+)"/);
  // cuisine prop
  const cuisineMatch = jsx.match(/cuisine="([^"]+)"/);
  // priceRange prop
  const priceMatch = jsx.match(/priceRange="([^"]+)"/);
  if (!nameMatch) return null;
  return {
    name: nameMatch[1],
    cuisine: cuisineMatch ? cuisineMatch[1] : '',
    price: priceMatch ? priceMatch[1] : '',
  };
}

// ── Slugify (same logic as generateRestaurants.js) ───────────────────────────
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim();
}

// ── Pretty-print a city/dir name for the page title ─────────────────────────
function toTitle(dirName) {
  return dirName
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ── Generate a Restaurants.jsx file ─────────────────────────────────────────
function generateListingPage(cityTitle, restaurants, citySlug) {
  const entriesJS = restaurants
    .map(r => {
      const slug = slugify(r.name);
      return `  {
    name: ${JSON.stringify(r.name)},
    cuisine: ${JSON.stringify(r.cuisine)},
    price: ${JSON.stringify(r.price)},
    path: ${JSON.stringify(r.path)},
    image: '/images/${slug}1.png'
  }`;
    })
    .join(',\n');

  return `import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = ${JSON.stringify(cityTitle)};

const restaurants = [
${entriesJS}
];

const Restaurants = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = pageTitle;
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div style={{
      fontFamily: 'Times New Roman, serif',
      backgroundColor: 'white',
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      boxSizing: 'border-box'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        <a
          href="/"
          style={{ textDecoration: 'none' }}
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}>
            <img
              src="/images/theepicurean.png"
              alt="The Epicurean"
              style={{
                width: '150px',
                height: '40px',
                objectFit: 'contain',
                backgroundColor: 'transparent'
              }}
            />
          </div>
        </a>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <button
            style={{
              background: 'none', border: 'none', fontSize: '18px',
              fontWeight: '500', cursor: 'pointer', color: '#333',
              padding: '0.5rem 1rem', borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => navigate('/destinations')}
          >
            Destinations
          </button>
          <button
            style={{
              background: 'none', border: 'none', fontSize: '18px',
              fontWeight: '500', cursor: 'pointer', color: '#333',
              padding: '0.5rem 1rem', borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => navigate('/methodology')}
          >
            Methodology
          </button>
        </div>
      </nav>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '7rem 2rem 0 2rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 1rem 0',
          fontFamily: 'Times New Roman, serif'
        }}>
          {pageTitle}
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          margin: '0 0 2rem 0',
          fontFamily: 'Times New Roman, serif'
        }}>
          {restaurants.length} restaurant{restaurants.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div style={{
        padding: '0 2rem 4rem 2rem',
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
          gap: '2rem',
          justifyContent: 'start'
        }}>
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(restaurant.path)}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
            >
              <div style={{
                height: '200px',
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: '#f8f9fa', display: 'none',
                  alignItems: 'center', justifyContent: 'center',
                  color: '#666', fontSize: '14px', fontWeight: '500'
                }}>
                  {restaurant.name}
                </div>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: 'white' }}>
                <h3 style={{
                  fontSize: '1.25rem', fontWeight: '600', color: '#333',
                  margin: '0 0 0.5rem 0', fontFamily: 'Times New Roman, serif'
                }}>
                  {restaurant.name}
                </h3>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '0.9rem', color: '#666',
                    fontFamily: 'Times New Roman, serif'
                  }}>
                    {restaurant.cuisine}
                  </span>
                  <span style={{
                    fontSize: '0.9rem', fontWeight: '600', color: '#333',
                    fontFamily: 'Times New Roman, serif'
                  }}>
                    {restaurant.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef',
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        <p style={{
          fontSize: '14px', color: '#666', margin: 0,
          fontFamily: 'Times New Roman, serif'
        }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

export default Restaurants;
`;
}

// ── Walk all city directories ─────────────────────────────────────────────────
let created = 0, updated = 0, skipped = 0, empty = 0;

for (const country of fs.readdirSync(SRC)) {
  const countryPath = path.join(SRC, country);
  if (!fs.statSync(countryPath).isDirectory() || country.startsWith('.')) continue;

  for (const region of fs.readdirSync(countryPath)) {
    const regionPath = path.join(countryPath, region);
    if (!fs.statSync(regionPath).isDirectory()) continue;

    for (const city of fs.readdirSync(regionPath)) {
      const cityPath = path.join(regionPath, city);
      if (!fs.statSync(cityPath).isDirectory()) continue;

      const listingFile = path.join(cityPath, 'Restaurants.jsx');
      const alreadyExists = fs.existsSync(listingFile);

      if (newOnly && alreadyExists) {
        skipped++;
        continue;
      }

      // Read all restaurant JSX files in this city dir
      const jsxFiles = fs.readdirSync(cityPath).filter(
        f => f.endsWith('.jsx') && !SKIP.has(f)
      );

      if (jsxFiles.length === 0) {
        empty++;
        continue;
      }

      // Build restaurant list from JSX metadata
      const restaurants = [];
      for (const file of jsxFiles.sort()) {
        const jsx = fs.readFileSync(path.join(cityPath, file), 'utf-8');
        const meta = extractMeta(jsx);
        if (!meta) continue;
        const slug = slugify(meta.name);
        const routePath = `/${country}/${region}/${city}/${slug}`;
        restaurants.push({ ...meta, path: routePath });
      }

      if (restaurants.length === 0) {
        empty++;
        continue;
      }

      const cityTitle = toTitle(city);
      const content = generateListingPage(cityTitle, restaurants, city);
      fs.writeFileSync(listingFile, content);

      if (alreadyExists) updated++;
      else created++;

      if ((created + updated) % 500 === 0) {
        process.stdout.write(`  ✓ ${created + updated} listing pages written...\n`);
      }
    }
  }
}

console.log(`\n✅  City listing pages done!`);
console.log(`   Created : ${created}`);
console.log(`   Updated : ${updated}`);
console.log(`   Skipped : ${skipped}  (--new-only mode)`);
console.log(`   Empty   : ${empty}  (dirs with no restaurants)`);
console.log(`\n📌  Next: run the build`);
console.log(`   npm run build`);

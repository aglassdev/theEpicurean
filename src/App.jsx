import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Destinations from './Destinations';
import Methodology from './Methodology';
import WorldMapPage from './WorldMapPage';
import RestaurantTemplate from './RestaurantTemplate';

// USA listing pages: discovered by Vite at build time, code-split per city.
// International cities: served via /components/{country}/{region}/{city}/index.json
// fetched at runtime inside DynamicPage (see below) — no extra bundle cost.
// Two globs: 3-deep (usa/state/city) covers most cities; 2-deep (usa/dc) covers
// special top-level entries like Washington D.C.
const listingModules3 = import.meta.glob('./usa/*/*/Restaurants.jsx');
const listingModules2 = import.meta.glob('./usa/*/Restaurants.jsx');

const listingComponents = Object.fromEntries(
  [...Object.entries(listingModules3), ...Object.entries(listingModules2)].map(([filePath, loader]) => {
    const routePath = filePath
      .replace(/^\.\//, '/')
      .replace(/\/Restaurants\.jsx$/, '/restaurants');
    return [routePath, lazy(loader)];
  })
);

const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '18px',
    color: '#666'
  }}>
    Loading...
  </div>
);

const DynamicPage = () => {
  const location = useLocation();
  const [content, setContent] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        setContent(null);

        const path = location.pathname.slice(1);
        const fullPath = `/${path}`;
        console.log('Loading path:', fullPath);

        // 1. USA bundled listing page?
        const ListingComponent = listingComponents[fullPath];
        if (ListingComponent) {
          setContent({ type: 'component', Component: ListingComponent });
          setLoading(false);
          return;
        }

        // 2. International listing page? (ends in /restaurants, served as index.json)
        if (fullPath.endsWith('/restaurants')) {
          const cityPath = fullPath.replace(/\/restaurants$/, '');
          const indexUrl = `/components${cityPath}/index.json`;
          try {
            const resp = await fetch(indexUrl);
            if (resp.ok) {
              const listing = await resp.json();
              setContent({ type: 'listing-json', data: listing });
              setLoading(false);
              return;
            }
          } catch (_) { /* fall through to 404 */ }
        }

        // 3. Otherwise, try to load restaurant JSON
        const pathParts = path.split('/');
        const lastPart = pathParts[pathParts.length - 1];

        const toPascalCase = (str) => {
          return str.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join('');
        };

        const basePath = pathParts.slice(0, -1).join('/');

        const nameVariations = [
          toPascalCase(lastPart),
          lastPart.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join('-'),
          lastPart,
          lastPart.toLowerCase(),
          lastPart.charAt(0).toUpperCase() + lastPart.slice(1).toLowerCase(),
        ];

        const pathVariations = nameVariations.map(name =>
          `/components/${basePath}/${name}.json`
        );

        console.log('Trying JSON paths:', pathVariations);

        let data = null;
        let lastError = null;

        for (const tryPath of pathVariations) {
          try {
            const response = await fetch(tryPath);
            if (response.ok) {
              try {
                data = await response.json();
                console.log('✓ Loaded JSON from:', tryPath);
                break;
              } catch (jsonErr) {
                lastError = `Invalid JSON: ${jsonErr.message}`;
              }
            } else {
              lastError = `HTTP ${response.status}: ${response.statusText}`;
            }
          } catch (err) {
            lastError = err.message;
            continue;
          }
        }

        if (data) {
          setContent({ type: 'restaurant', data });
          setLoading(false);
        } else {
          throw new Error(`Restaurant not found: ${lastPart}. Last error: ${lastError || 'No matching files'}`);
        }

      } catch (err) {
        console.error('Error loading content:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadContent();
  }, [location.pathname]);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ fontSize: '72px', marginBottom: '20px' }}>404</div>
        <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ color: '#666', marginTop: '10px', fontSize: '16px', maxWidth: '600px' }}>
          {error}
        </p>
        <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
          <a href="/" style={{ padding: '12px 24px', backgroundColor: '#333', color: 'white',
            textDecoration: 'none', borderRadius: '5px', fontSize: '16px' }}>Return Home</a>
          <a href="/destinations" style={{ padding: '12px 24px', backgroundColor: '#555', color: 'white',
            textDecoration: 'none', borderRadius: '5px', fontSize: '16px' }}>Browse Destinations</a>
        </div>
      </div>
    );
  }

  if (content.type === 'component') {
    const Component = content.Component;
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Component />
      </Suspense>
    );
  }

  // International city listing fetched as JSON
  if (content.type === 'listing-json') {
    const { title, restaurants } = content.data;
    return (
      <div style={{ fontFamily: 'Times New Roman, serif', backgroundColor: 'white', minHeight: '100vh' }}>
        <nav style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1rem 2rem', backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'fixed',
          top: 0, left: 0, right: 0, zIndex: 1000, boxSizing: 'border-box'
        }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <img src="/images/theepicurean.png" alt="The Epicurean"
              style={{ width: '150px', height: '40px', objectFit: 'contain' }} />
          </a>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="/destinations" style={{ fontSize: '18px', color: '#333', textDecoration: 'none' }}>Destinations</a>
            <a href="/methodology"  style={{ fontSize: '18px', color: '#333', textDecoration: 'none' }}>Methodology</a>
          </div>
        </nav>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '7rem 2rem 2rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>{title}</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            {restaurants.length} restaurant{restaurants.length !== 1 ? 's' : ''}
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 300px)',
            gap: '2rem', justifyContent: 'start'
          }}>
            {restaurants.map((r, i) => (
              <a key={i} href={r.path} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: 'white', borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)', overflow: 'hidden',
                  border: '1px solid #e9ecef', transition: 'transform 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  <div style={{ height: '200px', backgroundColor: '#f8f9fa', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', color: '#999', fontSize: '13px' }}>
                    {r.name}
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#333', margin: '0 0 0.4rem' }}>{r.name}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', color: '#666' }}>{r.cuisine}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#333' }}>{r.price}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <footer style={{ backgroundColor: '#f8f9fa', padding: '2rem', textAlign: 'center',
          borderTop: '1px solid #e9ecef', marginTop: '2rem' }}>
          <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>a Glass production</p>
        </footer>
      </div>
    );
  }

  return <RestaurantTemplate {...content.data} />;
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/map" element={<WorldMapPage />} />
          <Route path="/atlas" element={<WorldMapPage />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="*" element={<DynamicPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

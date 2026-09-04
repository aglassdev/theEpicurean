import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home';
import Destinations from './Destinations';
import Methodology from './Methodology';
import WorldMapPage from './WorldMapPage';
import News from './News';
import RestaurantTemplate from './RestaurantTemplate';
import { EpiPage, tokens } from './EpiChrome';

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
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    minHeight: '60vh', background: tokens.paper,
    fontFamily: tokens.serif, fontStyle: 'normal', fontSize: '1.3rem', color: tokens.gold,
  }}>
    Setting the table…
  </div>
);

const DynamicPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    const link = { fontFamily: tokens.sans, fontSize: '11px', letterSpacing: '.28em', textTransform: 'uppercase', textDecoration: 'none', padding: '13px 22px' };
    return (
      <EpiPage>
        <section style={{ minHeight: '52vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 'clamp(4rem, 10vw, 8rem) 2.5rem' }}>
          <div style={{ fontFamily: tokens.serif, fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: 1, color: tokens.gold, fontVariantNumeric: 'lining-nums' }}>404</div>
          <h1 style={{ fontFamily: tokens.serif, fontWeight: 400, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-.015em', color: tokens.ink, margin: '1rem 0 .75rem' }}>
            This table isn't set.
          </h1>
          <p style={{ fontFamily: tokens.body, fontStyle: 'normal', fontSize: '1.1rem', color: tokens.inkSoft, maxWidth: '560px', lineHeight: 1.6, margin: '0 0 2.25rem' }}>
            We couldn't find that page in the guide.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{ ...link, color: tokens.paper, background: tokens.ink }}>Return home</a>
            <a href="/destinations" onClick={(e) => { e.preventDefault(); navigate('/destinations'); }} style={{ ...link, color: tokens.ink, border: `1px solid ${tokens.ink}` }}>Browse destinations</a>
          </div>
        </section>
      </EpiPage>
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
    const goTo = (p) => (e) => { e.preventDefault(); navigate(p); };
    return (
      <EpiPage active="destinations">
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(3.5rem, 7vw, 6rem) 2.5rem 1rem' }}>
          <h1 style={{ fontFamily: tokens.serif, fontWeight: 400, fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '-.02em', margin: '0 0 1rem', color: tokens.ink }}>{title}</h1>
          <div style={{ fontFamily: tokens.sans, fontSize: '11px', letterSpacing: '.28em', textTransform: 'uppercase', color: tokens.inkSoft }}>
            {restaurants.length} {restaurants.length === 1 ? 'table' : 'tables'}
          </div>
        </section>
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem 2.5rem clamp(4rem, 8vw, 6rem)' }}>
          <div style={{ borderTop: `1px solid ${tokens.rule}`, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', columnGap: '3rem' }}>
            {restaurants.map((r, i) => (
              <a key={i} href={r.path} onClick={goTo(r.path)}
                style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'baseline', padding: '1.15rem .25rem', borderBottom: `1px solid ${tokens.rule}`, textDecoration: 'none', color: 'inherit', transition: 'color .25s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = tokens.gold}
                onMouseLeave={(e) => e.currentTarget.style.color = tokens.ink}>
                <span style={{ fontFamily: tokens.serif, fontWeight: 500, fontSize: '1.35rem', letterSpacing: '-.01em', lineHeight: 1.2 }}>{r.name}</span>
                <span style={{ fontFamily: tokens.sans, fontSize: '10.5px', letterSpacing: '.16em', textTransform: 'uppercase', color: tokens.inkMute, whiteSpace: 'nowrap' }}>
                  {[r.cuisine, r.price].filter(Boolean).join(' · ')}
                </span>
              </a>
            ))}
          </div>
        </section>
      </EpiPage>
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
          <Route path="/news" element={<News />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="*" element={<DynamicPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

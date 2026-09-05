import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home';
import Destinations from './Destinations';
import Methodology from './Methodology';
import WorldMapPage from './WorldMapPage';
import News from './News';
import Article from './Article';
import CityPage from './CityPage';
import RestaurantTemplate from './RestaurantTemplate';
import { EpiPage, tokens } from './EpiChrome';

// Every city — domestic or not — is served the same way: a listing at
// /components/{country}/{region}/{city}/index.json, fetched at runtime and
// rendered by CityPage. Written by `npm run destinations`.

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

        // 1. City listing? Older links use /Restaurants, newer ones /restaurants.
        if (/\/restaurants$/i.test(fullPath)) {
          const cityPath = fullPath.replace(/\/restaurants$/i, '');
          try {
            const resp = await fetch(`/components${cityPath}/index.json`);
            if (resp.ok) {
              const listing = await resp.json();
              setContent({ type: 'city', data: listing });
              setLoading(false);
              return;
            }
          } catch (_) { /* fall through to 404 */ }
        }

        // 2. Otherwise, try to load restaurant JSON
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

        let data = null;
        let lastError = null;

        for (const tryPath of pathVariations) {
          try {
            const response = await fetch(tryPath);
            if (response.ok) {
              try {
                data = await response.json();
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

  if (content.type === 'city') return <CityPage data={content.data} />;

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
          <Route path="/news/:slug" element={<Article />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="*" element={<DynamicPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

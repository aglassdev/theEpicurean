import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Destinations from './Destinations.jsx';
import Methodology from './Methodology.jsx';

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

// Get all component modules - this is compiled at build time
const modules = import.meta.glob('./**/*.jsx');

// Create a normalized path map for faster lookups
const pathMap = Object.keys(modules).reduce((acc, path) => {
  // Normalize the path: remove ./, convert to lowercase, handle spaces
  const normalized = path
    .replace(/^\.\//, '')
    .replace(/\.jsx$/, '')
    .toLowerCase()
    .replace(/\s+/g, '-');
  acc[normalized] = path;
  return acc;
}, {});

console.log('Available components:', Object.keys(modules).length);

const DynamicComponent = () => {
  const [Component, setComponent] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadComponent = async () => {
      try {
        // Get the current path without leading slash
        const currentPath = window.location.pathname.slice(1);
        
        console.log('Loading component for path:', currentPath);

        // Try to find the module
        let modulePath = pathMap[currentPath];
        
        // If not found, try with ./ prefix
        if (!modulePath) {
          modulePath = `./${currentPath}.jsx`;
          if (!modules[modulePath]) {
            modulePath = null;
          }
        }

        if (!modulePath) {
          // Search for similar paths
          const searchTerm = currentPath.split('/').pop();
          const similarPaths = Object.keys(pathMap)
            .filter(p => p.includes(searchTerm))
            .slice(0, 5);
          
          console.error('Component not found:', currentPath);
          console.log('Similar paths:', similarPaths);
          
          setError({
            message: `Component not found: /${currentPath}`,
            similarPaths: similarPaths.map(p => `/${p}`)
          });
          setLoading(false);
          return;
        }

        console.log('Loading module:', modulePath);
        const module = await modules[modulePath]();
        console.log('Successfully loaded:', modulePath);
        
        setComponent(() => module.default);
        setLoading(false);
      } catch (err) {
        console.error('Error loading component:', err);
        setError({ message: err.message });
        setLoading(false);
      }
    };

    loadComponent();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#666',
        backgroundColor: '#f5f5f5',
        padding: '40px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '32px', marginBottom: '20px', color: '#999' }}>404</div>
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>Page Not Found</div>
        <div style={{ fontSize: '14px', color: '#999', marginBottom: '20px', maxWidth: '600px' }}>
          {error.message}
        </div>
        {error.similarPaths && error.similarPaths.length > 0 && (
          <div style={{ fontSize: '12px', color: '#aaa', marginTop: '20px' }}>
            <div>Did you mean:</div>
            {error.similarPaths.map(p => (
              <a 
                key={p} 
                href={p}
                style={{ 
                  display: 'block',
                  fontFamily: 'monospace', 
                  marginTop: '5px',
                  color: '#0066cc'
                }}
              >
                {p}
              </a>
            ))}
          </div>
        )}
        <a 
          href="/" 
          style={{ 
            marginTop: '30px', 
            padding: '10px 20px', 
            backgroundColor: '#333', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '5px' 
          }}
        >
          Return Home
        </a>
      </div>
    );
  }

  if (!Component) {
    return <LoadingSpinner />;
  }

  return <Component />;
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/methodology" element={<Methodology />} />
          
          {/* Catch-all route for dynamic components */}
          <Route path="*" element={<DynamicComponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

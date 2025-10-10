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

// Get all component modules
const modules = import.meta.glob('./**/*.jsx');

// Debug: Log available modules on load
console.log('Available modules:', Object.keys(modules).length);
console.log('Sample modules:', Object.keys(modules).slice(0, 5));

const LazyComponent = ({ importPath }) => {
  const [Component, setComponent] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const loadComponent = async () => {
      try {
        console.log('Attempting to load:', importPath);
        
        const module = modules[importPath];
        
        if (!module) {
          // Try to find similar paths
          const similarPaths = Object.keys(modules).filter(p => 
            p.toLowerCase().includes(importPath.toLowerCase().split('/').pop().replace('.jsx', ''))
          );
          
          console.error('Module not found:', importPath);
          console.log('Similar paths found:', similarPaths);
          
          setError({
            message: `Component not found: ${importPath}`,
            similarPaths: similarPaths.slice(0, 3)
          });
          return;
        }

        const loaded = await module();
        console.log('Successfully loaded:', importPath);
        setComponent(() => loaded.default);
      } catch (err) {
        console.error('Error loading component:', importPath, err);
        setError({ message: err.message });
      }
    };

    loadComponent();
  }, [importPath]);

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
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>Component Not Found</div>
        <div style={{ fontSize: '14px', color: '#999', marginBottom: '20px', maxWidth: '600px' }}>
          {importPath}
        </div>
        <div style={{ fontSize: '12px', color: '#ccc', marginTop: '10px' }}>
          {error.message}
        </div>
        {error.similarPaths && error.similarPaths.length > 0 && (
          <div style={{ fontSize: '12px', color: '#aaa', marginTop: '20px' }}>
            <div>Similar paths found:</div>
            {error.similarPaths.map(p => (
              <div key={p} style={{ fontFamily: 'monospace', marginTop: '5px' }}>{p}</div>
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
  const [routes, setRoutes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Try to load routes.json
    import('./routes.json')
      .then(module => {
        const data = module.default || module;
        console.log('Loaded routes:', data.length);
        setRoutes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load routes.json:', err);
        setRoutes([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/methodology" element={<Methodology />} />
          
          {routes.map((route, idx) => {
            // Skip main app components
            const skipComponents = [
              './Home.jsx', './Destinations.jsx', './Methodology.jsx',
              './App.jsx', './App-backup.jsx', './App-new.jsx', './App-optimized.jsx',
              './InteractiveMap.jsx', './main.jsx'
            ];
            
            if (skipComponents.includes(route.import)) {
              return null;
            }

            return (
              <Route 
                key={route.path || `route-${idx}`}
                path={route.path} 
                element={<LazyComponent importPath={route.import} />} 
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Destinations from './Destinations.jsx';
import Methodology from './Methodology.jsx';
import routesData from './routes.json';

const componentCache = {};

const loadComponent = (importPath) => {
  if (!componentCache[importPath]) {
    componentCache[importPath] = lazy(() => 
      import(/* @vite-ignore */ importPath).catch(err => {
        console.error(`Failed to load component: ${importPath}`, err);
        return { default: () => <div>Component not found</div> };
      })
    );
  }
  return componentCache[importPath];
};

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

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/methodology" element={<Methodology />} />
          
          {routesData.map(route => {
            const Component = loadComponent(route.import);
            return (
              <Route 
                key={route.path} 
                path={route.path} 
                element={<Component />} 
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import only the main pages eagerly
import Home from './Home.jsx';
import Destinations from './Destinations.jsx';
import Methodology from './Methodology.jsx';

// Create a dynamic import function for restaurant components
const importRestaurantComponent = (country, ...pathParts) => {
  const path = pathParts.join('/');
  return lazy(() => import(`./${country}/${path}`));
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/methodology" element={<Methodology />} />
          
          {/* Routes will be loaded dynamically when visited */}
          <Route path="/:country/*" element={<DynamicRoute />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Component that handles dynamic route loading
function DynamicRoute() {
  const location = window.location.pathname;
  const parts = location.split('/').filter(Boolean);
  
  // Dynamically import based on path
  const DynamicComponent = lazy(() => {
    const componentPath = `./${parts.join('/')}`;
    return import(componentPath).catch(() => {
      // Fallback if component doesn't exist
      return import('./Home.jsx');
    });
  });
  
  return <DynamicComponent />;
}

export default App;

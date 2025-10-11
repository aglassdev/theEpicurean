import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Destinations from './Destinations.jsx';
import Methodology from './Methodology.jsx';
import RestaurantTemplate from './RestaurantTemplate.jsx';

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

const DynamicRestaurantPage = () => {
  const [restaurantData, setRestaurantData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadRestaurantData = async () => {
      try {
        const path = window.location.pathname.slice(1);
        
        // Try to fetch restaurant data as JSON
        const dataPath = `/components/${path}.json`;
        
        console.log('Fetching restaurant data:', dataPath);
        
        const response = await fetch(dataPath);
        
        if (!response.ok) {
          throw new Error(`Restaurant not found`);
        }
        
        const data = await response.json();
        setRestaurantData(data);
        setLoading(false);
        
      } catch (err) {
        console.error('Error loading restaurant:', err);
        setError({ message: 'Restaurant not found' });
        setLoading(false);
      }
    };

    loadRestaurantData();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>404</div>
        <h2>Restaurant Not Found</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>{error.message}</p>
        <a href="/" style={{
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#333',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px'
        }}>
          Return Home
        </a>
      </div>
    );
  }

  return <RestaurantTemplate {...restaurantData} />;
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="*" element={<DynamicRestaurantPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

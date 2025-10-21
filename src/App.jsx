import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home.jsx';
import Destinations from './Destinations.jsx';
import Methodology from './Methodology.jsx';
import RestaurantTemplate from './RestaurantTemplate.jsx';

// Import all listing pages
import DenmarkCopenhagenRestaurants from './denmark/copenhagen/Restaurants.jsx';
import FranceProvenceMentonRestaurants from './france/provence-alpes-cote-dazur/menton/Restaurants.jsx';
import ItalyEmiliaRomagnaModenaRestaurants from './italy/emilia-romagna/modena/Restaurants.jsx';
import SpainCataloniaBarcelonaRestaurants from './spain/catalonia/barcelona/Restaurants.jsx';
import SpainCataloniaGironaRestaurants from './spain/catalonia/girona/Restaurants.jsx';
import UKEnglandLondonRestaurants from './uk/england/london/Restaurants.jsx';
import UKEnglandSouthEastBrayRestaurants from './uk/england/south-east/bray/Restaurants.jsx';
import USACaliforniaNapaValleyRestaurants from './usa/california/napa-valley/Restaurants.jsx';
import USADCRestaurants from './usa/dc/Restaurants.jsx';
import USANewYorkNewYorkCityRestaurants from './usa/newyork/newyorkcity/Restaurants.jsx';
import USAVirginiaNovaRestaurants from './usa/virginia/nova/Restaurants.jsx';
import USAVirginiaWashingtonRestaurants from './usa/virginia/washington/Restaurants.jsx';

// Map of paths to components
const listingComponents = {
  '/denmark/copenhagen/restaurants': DenmarkCopenhagenRestaurants,
  '/france/provence-alpes-cote-dazur/menton/restaurants': FranceProvenceMentonRestaurants,
  '/italy/emilia-romagna/modena/restaurants': ItalyEmiliaRomagnaModenaRestaurants,
  '/spain/catalonia/barcelona/restaurants': SpainCataloniaBarcelonaRestaurants,
  '/spain/catalonia/girona/restaurants': SpainCataloniaGironaRestaurants,
  '/uk/england/london/restaurants': UKEnglandLondonRestaurants,
  '/uk/england/south-east/bray/restaurants': UKEnglandSouthEastBrayRestaurants,
  '/usa/california/napa-valley/restaurants': USACaliforniaNapaValleyRestaurants,
  '/usa/dc/restaurants': USADCRestaurants,
  '/usa/newyork/newyorkcity/restaurants': USANewYorkNewYorkCityRestaurants,
  '/usa/virginia/nova/restaurants': USAVirginiaNovaRestaurants,
  '/usa/virginia/washington/restaurants': USAVirginiaWashingtonRestaurants,
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
        
        // Check if this is a listing page
        const ListingComponent = listingComponents[fullPath];
        if (ListingComponent) {
          setContent({ type: 'component', Component: ListingComponent });
          setLoading(false);
          return;
        }
        
        // Otherwise, try to load restaurant JSON
        const pathParts = path.split('/');
        const lastPart = pathParts[pathParts.length - 1];
        
        // Convert kebab-case to PascalCase for JSON filename
        // e.g., "pineapple-and-pearls" -> "PineappleandPearls"
        const toPascalCase = (str) => {
          return str.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join('');
        };
        
        // Generate name variations
        const nameVariations = [
          // PascalCase (most common for JSON files)
          toPascalCase(lastPart),
          // First letter capitalized only
          lastPart.charAt(0).toUpperCase() + lastPart.slice(1).toLowerCase(),
          // Each word capitalized with dash
          lastPart.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join('-'),
          // Original
          lastPart,
          // Lowercase
          lastPart.toLowerCase(),
          // All uppercase
          lastPart.toUpperCase(),
        ];
        
        const pathVariations = nameVariations.map(name => {
          const basePath = pathParts.slice(0, -1).join('/');
          return `/components/${basePath}/${name}.json`;
        });
        
        console.log('Trying JSON paths:', pathVariations);
        
        let data = null;
        
        for (const tryPath of pathVariations) {
          try {
            const response = await fetch(tryPath);
            const contentType = response.headers.get('content-type');
            
            if (response.ok && contentType && contentType.includes('application/json')) {
              data = await response.json();
              console.log('✓ Loaded JSON from:', tryPath);
              break;
            }
          } catch (err) {
            console.log('✗ Failed:', tryPath);
            continue;
          }
        }
        
        if (data) {
          setContent({ type: 'restaurant', data });
          setLoading(false);
        } else {
          throw new Error(`Could not find page at: ${path}`);
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
        <p style={{ 
          color: '#666', 
          marginTop: '10px', 
          fontSize: '16px', 
          maxWidth: '600px'
        }}>
          {error}
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          marginTop: '30px' 
        }}>
          <a href="/" style={{
            padding: '12px 24px',
            backgroundColor: '#333',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px'
          }}>
            Return Home
          </a>
          <a href="/destinations" style={{
            padding: '12px 24px',
            backgroundColor: '#555',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px'
          }}>
            Browse Destinations
          </a>
        </div>
      </div>
    );
  }

  if (content.type === 'component') {
    const Component = content.Component;
    return <Component />;
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
          <Route path="/methodology" element={<Methodology />} />
          <Route path="*" element={<DynamicPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

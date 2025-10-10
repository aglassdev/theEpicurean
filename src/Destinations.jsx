import React, { useEffect } from 'react';
import InteractiveMap from './InteractiveMap';

const Destinations = () => {
  // Set document title
  useEffect(() => {
    document.title = "Destinations";
  }, []);

  // Destinations organized by country with subdivisions and routes
  const destinationsByCountry = {
    'United States': {
      'Alabama': {},
      'Alaska': {},
      'Arizona': {},
      'Arkansas': {},
      'California': {
        'Napa Valley': { path: '/usa/california/napa-valley/Restaurants' }
      },
      'Colorado': {},
      'Connecticut': {},
      'Delaware': {},
      'Florida': {},
      'Georgia': {},
      'Hawaii': {},
      'Idaho': {},
      'Illinois': {},
      'Indiana': {},
      'Iowa': {},
      'Kansas': {},
      'Kentucky': {},
      'Louisiana': {},
      'Maine': {},
      'Maryland': {},
      'Massachusetts': {},
      'Michigan': {},
      'Minnesota': {},
      'Mississippi': {},
      'Missouri': {},
      'Montana': {},
      'Nebraska': {},
      'Nevada': {},
      'New Hampshire': {},
      'New Jersey': {},
      'New Mexico': {},
      'New York': {
        'New York City': { path: '/usa/newyork/newyorkcity/Restaurants' }
      },
      'North Carolina': {},
      'North Dakota': {},
      'Ohio': {},
      'Oklahoma': {},
      'Oregon': {},
      'Pennsylvania': {},
      'Rhode Island': {},
      'South Carolina': {},
      'South Dakota': {},
      'Tennessee': {},
      'Texas': {},
      'Utah': {},
      'Vermont': {},
      'Virginia': {
        'Northern Virginia': { path: '/usa/virginia/nova/Restaurants' }
      },
      'Washington': {},
      'Washington, D.C.': { path: '/usa/dc/Restaurants' },
      'West Virginia': {},
      'Wisconsin': {},
      'Wyoming': {}
    },
    'France': {
      'Auvergne-Rhône-Alpes': {},
      'Bourgogne-Franche-Comté': {},
      'Bretagne': {},
      'Centre-Val de Loire': {},
      'Corse': {},
      'Grand Est': {},
      'Hauts-de-France': {},
      'Île-de-France': {},
      'Normandie': {},
      'Nouvelle-Aquitaine': {},
      'Occitanie': {},
      'Pays de la Loire': {},
      'Provence-Alpes-Côte d\'Azur': {
        'Menton': { path: '/france/provence-alpes-cote-dazur/menton/Restaurants' }
      }
    },
    'Italy': {
      'Abruzzo': {},
      'Basilicata': {},
      'Calabria': {},
      'Campania': {},
      'Emilia-Romagna': {
        'Modena': { path: '/italy/emilia-romagna/modena/Restaurants' }
      },
      'Friuli-Venezia Giulia': {},
      'Lazio': {},
      'Liguria': {},
      'Lombardia': {},
      'Marche': {},
      'Molise': {},
      'Piemonte': {},
      'Puglia': {},
      'Sardegna': {},
      'Sicilia': {},
      'Toscana': {},
      'Trentino-Alto Adige': {},
      'Umbria': {},
      'Valle d\'Aosta': {},
      'Veneto': {}
    },
    'Spain': {
      'Andalusia': {},
      'Aragon': {},
      'Asturias': {},
      'Balearic Islands': {},
      'Basque Country': {},
      'Canary Islands': {},
      'Cantabria': {},
      'Castile and León': {},
      'Castile-La Mancha': {},
      'Catalonia': {
        'Barcelona': { path: '/spain/catalonia/barcelona/Restaurants' },
        'Girona': { path: '/spain/catalonia/girona/Restaurants' }
      },
      'Extremadura': {},
      'Galicia': {},
      'La Rioja': {},
      'Madrid': {},
      'Murcia': {},
      'Navarre': {},
      'Valencia': {}
    },
    'England': {
      'East Midlands': {},
      'East of England': {},
      'London': {
        'London': { path: '/uk/england/london/Restaurants' }
      },
      'North East': {},
      'North West': {},
      'South East': {
        'Bray': { path: '/uk/england/south-east/bray/Restaurants' }
      },
      'South West': {},
      'West Midlands': {},
      'Yorkshire and the Humber': {}
    },
    'Scotland': {},
    'Wales': {},
    'Northern Ireland': {},
    'Denmark': {
      'Copenhagen': {
        'Copenhagen': { path: '/denmark/copenhagen/Restaurants' }
      },
      'Central Denmark': {},
      'North Denmark': {},
      'Zealand': {},
      'Southern Denmark': {}
    }
  };

  const handleLocationClick = (path) => {
    if (path) {
      window.location.href = path;
    }
  };

  // Helper function to render nested regions/cities
  const renderSubdivisions = (subdivisions, level = 0) => {
    return Object.entries(subdivisions).map(([name, data]) => {
      const hasPath = data && data.path;
      const hasChildren = data && typeof data === 'object' && !data.path && Object.keys(data).length > 0;
      
      return (
        <div key={name} style={{ marginLeft: level > 0 ? '1rem' : '0' }}>
          <h4 style={{
            fontSize: level === 0 ? '14px' : '13px',
            fontWeight: level === 0 ? 'bold' : '600',
            color: level === 0 ? '#333' : (hasPath ? '#666' : '#999'),
            marginBottom: '0.5rem',
            marginTop: level > 0 ? '0.5rem' : '0.75rem',
            cursor: hasPath ? 'pointer' : 'default',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            if (hasPath) e.target.style.color = '#d4a574';
          }}
          onMouseLeave={(e) => {
            if (hasPath) e.target.style.color = level === 0 ? '#333' : '#666';
          }}
          onClick={() => hasPath && handleLocationClick(data.path)}
          >
            {name}
          </h4>
          {hasChildren && (
            <div style={{ marginLeft: '0.5rem' }}>
              {renderSubdivisions(data, level + 1)}
            </div>
          )}
        </div>
      );
    });
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
      {/* Navigation Bar */}
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
        {/* Logo Area */}
        <a 
          href="/" 
          style={{ textDecoration: 'none' }}
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
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </a>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '2rem'
        }}>
          <span style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Destinations
          </span>
          <span style={{
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Articles
          </span>
          <span style={{
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          onClick={() => {
              window.location.href = '/methodology';
            }}
          >
            Methodology
          </span>
          <span style={{
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ marginTop: '92px', padding: '2rem' }}>
        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#333',
            margin: '0 0 1rem 0'
          }}>
            Destinations
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Explore culinary destinations around the world. Click on highlighted countries to discover their finest restaurants.
          </p>
        </div>

        {/* Interactive World Map Component */}
        <InteractiveMap />
      </div>

      {/* Destinations Footer */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '4rem 2rem',
        borderTop: '1px solid #e9ecef'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#333'
          }}>
            All Destinations
          </h2>
          
          {/* Countries and cities organized by country */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {Object.entries(destinationsByCountry).map(([country, data]) => (
              <div key={country} style={{
                backgroundColor: '#ffffff',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#d4a574',
                  marginBottom: '1rem'
                }}>
                  {country}
                </h3>
                
                {/* Render subdivisions (regions/states) and cities */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}>
                  {renderSubdivisions(data)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef'
      }}>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: 0,
          fontFamily: 'Times New Roman, serif'
        }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

export default Destinations;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveMap from './InteractiveMap';

const Destinations = () => {
  const navigate = useNavigate();
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
        'Napa Valley': { path: '/usa/california/napa-valley/restaurants' },
        'Alameda': { path: '/usa/california/alameda/restaurants' },
        'Alhambra': { path: '/usa/california/alhambra/restaurants' },
        'Anaheim': { path: '/usa/california/anaheim/restaurants' },
        'Aptos': { path: '/usa/california/aptos/restaurants' },
        'Arcadia': { path: '/usa/california/arcadia/restaurants' },
        'Atherton': { path: '/usa/california/atherton/restaurants' },
        'Bell Gardens': { path: '/usa/california/bell-gardens/restaurants' },
        'Belmont': { path: '/usa/california/belmont/restaurants' },
        'Berkeley': { path: '/usa/california/berkeley/restaurants' },
        'Beverly Hills': { path: '/usa/california/beverly-hills/restaurants' },
        'Big Sur': { path: '/usa/california/big-sur/restaurants' },
        'Bodega Bay': { path: '/usa/california/bodega-bay/restaurants' },
        'Boonville': { path: '/usa/california/boonville/restaurants' },
        'Buena Park': { path: '/usa/california/buena-park/restaurants' },
        'Burlingame': { path: '/usa/california/burlingame/restaurants' },
        'Calistoga': { path: '/usa/california/calistoga/restaurants' },
        'Campbell': { path: '/usa/california/campbell/restaurants' },
        'Carlsbad': { path: '/usa/california/carlsbad/restaurants' },
        'Carmel-by-the-Sea': { path: '/usa/california/carmel-by-the-sea/restaurants' },
        'Carmel Valley': { path: '/usa/california/carmel-valley/restaurants' },
        'Cerritos': { path: '/usa/california/cerritos/restaurants' },
        'City of Industry': { path: '/usa/california/city-of-industry/restaurants' },
        'Coronado': { path: '/usa/california/coronado/restaurants' },
        'Corte Madera': { path: '/usa/california/corte-madera/restaurants' },
        'Costa Mesa': { path: '/usa/california/costa-mesa/restaurants' },
        'Culver City': { path: '/usa/california/culver-city/restaurants' },
        'Cupertino': { path: '/usa/california/cupertino/restaurants' },
        'Daly City': { path: '/usa/california/daly-city/restaurants' },
        'Del Mar': { path: '/usa/california/del-mar/restaurants' },
        'El Cerrito': { path: '/usa/california/el-cerrito/restaurants' },
        'El Granada': { path: '/usa/california/el-granada/restaurants' },
        'Elk': { path: '/usa/california/elk/restaurants' },
        'Encinitas': { path: '/usa/california/encinitas/restaurants' },
        'Encino': { path: '/usa/california/encino/restaurants' },
        'Fairfax': { path: '/usa/california/fairfax/restaurants' },
        'Forestville': { path: '/usa/california/forestville/restaurants' },
        'Fullerton': { path: '/usa/california/fullerton/restaurants' },
        'Garden Grove': { path: '/usa/california/garden-grove/restaurants' },
        'Gardena': { path: '/usa/california/gardena/restaurants' },
        'Geyserville': { path: '/usa/california/geyserville/restaurants' },
        'Glen-Ellen': { path: '/usa/california/glen-ellen/restaurants' },
        'Glendale': { path: '/usa/california/glendale/restaurants' },
        'Half Moon Bay': { path: '/usa/california/half-moon-bay/restaurants' },
        'Hayward': { path: '/usa/california/hayward/restaurants' },
        'Healdsburg': { path: '/usa/california/healdsburg/restaurants' },
        'Hermosa Beach': { path: '/usa/california/hermosa-beach/restaurants' },
        'Hollywood': { path: '/usa/california/hollywood/restaurants' },
        'Huntington Beach': { path: '/usa/california/huntington-beach/restaurants' },
        'Inglewood': { path: '/usa/california/inglewood/restaurants' },
        'Inverness': { path: '/usa/california/inverness/restaurants' },
        'Kentfield': { path: '/usa/california/kentfield/restaurants' },
        'La Jolla': { path: '/usa/california/la-jolla/restaurants' },
        'La Puente': { path: '/usa/california/la-puente/restaurants' },
        'Lafayette': { path: '/usa/california/lafayette/restaurants' },
        'Laguna Beach': { path: '/usa/california/laguna-beach/restaurants' },
        'Larkspur': { path: '/usa/california/larkspur/restaurants' },
        'Livermore': { path: '/usa/california/livermore/restaurants' },
        'Long Beach': { path: '/usa/california/long-beach/restaurants' },
        'Los Alamos': { path: '/usa/california/los-alamos/restaurants' },
        'Los Altos': { path: '/usa/california/los-altos/restaurants' },
        'Los Angeles': { path: '/usa/california/los-angeles/restaurants' },
        'Los Gatos': { path: '/usa/california/los-gatos/restaurants' },
        'Los Olivos': { path: '/usa/california/los-olivos/restaurants' },
        'Manhattan Beach': { path: '/usa/california/manhattan-beach/restaurants' },
        'Marina Del Rey': { path: '/usa/california/marina-del-rey/restaurants' },
        'Marshall': { path: '/usa/california/marshall/restaurants' },
        'Menlo Park': { path: '/usa/california/menlo-park/restaurants' },
        'Mill Valley': { path: '/usa/california/mill-valley/restaurants' },
        'Millbrae': { path: '/usa/california/millbrae/restaurants' },
        'Monrovia': { path: '/usa/california/monrovia/restaurants' },
        'Montecito': { path: '/usa/california/montecito/restaurants' },
        'Monterey': { path: '/usa/california/monterey/restaurants' },
        'Mountain View': { path: '/usa/california/mountain-view/restaurants' },
        'Napa': { path: '/usa/california/napa/restaurants' },
        'Newbury Park': { path: '/usa/california/newbury-park/restaurants' },
        'Newport Beach': { path: '/usa/california/newport-beach/restaurants' },
        'Novato': { path: '/usa/california/novato/restaurants' },
        'Oakland': { path: '/usa/california/oakland/restaurants' },
        'Oceanside': { path: '/usa/california/oceanside/restaurants' },
        'Ojai': { path: '/usa/california/ojai/restaurants' },
        'Orange': { path: '/usa/california/orange/restaurants' },
        'Palm Springs': { path: '/usa/california/palm-springs/restaurants' },
        'Palo Alto': { path: '/usa/california/palo-alto/restaurants' },
        'Pasadena': { path: '/usa/california/pasadena/restaurants' },
        'Paso Robles': { path: '/usa/california/paso-robles/restaurants' },
        'Pebble Beach': { path: '/usa/california/pebble-beach/restaurants' },
        'Petaluma': { path: '/usa/california/petaluma/restaurants' },
        'Pleasanton': { path: '/usa/california/pleasanton/restaurants' },
        'Point Reyes Station': { path: '/usa/california/point-reyes-station/restaurants' },
        'Pomona': { path: '/usa/california/pomona/restaurants' },
        'Rancho Palos Verdes': { path: '/usa/california/rancho-palos-verdes/restaurants' },
        'Redwood City': { path: '/usa/california/redwood-city/restaurants' },
        'Rosemead': { path: '/usa/california/rosemead/restaurants' },
        'Roseville': { path: '/usa/california/roseville/restaurants' },
        'Rowland Heights': { path: '/usa/california/rowland-heights/restaurants' },
        'Rutherford': { path: '/usa/california/rutherford/restaurants' },
        'Sacramento': { path: '/usa/california/sacramento/restaurants' },
        'St. Helena': { path: '/usa/california/saint-helena/restaurants' },
        'San Anselmo': { path: '/usa/california/san-anselmo/restaurants' },
        'San Bruno': { path: '/usa/california/san-bruno/restaurants' },
        'San Carlos': { path: '/usa/california/san-carlos/restaurants' },
        'San Diego': { path: '/usa/california/san-diego/restaurants' },
        'San Francisco': { path: '/usa/california/san-francisco/restaurants' },
        'San Gabriel': { path: '/usa/california/san-gabriel/restaurants' },
        'San Jose': { path: '/usa/california/san-jose/restaurants' },
        'San Juan Capistrano': { path: '/usa/california/san-juan-capistrano/restaurants' },
        'San Leandro': { path: '/usa/california/san-leandro/restaurants' },
        'San Luis Obispo': { path: '/usa/california/san-luis-obispo/restaurants' },
        'San Mateo': { path: '/usa/california/san-mateo/restaurants' },
        'San Rafael': { path: '/usa/california/san-rafael/restaurants' },
        'Santa Ana': { path: '/usa/california/santa-ana/restaurants' },
        'Santa Barbara': { path: '/usa/california/santa-barbara/restaurants' },
        'Santa Monica': { path: '/usa/california/santa-monica/restaurants' },
        'Saratoga': { path: '/usa/california/saratoga/restaurants' },
        'Sausalito': { path: '/usa/california/sausalito/restaurants' },
        'Seal Beach': { path: '/usa/california/seal-beach/restaurants' },
        'Seaside': { path: '/usa/california/seaside/restaurants' },
        'Sebastopol': { path: '/usa/california/sebastopol/restaurants' },
        'Sherman Oaks': { path: '/usa/california/sherman-oaks/restaurants' },
        'Solvang': { path: '/usa/california/solvang/restaurants' },
        'Sonoma': { path: '/usa/california/sonoma/restaurants' },
        'Studio City': { path: '/usa/california/studio-city/restaurants' },
        'Temple City': { path: '/usa/california/temple-city/restaurants' },
        'Torrance': { path: '/usa/california/torrance/restaurants' },
        'Tustin': { path: '/usa/california/tustin/restaurants' },
        'Vallejo': { path: '/usa/california/vallejo/restaurants' },
        'Venice Beach': { path: '/usa/california/venice/restaurants' },
        'West Hollywood': { path: '/usa/california/west-hollywood/restaurants' },
        'Westminster': { path: '/usa/california/westminster/restaurants' },
        'Woodland Hills': { path: '/usa/california/woodland-hills/restaurants' },
        'Woodside': { path: '/usa/california/woodside/restaurants' },
        'Yountville': { path: '/usa/california/yountville/restaurants' },
      },
      'Colorado': {
        'Aspen': { path: '/usa/colorado/aspen/restaurants' },
        'Avon': { path: '/usa/colorado/avon/restaurants' },
        'Beaver Creek': { path: '/usa/colorado/beaver-creek/restaurants' },
        'Boulder': { path: '/usa/colorado/boulder/restaurants' },
        'Denver': { path: '/usa/colorado/denver/restaurants' },
        'Vail': { path: '/usa/colorado/vail/restaurants' },
      },
      'Connecticut': {},
      'Delaware': {},
      'Florida': {
        'Boynton Beach': { path: '/usa/florida/boynton-beach/restaurants' },
        'Coral Gables': { path: '/usa/florida/coral-gables/restaurants' },
        'Fort Lauderdale': { path: '/usa/florida/fort-lauderdale/restaurants' },
        'Lake Buena Vista': { path: '/usa/florida/lake-buena-vista/restaurants' },
        'Miami': { path: '/usa/florida/miami/restaurants' },
        'Miami Beach': { path: '/usa/florida/miami-beach/restaurants' },
        'Orlando': { path: '/usa/florida/orlando/restaurants' },
        'Palm Beach': { path: '/usa/florida/palm-beach/restaurants' },
        'Palm Beach Gardens': { path: '/usa/florida/palm-beach-gardens/restaurants' },
        'Safety Harbor': { path: '/usa/florida/safety-harbor/restaurants' },
        'St. Petersburg': { path: '/usa/florida/st-petersburg/restaurants' },
        'Surfside': { path: '/usa/florida/surfside/restaurants' },
        'Tampa': { path: '/usa/florida/tampa/restaurants' },
        'West Palm Beach': { path: '/usa/florida/west-palm-beach/restaurants' },
        'Winter Garden': { path: '/usa/florida/winter-garden/restaurants' },
        'Winter Park': { path: '/usa/florida/winter-park/restaurants' },
      },
      'Georgia': {
        'Atlanta': { path: '/usa/georgia/atlanta/restaurants' },
        'Avondale Estates': { path: '/usa/georgia/avondale-estates/restaurants' },
        'Chamblee': { path: '/usa/georgia/chamblee/restaurants' },
        'Decatur': { path: '/usa/georgia/decatur/restaurants' },
        'Johns Creek': { path: '/usa/georgia/johns-creek/restaurants' },
        'Marietta': { path: '/usa/georgia/marietta/restaurants' },
        'Roswell': { path: '/usa/georgia/roswell/restaurants' },
      },
      'Hawaii': {},
      'Idaho': {},
      'Illinois': {
        'Chicago': { path: '/usa/illinois/chicago/restaurants' },
      },
      'Indiana': {},
      'Iowa': {},
      'Kansas': {},
      'Kentucky': {},
      'Louisiana': {},
      'Maine': {},
      'Maryland': {},
      'Massachusetts': {},
      'Michigan': {},
      'Minnesota': {
        'Duluth': { path: '/usa/minnesota/duluth/restaurants' },
      },
      'Mississippi': {},
      'Missouri': {},
      'Montana': {},
      'Nebraska': {},
      'Nevada': {},
      'New Hampshire': {},
      'New Jersey': {},
      'New Mexico': {},
      'New York': {
        'New York City (Midtown/Manhattan)': { path: '/usa/newyork/newyorkcity/restaurants' },
        'Albany': { path: '/usa/newyork/albany/restaurants' },
        'Ardsley': { path: '/usa/newyork/ardsley/restaurants' },
        'The Bronx': { path: '/usa/newyork/bronx/restaurants' },
        'Bronxville': { path: '/usa/newyork/bronxville/restaurants' },
        'Brooklyn': { path: '/usa/newyork/brooklyn/restaurants' },
        'Dobbs Ferry': { path: '/usa/newyork/dobbs-ferry/restaurants' },
        'Eastchester': { path: '/usa/newyork/eastchester/restaurants' },
        'Elmsford': { path: '/usa/newyork/elmsford/restaurants' },
        'Hartsdale': { path: '/usa/newyork/hartsdale/restaurants' },
        'Hastings-on-Hudson': { path: '/usa/newyork/hastings-on-hudson/restaurants' },
        'Irvington': { path: '/usa/newyork/irvington/restaurants' },
        'Mamaroneck': { path: '/usa/newyork/mamaroneck/restaurants' },
        'Mount Kisco': { path: '/usa/newyork/mount-kisco/restaurants' },
        'New Rochelle': { path: '/usa/newyork/new-rochelle/restaurants' },
        'New York City': { path: '/usa/newyork/new-york/restaurants' },
        'North Salem': { path: '/usa/newyork/north-salem/restaurants' },
        'Peekskill': { path: '/usa/newyork/peekskill/restaurants' },
        'Pleasantville': { path: '/usa/newyork/pleasantville/restaurants' },
        'Pound Ridge': { path: '/usa/newyork/pound-ridge/restaurants' },
        'Queens': { path: '/usa/newyork/queens/restaurants' },
        'Rye': { path: '/usa/newyork/rye/restaurants' },
        'Scarsdale': { path: '/usa/newyork/scarsdale/restaurants' },
        'Staten Island': { path: '/usa/newyork/staten-island/restaurants' },
        'Tarrytown': { path: '/usa/newyork/tarrytown/restaurants' },
        'West Harrison': { path: '/usa/newyork/west-harrison/restaurants' },
        'White Plains': { path: '/usa/newyork/white-plains/restaurants' },
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
      'Texas': {
        'Arlington': { path: '/usa/texas/arlington/restaurants' },
        'Austin': { path: '/usa/texas/austin/restaurants' },
        'Bellaire': { path: '/usa/texas/bellaire/restaurants' },
        'Dallas': { path: '/usa/texas/dallas/restaurants' },
        'Fort Worth': { path: '/usa/texas/fort-worth/restaurants' },
        'Houston': { path: '/usa/texas/houston/restaurants' },
        'Lockhart': { path: '/usa/texas/lockhart/restaurants' },
        'McKinney': { path: '/usa/texas/mckinney/restaurants' },
        'Pearland': { path: '/usa/texas/pearland/restaurants' },
        'San Antonio': { path: '/usa/texas/san-antonio/restaurants' },
        'Seguin': { path: '/usa/texas/seguin/restaurants' },
        'Spring': { path: '/usa/texas/spring/restaurants' },
        'Tomball': { path: '/usa/texas/tomball/restaurants' },
      },
      'Utah': {},
      'Vermont': {},
      'Virginia': {
        'Northern Virginia': { path: '/usa/virginia/nova/restaurants' },
        'Washington (Little Washington)': { path: '/usa/virginia/washington/restaurants' },
      },
      'Washington': {},
      'Washington, D.C.': {
        'Washington, D.C.': { path: '/usa/dc/restaurants' },
        'Washington, D.C. (Metro)': { path: '/usa/dc/washington/restaurants' },
      },
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
      navigate(path);
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
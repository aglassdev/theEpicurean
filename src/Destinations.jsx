import React, { useEffect } from 'react';
import InteractiveMap from './InteractiveMap';

const Destinations = () => {
  // Set document title
  useEffect(() => {
    document.title = "Destinations";
  }, []);

  // Destinations organized by country and states/cities
  const destinationsByCountry = {
    'United States': {
      'Alabama': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville'],
      'Alaska': ['Anchorage', 'Fairbanks', 'Juneau'],
      'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Chandler'],
      'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'],
      'Colorado': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'],
      'Connecticut': ['Hartford', 'New Haven', 'Stamford', 'Waterbury'],
      'Delaware': ['Wilmington', 'Dover', 'Newark'],
      'Florida': ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'Fort Lauderdale'],
      'Georgia': ['Atlanta', 'Augusta', 'Columbus', 'Savannah'],
      'Hawaii': ['Honolulu', 'Pearl City', 'Hilo', 'Kailua'],
      'Illinois': ['Chicago', 'Aurora', 'Peoria', 'Rockford'],
      'Indiana': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'],
      'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City'],
      'Kansas': ['Wichita', 'Overland Park', 'Kansas City', 'Topeka'],
      'Kentucky': ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro'],
      'Louisiana': ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'],
      'Maine': ['Portland', 'Lewiston', 'Bangor', 'South Portland'],
      'Maryland': ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg'],
      'Massachusetts': ['Boston', 'Worcester', 'Springfield', 'Lowell'],
      'Michigan': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights'],
      'Minnesota': ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth'],
      'Mississippi': ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg'],
      'Missouri': ['Kansas City', 'Saint Louis', 'Springfield', 'Independence'],
      'Montana': ['Billings', 'Missoula', 'Great Falls', 'Bozeman'],
      'Nebraska': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island'],
      'Nevada': ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'],
      'New Hampshire': ['Manchester', 'Nashua', 'Concord', 'Dover'],
      'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth'],
      'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe'],
      'New York': ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse'],
      'North Carolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham'],
      'Ohio': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
      'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow'],
      'Oregon': ['Portland', 'Salem', 'Eugene', 'Gresham'],
      'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie'],
      'Rhode Island': ['Providence', 'Cranston', 'Warwick', 'Pawtucket'],
      'South Carolina': ['Columbia', 'Charleston', 'North Charleston', 'Mount Pleasant'],
      'Tennessee': ['Memphis', 'Nashville', 'Knoxville', 'Chattanooga'],
      'Texas': ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth'],
      'Utah': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan'],
      'Vermont': ['Burlington', 'Essex', 'South Burlington', 'Colchester'],
      'Virginia': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond'],
      'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'],
      'West Virginia': ['Charleston', 'Huntington', 'Parkersburg', 'Morgantown'],
      'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha'],
      'Wyoming': ['Cheyenne', 'Casper', 'Laramie', 'Gillette']
    },
    'France': ['Paris', 'Lyon', 'Marseille', 'Nice', 'Cannes'],
    'Japan': ['Tokyo', 'Osaka', 'Kyoto', 'Hiroshima', 'Yokohama'],
    'Italy': ['Rome', 'Milan', 'Florence', 'Venice', 'Naples'],
    'Germany': ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'],
    'Spain': ['Madrid', 'Barcelona', 'Seville', 'Valencia', 'Bilbao'],
    'United Kingdom': ['London', 'Edinburgh', 'Manchester', 'Liverpool', 'Birmingham'],
    'Switzerland': ['Zurich', 'Geneva', 'Basel', 'Bern'],
    'Belgium': ['Brussels', 'Antwerp', 'Ghent', 'Bruges'],
    'Netherlands': ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht'],
    'Austria': ['Vienna', 'Salzburg', 'Innsbruck', 'Graz'],
    'Denmark': ['Copenhagen', 'Aarhus', 'Odense'],
    'Sweden': ['Stockholm', 'Gothenberg', 'Malmö'],
    'Norway': ['Oslo', 'Bergen', 'Trondheim'],
    'South Korea': ['Seoul', 'Busan', 'Incheon', 'Daegu'],
    'Singapore': ['Singapore City'],
    'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket'],
    'China': ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Hong Kong'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal', 'Calgary'],
    'Portugal': ['Lisbon', 'Porto', 'Faro'],
    'Brazil': ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília'],
    'Argentina': ['Buenos Aires', 'Córdoba', 'Rosario'],
    'Mexico': ['Mexico City', 'Guadalajara', 'Monterrey', 'Cancún'],
    'India': ['Mumbai', 'Delhi', 'Bangalore', 'Chennai'],
    'UAE': ['Dubai', 'Abu Dhabi', 'Sharjah'],
    'Russia': ['Moscow', 'St. Petersburg', 'Sochi'],
    'Turkey': ['Istanbul', 'Ankara', 'Antalya'],
    'South Africa': ['Cape Town', 'Johannesburg', 'Durban'],
    'New Zealand': ['Auckland', 'Wellington', 'Christchurch']
  };

  // US States data for checking active status
  const usStates = {
    'Alabama': { active: true },
    'Alaska': { active: true },
    'Arizona': { active: true },
    'Arkansas': { active: false },
    'California': { active: true },
    'Colorado': { active: true },
    'Connecticut': { active: true },
    'Delaware': { active: true },
    'Florida': { active: true },
    'Georgia': { active: true },
    'Hawaii': { active: true },
    'Idaho': { active: false },
    'Illinois': { active: true },
    'Indiana': { active: true },
    'Iowa': { active: true },
    'Kansas': { active: true },
    'Kentucky': { active: true },
    'Louisiana': { active: true },
    'Maine': { active: true },
    'Maryland': { active: true },
    'Massachusetts': { active: true },
    'Michigan': { active: true },
    'Minnesota': { active: true },
    'Mississippi': { active: true },
    'Missouri': { active: true },
    'Montana': { active: true },
    'Nebraska': { active: true },
    'Nevada': { active: true },
    'New Hampshire': { active: true },
    'New Jersey': { active: true },
    'New Mexico': { active: true },
    'New York': { active: true },
    'North Carolina': { active: true },
    'North Dakota': { active: false },
    'Ohio': { active: true },
    'Oklahoma': { active: true },
    'Oregon': { active: true },
    'Pennsylvania': { active: true },
    'Rhode Island': { active: true },
    'South Carolina': { active: true },
    'South Dakota': { active: false },
    'Tennessee': { active: true },
    'Texas': { active: true },
    'Utah': { active: true },
    'Vermont': { active: true },
    'Virginia': { active: true },
    'Washington': { active: true },
    'West Virginia': { active: true },
    'Wisconsin': { active: true },
    'Wyoming': { active: true }
  };

  const handleCountryClick = (country) => {
    alert(`Opening ${country} restaurant guide...`);
  };

  const handleStateClick = (state) => {
    alert(`Opening ${state} restaurant guide...`);
  };

  const handleCityClick = (city) => {
    alert(`Opening ${city} restaurant guide...`);
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
                  marginBottom: '1rem',
                  cursor: 'pointer'
                }}
                onClick={() => handleCountryClick(country)}
                >
                  {country}
                </h3>
                
                {/* Handle US with states vs other countries with cities */}
                {country === 'United States' ? (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    {Object.entries(data).map(([state, cities]) => (
                      <div key={state}>
                        <h4 style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          color: usStates[state]?.active ? '#333' : '#999',
                          marginBottom: '0.5rem',
                          cursor: usStates[state]?.active ? 'pointer' : 'default'
                        }}
                        onClick={() => usStates[state]?.active && handleStateClick(state)}
                        >
                          {state} {!usStates[state]?.active && '(Coming Soon)'}
                        </h4>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                          marginLeft: '1rem'
                        }}>
                          {cities.map((city) => (
                            <span
                              key={city}
                              style={{
                                fontSize: '12px',
                                color: usStates[state]?.active ? '#666' : '#ccc',
                                cursor: usStates[state]?.active ? 'pointer' : 'default',
                                transition: 'color 0.2s ease'
                              }}
                              onMouseEnter={(e) => {
                                if (usStates[state]?.active) {
                                  e.target.style.color = '#d4a574';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (usStates[state]?.active) {
                                  e.target.style.color = '#666';
                                }
                              }}
                              onClick={() => usStates[state]?.active && handleCityClick(city)}
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Other countries with just cities
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}>
                    {data.map((city) => (
                      <span
                        key={city}
                        style={{
                          fontSize: '14px',
                          color: '#666',
                          cursor: 'pointer',
                          padding: '0.25rem 0',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#d4a574'}
                        onMouseLeave={(e) => e.target.style.color = '#666'}
                        onClick={() => handleCityClick(city)}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                )}
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
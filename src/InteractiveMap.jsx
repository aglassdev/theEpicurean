import React, { useState, useEffect } from 'react';

const InteractiveMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipContent, setTooltipContent] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [worldData, setWorldData] = useState(null);
  const [usStatesData, setUsStatesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomedCountry, setZoomedCountry] = useState(null);
  const [zoomedState, setZoomedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);
  const [mapScale, setMapScale] = useState(1);
  const [mapCenter, setMapCenter] = useState({ x: 0, y: 0 });
  const [showStateOutlines, setShowStateOutlines] = useState(false);
  const [showCities, setShowCities] = useState(false);

  // Load world map data and US states data
  useEffect(() => {
    const loadMapData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log('Fetching world and US states map data...');
        
        // Load world data
        const worldSources = [
          'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson',
          'https://cdn.jsdelivr.net/npm/world-atlas@1/world/50m.json',
          'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
        ];
        
        // Load US states data
        const usSources = [
          'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json',
          'https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_500k.json',
          'https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json'
        ];
        
        let worldData = null;
        let usStatesData = null;
        let lastError = null;
        
        // Try to load world data
        for (const source of worldSources) {
          try {
            console.log(`Trying world source: ${source}`);
            const response = await fetch(source);
            
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const jsonData = await response.json();
            
            if (jsonData.type === 'FeatureCollection') {
              worldData = jsonData;
              console.log('Loaded world GeoJSON format');
              break;
            } else if (jsonData.features) {
              worldData = { type: 'FeatureCollection', features: jsonData.features };
              console.log('Loaded world features array format');
              break;
            }
          } catch (err) {
            console.log(`Failed to load world data from ${source}:`, err.message);
            lastError = err;
            continue;
          }
        }
        
        // Try to load US states data
        for (const source of usSources) {
          try {
            console.log(`Trying US states source: ${source}`);
            const response = await fetch(source);
            
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const jsonData = await response.json();
            
            if (jsonData.type === 'FeatureCollection') {
              usStatesData = jsonData;
              console.log('Loaded US states GeoJSON format');
              break;
            } else if (jsonData.features) {
              usStatesData = { type: 'FeatureCollection', features: jsonData.features };
              console.log('Loaded US states features array format');
              break;
            }
          } catch (err) {
            console.log(`Failed to load US states data from ${source}:`, err.message);
            lastError = err;
            continue;
          }
        }
        
        if (!worldData) {
          throw lastError || new Error('All world data sources failed');
        }
        
        // US states data is optional - we can still show the world map without it
        if (!usStatesData) {
          console.warn('Could not load US states data, will use fallback dots for states');
        }
        
        setWorldData(worldData);
        setUsStatesData(usStatesData);
        console.log('Map data loaded successfully');
        
      } catch (err) {
        console.error('Failed to load map data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadMapData();
  }, []);

  // Active countries with pages
  const activeCountries = [
    'France', 'Japan', 'Italy', 'Germany', 'United States', 'Spain', 'United Kingdom',
    'Switzerland', 'Belgium', 'Netherlands', 'Austria', 'Denmark', 'Sweden', 'Norway',
    'South Korea', 'Singapore', 'Hong Kong', 'Taiwan', 'Thailand', 'China',
    'Australia', 'Canada', 'Portugal', 'Luxembourg', 'Finland', 'Ireland', 'Iceland',
    'Czech Republic', 'Poland', 'Hungary', 'Slovenia', 'Croatia', 'Greece', 'Turkey',
    'Russia', 'Brazil', 'Argentina', 'Chile', 'Mexico', 'Peru', 'Colombia',
    'South Africa', 'Morocco', 'Egypt', 'Israel', 'UAE', 'India', 'Malaysia',
    'Indonesia', 'New Zealand'
  ];

  // US States data (excluding Arkansas, Idaho, North Dakota, South Dakota as requested)
  const usStates = {
    'Alabama': { lat: 32.806671, lng: -86.79113, active: true },
    'Alaska': { lat: 61.370716, lng: -152.404419, active: true },
    'Arizona': { lat: 33.729759, lng: -111.431221, active: true },
    'Arkansas': { lat: 34.969704, lng: -92.373123, active: false },
    'California': { lat: 36.116203, lng: -119.681564, active: true },
    'Colorado': { lat: 39.059811, lng: -105.311104, active: true },
    'Connecticut': { lat: 41.597782, lng: -72.755371, active: true },
    'Delaware': { lat: 39.318523, lng: -75.507141, active: true },
    'Florida': { lat: 27.766279, lng: -81.686783, active: true },
    'Georgia': { lat: 33.040619, lng: -83.643074, active: true },
    'Hawaii': { lat: 21.094318, lng: -157.498337, active: true },
    'Idaho': { lat: 44.240459, lng: -114.478828, active: false },
    'Illinois': { lat: 40.349457, lng: -88.986137, active: true },
    'Indiana': { lat: 39.849426, lng: -86.258278, active: true },
    'Iowa': { lat: 42.011539, lng: -93.210526, active: true },
    'Kansas': { lat: 38.526600, lng: -96.726486, active: true },
    'Kentucky': { lat: 37.668140, lng: -84.670067, active: true },
    'Louisiana': { lat: 31.169546, lng: -91.867805, active: true },
    'Maine': { lat: 44.693947, lng: -69.381927, active: true },
    'Maryland': { lat: 39.063946, lng: -76.802101, active: true },
    'Massachusetts': { lat: 42.230171, lng: -71.530106, active: true },
    'Michigan': { lat: 43.326618, lng: -84.536095, active: true },
    'Minnesota': { lat: 45.694454, lng: -93.900192, active: true },
    'Mississippi': { lat: 32.741646, lng: -89.678696, active: true },
    'Missouri': { lat: 38.572954, lng: -92.189283, active: true },
    'Montana': { lat: 47.052952, lng: -109.633040, active: true },
    'Nebraska': { lat: 41.12537, lng: -98.268082, active: true },
    'Nevada': { lat: 38.313515, lng: -117.055374, active: true },
    'New Hampshire': { lat: 43.452492, lng: -71.563896, active: true },
    'New Jersey': { lat: 40.298904, lng: -74.521011, active: true },
    'New Mexico': { lat: 34.840515, lng: -106.248482, active: true },
    'New York': { lat: 42.165726, lng: -74.948051, active: true },
    'North Carolina': { lat: 35.630066, lng: -79.806419, active: true },
    'North Dakota': { lat: 47.528912, lng: -99.784012, active: false },
    'Ohio': { lat: 40.388783, lng: -82.764915, active: true },
    'Oklahoma': { lat: 35.565342, lng: -96.928917, active: true },
    'Oregon': { lat: 44.931109, lng: -123.029159, active: true },
    'Pennsylvania': { lat: 40.590752, lng: -77.209755, active: true },
    'Rhode Island': { lat: 41.680893, lng: -71.51178, active: true },
    'South Carolina': { lat: 33.856892, lng: -80.945007, active: true },
    'South Dakota': { lat: 44.299782, lng: -99.438828, active: false },
    'Tennessee': { lat: 35.747845, lng: -86.692345, active: true },
    'Texas': { lat: 31.054487, lng: -97.563461, active: true },
    'Utah': { lat: 40.150032, lng: -111.862434, active: true },
    'Vermont': { lat: 44.045876, lng: -72.710686, active: true },
    'Virginia': { lat: 37.769337, lng: -78.169968, active: true },
    'Washington': { lat: 47.400902, lng: -121.490494, active: true },
    'West Virginia': { lat: 38.491226, lng: -80.954453, active: true },
    'Wisconsin': { lat: 44.268543, lng: -89.616508, active: true },
    'Wyoming': { lat: 42.755966, lng: -107.302490, active: true }
  };

  // Virginia cities data
  const virginiaCities = [
    { name: 'Richmond', lat: 37.5407, lng: -77.4360, restaurants: 45 },
    { name: 'Washington', lat: 38.7129, lng: -78.1594, restaurants: 25 }, // Little Washington, VA
    { name: 'NOVA', lat: 38.7173, lng: -77.1968, restaurants: 65 } // Moved to Fairfax, VA area
  ];

  // D.C. data (separate since it's not a state)
  const dcData = { lat: 38.9072, lng: -77.0369, restaurants: 85 };

  const isCountryActive = (countryName) => {
    if (!countryName) return false;
    
    // Direct name match
    if (activeCountries.includes(countryName)) return true;
    
    // Check variations
    const variations = {
      'United States of America': 'United States',
      'USA': 'United States',
      'United Kingdom': 'United Kingdom',
      'UK': 'United Kingdom',
      'South Korea': 'South Korea',
      'Korea': 'South Korea',
      'Republic of Korea': 'South Korea',
      'South Africa': 'South Africa',
      'New Zealand': 'New Zealand',
      'Czech Republic': 'Czech Republic',
      'Czechia': 'Czech Republic',
      'UAE': 'UAE',
      'United Arab Emirates': 'UAE'
    };
    
    return activeCountries.includes(variations[countryName]) || false;
  };

  // Helper function to normalize state names from different data sources
  const normalizeStateName = (stateName) => {
    if (!stateName) return null;
    
    const stateNameMappings = {
      'District of Columbia': 'Washington D.C.',
      'D.C.': 'Washington D.C.',
      'DC': 'Washington D.C.',
    };
    
    return stateNameMappings[stateName] || stateName;
  };

  const handleCountryClick = (countryName) => {
    if (isCountryActive(countryName)) {
      if (countryName === 'United States') {
        setZoomedCountry(countryName);
        setMapScale(3);
        const usaCenterX = ((-95 + 180) * (1600 / 360));
        const usaCenterY = ((90 - 39) * (800 / 180));
        const offsetX = 800 - usaCenterX;
        const offsetY = 400 - usaCenterY;
        setMapCenter({ x: offsetX, y: offsetY });
        
        setTimeout(() => {
          setShowStateOutlines(true);
        }, 800);
      } else {
        alert(`Opening ${countryName} restaurant guide...`);
      }
    }
  };

  const handleStateClick = (stateName) => {
    if (usStates[stateName]?.active) {
      if (stateName === 'Virginia') {
        setZoomedState(stateName);
        setMapScale(50);
        const state = usStates[stateName];
        const stateX = ((state.lng + 180) * (1600 / 360));
        const stateY = ((90 - state.lat) * (800 / 180));
        const offsetX = 800 - stateX;
        const offsetY = 400 - stateY;
        setMapCenter({ x: offsetX, y: offsetY });
        
        // Show cities after zoom animation completes
        setTimeout(() => {
          setShowCities(true);
        }, 800);
      } else {
        alert(`Opening ${stateName} restaurant guide...`);
      }
    }
  };

  const handleCityClick = (cityName) => {
    const cityRoutes = {
      'Richmond': '/usa/virginia/richmond/restaurants',
      'Washington': '/usa/virginia/washington/restaurants', 
      'NOVA': '/usa/virginia/nova/restaurants'
    };
    
    const route = cityRoutes[cityName];
    if (route) {
      window.location.href = route;
    } else {
      alert(`Opening ${cityName} restaurant guide...`);
    }
  };

  const handleDCClick = () => {
    window.location.href = '/usa/dc/restaurants';
  };

  const handleBackToWorld = () => {
    setZoomedCountry(null);
    setZoomedState(null);
    setHoveredCity(null);
    setHoveredState(null);
    setShowStateOutlines(false);
    setShowCities(false);
    setMapScale(1);
    setMapCenter({ x: 0, y: 0 });
  };

  const handleBackToCountry = () => {
    setZoomedState(null);
    setHoveredCity(null);
    setShowCities(false);
    setMapScale(3);
    const usaCenterX = ((-95 + 180) * (1600 / 360));
    const usaCenterY = ((90 - 39) * (800 / 180));
    const offsetX = 800 - usaCenterX;
    const offsetY = 400 - usaCenterY;
    setMapCenter({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Simple projection function
  const projectPoint = (longitude, latitude) => {
    const x = (longitude + 180) * (1600 / 360);
    const y = (90 - latitude) * (800 / 180);
    return [x, y];
  };

  // Convert GeoJSON coordinates to SVG path
  const geoJSONToPath = (coordinates, type) => {
    let pathData = '';
    
    if (type === 'Polygon') {
      coordinates.forEach((ring, ringIndex) => {
        ring.forEach((coord, coordIndex) => {
          const [x, y] = projectPoint(coord[0], coord[1]);
          if (coordIndex === 0) {
            pathData += `M ${x} ${y} `;
          } else {
            pathData += `L ${x} ${y} `;
          }
        });
        pathData += 'Z ';
      });
    } else if (type === 'MultiPolygon') {
      coordinates.forEach(polygon => {
        polygon.forEach((ring, ringIndex) => {
          ring.forEach((coord, coordIndex) => {
            const [x, y] = projectPoint(coord[0], coord[1]);
            if (coordIndex === 0) {
              pathData += `M ${x} ${y} `;
            } else {
              pathData += `L ${x} ${y} `;
            }
          });
          pathData += 'Z ';
        });
      });
    }
    
    return pathData;
  };

  const renderMap = () => {
    const transform = `scale(${mapScale}) translate(${mapCenter.x}px, ${mapCenter.y}px)`;
    
    return (
      <div style={{ 
        width: '100%', 
        height: '60vh',
        minHeight: '500px',
        backgroundColor: '#ffffff',
        border: '1px solid #e9ecef',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative',
        margin: '0 auto'
      }}>
        <svg width="100%" height="100%" viewBox="0 0 1600 800" style={{ display: 'block' }}>
          <rect width="1600" height="800" fill="#ffffff" />
          
          {/* Countries */}
          <g style={{ transform, transformOrigin: 'center', transition: 'transform 0.8s ease-in-out' }}>
            {worldData && worldData.features.map((feature, i) => {
              const countryName = feature.properties?.NAME || 
                                feature.properties?.NAME_EN || 
                                feature.properties?.name || 
                                feature.properties?.ADMIN ||
                                feature.properties?.NAME_LONG ||
                                feature.properties?.COUNTRY;
              
              const variations = {
                'United States of America': 'United States',
                'USA': 'United States'
              };
              const normalizedCountryName = variations[countryName] || countryName;
              
              const isActive = isCountryActive(normalizedCountryName);
              const isHovered = hoveredCountry === normalizedCountryName;
              
              const pathData = geoJSONToPath(
                feature.geometry.coordinates, 
                feature.geometry.type
              );
              
              if (!pathData) return null;
              
              return (
                <path
                  key={`country-${i}`}
                  d={pathData}
                  fill={isActive ? '#d4a574' : '#f8f9fa'}
                  stroke="#333333"
                  strokeWidth={0.3 / mapScale}
                  style={{
                    cursor: isActive ? 'pointer' : 'default',
                    opacity: isHovered ? 0.8 : 1,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={() => {
                    if (normalizedCountryName && !zoomedCountry) {
                      setHoveredCountry(normalizedCountryName);
                      setTooltipContent(normalizedCountryName);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!zoomedCountry) {
                      setHoveredCountry(null);
                      setTooltipContent('');
                    }
                  }}
                  onClick={() => {
                    if (normalizedCountryName && !zoomedCountry) {
                      handleCountryClick(normalizedCountryName);
                    }
                  }}
                />
              );
            })}
          </g>

          {/* US States when zoomed into USA */}
          {zoomedCountry === 'United States' && showStateOutlines && (
            <g style={{ transform, transformOrigin: 'center', transition: 'transform 0.8s ease-in-out' }}>
              {usStatesData ? (
                usStatesData.features.map((feature, i) => {
                  const rawStateName = feature.properties?.NAME || 
                                      feature.properties?.name || 
                                      feature.properties?.NAME_1 ||
                                      feature.properties?.STATE_NAME ||
                                      feature.properties?.STUSPS;
                  
                  const stateName = normalizeStateName(rawStateName);
                  const stateData = usStates[stateName];
                  if (!stateData) return null;
                  
                  const isHovered = hoveredState === stateName;
                  
                  const pathData = geoJSONToPath(
                    feature.geometry.coordinates, 
                    feature.geometry.type
                  );
                  
                  if (!pathData) return null;
                  
                  return (
                    <path
                      key={`state-${i}`}
                      d={pathData}
                      fill={stateData.active ? '#d4a574' : '#f8f9fa'}
                      stroke="#333333"
                      strokeWidth={0.5 / mapScale}
                      style={{
                        cursor: stateData.active ? 'pointer' : 'default',
                        opacity: isHovered ? 0.8 : 1,
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={() => {
                        if (!zoomedState) {
                          setHoveredState(stateName);
                          setTooltipContent(stateName);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!zoomedState) {
                          setHoveredState(null);
                          setTooltipContent('');
                        }
                      }}
                      onClick={() => !zoomedState && handleStateClick(stateName)}
                    />
                  );
                })
              ) : (
                Object.entries(usStates).map(([stateName, stateData]) => {
                  const [x, y] = projectPoint(stateData.lng, stateData.lat);
                  const isHovered = hoveredState === stateName;
                  
                  return (
                    <circle
                      key={stateName}
                      cx={x}
                      cy={y}
                      r={8 / mapScale}
                      fill={stateData.active ? '#d4a574' : '#cccccc'}
                      stroke="#333333"
                      strokeWidth={1 / mapScale}
                      style={{
                        cursor: stateData.active ? 'pointer' : 'default',
                        opacity: isHovered ? 0.8 : 1,
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={() => {
                        setHoveredState(stateName);
                        setTooltipContent(stateName);
                      }}
                      onMouseLeave={() => {
                        setHoveredState(null);
                        setTooltipContent('');
                      }}
                      onClick={() => handleStateClick(stateName)}
                    />
                  );
                })
              )}
              
              {/* D.C. callout - only show when not zoomed into a state */}
              {!zoomedState && (
                <g>
                  <circle
                    cx={projectPoint(dcData.lng, dcData.lat)[0]}
                    cy={projectPoint(dcData.lng, dcData.lat)[1]}
                    r={3 / mapScale}
                    fill="#000000"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => {
                      setTooltipContent(`Washington D.C. - ${dcData.restaurants} restaurants`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    onClick={handleDCClick}
                  />
                  
                  <line
                    x1={projectPoint(dcData.lng, dcData.lat)[0]}
                    y1={projectPoint(dcData.lng, dcData.lat)[1]}
                    x2={projectPoint(dcData.lng + 8, dcData.lat - 2)[0]}
                    y2={projectPoint(dcData.lng + 8, dcData.lat - 2)[1]}
                    stroke="#333333"
                    strokeWidth={1 / mapScale}
                  />
                  
                  <text
                    x={projectPoint(dcData.lng + 8, dcData.lat - 2)[0]}
                    y={projectPoint(dcData.lng + 8, dcData.lat - 2)[1] + 15 / mapScale}
                    textAnchor="middle"
                    fontSize={12 / mapScale}
                    fontWeight="600"
                    fill="#333"
                    style={{
                      cursor: 'pointer',
                      textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                    }}
                    onClick={handleDCClick}
                  >
                    Washington D.C.
                  </text>
                </g>
              )}
            </g>
          )}

          {/* Virginia cities when zoomed into Virginia */}
          {zoomedState === 'Virginia' && showCities && (
            <g style={{ transform, transformOrigin: 'center' }}>
              {virginiaCities.map((city, i) => {
                const [x, y] = projectPoint(city.lng, city.lat);
                const isHovered = hoveredCity === city.name;
                const iconSize = isHovered ? 32 / mapScale : 28 / mapScale;
                
                return (
                  <g key={city.name}>
                    {/* Map icon */}
                    <image
                      x={x - iconSize / 2}
                      y={y - iconSize}
                      width={iconSize}
                      height={iconSize}
                      href="/images/mapicon.png"
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={() => {
                        setHoveredCity(city.name);
                        setTooltipContent(city.name);
                      }}
                      onMouseLeave={() => {
                        setHoveredCity(null);
                        setTooltipContent('');
                      }}
                      onClick={() => handleCityClick(city.name)}
                    />
                    {/* City label */}
                    <text
                      x={x}
                      y={y + 24 / mapScale}
                      textAnchor="middle"
                      fontSize={18 / mapScale}
                      fontWeight="700"
                      fill="#333333"
                      style={{
                        pointerEvents: 'none'
                      }}
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}
            </g>
          )}

          {/* Navigation buttons */}
          {(zoomedCountry || zoomedState) && (
            <g>
              {zoomedState && (
                <g transform="translate(50, 50)">
                  <rect
                    width="140"
                    height="45"
                    fill="#d4a574"
                    stroke="#333"
                    strokeWidth={1}
                    rx="8"
                    style={{ cursor: 'pointer' }}
                    onClick={handleBackToCountry}
                  />
                  <text
                    x="70"
                    y="28"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="600"
                    fill="white"
                    style={{ cursor: 'pointer', pointerEvents: 'none' }}
                  >
                    ← Back to USA
                  </text>
                </g>
              )}
              <g transform={`translate(50, ${zoomedState ? 110 : 50})`}>
                <rect
                  width="140"
                  height="45"
                  fill="#666"
                  stroke="#333"
                  strokeWidth={1}
                  rx="8"
                  style={{ cursor: 'pointer' }}
                  onClick={handleBackToWorld}
                />
                <text
                  x="70"
                  y="28"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="600"
                  fill="white"
                  style={{ cursor: 'pointer', pointerEvents: 'none' }}
                >
                  ← Back to World
                </text>
              </g>
            </g>
          )}
        </svg>
      </div>
    );
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '4rem',
      position: 'relative'
    }} onMouseMove={handleMouseMove}>
      {loading && (
        <div style={{
          width: '100%',
          height: '60vh',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          flexDirection: 'column',
          border: '1px solid #e9ecef',
          borderRadius: '8px'
        }}>
          <div style={{
            width: '150px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #d4a574',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '1rem'
          }} />
          <h3 style={{ margin: '0 0 1rem 0' }}>Loading World Map...</h3>
          <p style={{ margin: 0, textAlign: 'center', maxWidth: '300px' }}>
            Fetching geographical data from remote servers...
          </p>
        </div>
      )}
      
      {error && (
        <div style={{
          width: '100%',
          height: '60vh',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          flexDirection: 'column',
          border: '1px solid #e9ecef',
          borderRadius: '8px'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '400px' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#dc3545' }}>Map Loading Failed</h3>
            <p style={{ margin: '0 0 1rem 0' }}>
              Unable to load map data: {error}
            </p>
            <button 
              onClick={() => window.location.reload()}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#d4a574',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {worldData && !loading && !error && renderMap()}

      {/* Tooltip */}
      {tooltipContent && (
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x + 10,
            top: mousePosition.y - 30,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '500',
            pointerEvents: 'none',
            zIndex: 1000,
            whiteSpace: 'nowrap'
          }}
        >
          {tooltipContent}
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default InteractiveMap;
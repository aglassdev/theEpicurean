import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Active US states that have restaurant pages
const ACTIVE_STATES = new Set([
  'California', 'New York', 'Florida', 'Illinois', 'Texas',
  'Georgia', 'Colorado', 'Virginia', 'District of Columbia', 'Minnesota'
]);

// Map GeoJSON state names to our routing keys
const STATE_NAME_TO_KEY = {
  'California': 'california',
  'New York': 'new-york',
  'Florida': 'florida',
  'Illinois': 'illinois',
  'Texas': 'texas',
  'Georgia': 'georgia',
  'Colorado': 'colorado',
  'Virginia': 'virginia',
  'District of Columbia': 'dc',
  'Minnesota': 'minnesota',
};

// City markers per state with lat/lng and routing paths
const US_STATE_CITIES = {
  'California': [
    { name: 'Los Angeles', lat: 34.0522, lng: -118.2437, path: '/usa/california/los-angeles/restaurants', count: 89 },
    { name: 'San Francisco', lat: 37.7749, lng: -122.4194, path: '/usa/california/san-francisco/restaurants', count: 71 },
    { name: 'Napa Valley', lat: 38.2975, lng: -122.2869, path: '/usa/california/napa-valley/restaurants', count: 10 },
    { name: 'San Diego', lat: 32.7157, lng: -117.1611, path: '/usa/california/san-diego/restaurants', count: 18 },
    { name: 'Pasadena', lat: 34.1478, lng: -118.1445, path: '/usa/california/pasadena/restaurants', count: 8 },
    { name: 'Berkeley', lat: 37.8716, lng: -122.2727, path: '/usa/california/berkeley/restaurants', count: 10 },
    { name: 'Carmel-by-the-Sea', lat: 36.5552, lng: -121.9233, path: '/usa/california/carmel-by-the-sea/restaurants', count: 8 },
    { name: 'Yountville', lat: 38.4027, lng: -122.3608, path: '/usa/california/yountville/restaurants', count: 5 },
    { name: 'Santa Barbara', lat: 34.4208, lng: -119.6982, path: '/usa/california/santa-barbara/restaurants', count: 12 },
    { name: 'Beverly Hills', lat: 34.0736, lng: -118.4004, path: '/usa/california/beverly-hills/restaurants', count: 8 },
  ],
  'New York': [
    { name: 'New York City', lat: 40.7128, lng: -74.006, path: '/usa/newyork/new-york/restaurants', count: 264 },
    { name: 'Brooklyn', lat: 40.6782, lng: -73.9442, path: '/usa/newyork/brooklyn/restaurants', count: 82 },
    { name: 'Queens', lat: 40.7282, lng: -73.7949, path: '/usa/newyork/queens/restaurants', count: 18 },
    { name: 'The Bronx', lat: 40.8448, lng: -73.8648, path: '/usa/newyork/bronx/restaurants', count: 6 },
    { name: 'Tarrytown', lat: 41.0626, lng: -73.8585, path: '/usa/newyork/tarrytown/restaurants', count: 3 },
  ],
  'Florida': [
    { name: 'Miami', lat: 25.7617, lng: -80.1918, path: '/usa/florida/miami/restaurants', count: 44 },
    { name: 'Miami Beach', lat: 25.7907, lng: -80.13, path: '/usa/florida/miami-beach/restaurants', count: 12 },
    { name: 'Fort Lauderdale', lat: 26.1224, lng: -80.1373, path: '/usa/florida/fort-lauderdale/restaurants', count: 5 },
    { name: 'Orlando', lat: 28.5383, lng: -81.3792, path: '/usa/florida/orlando/restaurants', count: 52 },
    { name: 'Tampa', lat: 27.9506, lng: -82.4572, path: '/usa/florida/tampa/restaurants', count: 29 },
    { name: 'Winter Park', lat: 28.5997, lng: -81.3392, path: '/usa/florida/winter-park/restaurants', count: 7 },
  ],
  'Illinois': [
    { name: 'Chicago', lat: 41.8781, lng: -87.6298, path: '/usa/illinois/chicago/restaurants', count: 116 },
  ],
  'Texas': [
    { name: 'Houston', lat: 29.7604, lng: -95.3698, path: '/usa/texas/houston/restaurants', count: 35 },
    { name: 'Dallas', lat: 32.7767, lng: -96.797, path: '/usa/texas/dallas/restaurants', count: 28 },
    { name: 'Austin', lat: 30.2672, lng: -97.7431, path: '/usa/texas/austin/restaurants', count: 22 },
    { name: 'Fort Worth', lat: 32.7555, lng: -97.3308, path: '/usa/texas/fort-worth/restaurants', count: 8 },
    { name: 'San Antonio', lat: 29.4241, lng: -98.4936, path: '/usa/texas/san-antonio/restaurants', count: 6 },
  ],
  'Georgia': [
    { name: 'Atlanta', lat: 33.749, lng: -84.388, path: '/usa/georgia/atlanta/restaurants', count: 42 },
    { name: 'Savannah', lat: 32.0809, lng: -81.0912, path: '/usa/georgia/savannah/restaurants', count: 8 },
  ],
  'Colorado': [
    { name: 'Denver', lat: 39.7392, lng: -104.9903, path: '/usa/colorado/denver/restaurants', count: 22 },
    { name: 'Boulder', lat: 40.015, lng: -105.2705, path: '/usa/colorado/boulder/restaurants', count: 8 },
    { name: 'Aspen', lat: 39.1911, lng: -106.8175, path: '/usa/colorado/aspen/restaurants', count: 6 },
    { name: 'Vail', lat: 39.6433, lng: -106.3781, path: '/usa/colorado/vail/restaurants', count: 5 },
  ],
  'Virginia': [
    { name: 'Northern Virginia', lat: 38.8816, lng: -77.1114, path: '/usa/virginia/nova/restaurants', count: 36 },
    { name: 'Washington Metro', lat: 38.9072, lng: -77.0369, path: '/usa/dc/washington/restaurants', count: 87 },
  ],
  'District of Columbia': [
    { name: 'Washington, D.C.', lat: 38.9072, lng: -77.0369, path: '/usa/dc/restaurants', count: 23 },
  ],
  'Minnesota': [
    { name: 'Duluth', lat: 46.7867, lng: -92.1005, path: '/usa/minnesota/duluth/restaurants', count: 2 },
  ],
};

// Approximate center points for each US state (for zoom targeting)
const STATE_CENTERS = {
  'Alabama': { lat: 32.806671, lng: -86.791130 },
  'Alaska': { lat: 61.370716, lng: -152.404419 },
  'Arizona': { lat: 33.729759, lng: -111.431221 },
  'Arkansas': { lat: 34.969704, lng: -92.373123 },
  'California': { lat: 36.116203, lng: -119.681564 },
  'Colorado': { lat: 39.059811, lng: -105.311104 },
  'Connecticut': { lat: 41.597782, lng: -72.755371 },
  'Delaware': { lat: 39.318523, lng: -75.507141 },
  'District of Columbia': { lat: 38.9072, lng: -77.0369 },
  'Florida': { lat: 27.766279, lng: -81.686783 },
  'Georgia': { lat: 33.040619, lng: -83.643074 },
  'Hawaii': { lat: 21.094318, lng: -157.498337 },
  'Idaho': { lat: 44.240459, lng: -114.478828 },
  'Illinois': { lat: 40.349457, lng: -88.986137 },
  'Indiana': { lat: 39.849426, lng: -86.258278 },
  'Iowa': { lat: 42.011539, lng: -93.210526 },
  'Kansas': { lat: 38.5266, lng: -96.726486 },
  'Kentucky': { lat: 37.66814, lng: -84.670067 },
  'Louisiana': { lat: 31.169960, lng: -91.867805 },
  'Maine': { lat: 44.693947, lng: -69.381927 },
  'Maryland': { lat: 39.063946, lng: -76.802101 },
  'Massachusetts': { lat: 42.230171, lng: -71.530106 },
  'Michigan': { lat: 43.326618, lng: -84.536095 },
  'Minnesota': { lat: 45.694454, lng: -93.900192 },
  'Mississippi': { lat: 32.741646, lng: -89.678696 },
  'Missouri': { lat: 38.456085, lng: -92.288368 },
  'Montana': { lat: 46.921925, lng: -110.454353 },
  'Nebraska': { lat: 41.12537, lng: -98.268082 },
  'Nevada': { lat: 38.313515, lng: -117.055374 },
  'New Hampshire': { lat: 43.452492, lng: -71.563896 },
  'New Jersey': { lat: 40.298904, lng: -74.521011 },
  'New Mexico': { lat: 34.840515, lng: -106.248482 },
  'New York': { lat: 42.165726, lng: -74.948051 },
  'North Carolina': { lat: 35.630066, lng: -79.806419 },
  'North Dakota': { lat: 47.528912, lng: -99.784012 },
  'Ohio': { lat: 40.388783, lng: -82.764915 },
  'Oklahoma': { lat: 35.565342, lng: -96.928917 },
  'Oregon': { lat: 44.572021, lng: -122.070938 },
  'Pennsylvania': { lat: 40.590752, lng: -77.209755 },
  'Rhode Island': { lat: 41.680893, lng: -71.511780 },
  'South Carolina': { lat: 33.856892, lng: -80.945007 },
  'South Dakota': { lat: 44.299782, lng: -99.438828 },
  'Tennessee': { lat: 35.747845, lng: -86.692345 },
  'Texas': { lat: 31.054487, lng: -97.563461 },
  'Utah': { lat: 40.150032, lng: -111.862434 },
  'Vermont': { lat: 44.045876, lng: -72.710686 },
  'Virginia': { lat: 37.769337, lng: -78.169968 },
  'Washington': { lat: 47.400902, lng: -121.490494 },
  'West Virginia': { lat: 38.491226, lng: -80.954453 },
  'Wisconsin': { lat: 44.268543, lng: -89.616508 },
  'Wyoming': { lat: 42.755966, lng: -107.302490 },
};

// Project lat/lng to SVG coordinates for the US map
function projectToSVG(lat, lng, bounds, svgWidth, svgHeight) {
  if (!bounds) return { x: 0, y: 0 };
  const { minLng, maxLng, minLat, maxLat } = bounds;
  const x = ((lng - minLng) / (maxLng - minLng)) * svgWidth;
  const y = ((maxLat - lat) / (maxLat - minLat)) * svgHeight;
  return { x, y };
}

const InteractiveMap = () => {
  const navigate = useNavigate();
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
  const svgRef = useRef(null);

  const SVG_WIDTH = 960;
  const SVG_HEIGHT = 500;

  useEffect(() => {
    const loadMapData = async () => {
      setLoading(true);
      setError(null);
      try {
        const worldSources = [
          'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson',
          'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'
        ];
        const usSources = [
          'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json',
          'https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_500k.json',
        ];

        let worldData = null;
        let usStatesData = null;

        for (const source of worldSources) {
          try {
            const response = await fetch(source);
            if (response.ok) {
              const data = await response.json();
              if (data && (data.features || data.objects)) {
                worldData = data;
                break;
              }
            }
          } catch (e) { /* try next */ }
        }

        for (const source of usSources) {
          try {
            const response = await fetch(source);
            if (response.ok) {
              const data = await response.json();
              if (data && data.features) {
                usStatesData = data;
                break;
              }
            }
          } catch (e) { /* try next */ }
        }

        setWorldData(worldData);
        setUsStatesData(usStatesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadMapData();
  }, []);

  // Project GeoJSON coordinates to SVG
  const projectCoordinate = (coord, viewBox) => {
    const [lng, lat] = coord;
    const x = ((lng - viewBox.minLng) / (viewBox.maxLng - viewBox.minLng)) * SVG_WIDTH;
    const y = ((viewBox.maxLat - lat) / (viewBox.maxLat - viewBox.minLat)) * SVG_HEIGHT;
    return [x, y];
  };

  const coordsToPath = (coordinates, viewBox) => {
    const pathParts = [];
    for (const ring of coordinates) {
      const points = ring.map(c => projectCoordinate(c, viewBox));
      if (points.length > 0) {
        pathParts.push(`M ${points[0][0]} ${points[0][1]} ` +
          points.slice(1).map(p => `L ${p[0]} ${p[1]}`).join(' ') + ' Z');
      }
    }
    return pathParts.join(' ');
  };

  const featureToPath = (feature, viewBox) => {
    if (!feature?.geometry) return '';
    const { type, coordinates } = feature.geometry;
    if (type === 'Polygon') return coordsToPath(coordinates, viewBox);
    if (type === 'MultiPolygon') {
      return coordinates.map(poly => coordsToPath(poly, viewBox)).join(' ');
    }
    return '';
  };

  // Get name from feature properties
  const getStateName = (feature) => {
    return feature.properties?.NAME || feature.properties?.name ||
      feature.properties?.NAME_1 || feature.properties?.state || '';
  };

  const getCountryName = (feature) => {
    return feature.properties?.ADMIN || feature.properties?.name ||
      feature.properties?.NAME || feature.properties?.sovereignt || '';
  };

  // World map viewbox
  const worldViewBox = { minLng: -180, maxLng: 180, minLat: -85, maxLat: 85 };

  // USA viewbox (continental US)
  const usViewBox = { minLng: -125, maxLng: -66, minLat: 24, maxLat: 50 };

  // Get viewbox for a specific state
  const getStateViewBox = (stateName) => {
    const center = STATE_CENTERS[stateName];
    if (!center) return usViewBox;
    const span = 4.5;
    // Special cases for larger states
    if (stateName === 'California') return { minLng: -124.5, maxLng: -114, minLat: 32.3, maxLat: 42.2 };
    if (stateName === 'Texas') return { minLng: -107, maxLng: -93, minLat: 25.5, maxLat: 36.8 };
    if (stateName === 'New York') return { minLng: -80, maxLng: -71.5, minLat: 40.3, maxLat: 45.2 };
    if (stateName === 'Florida') return { minLng: -87.8, maxLng: -79.7, minLat: 24.3, maxLat: 31.2 };
    if (stateName === 'Colorado') return { minLng: -109.2, maxLng: -102, minLat: 36.8, maxLat: 41.2 };
    if (stateName === 'Georgia') return { minLng: -85.8, maxLng: -80.5, minLat: 30.2, maxLat: 35.1 };
    if (stateName === 'Illinois') return { minLng: -91.8, maxLng: -87, minLat: 36.8, maxLat: 42.6 };
    if (stateName === 'Minnesota') return { minLng: -97.5, maxLng: -89.4, minLat: 43.3, maxLat: 49.5 };
    if (stateName === 'Virginia') return { minLng: -83.8, maxLng: -75.1, minLat: 36.4, maxLat: 39.5 };
    if (stateName === 'District of Columbia') return { minLng: -77.2, maxLng: -76.8, minLat: 38.78, maxLat: 39.0 };
    return {
      minLng: center.lng - span,
      maxLng: center.lng + span,
      minLat: center.lat - span * 0.6,
      maxLat: center.lat + span * 0.6,
    };
  };

  const currentViewBox = zoomedState
    ? getStateViewBox(zoomedState)
    : zoomedCountry === 'United States of America' || zoomedCountry === 'United States'
    ? usViewBox
    : worldViewBox;

  const handleCountryClick = (countryName) => {
    if (countryName === 'United States of America' || countryName === 'United States') {
      setZoomedCountry(countryName);
      setZoomedState(null);
    }
  };

  const handleStateClick = (stateName) => {
    if (ACTIVE_STATES.has(stateName)) {
      setZoomedState(stateName);
    }
  };

  const handleCityClick = (city) => {
    navigate(city.path);
  };

  const handleBackToWorld = () => {
    setZoomedCountry(null);
    setZoomedState(null);
    setHoveredState(null);
  };

  const handleBackToUSA = () => {
    setZoomedState(null);
    setHoveredState(null);
  };

  // Render world map
  const renderWorldMap = () => {
    if (!worldData?.features) return null;
    return worldData.features.map((feature, i) => {
      const name = getCountryName(feature);
      const isUSA = name === 'United States of America' || name === 'United States';
      const isHovered = hoveredCountry === name;
      const d = featureToPath(feature, worldViewBox);
      if (!d) return null;
      return (
        <path
          key={i}
          d={d}
          fill={isUSA ? (isHovered ? '#c9a96e' : '#b8935a') : (isHovered ? '#d4c5b0' : '#e8e0d5')}
          stroke="#fff"
          strokeWidth="0.5"
          style={{ cursor: isUSA ? 'pointer' : 'default', transition: 'fill 0.2s' }}
          onMouseEnter={(e) => {
            setHoveredCountry(name);
            setTooltipContent(isUSA ? 'United States — Click to explore' : name);
            setMousePosition({ x: e.clientX, y: e.clientY });
          }}
          onMouseLeave={() => { setHoveredCountry(null); setTooltipContent(''); }}
          onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          onClick={() => handleCountryClick(name)}
        />
      );
    });
  };

  // Render US states map
  const renderUSMap = () => {
    if (!usStatesData?.features) return null;
    return usStatesData.features.map((feature, i) => {
      const name = getStateName(feature);
      const isActive = ACTIVE_STATES.has(name);
      const isHovered = hoveredState === name;
      const d = featureToPath(feature, usViewBox);
      if (!d) return null;
      return (
        <path
          key={i}
          d={d}
          fill={isActive ? (isHovered ? '#c9a96e' : '#b8935a') : (isHovered ? '#d4c5b0' : '#e8e0d5')}
          stroke="#fff"
          strokeWidth="0.8"
          style={{ cursor: isActive ? 'pointer' : 'default', transition: 'fill 0.2s' }}
          onMouseEnter={(e) => {
            setHoveredState(name);
            setTooltipContent(isActive ? `${name} — Click to explore` : name);
            setMousePosition({ x: e.clientX, y: e.clientY });
          }}
          onMouseLeave={() => { setHoveredState(null); setTooltipContent(''); }}
          onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          onClick={() => handleStateClick(name)}
        />
      );
    });
  };

  // Render state zoom map
  const renderStateMap = () => {
    if (!usStatesData?.features || !zoomedState) return null;
    const vb = getStateViewBox(zoomedState);
    return usStatesData.features.map((feature, i) => {
      const name = getStateName(feature);
      const isTargetState = name === zoomedState;
      const d = featureToPath(feature, vb);
      if (!d) return null;
      return (
        <path
          key={i}
          d={d}
          fill={isTargetState ? '#d4b896' : '#f0ebe3'}
          stroke="#fff"
          strokeWidth="0.5"
          style={{ pointerEvents: 'none' }}
        />
      );
    });
  };

  // Render city markers on state zoom
  const renderCityMarkers = () => {
    if (!zoomedState) return null;
    const cities = US_STATE_CITIES[zoomedState] || [];
    const vb = getStateViewBox(zoomedState);

    return cities.map((city, i) => {
      const { x, y } = projectToSVG(city.lat, city.lng, {
        minLng: vb.minLng, maxLng: vb.maxLng,
        minLat: vb.minLat, maxLat: vb.maxLat,
      }, SVG_WIDTH, SVG_HEIGHT);

      const isHovered = hoveredCity === city.name;
      const pinSize = isHovered ? 14 : 11;

      return (
        <g
          key={i}
          transform={`translate(${x}, ${y})`}
          style={{ cursor: 'pointer' }}
          onMouseEnter={(e) => {
            setHoveredCity(city.name);
            setTooltipContent(`${city.name} — ${city.count} restaurants`);
            setMousePosition({ x: e.clientX, y: e.clientY });
          }}
          onMouseLeave={() => { setHoveredCity(null); setTooltipContent(''); }}
          onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
          onClick={() => handleCityClick(city)}
        >
          {/* Pin drop shape */}
          <path
            d={`M 0 ${-pinSize * 1.8}
                C ${-pinSize * 0.7} ${-pinSize * 1.8}, ${-pinSize} ${-pinSize * 1.1}, ${-pinSize} ${-pinSize * 0.7}
                C ${-pinSize} ${-pinSize * 0.1}, 0 0, 0 0
                C 0 0, ${pinSize} ${-pinSize * 0.1}, ${pinSize} ${-pinSize * 0.7}
                C ${pinSize} ${-pinSize * 1.1}, ${pinSize * 0.7} ${-pinSize * 1.8}, 0 ${-pinSize * 1.8} Z`}
            fill={isHovered ? '#8B4513' : '#b8935a'}
            stroke="#fff"
            strokeWidth="1"
            style={{ transition: 'all 0.15s' }}
          />
          {/* Pin dot */}
          <circle cx="0" cy={-pinSize * 1.1} r={pinSize * 0.3} fill="#fff" opacity="0.9" />
          {/* City label */}
          <text
            x="0"
            y={pinSize * 0.7}
            textAnchor="middle"
            fontSize={isHovered ? "11" : "9.5"}
            fontFamily="'Playfair Display', Georgia, serif"
            fill={isHovered ? '#5a3010' : '#3d2208'}
            fontWeight={isHovered ? "700" : "600"}
            stroke="#fff"
            strokeWidth="2.5"
            paintOrder="stroke"
            style={{ transition: 'all 0.15s', pointerEvents: 'none' }}
          >
            {city.name}
          </text>
        </g>
      );
    });
  };

  // Render state labels on US map
  const renderStateLabels = () => {
    if (zoomedState || !usStatesData?.features) return null;
    return Array.from(ACTIVE_STATES).map((stateName) => {
      const center = STATE_CENTERS[stateName];
      if (!center) return null;
      const { x, y } = projectToSVG(center.lat, center.lng, {
        minLng: usViewBox.minLng, maxLng: usViewBox.maxLng,
        minLat: usViewBox.minLat, maxLat: usViewBox.maxLat,
      }, SVG_WIDTH, SVG_HEIGHT);

      const shortName = stateName === 'District of Columbia' ? 'D.C.' :
        stateName === 'Minnesota' ? 'MN' :
        stateName.length > 10 ? stateName.substring(0, 2).toUpperCase() :
        stateName.substring(0, 2).toUpperCase();

      return (
        <text
          key={stateName}
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="9"
          fontFamily="'Playfair Display', Georgia, serif"
          fill="#5a3010"
          fontWeight="700"
          stroke="#fff"
          strokeWidth="2"
          paintOrder="stroke"
          style={{ pointerEvents: 'none' }}
        >
          {shortName}
        </text>
      );
    });
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '400px', color: '#b8935a', fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '1.1rem'
      }}>
        Loading map...
      </div>
    );
  }

  if (error || !worldData) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '400px', color: '#666', fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '1rem', textAlign: 'center', padding: '2rem'
      }}>
        Map unavailable. Please explore destinations using the list below.
      </div>
    );
  }

  const isViewingUSA = zoomedCountry && !zoomedState;
  const isViewingState = !!zoomedState;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Navigation Breadcrumb */}
      <div style={{
        display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px',
        fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.85rem', color: '#8a7560'
      }}>
        {(isViewingUSA || isViewingState) && (
          <button
            onClick={handleBackToWorld}
            style={{
              background: 'none', border: '1px solid #d4c5b0', borderRadius: '4px',
              padding: '4px 10px', cursor: 'pointer', color: '#8a7560',
              fontFamily: 'inherit', fontSize: 'inherit',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.target.style.background = '#f5efe8'; e.target.style.color = '#5a3010'; }}
            onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = '#8a7560'; }}
          >
            ← World Map
          </button>
        )}
        {isViewingState && (
          <button
            onClick={handleBackToUSA}
            style={{
              background: 'none', border: '1px solid #d4c5b0', borderRadius: '4px',
              padding: '4px 10px', cursor: 'pointer', color: '#8a7560',
              fontFamily: 'inherit', fontSize: 'inherit',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.target.style.background = '#f5efe8'; e.target.style.color = '#5a3010'; }}
            onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = '#8a7560'; }}
          >
            ← United States
          </button>
        )}
        <span style={{ color: '#b8935a' }}>
          {isViewingState ? zoomedState : isViewingUSA ? 'United States' : 'World'}
        </span>
      </div>

      {/* Map hint */}
      {!isViewingUSA && !isViewingState && (
        <p style={{
          textAlign: 'center', fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '0.85rem', color: '#9a8570', marginBottom: '8px', fontStyle: 'italic'
        }}>
          Click on the United States to explore
        </p>
      )}
      {isViewingUSA && (
        <p style={{
          textAlign: 'center', fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '0.85rem', color: '#9a8570', marginBottom: '8px', fontStyle: 'italic'
        }}>
          Highlighted states have curated restaurant guides — click to explore
        </p>
      )}
      {isViewingState && (
        <p style={{
          textAlign: 'center', fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '0.85rem', color: '#9a8570', marginBottom: '8px', fontStyle: 'italic'
        }}>
          Click a city pin to browse restaurants
        </p>
      )}

      {/* SVG Map */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        style={{
          width: '100%', height: 'auto', background: '#f0ebe3',
          borderRadius: '8px', border: '1px solid #e0d5c5',
          display: 'block'
        }}
        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      >
        {/* Ocean background */}
        <rect width={SVG_WIDTH} height={SVG_HEIGHT} fill="#dce8f0" />

        {isViewingState ? (
          <g>
            {renderStateMap()}
            {renderCityMarkers()}
          </g>
        ) : isViewingUSA ? (
          <g>
            {renderUSMap()}
            {renderStateLabels()}
          </g>
        ) : (
          <g>
            {renderWorldMap()}
          </g>
        )}
      </svg>

      {/* Tooltip */}
      {tooltipContent && (
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x + 14,
            top: mousePosition.y - 30,
            background: 'rgba(45, 28, 12, 0.92)',
            color: '#f5efe8',
            padding: '6px 12px',
            borderRadius: '5px',
            fontSize: '0.82rem',
            fontFamily: "'Playfair Display', Georgia, serif",
            pointerEvents: 'none',
            zIndex: 9999,
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;

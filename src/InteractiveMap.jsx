import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// ─── SVG canvas dimensions ────────────────────────────────────────────────────
const W = 960;
const H = 500;

// ─── Mercator-style flat projection ──────────────────────────────────────────
const projX = (lng) => ((lng + 180) / 360) * W;
const projY = (lat) => ((85 - lat) / 170) * H;

// ─── Compute SVG translate+scale to fit a bounding box ───────────────────────
const computeTransform = (minLng, maxLng, minLat, maxLat, padding = 0.82) => {
  const x1 = projX(minLng), x2 = projX(maxLng);
  const y1 = projY(maxLat), y2 = projY(minLat);
  const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
  const scale = Math.min((W * padding) / (x2 - x1), (H * padding) / (y2 - y1));
  return { tx: W / 2 - cx * scale, ty: H / 2 - cy * scale, scale };
};

// ─── Easing ───────────────────────────────────────────────────────────────────
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const ANIM_MS = 620;

// ─── Region bounds ────────────────────────────────────────────────────────────
const USA_BOUNDS = { minLng: -128, maxLng: -63, minLat: 22, maxLat: 52 };

const STATE_BOUNDS = {
  'California':           { minLng: -124.5, maxLng: -113.5, minLat: 32.2, maxLat: 42.2 },
  'New York':             { minLng: -80.0,  maxLng: -71.5,  minLat: 40.2, maxLat: 45.3 },
  'Florida':              { minLng: -87.8,  maxLng: -79.5,  minLat: 24.2, maxLat: 31.2 },
  'Illinois':             { minLng: -91.8,  maxLng: -86.8,  minLat: 36.7, maxLat: 42.6 },
  'Texas':                { minLng: -107.0, maxLng: -92.5,  minLat: 25.5, maxLat: 37.0 },
  'Georgia':              { minLng: -85.8,  maxLng: -80.5,  minLat: 30.2, maxLat: 35.1 },
  'Colorado':             { minLng: -109.2, maxLng: -101.8, minLat: 36.8, maxLat: 41.2 },
  'Virginia':             { minLng: -83.8,  maxLng: -75.0,  minLat: 36.3, maxLat: 39.6 },
  'District of Columbia': { minLng: -77.6,  maxLng: -76.6,  minLat: 38.6, maxLat: 39.2 },
  'Minnesota':            { minLng: -97.5,  maxLng: -89.3,  minLat: 43.3, maxLat: 49.5 },
};

const ACTIVE_STATES = new Set(Object.keys(STATE_BOUNDS));

// ─── City markers ─────────────────────────────────────────────────────────────
const US_STATE_CITIES = {
  'California': [
    { name: 'Los Angeles',       lat: 34.0522,  lng: -118.2437, path: '/usa/california/los-angeles/restaurants',       count: 104 },
    { name: 'San Francisco',     lat: 37.7749,  lng: -122.4194, path: '/usa/california/san-francisco/restaurants',     count: 106 },
    { name: 'Napa Valley',       lat: 38.2975,  lng: -122.2869, path: '/usa/california/napa-valley/restaurants',       count: 10  },
    { name: 'San Diego',         lat: 32.7157,  lng: -117.1611, path: '/usa/california/san-diego/restaurants',         count: 30  },
    { name: 'Oakland',           lat: 37.8044,  lng: -122.2711, path: '/usa/california/oakland/restaurants',           count: 26  },
    { name: 'Berkeley',          lat: 37.8716,  lng: -122.2727, path: '/usa/california/berkeley/restaurants',          count: 10  },
    { name: 'Santa Barbara',     lat: 34.4208,  lng: -119.6982, path: '/usa/california/santa-barbara/restaurants',     count: 13  },
    { name: 'Carmel-by-the-Sea', lat: 36.5552,  lng: -121.9233, path: '/usa/california/carmel-by-the-sea/restaurants', count: 8   },
    { name: 'Yountville',        lat: 38.4027,  lng: -122.3608, path: '/usa/california/yountville/restaurants',        count: 4   },
    { name: 'Palm Springs',      lat: 33.8303,  lng: -116.5453, path: '/usa/california/palm-springs/restaurants',      count: 8   },
  ],
  'New York': [
    { name: 'New York City', lat: 40.7128, lng: -74.006,  path: '/usa/newyork/new-york/restaurants', count: 264 },
    { name: 'Brooklyn',      lat: 40.6782, lng: -73.9442, path: '/usa/newyork/brooklyn/restaurants',  count: 82  },
    { name: 'Queens',        lat: 40.7282, lng: -73.7949, path: '/usa/newyork/queens/restaurants',    count: 18  },
    { name: 'The Bronx',     lat: 40.8448, lng: -73.8648, path: '/usa/newyork/bronx/restaurants',     count: 6   },
    { name: 'Tarrytown',     lat: 41.0626, lng: -73.8585, path: '/usa/newyork/tarrytown/restaurants', count: 3   },
  ],
  'Florida': [
    { name: 'Miami',           lat: 25.7617, lng: -80.1918, path: '/usa/florida/miami/restaurants',          count: 44 },
    { name: 'Miami Beach',     lat: 25.7907, lng: -80.13,   path: '/usa/florida/miami-beach/restaurants',    count: 12 },
    { name: 'Orlando',         lat: 28.5383, lng: -81.3792, path: '/usa/florida/orlando/restaurants',        count: 52 },
    { name: 'Tampa',           lat: 27.9506, lng: -82.4572, path: '/usa/florida/tampa/restaurants',          count: 29 },
    { name: 'Fort Lauderdale', lat: 26.1224, lng: -80.1373, path: '/usa/florida/fort-lauderdale/restaurants',count: 5  },
    { name: 'Winter Park',     lat: 28.5997, lng: -81.3392, path: '/usa/florida/winter-park/restaurants',    count: 7  },
  ],
  'Illinois': [
    { name: 'Chicago', lat: 41.8781, lng: -87.6298, path: '/usa/illinois/chicago/restaurants', count: 116 },
  ],
  'Texas': [
    { name: 'Austin',      lat: 30.2672, lng: -97.7431, path: '/usa/texas/austin/restaurants',      count: 43 },
    { name: 'Houston',     lat: 29.7604, lng: -95.3698, path: '/usa/texas/houston/restaurants',     count: 24 },
    { name: 'Dallas',      lat: 32.7767, lng: -96.797,  path: '/usa/texas/dallas/restaurants',      count: 23 },
    { name: 'San Antonio', lat: 29.4241, lng: -98.4936, path: '/usa/texas/san-antonio/restaurants', count: 12 },
    { name: 'Fort Worth',  lat: 32.7555, lng: -97.3308, path: '/usa/texas/fort-worth/restaurants',  count: 3  },
  ],
  'Georgia': [
    { name: 'Atlanta',  lat: 33.749,  lng: -84.388,  path: '/usa/georgia/atlanta/restaurants',  count: 46 },
    { name: 'Decatur',  lat: 33.7748, lng: -84.2963, path: '/usa/georgia/decatur/restaurants',  count: 4  },
    { name: 'Marietta', lat: 33.9526, lng: -84.5499, path: '/usa/georgia/marietta/restaurants', count: 1  },
  ],
  'Colorado': [
    { name: 'Denver',  lat: 39.7392, lng: -104.9903, path: '/usa/colorado/denver/restaurants',  count: 27 },
    { name: 'Boulder', lat: 40.015,  lng: -105.2705, path: '/usa/colorado/boulder/restaurants', count: 9  },
    { name: 'Aspen',   lat: 39.1911, lng: -106.8175, path: '/usa/colorado/aspen/restaurants',   count: 4  },
    { name: 'Vail',    lat: 39.6433, lng: -106.3781, path: '/usa/colorado/vail/restaurants',    count: 2  },
  ],
  'Virginia': [
    { name: 'Northern Virginia', lat: 38.8816, lng: -77.1114, path: '/usa/virginia/nova/restaurants',       count: 5 },
    { name: 'Little Washington', lat: 38.7134, lng: -78.1614, path: '/usa/virginia/washington/restaurants', count: 2 },
  ],
  'District of Columbia': [
    { name: 'Washington, D.C.',      lat: 38.9072, lng: -77.0369, path: '/usa/dc/restaurants',              count: 23 },
    { name: 'Washington Metro Area', lat: 38.87,   lng: -77.13,   path: '/usa/dc/washington/restaurants',   count: 87 },
  ],
  'Minnesota': [
    { name: 'Duluth', lat: 46.7867, lng: -92.1005, path: '/usa/minnesota/duluth/restaurants', count: 2 },
  ],
};

// ─── DC callout (leader line into Atlantic) ───────────────────────────────────
const DC_LNG = -77.0369, DC_LAT = 38.9072;
const CALLOUT_LNG = -65.5, CALLOUT_LAT = 36.0;

// ─── GeoJSON helpers ──────────────────────────────────────────────────────────
const getCountryName = (f) =>
  f.properties?.ADMIN || f.properties?.name || f.properties?.NAME ||
  f.properties?.sovereignt || '';
const getStateName = (f) =>
  f.properties?.name || f.properties?.NAME || f.properties?.NAME_1 || '';
const isUSA = (name) =>
  name === 'United States of America' || name === 'United States' || name === 'USA';

const ringToPath = (ring) => {
  const pts = ring.map(([lng, lat]) => `${projX(lng).toFixed(2)},${projY(lat).toFixed(2)}`);
  return `M${pts[0]}L${pts.slice(1).join('L')}Z`;
};
const featureToPath = (feature) => {
  if (!feature?.geometry) return '';
  const { type, coordinates } = feature.geometry;
  try {
    if (type === 'Polygon')      return coordinates.map(ringToPath).join(' ');
    if (type === 'MultiPolygon') return coordinates.map(p => p.map(ringToPath).join(' ')).join(' ');
  } catch { return ''; }
  return '';
};

// ─── Colors ───────────────────────────────────────────────────────────────────
const C = {
  ocean:         '#c8dce8',
  land:          '#e8e0d5',
  landHover:     '#d4c5b0',
  usaHighlight:  '#c4a882',
  usaHover:      '#b8935a',
  activeState:   '#c9a96e',
  activeHover:   '#b8935a',
  inactiveState: '#ede5d8',
  stateBorder:   '#fff',
  worldBorder:   '#fff',
  cityPin:       '#8B4513',
  cityPinHover:  '#5a2008',
  callout:       '#7a5c3a',
};

// ─── Component ────────────────────────────────────────────────────────────────
const InteractiveMap = () => {
  const navigate = useNavigate();
  const [worldGeo, setWorldGeo] = useState(null);
  const [usGeo,    setUsGeo]    = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [view,     setView]     = useState('world');
  const [hoverCountry, setHoverCountry] = useState(null);
  const [hoverState,   setHoverState]   = useState(null);
  const [hoverCity,    setHoverCity]    = useState(null);
  const [tooltip,      setTooltip]      = useState({ text: '', x: 0, y: 0, visible: false });
  const [btnVisible,   setBtnVisible]   = useState(false); // drives back-button fade

  // Animation refs — we drive the SVG transform attribute directly via RAF
  const gRef      = useRef(null);
  const animRef   = useRef({ tx: 0, ty: 0, scale: 1 }); // current interpolated state
  const rafRef    = useRef(null);

  // Load GeoJSON
  useEffect(() => {
    const worldSrc = [
      'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson',
      'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson',
    ];
    const usSrc = [
      'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json',
      'https://raw.githubusercontent.com/python-visualization/folium/master/tests/us-states.json',
    ];
    const tryLoad = async (sources) => {
      for (const url of sources) {
        try {
          const r = await fetch(url);
          if (r.ok) { const d = await r.json(); if (d?.features) return d; }
        } catch { /* try next */ }
      }
      return null;
    };
    Promise.all([tryLoad(worldSrc), tryLoad(usSrc)]).then(([w, us]) => {
      setWorldGeo(w);
      setUsGeo(us);
      setLoading(false);
    });
  }, []);

  // Pre-compute all SVG path strings (world projection, computed once)
  const worldPaths = useMemo(() => {
    if (!worldGeo?.features) return [];
    return worldGeo.features
      .map((f, i) => ({ name: getCountryName(f), d: featureToPath(f), i }))
      .filter(p => p.d);
  }, [worldGeo]);

  const statePaths = useMemo(() => {
    if (!usGeo?.features) return [];
    return usGeo.features
      .map((f, i) => ({ name: getStateName(f), d: featureToPath(f), i }))
      .filter(p => p.d);
  }, [usGeo]);

  // Target transform for each view
  const targetFor = useCallback((v) => {
    if (v === 'world') return { tx: 0, ty: 0, scale: 1 };
    if (v === 'usa')   return computeTransform(
      USA_BOUNDS.minLng, USA_BOUNDS.maxLng, USA_BOUNDS.minLat, USA_BOUNDS.maxLat
    );
    const b = STATE_BOUNDS[v];
    return b
      ? computeTransform(b.minLng, b.maxLng, b.minLat, b.maxLat)
      : { tx: 0, ty: 0, scale: 1 };
  }, []);

  // Animate to new view — RAF loop interpolating SVG transform attribute
  const animateTo = useCallback((v) => {
    const target = targetFor(v);
    const from   = { ...animRef.current };
    const t0     = performance.now();

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const tick = (now) => {
      const raw = Math.min((now - t0) / ANIM_MS, 1);
      const e   = easeInOutCubic(raw);
      const cur = {
        tx:    from.tx    + (target.tx    - from.tx)    * e,
        ty:    from.ty    + (target.ty    - from.ty)    * e,
        scale: from.scale + (target.scale - from.scale) * e,
      };
      animRef.current = cur;
      if (gRef.current) {
        gRef.current.setAttribute(
          'transform',
          `translate(${cur.tx.toFixed(3)},${cur.ty.toFixed(3)}) scale(${cur.scale.toFixed(5)})`
        );
      }
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [targetFor]);

  // Kick off animation whenever view changes; also manage back-button visibility
  useEffect(() => {
    animateTo(view);
    // Show back button when not at world; slight delay on show, instant on hide
    if (view !== 'world') {
      setTimeout(() => setBtnVisible(true), 80);
    } else {
      setBtnVisible(false);
    }
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [view, animateTo]);

  // Tooltip
  const handleMouseMove = useCallback((e) => {
    setTooltip(t => ({ ...t, x: e.clientX + 14, y: e.clientY - 32 }));
  }, []);
  const showTip = useCallback((text) =>
    setTooltip(t => ({ ...t, text, visible: true })), []);
  const hideTip  = useCallback(() =>
    setTooltip(t => ({ ...t, visible: false })), []);

  // City markers for current state
  const cityMarkers = useMemo(() => {
    if (!STATE_BOUNDS[view]) return [];
    return (US_STATE_CITIES[view] || []).map(c => ({
      ...c, sx: projX(c.lng), sy: projY(c.lat),
    }));
  }, [view]);

  const dcX = projX(DC_LNG), dcY = projY(DC_LAT);
  const calloutX = projX(CALLOUT_LNG), calloutY = projY(CALLOUT_LAT);

  const isInState = !!STATE_BOUNDS[view];
  const isInUSA   = view === 'usa' || isInState;

  // ── Back button handler ──
  const goBack = useCallback(() => {
    setHoverState(null);
    setHoverCity(null);
    if (isInState) setView('usa');
    else           setView('world');
  }, [isInState]);

  if (loading) return (
    <div style={styles.loading}>Loading map…</div>
  );
  if (!worldGeo) return (
    <div style={styles.noMap}>Map data could not be loaded. Explore destinations below.</div>
  );

  return (
    <div style={{ position: 'relative', width: '100%', userSelect: 'none' }}
         onMouseMove={handleMouseMove}>

      {/* ── Hint text ── */}
      <p style={styles.hint}>
        {view === 'world' && 'Click the United States to explore'}
        {view === 'usa'   && 'Click a highlighted state to zoom in'}
        {isInState        && 'Click a city pin to browse restaurants'}
      </p>

      {/* ── SVG wrapper — back button is positioned inside this ── */}
      <div style={{ position: 'relative' }}>

        {/* ── Floating back button ── */}
        <button
          onClick={goBack}
          style={{
            ...styles.backBtn,
            opacity:        btnVisible ? 1 : 0,
            transform:      btnVisible ? 'translateX(0)' : 'translateX(-18px)',
            pointerEvents:  btnVisible ? 'auto' : 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(184,147,90,0.92)';
            e.currentTarget.style.boxShadow  = '0 4px 16px rgba(0,0,0,0.35)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(40,24,8,0.72)';
            e.currentTarget.style.boxShadow  = '0 2px 10px rgba(0,0,0,0.28)';
          }}
        >
          ← {isInState ? 'United States' : 'World'}
        </button>

        {/* ── SVG Map ── */}
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={styles.svg}
        >
          <rect width={W} height={H} fill={C.ocean} />

          {/* Single group — transform attribute driven by RAF */}
          <g ref={gRef} transform="translate(0,0) scale(1)">

            {/* World countries */}
            {worldPaths.map(({ name, d, i }) => {
              const usa = isUSA(name);
              const hov = hoverCountry === name;
              return (
                <path
                  key={`w${i}`} d={d}
                  vectorEffect="non-scaling-stroke"
                  fill={
                    usa && view === 'world' ? (hov ? C.usaHover : C.usaHighlight)
                    : hov && !isInUSA       ? C.landHover
                    : C.land
                  }
                  stroke={C.worldBorder} strokeWidth="0.5"
                  style={{ cursor: usa && view === 'world' ? 'pointer' : 'default',
                           transition: 'fill 0.15s' }}
                  onMouseEnter={() => {
                    setHoverCountry(name);
                    if (usa && view === 'world') showTip('🇺🇸 United States — click to explore');
                  }}
                  onMouseLeave={() => { setHoverCountry(null); hideTip(); }}
                  onClick={() => usa && view === 'world' && setView('usa')}
                />
              );
            })}

            {/* US state outlines (usa + state views) */}
            {isInUSA && statePaths.map(({ name, d, i }) => {
              if (name === 'District of Columbia') return null;
              const active = ACTIVE_STATES.has(name);
              const hov    = hoverState === name;
              return (
                <path
                  key={`s${i}`} d={d}
                  vectorEffect="non-scaling-stroke"
                  fill={active ? (hov ? C.activeHover : C.activeState)
                               : (hov ? C.inactiveState : '#ede5d8')}
                  stroke={C.stateBorder} strokeWidth="0.7"
                  style={{ cursor: active ? 'pointer' : 'default', transition: 'fill 0.15s' }}
                  onMouseEnter={() => {
                    setHoverState(name);
                    if (active) showTip(`${name} — click to explore`);
                  }}
                  onMouseLeave={() => { setHoverState(null); hideTip(); }}
                  onClick={() => active && setView(name)}
                />
              );
            })}

            {/* DC callout (usa view only) */}
            {view === 'usa' && (
              <g>
                <circle cx={dcX} cy={dcY} r={2.5}
                  fill={C.callout} vectorEffect="non-scaling-stroke" />
                <line x1={dcX} y1={dcY} x2={calloutX} y2={calloutY}
                  stroke={C.callout} strokeWidth="0.9" strokeDasharray="3 2"
                  vectorEffect="non-scaling-stroke" />
                <g transform={`translate(${calloutX},${calloutY})`}
                   style={{ cursor: 'pointer' }}
                   onClick={() => setView('District of Columbia')}
                   onMouseEnter={() => showTip('Washington, D.C. — click to explore')}
                   onMouseLeave={hideTip}>
                  <circle cx={0} cy={0} r={5} fill={C.callout} />
                  <rect x={6} y={-9} width={88} height={18} rx={4} fill={C.callout} />
                  <text x={50} y={5} textAnchor="middle"
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontSize="8.5" fontWeight="700" fill="#fff"
                    style={{ pointerEvents: 'none' }}>
                    Washington, D.C.
                  </text>
                </g>
              </g>
            )}

            {/* City pins (state view) */}
            {isInState && cityMarkers.map((city, i) => {
              const hov   = hoverCity === city.name;
              const PIN_R = 5, PIN_H = 14;
              return (
                <g key={`c${i}`}
                   transform={`translate(${city.sx.toFixed(2)},${city.sy.toFixed(2)})`}
                   style={{ cursor: 'pointer' }}
                   onClick={() => navigate(city.path)}
                   onMouseEnter={() => { setHoverCity(city.name); showTip(`${city.name} · ${city.count} restaurants`); }}
                   onMouseLeave={() => { setHoverCity(null); hideTip(); }}>
                  {/* Shadow */}
                  <ellipse cx={0} cy={2} rx={PIN_R * 0.7} ry={PIN_R * 0.3}
                    fill="rgba(0,0,0,0.18)" />
                  {/* Teardrop */}
                  <path
                    d={`M0,0 C${-PIN_R},${-PIN_R} ${-PIN_R},${-PIN_H} 0,${-PIN_H} C${PIN_R},${-PIN_H} ${PIN_R},${-PIN_R} 0,0Z`}
                    fill={hov ? C.cityPinHover : C.cityPin}
                    vectorEffect="non-scaling-stroke"
                    style={{ transition: 'fill 0.12s' }}
                  />
                  <circle cx={0} cy={-PIN_H * 0.68} r={PIN_R * 0.38}
                    fill="rgba(255,255,255,0.85)" />
                  {/* Name label */}
                  <text y={4} textAnchor="middle"
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontSize={hov ? '6.5' : '6'} fontWeight={hov ? '700' : '600'}
                    fill={hov ? '#3d1a00' : '#4a2c10'}
                    stroke="#fff" strokeWidth="2.2" paintOrder="stroke"
                    style={{ pointerEvents: 'none', transition: 'all 0.12s' }}>
                    {city.name}
                  </text>
                  {hov && (
                    <text y={11} textAnchor="middle"
                      fontFamily="'Playfair Display', Georgia, serif"
                      fontSize="5" fill="#7a4a20"
                      stroke="#fff" strokeWidth="1.5" paintOrder="stroke"
                      style={{ pointerEvents: 'none' }}>
                      {city.count} restaurants
                    </text>
                  )}
                </g>
              );
            })}

          </g>{/* end animated group */}
        </svg>
      </div>

      {/* Floating tooltip */}
      {tooltip.visible && tooltip.text && (
        <div style={{
          position: 'fixed', left: tooltip.x, top: tooltip.y,
          background: 'rgba(40,24,8,0.92)', color: '#f5efe8',
          padding: '5px 12px', borderRadius: 5,
          fontSize: '0.78rem', fontFamily: "'Playfair Display', Georgia, serif",
          pointerEvents: 'none', zIndex: 9999, whiteSpace: 'nowrap',
          boxShadow: '0 2px 10px rgba(0,0,0,0.35)',
        }}>
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

// ─── Static styles ─────────────────────────────────────────────────────────────
const styles = {
  loading: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    height: 380, color: '#b8935a',
    fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem',
  },
  noMap: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    height: 380, color: '#888', textAlign: 'center', padding: '2rem',
    fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem',
  },
  hint: {
    textAlign: 'center',
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '0.8rem', color: '#aaa',
    marginBottom: 8, fontStyle: 'italic',
  },
  svg: {
    width: '100%', height: 'auto', display: 'block',
    borderRadius: 8, border: '1px solid #e0d5c5',
    background: '#c8dce8', cursor: 'default',
  },
  backBtn: {
    position: 'absolute',
    top: 14,
    left: 14,
    zIndex: 10,
    background:    'rgba(40,24,8,0.72)',
    color:         '#f5efe8',
    border:        'none',
    borderRadius:  7,
    padding:       '7px 16px',
    cursor:        'pointer',
    fontFamily:    "'Playfair Display', Georgia, serif",
    fontSize:      '0.82rem',
    fontWeight:    '600',
    letterSpacing: '0.02em',
    backdropFilter:'blur(6px)',
    boxShadow:     '0 2px 10px rgba(0,0,0,0.28)',
    transition:    'opacity 0.35s ease, transform 0.35s ease, background 0.18s, box-shadow 0.18s',
  },
};

export default InteractiveMap;

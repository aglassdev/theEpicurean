import React, {
  useState, useEffect, useLayoutEffect, useMemo,
  useCallback, useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';

// ─── Canvas ───────────────────────────────────────────────────────────────────
const W = 960, H = 500;

// ─── Projection (world coords, computed once) ─────────────────────────────────
const projX = (lng) => ((lng + 180) / 360) * W;
const projY = (lat) => ((85  - lat) / 170) * H;

// ─── Fit a lat/lng bbox into the 960×500 viewport ─────────────────────────────
const computeTransform = (minLng, maxLng, minLat, maxLat, pad = 0.82) => {
  const x1 = projX(minLng), x2 = projX(maxLng);
  const y1 = projY(maxLat), y2 = projY(minLat);
  const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
  const sc = Math.min((W * pad) / (x2 - x1), (H * pad) / (y2 - y1));
  return { tx: W / 2 - cx * sc, ty: H / 2 - cy * sc, scale: sc };
};

// ─── Easing ───────────────────────────────────────────────────────────────────
const ease = (t) => t < 0.5 ? 4*t*t*t : 1 - (-2*t+2)**3/2;
const ANIM_MS = 640;

// ─── Bounds ───────────────────────────────────────────────────────────────────
const USA_BOUNDS = { minLng:-128, maxLng:-63, minLat:22, maxLat:52 };
const STATE_BOUNDS = {
  'California':           { minLng:-124.5, maxLng:-113.5, minLat:32.2, maxLat:42.2 },
  'New York':             { minLng:-80.0,  maxLng:-71.5,  minLat:40.2, maxLat:45.3 },
  'Florida':              { minLng:-87.8,  maxLng:-79.5,  minLat:24.2, maxLat:31.2 },
  'Illinois':             { minLng:-91.8,  maxLng:-86.8,  minLat:36.7, maxLat:42.6 },
  'Texas':                { minLng:-107.0, maxLng:-92.5,  minLat:25.5, maxLat:37.0 },
  'Georgia':              { minLng:-85.8,  maxLng:-80.5,  minLat:30.2, maxLat:35.1 },
  'Colorado':             { minLng:-109.2, maxLng:-101.8, minLat:36.8, maxLat:41.2 },
  'Virginia':             { minLng:-83.8,  maxLng:-75.0,  minLat:36.3, maxLat:39.6 },
  'District of Columbia': { minLng:-77.5,  maxLng:-76.8,  minLat:38.7, maxLat:39.1 },
  'Minnesota':            { minLng:-97.5,  maxLng:-89.3,  minLat:43.3, maxLat:49.5 },
};
const ACTIVE_STATES = new Set(Object.keys(STATE_BOUNDS));

// ─── City data ────────────────────────────────────────────────────────────────
const US_STATE_CITIES = {
  'California': [
    { name:'Los Angeles',       lat:34.0522,  lng:-118.2437, path:'/usa/california/los-angeles/restaurants',       count:104 },
    { name:'San Francisco',     lat:37.7749,  lng:-122.4194, path:'/usa/california/san-francisco/restaurants',     count:106 },
    { name:'Napa Valley',       lat:38.2975,  lng:-122.2869, path:'/usa/california/napa-valley/restaurants',       count:10  },
    { name:'San Diego',         lat:32.7157,  lng:-117.1611, path:'/usa/california/san-diego/restaurants',         count:30  },
    { name:'Oakland',           lat:37.8044,  lng:-122.2711, path:'/usa/california/oakland/restaurants',           count:26  },
    { name:'Berkeley',          lat:37.8716,  lng:-122.2727, path:'/usa/california/berkeley/restaurants',          count:10  },
    { name:'Santa Barbara',     lat:34.4208,  lng:-119.6982, path:'/usa/california/santa-barbara/restaurants',     count:13  },
    { name:'Carmel-by-the-Sea', lat:36.5552,  lng:-121.9233, path:'/usa/california/carmel-by-the-sea/restaurants', count:8   },
    { name:'Yountville',        lat:38.4027,  lng:-122.3608, path:'/usa/california/yountville/restaurants',        count:4   },
    { name:'Palm Springs',      lat:33.8303,  lng:-116.5453, path:'/usa/california/palm-springs/restaurants',      count:8   },
  ],
  'New York': [
    { name:'New York City', lat:40.7128, lng:-74.006,  path:'/usa/newyork/new-york/restaurants', count:264 },
    { name:'Brooklyn',      lat:40.6782, lng:-73.9442, path:'/usa/newyork/brooklyn/restaurants',  count:82  },
    { name:'Queens',        lat:40.7282, lng:-73.7949, path:'/usa/newyork/queens/restaurants',    count:18  },
    { name:'The Bronx',     lat:40.8448, lng:-73.8648, path:'/usa/newyork/bronx/restaurants',     count:6   },
    { name:'Tarrytown',     lat:41.0626, lng:-73.8585, path:'/usa/newyork/tarrytown/restaurants', count:3   },
  ],
  'Florida': [
    { name:'Miami',           lat:25.7617, lng:-80.1918, path:'/usa/florida/miami/restaurants',          count:44 },
    { name:'Miami Beach',     lat:25.7907, lng:-80.13,   path:'/usa/florida/miami-beach/restaurants',    count:12 },
    { name:'Orlando',         lat:28.5383, lng:-81.3792, path:'/usa/florida/orlando/restaurants',        count:52 },
    { name:'Tampa',           lat:27.9506, lng:-82.4572, path:'/usa/florida/tampa/restaurants',          count:29 },
    { name:'Fort Lauderdale', lat:26.1224, lng:-80.1373, path:'/usa/florida/fort-lauderdale/restaurants',count:5  },
    { name:'Winter Park',     lat:28.5997, lng:-81.3392, path:'/usa/florida/winter-park/restaurants',    count:7  },
  ],
  'Illinois': [
    { name:'Chicago', lat:41.8781, lng:-87.6298, path:'/usa/illinois/chicago/restaurants', count:116 },
  ],
  'Texas': [
    { name:'Austin',      lat:30.2672, lng:-97.7431, path:'/usa/texas/austin/restaurants',      count:43 },
    { name:'Houston',     lat:29.7604, lng:-95.3698, path:'/usa/texas/houston/restaurants',     count:24 },
    { name:'Dallas',      lat:32.7767, lng:-96.797,  path:'/usa/texas/dallas/restaurants',      count:23 },
    { name:'San Antonio', lat:29.4241, lng:-98.4936, path:'/usa/texas/san-antonio/restaurants', count:12 },
    { name:'Fort Worth',  lat:32.7555, lng:-97.3308, path:'/usa/texas/fort-worth/restaurants',  count:3  },
  ],
  'Georgia': [
    { name:'Atlanta',  lat:33.749,  lng:-84.388,  path:'/usa/georgia/atlanta/restaurants',  count:46 },
    { name:'Decatur',  lat:33.7748, lng:-84.2963, path:'/usa/georgia/decatur/restaurants',  count:4  },
    { name:'Marietta', lat:33.9526, lng:-84.5499, path:'/usa/georgia/marietta/restaurants', count:1  },
  ],
  'Colorado': [
    { name:'Denver',  lat:39.7392, lng:-104.9903, path:'/usa/colorado/denver/restaurants',  count:27 },
    { name:'Boulder', lat:40.015,  lng:-105.2705, path:'/usa/colorado/boulder/restaurants', count:9  },
    { name:'Aspen',   lat:39.1911, lng:-106.8175, path:'/usa/colorado/aspen/restaurants',   count:4  },
    { name:'Vail',    lat:39.6433, lng:-106.3781, path:'/usa/colorado/vail/restaurants',    count:2  },
  ],
  'Virginia': [
    { name:'Northern Virginia', lat:38.8816, lng:-77.1114, path:'/usa/virginia/nova/restaurants',       count:5 },
    { name:'Little Washington', lat:38.7134, lng:-78.1614, path:'/usa/virginia/washington/restaurants', count:2 },
  ],
  'District of Columbia': [
    { name:'Washington, D.C.',      lat:38.9072, lng:-77.0369, path:'/usa/dc/restaurants',            count:23 },
    { name:'Washington Metro Area', lat:38.87,   lng:-77.13,   path:'/usa/dc/washington/restaurants', count:87 },
  ],
  'Minnesota': [
    { name:'Duluth', lat:46.7867, lng:-92.1005, path:'/usa/minnesota/duluth/restaurants', count:2 },
  ],
};

// ─── DC callout anchor (in Atlantic) ─────────────────────────────────────────
const DC_LNG = -77.0369, DC_LAT = 38.9072;
const CL_LNG  = -65.5,   CL_LAT  = 36.0;
// World-space coords (computed once)
const dcX  = projX(DC_LNG),  dcY  = projY(DC_LAT);
const clX  = projX(CL_LNG),  clY  = projY(CL_LAT);

// ─── GeoJSON helpers ──────────────────────────────────────────────────────────
const countryName = (f) =>
  f.properties?.ADMIN || f.properties?.name || f.properties?.NAME || f.properties?.sovereignt || '';
const stateName = (f) =>
  f.properties?.name  || f.properties?.NAME  || f.properties?.NAME_1 || '';
const isUSA = (n) => n === 'United States of America' || n === 'United States' || n === 'USA';

const ringToPath = (ring) =>
  `M${ring.map(([lng, lat]) => `${projX(lng).toFixed(2)},${projY(lat).toFixed(2)}`).join('L')}Z`;
const featureToPath = (f) => {
  if (!f?.geometry) return '';
  const { type, coordinates: c } = f.geometry;
  try {
    if (type === 'Polygon')      return c.map(ringToPath).join(' ');
    if (type === 'MultiPolygon') return c.map(p => p.map(ringToPath).join(' ')).join(' ');
  } catch { return ''; }
  return '';
};

// ─── Colours ─────────────────────────────────────────────────────────────────
const C = {
  ocean:'#c8dce8', land:'#e8e0d5', landHov:'#d4c5b0',
  usaFill:'#c4a882', usaHov:'#b8935a',
  active:'#c9a96e', activeHov:'#b8935a',
  inactive:'#ede5d8', stateBdr:'#fff', worldBdr:'#fff',
  pin:'#111111', pinHov:'#000000', callout:'#7a5c3a',
};

// ─── Screen-space overlay updater ─────────────────────────────────────────────
// Converts world-coord positions → screen SVG coords and writes them directly
// to the DOM — bypasses React reconciliation so markers stay a fixed visual size
// regardless of zoom level.
const makeUpdateOverlay = (overlayRef, cityMarkersRef) => (cur) => {
  const el = overlayRef.current;
  if (!el) return;
  const { tx, ty, scale: s } = cur;

  // City markers
  const mkrs = el.querySelectorAll('[data-mk]');
  cityMarkersRef.current.forEach((city, i) => {
    if (mkrs[i]) {
      mkrs[i].setAttribute('transform',
        `translate(${(city.sx*s+tx).toFixed(1)},${(city.sy*s+ty).toFixed(1)})`);
    }
  });

  // DC dot
  const dot = el.querySelector('[data-dc-dot]');
  if (dot) {
    dot.setAttribute('cx', (dcX*s+tx).toFixed(1));
    dot.setAttribute('cy', (dcY*s+ty).toFixed(1));
  }
  // DC line
  const line = el.querySelector('[data-dc-line]');
  if (line) {
    line.setAttribute('x1', (dcX*s+tx).toFixed(1));
    line.setAttribute('y1', (dcY*s+ty).toFixed(1));
    line.setAttribute('x2', (clX*s+tx).toFixed(1));
    line.setAttribute('y2', (clY*s+ty).toFixed(1));
  }
  // DC bubble
  const bubble = el.querySelector('[data-dc-bubble]');
  if (bubble) {
    bubble.setAttribute('transform',
      `translate(${(clX*s+tx).toFixed(1)},${(clY*s+ty).toFixed(1)})`);
  }
};

// ─── Component ────────────────────────────────────────────────────────────────
const InteractiveMap = () => {
  const navigate = useNavigate();

  const [worldGeo, setWorldGeo] = useState(null);
  const [usGeo,    setUsGeo]    = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [view,     setView]     = useState('world');
  const [hovCntry, setHovCntry] = useState(null);
  const [hovState, setHovState] = useState(null);
  const [hovCity,  setHovCity]  = useState(null);
  const [tooltip,  setTooltip]  = useState({ text:'', x:0, y:0, visible:false });
  const [btnVis,   setBtnVis]   = useState(false);

  // Refs — animation state lives here; gRef is the zoom group, overlayRef is
  // the static overlay whose children we reposition manually via setAttribute.
  const gRef           = useRef(null);
  const overlayRef     = useRef(null);
  const animRef        = useRef({ tx:0, ty:0, scale:1 });
  const rafRef         = useRef(null);
  const cityMkrsRef    = useRef([]);   // mirror of current cityMarkers

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
    const tryLoad = async (srcs) => {
      for (const u of srcs) {
        try { const r = await fetch(u); if (r.ok) { const d = await r.json(); if (d?.features) return d; } }
        catch { /* next */ }
      }
      return null;
    };
    Promise.all([tryLoad(worldSrc), tryLoad(usSrc)]).then(([w, us]) => {
      setWorldGeo(w); setUsGeo(us); setLoading(false);
    });
  }, []);

  // Pre-compute path strings (world projection, once)
  const worldPaths = useMemo(() => {
    if (!worldGeo?.features) return [];
    return worldGeo.features.map((f,i) => ({ name:countryName(f), d:featureToPath(f), i })).filter(p=>p.d);
  }, [worldGeo]);

  const statePaths = useMemo(() => {
    if (!usGeo?.features) return [];
    return usGeo.features.map((f,i) => ({ name:stateName(f), d:featureToPath(f), i })).filter(p=>p.d);
  }, [usGeo]);

  // City markers for current state (include pre-projected sx/sy)
  const cityMarkers = useMemo(() => {
    if (!STATE_BOUNDS[view]) return [];
    return (US_STATE_CITIES[view] || []).map(c => ({ ...c, sx:projX(c.lng), sy:projY(c.lat) }));
  }, [view]);

  // Keep ref in sync so RAF can read it without stale closure
  useEffect(() => { cityMkrsRef.current = cityMarkers; }, [cityMarkers]);

  // Stable overlay updater (only depends on stable refs + module constants)
  const updateOverlay = useCallback(makeUpdateOverlay(overlayRef, cityMkrsRef), []);

  // Target transform for each view
  const targetFor = useCallback((v) => {
    if (v === 'world') return { tx:0, ty:0, scale:1 };
    if (v === 'usa')   return computeTransform(USA_BOUNDS.minLng, USA_BOUNDS.maxLng, USA_BOUNDS.minLat, USA_BOUNDS.maxLat);
    const b = STATE_BOUNDS[v];
    return b ? computeTransform(b.minLng, b.maxLng, b.minLat, b.maxLat) : { tx:0, ty:0, scale:1 };
  }, []);

  // RAF-driven zoom — directly sets SVG transform attribute at 60fps
  const animateTo = useCallback((v) => {
    const target = targetFor(v);
    const from   = { ...animRef.current };
    const t0     = performance.now();
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const tick = (now) => {
      const raw = Math.min((now - t0) / ANIM_MS, 1);
      const e   = ease(raw);
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
      updateOverlay(cur);
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [targetFor, updateOverlay]);

  // Kick animation + back-button visibility on view change
  useEffect(() => {
    animateTo(view);
    if (view !== 'world') setTimeout(() => setBtnVis(true), 90);
    else setBtnVis(false);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [view, animateTo]);

  // After React re-renders (e.g. markers mount/unmount), re-position overlay
  // elements immediately so there's no single-frame flash at wrong location.
  useLayoutEffect(() => { updateOverlay(animRef.current); }, [view, updateOverlay]);

  // Tooltip
  const onMouseMove = useCallback((e) => {
    setTooltip(t => ({ ...t, x: e.clientX+14, y: e.clientY-32 }));
  }, []);
  const showTip = useCallback((text) => setTooltip(t => ({ ...t, text, visible:true })), []);
  const hideTip  = useCallback(() => setTooltip(t => ({ ...t, visible:false })), []);

  const isInState = !!STATE_BOUNDS[view];
  const isInUSA   = view === 'usa' || isInState;

  const goBack = useCallback(() => {
    setHovState(null); setHovCity(null);
    setView(isInState ? 'usa' : 'world');
  }, [isInState]);

  if (loading) return <div style={S.loading}>Loading map…</div>;
  if (!worldGeo) return <div style={S.noMap}>Map data unavailable. Explore destinations below.</div>;

  // ── Pin geometry (fixed visual size — lives in overlay, not zoom group) ──────
  const PR = 9, PH = 24; // pin radius, pin height in SVG screen units

  return (
    <div style={{ position:'relative', width:'100%', userSelect:'none' }} onMouseMove={onMouseMove}>

      {/* Hint */}
      <p style={S.hint}>
        {view==='world' && 'Click the United States to explore'}
        {view==='usa'   && 'Click a highlighted state to zoom in'}
        {isInState      && 'Click a city pin to browse restaurants'}
      </p>

      <div style={{ position:'relative' }}>

        {/* ── Floating back button ── */}
        <button
          onClick={goBack}
          style={{ ...S.backBtn, opacity:btnVis?1:0, transform:btnVis?'translateX(0)':'translateX(-20px)', pointerEvents:btnVis?'auto':'none' }}
          onMouseEnter={e=>{ e.currentTarget.style.background='rgba(184,147,90,0.92)'; e.currentTarget.style.boxShadow='0 4px 18px rgba(0,0,0,0.38)'; }}
          onMouseLeave={e=>{ e.currentTarget.style.background='rgba(40,24,8,0.72)'; e.currentTarget.style.boxShadow='0 2px 10px rgba(0,0,0,0.28)'; }}
        >
          ← {isInState ? 'United States' : 'World'}
        </button>

        {/* ── SVG ── */}
        <svg viewBox={`0 0 ${W} ${H}`} style={S.svg}>
          <rect width={W} height={H} fill={C.ocean} />

          {/* ZOOM GROUP — geographic paths only; transform driven by RAF */}
          <g ref={gRef} transform="translate(0,0) scale(1)">

            {/* World countries */}
            {worldPaths.map(({ name, d, i }) => {
              const usa = isUSA(name), hov = hovCntry===name;
              return (
                <path key={`w${i}`} d={d} vectorEffect="non-scaling-stroke"
                  fill={usa&&view==='world' ? (hov?C.usaHov:C.usaFill) : hov&&!isInUSA ? C.landHov : C.land}
                  stroke={C.worldBdr} strokeWidth="0.5"
                  style={{ cursor:usa&&view==='world'?'pointer':'default', transition:'fill 0.15s' }}
                  onMouseEnter={() => { setHovCntry(name); if(usa&&view==='world') showTip('🇺🇸 United States — click to explore'); }}
                  onMouseLeave={() => { setHovCntry(null); hideTip(); }}
                  onClick={() => usa && view==='world' && setView('usa')}
                />
              );
            })}

            {/* US state outlines */}
            {isInUSA && statePaths.map(({ name, d, i }) => {
              if (name === 'District of Columbia') return null;
              const active = ACTIVE_STATES.has(name), hov = hovState===name;
              return (
                <path key={`s${i}`} d={d} vectorEffect="non-scaling-stroke"
                  fill={active ? (hov?C.activeHov:C.active) : (hov?C.inactive:'#ede5d8')}
                  stroke={C.stateBdr} strokeWidth="0.7"
                  style={{ cursor:active?'pointer':'default', transition:'fill 0.15s' }}
                  onMouseEnter={() => { setHovState(name); if(active) showTip(`${name} — click to explore`); }}
                  onMouseLeave={() => { setHovState(null); hideTip(); }}
                  onClick={() => active && setView(name)}
                />
              );
            })}
          </g>

          {/* OVERLAY GROUP — markers & DC callout; positioned manually via
              updateOverlay() so they appear at a fixed visual size regardless
              of how zoomed in the map currently is.                          */}
          <g ref={overlayRef}>

            {/* DC callout — only in USA view */}
            {view === 'usa' && (
              <g>
                {/* Dot on DC */}
                <circle data-dc-dot r="5" fill={C.callout} style={{ pointerEvents:'none' }} />
                {/* Leader line to Atlantic callout */}
                <line data-dc-line stroke={C.callout} strokeWidth="1.2" strokeDasharray="5 3" style={{ pointerEvents:'none' }} />
                {/* Callout bubble */}
                <g data-dc-bubble style={{ cursor:'pointer' }}
                   onClick={() => setView('District of Columbia')}
                   onMouseEnter={() => showTip('Washington, D.C. — click to explore')}
                   onMouseLeave={hideTip}>
                  <circle cx="0" cy="0" r="9" fill={C.callout} />
                  <rect x="10" y="-10" width="120" height="20" rx="4" fill={C.callout} />
                  <text x="70" y="4" textAnchor="middle"
                    fontFamily="'Playfair Display',Georgia,serif"
                    fontSize="10" fontWeight="700" fill="#fff"
                    style={{ pointerEvents:'none' }}>
                    Washington, D.C.
                  </text>
                </g>
              </g>
            )}

            {/* City pins — only in state view */}
            {isInState && cityMarkers.map((city) => {
              const hov = hovCity === city.name;
              return (
                <g key={city.name} data-mk style={{ cursor:'pointer' }}
                   onClick={() => navigate(city.path)}
                   onMouseEnter={() => { setHovCity(city.name); showTip(`${city.name} · ${city.count} restaurants`); }}
                   onMouseLeave={() => { setHovCity(null); hideTip(); }}>
                  {/* Drop shadow */}
                  <ellipse cx="0" cy="3" rx={PR*0.75} ry={PR*0.32} fill="rgba(0,0,0,0.16)" />
                  {/* Teardrop body */}
                  <path
                    d={`M0,0 C${-PR},${-PR} ${-PR},${-PH} 0,${-PH} C${PR},${-PH} ${PR},${-PR} 0,0Z`}
                    fill={hov ? C.pinHov : C.pin}
                    style={{ transition:'fill 0.12s' }}
                  />
                  {/* Inner dot */}
                  <circle cx="0" cy={-PH*0.68} r={PR*0.36} fill="rgba(255,255,255,0.85)" />
                  {/* City name */}
                  <text y="5" textAnchor="middle"
                    fontFamily="'Playfair Display',Georgia,serif"
                    fontSize={hov?'10':'8'} fontWeight={hov?'700':'600'}
                    fill={hov?'#000':'#222'}
                    stroke="#fff" strokeWidth="2.5" paintOrder="stroke"
                    style={{ pointerEvents:'none', transition:'all 0.12s' }}>
                    {city.name}
                  </text>
                  {hov && (
                    <text y="18" textAnchor="middle"
                      fontFamily="'Playfair Display',Georgia,serif"
                      fontSize="8" fill="#333"
                      stroke="#fff" strokeWidth="1.5" paintOrder="stroke"
                      style={{ pointerEvents:'none' }}>
                      {city.count} restaurants
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Floating tooltip */}
      {tooltip.visible && tooltip.text && (
        <div style={{
          position:'fixed', left:tooltip.x, top:tooltip.y,
          background:'rgba(40,24,8,0.92)', color:'#f5efe8',
          padding:'5px 12px', borderRadius:5,
          fontSize:'0.78rem', fontFamily:"'Playfair Display',Georgia,serif",
          pointerEvents:'none', zIndex:9999, whiteSpace:'nowrap',
          boxShadow:'0 2px 10px rgba(0,0,0,0.35)',
        }}>
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

// ─── Static styles ─────────────────────────────────────────────────────────────
const S = {
  loading:{ display:'flex', alignItems:'center', justifyContent:'center', height:380,
    color:'#b8935a', fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1.1rem' },
  noMap:{ display:'flex', alignItems:'center', justifyContent:'center', height:380,
    color:'#888', textAlign:'center', padding:'2rem',
    fontFamily:"'Playfair Display',Georgia,serif", fontSize:'1rem' },
  hint:{ textAlign:'center', fontFamily:"'Playfair Display',Georgia,serif",
    fontSize:'0.8rem', color:'#aaa', marginBottom:8, fontStyle:'italic' },
  svg:{ width:'100%', height:'auto', display:'block', borderRadius:8,
    border:'1px solid #e0d5c5', background:'#c8dce8', cursor:'default' },
  backBtn:{
    position:'absolute', top:14, left:14, zIndex:10,
    background:'rgba(40,24,8,0.72)', color:'#f5efe8',
    border:'none', borderRadius:7, padding:'7px 16px',
    cursor:'pointer', fontFamily:"'Playfair Display',Georgia,serif",
    fontSize:'0.82rem', fontWeight:'600', letterSpacing:'0.02em',
    backdropFilter:'blur(6px)', boxShadow:'0 2px 10px rgba(0,0,0,0.28)',
    transition:'opacity 0.35s ease, transform 0.35s ease, background 0.18s, box-shadow 0.18s',
  },
};

export default InteractiveMap;

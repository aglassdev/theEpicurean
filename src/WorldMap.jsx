import React, { useEffect, useRef, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { tokens } from './EpiChrome';

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const DATA_URL = '/data/restaurants-geo.json';

// ── Palette (editorial) ───────────────────────────────────────────
const INK = '#1F1A14', GOLD = '#A8824A', GOLD_SOFT = '#C8A270', PAPER = '#FAF7F0';

// ── GeoJSON builder ───────────────────────────────────────────────
const toGeo = (recs) => ({
  type: 'FeatureCollection',
  features: recs.map((r) => ({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [r.lng, r.lat] },
    properties: { n: r.n, a: r.a || '', c: r.c || '', co: r.co || '', w: r.w || '' },
  })),
});

// ── One-time style injection for popups + controls ────────────────
const injectStyles = () => {
  if (document.getElementById('epi-map-styles')) return;
  const s = document.createElement('style');
  s.id = 'epi-map-styles';
  s.innerHTML = `
    .mapboxgl-popup.epi-pop .mapboxgl-popup-content {
      background: ${PAPER}; border: 1px solid ${INK}; border-radius: 0;
      padding: 16px 18px; box-shadow: 0 12px 30px rgba(31,26,20,.18);
      font-family: "EB Garamond", Georgia, serif; max-width: 260px;
    }
    .mapboxgl-popup.epi-pop .mapboxgl-popup-close-button {
      color: ${INK}; font-size: 18px; padding: 2px 7px;
    }
    .mapboxgl-popup.epi-pop.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip { border-top-color: ${INK}; }
    .mapboxgl-popup.epi-pop.mapboxgl-popup-anchor-top .mapboxgl-popup-tip { border-bottom-color: ${INK}; }
    .mapboxgl-popup.epi-pop.mapboxgl-popup-anchor-left .mapboxgl-popup-tip { border-right-color: ${INK}; }
    .mapboxgl-popup.epi-pop.mapboxgl-popup-anchor-right .mapboxgl-popup-tip { border-left-color: ${INK}; }
    .mapboxgl-ctrl-group { border-radius: 0 !important; border: 1px solid ${INK} !important; box-shadow: none !important; }
    .mapboxgl-ctrl-group button { border-radius: 0 !important; }
    .epi-kicker { font-family: "Jost", sans-serif; font-size: 9.5px; letter-spacing: .26em; text-transform: uppercase; color: ${GOLD}; margin-bottom: 5px; }
    .epi-pop-name { font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: 1.45rem; line-height: 1.12; color: ${INK}; margin-bottom: 6px; }
    .epi-pop-addr { font-style: italic; font-size: .92rem; color: #5C544A; line-height: 1.4; margin-bottom: 10px; }
    .epi-pop-link { font-family: "Jost", sans-serif; font-size: 10px; letter-spacing: .24em; text-transform: uppercase; color: ${INK}; text-decoration: none; border-bottom: 1px solid ${GOLD}; padding-bottom: 2px; }
    .epi-pop-link:hover { color: ${GOLD}; }
  `;
  document.head.appendChild(s);
};

const popupHTML = (p) => {
  const loc = [p.c, p.co].filter(Boolean).join(' · ');
  const site = p.w
    ? `<a class="epi-pop-link" href="${p.w}" target="_blank" rel="noopener noreferrer">Visit site →</a>`
    : '';
  return `
    <div>
      ${loc ? `<div class="epi-kicker">${loc}</div>` : ''}
      <div class="epi-pop-name">${p.n}</div>
      ${p.a ? `<div class="epi-pop-addr">${p.a}</div>` : ''}
      ${site}
    </div>`;
};

const WorldMap = ({ fullPage = false, showSearch = false, height = '70vh', projection = 'mercator' }) => {
  const nodeRef = useRef(null);
  const mapRef = useRef(null);
  const dataRef = useRef([]);
  const homeRef = useRef({ center: [8, 25], zoom: fullPage ? 1.45 : 1.05 });
  const [status, setStatus] = useState('loading'); // loading | ready | no-token | no-data | error
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(0);
  const [query, setQuery] = useState('');

  // ── Init ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (!TOKEN || TOKEN.includes('your_mapbox_token')) { setStatus('no-token'); return; }
    injectStyles();
    let cancelled = false;
    let map;

    (async () => {
      let json;
      try {
        const r = await fetch(DATA_URL);
        if (!r.ok) throw new Error('no data');
        json = await r.json();
      } catch {
        if (!cancelled) setStatus('no-data');
        return;
      }
      const recs = (json.restaurants || []).filter((x) => x.lng != null && x.lat != null);
      dataRef.current = recs;
      if (cancelled) return;
      setTotal(recs.length);
      setVisible(recs.length);

      mapboxgl.accessToken = TOKEN;
      map = new mapboxgl.Map({
        container: nodeRef.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: homeRef.current.center,
        zoom: homeRef.current.zoom,
        projection,
        attributionControl: true,
        cooperativeGestures: !fullPage,
        maxZoom: 17,
      });
      mapRef.current = map;
      map.addControl(new mapboxgl.NavigationControl({ showCompass: true, visualizePitch: false }), 'top-right');

      map.on('load', () => {
        if (cancelled) return;
        if (projection === 'globe') {
          map.setFog({
            color: 'rgb(250, 247, 240)',
            'high-color': 'rgb(232, 224, 205)',
            'horizon-blend': 0.04,
            'space-color': 'rgb(241, 236, 224)',
            'star-intensity': 0,
          });
        }

        map.addSource('r', {
          type: 'geojson',
          data: toGeo(recs),
          cluster: true,
          clusterRadius: 46,
          clusterMaxZoom: 14,
        });

        // Cluster bubbles — gold, sized by count
        map.addLayer({
          id: 'clusters', type: 'circle', source: 'r', filter: ['has', 'point_count'],
          paint: {
            'circle-color': ['step', ['get', 'point_count'], GOLD_SOFT, 50, GOLD, 500, '#8E6A38'],
            'circle-opacity': 0.92,
            'circle-radius': ['step', ['get', 'point_count'], 15, 25, 20, 100, 26, 750, 34],
            'circle-stroke-width': 1.2,
            'circle-stroke-color': INK,
          },
        });
        map.addLayer({
          id: 'cluster-count', type: 'symbol', source: 'r', filter: ['has', 'point_count'],
          layout: {
            'text-field': ['get', 'point_count_abbreviated'],
            'text-font': ['DIN Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
          },
          paint: { 'text-color': INK },
        });

        // Unclustered — ink dot with gold halo
        map.addLayer({
          id: 'point-halo', type: 'circle', source: 'r', filter: ['!', ['has', 'point_count']],
          paint: { 'circle-radius': 7, 'circle-color': GOLD, 'circle-opacity': 0.28 },
        });
        map.addLayer({
          id: 'points', type: 'circle', source: 'r', filter: ['!', ['has', 'point_count']],
          paint: {
            'circle-radius': 4, 'circle-color': INK,
            'circle-stroke-width': 1.4, 'circle-stroke-color': PAPER,
          },
        });

        // Interactions
        map.on('click', 'clusters', (e) => {
          const f = map.queryRenderedFeatures(e.point, { layers: ['clusters'] })[0];
          const id = f.properties.cluster_id;
          map.getSource('r').getClusterExpansionZoom(id, (err, zoom) => {
            if (err) return;
            map.easeTo({ center: f.geometry.coordinates, zoom: zoom + 0.2, duration: 700 });
          });
        });
        const popup = new mapboxgl.Popup({ className: 'epi-pop', closeButton: true, maxWidth: '280px', offset: 12 });
        map.on('click', 'points', (e) => {
          const f = e.features[0];
          const coords = f.geometry.coordinates.slice();
          popup.setLngLat(coords).setHTML(popupHTML(f.properties)).addTo(map);
        });
        ['clusters', 'points'].forEach((layer) => {
          map.on('mouseenter', layer, () => { map.getCanvas().style.cursor = 'pointer'; });
          map.on('mouseleave', layer, () => { map.getCanvas().style.cursor = ''; });
        });

        if (!cancelled) setStatus('ready');
      });

      map.on('error', () => { if (!cancelled && status === 'loading') setStatus('error'); });
    })();

    return () => { cancelled = true; if (map) map.remove(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Search / filter ────────────────────────────────────────────────
  const applyFilter = useCallback((raw) => {
    const map = mapRef.current;
    if (!map || !map.getSource('r')) return;
    const q = raw.trim().toLowerCase();
    const recs = dataRef.current;
    const subset = q
      ? recs.filter((r) => `${r.n} ${r.c} ${r.co}`.toLowerCase().includes(q))
      : recs;
    map.getSource('r').setData(toGeo(subset));
    setVisible(subset.length);

    if (q && subset.length) {
      const b = new mapboxgl.LngLatBounds();
      subset.slice(0, 3000).forEach((r) => b.extend([r.lng, r.lat]));
      map.fitBounds(b, { padding: 90, maxZoom: 12, duration: 800 });
    } else if (!q) {
      map.easeTo({ ...homeRef.current, duration: 800 });
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => applyFilter(query), 220);
    return () => clearTimeout(t);
  }, [query, applyFilter]);

  const resetView = () => {
    setQuery('');
    const map = mapRef.current;
    if (map) map.easeTo({ ...homeRef.current, duration: 800 });
  };

  // ── Fallback panels (no token / no data) ───────────────────────────
  if (status === 'no-token' || status === 'no-data') {
    return <MapFallback status={status} height={fullPage ? '100%' : height} fullPage={fullPage} />;
  }

  // ── Render ─────────────────────────────────────────────────────────
  return (
    <div style={{ position: 'relative', width: '100%', height: fullPage ? '100%' : height }}>
      <div ref={nodeRef} style={{ position: 'absolute', inset: 0, background: tokens.paperDeep }} />

      {/* Floating editorial panel */}
      {(showSearch || fullPage) && (
        <div style={{
          position: 'absolute', top: fullPage ? 24 : 16, left: fullPage ? 24 : 16,
          zIndex: 5, width: fullPage ? 340 : 300, maxWidth: 'calc(100% - 32px)',
          background: 'rgba(250,247,240,.94)', backdropFilter: 'blur(6px)',
          border: `1px solid ${INK}`, padding: '1.4rem 1.4rem 1.25rem',
        }}>
          <div style={{
            fontFamily: tokens.sans, fontSize: '10px', letterSpacing: '.3em',
            textTransform: 'uppercase', color: GOLD, marginBottom: '.5rem',
          }}>The Atlas</div>
          <h2 style={{
            fontFamily: tokens.serif, fontWeight: 500,
            fontSize: fullPage ? '2rem' : '1.6rem', lineHeight: 1.02,
            letterSpacing: '-.01em', margin: '0 0 .9rem', color: INK,
          }}>
            Every table, <em style={{ fontStyle: 'italic', color: GOLD }}>charted</em>.
          </h2>

          <div style={{ position: 'relative', borderBottom: `1px solid ${INK}`, marginBottom: '.85rem' }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a restaurant, city, or country…"
              style={{
                width: '100%', background: 'transparent', border: 'none', outline: 'none',
                padding: '8px 24px 8px 0', fontFamily: tokens.body,
                fontSize: '1rem', color: INK, fontStyle: query ? 'normal' : 'italic',
              }}
            />
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={INK}
              strokeWidth="1.6" strokeLinecap="round"
              style={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            fontFamily: tokens.sans, fontSize: '10px', letterSpacing: '.24em',
            textTransform: 'uppercase', color: tokens.inkSoft,
          }}>
            <span>
              <span style={{
                fontFamily: tokens.serif, fontSize: '1.25rem', color: INK,
                letterSpacing: 0, marginRight: '.5em',
                fontVariantNumeric: 'lining-nums tabular-nums',
              }}>{visible.toLocaleString()}</span>
              {query ? 'matches' : 'tables'}
            </span>
            {query && (
              <button onClick={resetView} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: tokens.sans, fontSize: '10px', letterSpacing: '.24em',
                textTransform: 'uppercase', color: GOLD, padding: 0,
              }}>Reset ×</button>
            )}
          </div>
        </div>
      )}

      {/* Loading veil */}
      {status === 'loading' && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: tokens.paperDeep,
          fontFamily: tokens.serif, fontStyle: 'italic', fontSize: '1.2rem', color: GOLD,
        }}>
          Charting the world's tables…
        </div>
      )}

      {/* Legend (full page only) */}
      {fullPage && status === 'ready' && (
        <div style={{
          position: 'absolute', bottom: 28, left: 24, zIndex: 5,
          background: 'rgba(250,247,240,.94)', border: `1px solid ${INK}`,
          padding: '.7rem 1rem', display: 'flex', gap: '1.4rem', alignItems: 'center',
          fontFamily: tokens.sans, fontSize: '9.5px', letterSpacing: '.22em',
          textTransform: 'uppercase', color: tokens.inkSoft,
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: GOLD, border: `1px solid ${INK}`, display: 'inline-block' }} />
            Cluster
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: INK, border: `2px solid ${PAPER}`, boxShadow: `0 0 0 1px ${GOLD}`, display: 'inline-block' }} />
            Restaurant
          </span>
        </div>
      )}
    </div>
  );
};

// ── Fallback (pre-token / pre-geocode) ────────────────────────────────
const MapFallback = ({ status, height, fullPage }) => {
  const msg = status === 'no-token'
    ? {
        kicker: 'Setup · Step 1',
        title: 'The Atlas awaits its token.',
        body: 'Add your Mapbox access token to a .env file to bring the world map to life.',
        code: 'VITE_MAPBOX_TOKEN=pk.…   (see .env.example)',
      }
    : {
        kicker: 'Setup · Step 2',
        title: 'The tables are being charted.',
        body: 'Your token is set. Now geocode all 12,650 addresses into map coordinates — a one-time batch (~25 min).',
        code: 'npm run geocode',
      };
  return (
    <div style={{
      position: 'relative', width: '100%', height,
      minHeight: fullPage ? '70vh' : 420,
      background: tokens.paperDeep,
      border: `1px solid ${tokens.rule}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0, opacity: .5,
        backgroundImage: `radial-gradient(circle at 50% 50%, ${tokens.rule} 1px, transparent 1.5px)`,
        backgroundSize: '30px 30px',
      }} />
      <div style={{ position: 'relative', textAlign: 'center', maxWidth: 480, padding: '2rem' }}>
        <div style={{
          fontFamily: tokens.sans, fontSize: '10px', letterSpacing: '.3em',
          textTransform: 'uppercase', color: GOLD, marginBottom: '.8rem',
        }}>{msg.kicker}</div>
        <h3 style={{
          fontFamily: tokens.serif, fontWeight: 400,
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.1,
          letterSpacing: '-.01em', color: tokens.ink, margin: '0 0 1rem',
        }}>{msg.title}</h3>
        <p style={{
          fontFamily: tokens.body, fontStyle: 'italic', fontSize: '1.05rem',
          color: tokens.inkSoft, lineHeight: 1.6, margin: '0 0 1.5rem',
        }}>{msg.body}</p>
        <code style={{
          display: 'inline-block', fontFamily: 'ui-monospace, Menlo, monospace',
          fontSize: '.82rem', color: tokens.ink, background: tokens.paper,
          border: `1px solid ${tokens.ink}`, padding: '.6rem 1rem',
        }}>{msg.code}</code>
      </div>
    </div>
  );
};

export default WorldMap;

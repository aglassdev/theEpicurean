import React, { useEffect, useRef, useState, useCallback } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { tokens } from './EpiChrome';

const DATA_URL = '/data/restaurants-geo.json';
// OpenFreeMap — free vector tiles, no API key, no signup. "positron" = clean/minimal.
const STYLE_URL = 'https://tiles.openfreemap.org/styles/positron';

// ── Palette (editorial) ───────────────────────────────────────────
const INK = '#1F1A14', GOLD = '#A8824A', GOLD_SOFT = '#C8A270', PAPER = '#FAF7F0';

// ── Gold teardrop pin marker, drawn to a canvas for MapLibre addImage ──
function makePin() {
  const w = 28, h = 38, dpr = 2;
  const cv = document.createElement('canvas');
  cv.width = w * dpr; cv.height = h * dpr;
  const ctx = cv.getContext('2d');
  ctx.scale(dpr, dpr);
  const cx = w / 2, cy = 12, r = 10.5, tipY = h - 1.5;
  const tear = (rr) => {
    ctx.beginPath();
    ctx.moveTo(cx, tipY);
    ctx.lineTo(cx + rr * 0.7071, cy + rr * 0.7071);
    ctx.arc(cx, cy, rr, Math.PI / 4, (Math.PI * 3) / 4, true);
    ctx.lineTo(cx, tipY);
    ctx.closePath();
  };
  tear(r); ctx.fillStyle = INK; ctx.fill();          // ink outline
  tear(r - 1.6); ctx.fillStyle = GOLD; ctx.fill();   // gold body
  ctx.beginPath(); ctx.arc(cx, cy, r * 0.34, 0, Math.PI * 2);
  ctx.fillStyle = PAPER; ctx.fill();                 // inner dot
  const { data } = ctx.getImageData(0, 0, cv.width, cv.height);
  return { width: cv.width, height: cv.height, data, pixelRatio: dpr };
}

// ── GeoJSON builder ───────────────────────────────────────────────
const toGeo = (recs) => ({
  type: 'FeatureCollection',
  features: recs.map((r) => ({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [r.lng, r.lat] },
    properties: { n: r.n, a: r.a || '', c: r.c || '', co: r.co || '', w: r.w || '', ap: r.ap ? 1 : 0 },
  })),
});

// ── One-time style injection for popups + controls ────────────────
const injectStyles = () => {
  if (document.getElementById('epi-map-styles')) return;
  const s = document.createElement('style');
  s.id = 'epi-map-styles';
  s.innerHTML = `
    .maplibregl-popup.epi-pop .maplibregl-popup-content {
      background: ${PAPER}; border: 1px solid ${INK}; border-radius: 0;
      padding: 16px 18px; box-shadow: 0 12px 30px rgba(31,26,20,.18);
      font-family: "EB Garamond", Georgia, serif; max-width: 260px;
    }
    .maplibregl-popup.epi-pop .maplibregl-popup-close-button {
      color: ${INK}; font-size: 18px; padding: 2px 7px; background: none;
    }
    .maplibregl-popup.epi-pop.maplibregl-popup-anchor-bottom .maplibregl-popup-tip { border-top-color: ${INK}; }
    .maplibregl-popup.epi-pop.maplibregl-popup-anchor-top .maplibregl-popup-tip { border-bottom-color: ${INK}; }
    .maplibregl-popup.epi-pop.maplibregl-popup-anchor-left .maplibregl-popup-tip { border-right-color: ${INK}; }
    .maplibregl-popup.epi-pop.maplibregl-popup-anchor-right .maplibregl-popup-tip { border-left-color: ${INK}; }
    .maplibregl-ctrl-group { border-radius: 0 !important; border: 1px solid ${INK} !important; box-shadow: none !important; }
    .maplibregl-ctrl-group button { border-radius: 0 !important; }
    .epi-kicker { font-family: "Jost", sans-serif; font-size: 9.5px; letter-spacing: .26em; text-transform: uppercase; color: ${GOLD}; margin-bottom: 5px; }
    .epi-pop-name { font-family: "Cormorant Garamond", serif; font-weight: 600; font-size: 1.45rem; line-height: 1.12; color: ${INK}; margin-bottom: 6px; }
    .epi-pop-addr { font-style: italic; font-size: .92rem; color: #5C544A; line-height: 1.4; margin-bottom: 10px; }
    .epi-pop-link { font-family: "Jost", sans-serif; font-size: 10px; letter-spacing: .24em; text-transform: uppercase; color: ${INK}; text-decoration: none; border-bottom: 1px solid ${GOLD}; padding-bottom: 2px; }
    .epi-pop-link:hover { color: ${GOLD}; }
  `;
  document.head.appendChild(s);
};

const esc = (str) => String(str).replace(/[&<>"]/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
));

const popupHTML = (p) => {
  const loc = [p.c, p.co].filter(Boolean).join(' · ');
  const site = p.w
    ? `<a class="epi-pop-link" href="${esc(p.w)}" target="_blank" rel="noopener noreferrer">Visit site →</a>`
    : '';
  return `
    <div>
      ${loc ? `<div class="epi-kicker">${esc(loc)}</div>` : ''}
      <div class="epi-pop-name">${esc(p.n)}</div>
      ${p.a ? `<div class="epi-pop-addr">${esc(p.a)}</div>` : ''}
      ${site}
    </div>`;
};

const WorldMap = ({ fullPage = false, showSearch = false, height = '70vh', projection = 'mercator' }) => {
  const nodeRef = useRef(null);
  const mapRef = useRef(null);
  const dataRef = useRef([]);
  const homeRef = useRef({ center: [8, 25], zoom: fullPage ? 1.45 : 1.05 });
  const [status, setStatus] = useState('loading'); // loading | ready | no-data | error
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(0);
  const [query, setQuery] = useState('');

  // ── Init ─────────────────────────────────────────────────────────
  useEffect(() => {
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
      if (!recs.length) { if (!cancelled) setStatus('no-data'); return; }
      dataRef.current = recs;
      if (cancelled) return;
      setTotal(recs.length);
      setVisible(recs.length);

      map = new maplibregl.Map({
        container: nodeRef.current,
        style: STYLE_URL,
        center: homeRef.current.center,
        zoom: homeRef.current.zoom,
        cooperativeGestures: !fullPage,
        maxZoom: 18,
        attributionControl: { compact: true },
      });
      mapRef.current = map;
      map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right');

      map.on('load', () => {
        if (cancelled) return;
        if (projection === 'globe' && typeof map.setProjection === 'function') {
          try { map.setProjection({ type: 'globe' }); } catch { /* mercator fallback */ }
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
            'text-font': ['Noto Sans Bold'],
            'text-size': 12,
          },
          paint: { 'text-color': INK },
        });

        // Unclustered — gold teardrop pin markers (approximate ones dimmed).
        if (!map.hasImage('epi-pin')) {
          const pin = makePin();
          map.addImage('epi-pin', pin, { pixelRatio: pin.pixelRatio });
        }
        map.addLayer({
          id: 'points', type: 'symbol', source: 'r', filter: ['!', ['has', 'point_count']],
          layout: {
            'icon-image': 'epi-pin',
            'icon-size': 0.9,
            'icon-anchor': 'bottom',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
          },
          paint: {
            'icon-opacity': ['case', ['==', ['get', 'ap'], 1], 0.55, 1],
          },
        });

        // Cluster click → zoom to expand
        map.on('click', 'clusters', (e) => {
          const f = map.queryRenderedFeatures(e.point, { layers: ['clusters'] })[0];
          if (!f) return;
          const id = f.properties.cluster_id;
          const src = map.getSource('r');
          Promise.resolve(src.getClusterExpansionZoom(id))
            .then((zoom) => map.easeTo({ center: f.geometry.coordinates, zoom: (zoom ?? map.getZoom()) + 0.2, duration: 700 }))
            .catch(() => {});
        });

        const popup = new maplibregl.Popup({ className: 'epi-pop', closeButton: true, maxWidth: '280px', offset: 12 });
        map.on('click', 'points', (e) => {
          const f = e.features[0];
          popup.setLngLat(f.geometry.coordinates.slice()).setHTML(popupHTML(f.properties)).addTo(map);
        });
        ['clusters', 'points'].forEach((layer) => {
          map.on('mouseenter', layer, () => { map.getCanvas().style.cursor = 'pointer'; });
          map.on('mouseleave', layer, () => { map.getCanvas().style.cursor = ''; });
        });

        map.resize(); // ensure canvas matches the container if it sized late
        if (!cancelled) setStatus('ready');
      });

      map.on('error', (e) => {
        // Style/tile load failures shouldn't wipe an already-ready map.
        if (!cancelled) setStatus((s) => (s === 'loading' ? 'error' : s));
        if (e && e.error) console.warn('Map error:', e.error.message || e.error);
      });
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
      ? recs.filter((r) => `${r.c} ${r.co}`.toLowerCase().includes(q))
      : recs;
    map.getSource('r').setData(toGeo(subset));
    setVisible(subset.length);

    if (q && subset.length) {
      const b = new maplibregl.LngLatBounds();
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

  // ── Fallback (data not geocoded yet) ───────────────────────────────
  if (status === 'no-data') {
    return <MapFallback height={fullPage ? '100%' : height} fullPage={fullPage} />;
  }

  // ── Render ─────────────────────────────────────────────────────────
  // Concrete minHeight guards against the flex/% chain collapsing the map
  // container to 0px (which shows as a blank white page).
  return (
    <div style={{
      position: 'relative', width: '100%',
      height: fullPage ? '100%' : height,
      minHeight: fullPage ? 'calc(100vh - 92px)' : height,
    }}>
      <div ref={nodeRef} style={{ position: 'absolute', inset: 0, background: tokens.paperDeep }} />

      {(showSearch || fullPage) && (
        <div style={{
          position: 'absolute', top: fullPage ? 24 : 16, left: fullPage ? 24 : 16,
          zIndex: 5, width: fullPage ? 340 : 300, maxWidth: 'calc(100% - 32px)',
          background: 'rgba(250,247,240,.94)', backdropFilter: 'blur(6px)',
          border: `1px solid ${INK}`, padding: '.7rem .9rem',
          display: 'flex', alignItems: 'center', gap: '.6rem',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={INK}
            strokeWidth="1.6" strokeLinecap="round" style={{ flex: '0 0 auto' }}>
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a city or country…"
            style={{
              flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none',
              fontFamily: tokens.body, fontSize: '1rem', color: INK,
              fontStyle: query ? 'normal' : 'italic',
            }}
          />
          {query && (
            <button onClick={resetView} aria-label="Clear search" style={{
              flex: '0 0 auto', background: 'none', border: 'none', cursor: 'pointer',
              color: GOLD, fontSize: '18px', lineHeight: 1, padding: 0,
            }}>×</button>
          )}
        </div>
      )}

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
            <span style={{
              width: 11, height: 11, background: GOLD, border: `1px solid ${INK}`,
              borderRadius: '50% 50% 50% 0', transform: 'rotate(45deg)', display: 'inline-block',
            }} />
            Restaurant
          </span>
        </div>
      )}
    </div>
  );
};

// ── Fallback (pre-geocode) ────────────────────────────────────────────
const MapFallback = ({ height, fullPage }) => (
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
    <div style={{ position: 'relative', textAlign: 'center', maxWidth: 500, padding: '2rem' }}>
      <div style={{
        fontFamily: tokens.sans, fontSize: '10px', letterSpacing: '.3em',
        textTransform: 'uppercase', color: GOLD, marginBottom: '.8rem',
      }}>The Atlas · Setup</div>
      <h3 style={{
        fontFamily: tokens.serif, fontWeight: 400,
        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.1,
        letterSpacing: '-.01em', color: tokens.ink, margin: '0 0 1rem',
      }}>The tables are being charted.</h3>
      <p style={{
        fontFamily: tokens.body, fontStyle: 'italic', fontSize: '1.05rem',
        color: tokens.inkSoft, lineHeight: 1.6, margin: '0 0 1.5rem',
      }}>
        Geocode all 12,650 addresses into map coordinates — a one-time batch.
        No account needed; add a free LocationIQ key to <code>.env</code> for
        faster, more accurate results.
      </p>
      <code style={{
        display: 'inline-block', fontFamily: 'ui-monospace, Menlo, monospace',
        fontSize: '.82rem', color: tokens.ink, background: tokens.paper,
        border: `1px solid ${tokens.ink}`, padding: '.6rem 1rem',
      }}>npm run geocode</code>
    </div>
  </div>
);

export default WorldMap;

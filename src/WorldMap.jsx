import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
    properties: { n: r.n, a: r.a || '', c: r.c || '', co: r.co || '', w: r.w || '', p: r.p || '', ap: r.ap ? 1 : 0 },
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
    .epi-pop-addr { font-style: normal; font-size: .92rem; color: #5C544A; line-height: 1.4; margin-bottom: 10px; }
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
  // Prefer the in-guide detail page; fall back to the restaurant's own site.
  const link = p.p
    ? `<a class="epi-pop-link" data-guide href="${esc(p.p)}">View in the guide →</a>`
    : (p.w ? `<a class="epi-pop-link" href="${esc(p.w)}" target="_blank" rel="noopener noreferrer">Visit site →</a>` : '');
  return `
    <div>
      ${loc ? `<div class="epi-kicker">${esc(loc)}</div>` : ''}
      <div class="epi-pop-name">${esc(p.n)}</div>
      ${p.a ? `<div class="epi-pop-addr">${esc(p.a)}</div>` : ''}
      ${link}
    </div>`;
};

// ── Gazetteer ─────────────────────────────────────────────────────────
// Places to search, built from the pins themselves so every suggestion has real
// coordinates to fly to. The `c` and `co` fields are free text from the source
// datasets, so entries that are plainly not place names are dropped.

const isPlaceName = (v) =>
  typeof v === 'string' &&
  v.trim().length > 1 &&
  /\p{L}/u.test(v) &&        // must contain a letter, so '9620' is out
  !/^\d/.test(v.trim());

function buildGazetteer(recs) {
  const cities = new Map();
  const countries = new Map();
  const add = (bucket, key, label, kind, lng, lat) => {
    let p = bucket.get(key);
    if (!p) {
      p = { key, label, kind, count: 0, bounds: [lng, lat, lng, lat] };
      bucket.set(key, p);
    }
    p.count++;
    const b = p.bounds;
    if (lng < b[0]) b[0] = lng;
    if (lat < b[1]) b[1] = lat;
    if (lng > b[2]) b[2] = lng;
    if (lat > b[3]) b[3] = lat;
  };

  for (const r of recs) {
    const city = isPlaceName(r.c) ? r.c.trim() : null;
    const country = isPlaceName(r.co) ? r.co.trim() : null;
    if (city) {
      add(cities, `${city.toLowerCase()}|${(country || '').toLowerCase()}`,
        country ? `${city}, ${country}` : city, 'city', r.lng, r.lat);
    }
    if (country) add(countries, country.toLowerCase(), country, 'country', r.lng, r.lat);
  }

  // A city name that appears once is usually a stray label, not a destination.
  return [...countries.values(), ...[...cities.values()].filter((c) => c.count >= 2)]
    .sort((a, b) => b.count - a.count);
}

/** Prefix matches first, then substring, each by how many tables sit there. */
function searchPlaces(places, raw, limit = 8) {
  const q = raw.trim().toLowerCase();
  if (q.length < 2) return [];
  const starts = [];
  const contains = [];
  for (const p of places) {
    const l = p.label.toLowerCase();
    if (l.startsWith(q)) starts.push(p);
    else if (l.includes(q)) contains.push(p);
    if (starts.length >= limit) break;
  }
  return [...starts, ...contains].slice(0, limit);
}

const WorldMap = ({ fullPage = false, showSearch = false, height = '70vh', projection = 'mercator' }) => {
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const mapRef = useRef(null);
  const dataRef = useRef([]);
  const homeRef = useRef({ center: [10, 28], zoom: fullPage ? 1.85 : 1.05 });
  const placesRef = useRef([]);
  const [status, setStatus] = useState('loading'); // loading | ready | no-data | error
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [highlight, setHighlight] = useState(0);
  const [open, setOpen] = useState(false);

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
      placesRef.current = buildGazetteer(recs);
      if (cancelled) return;

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
          // In-guide links navigate via the router (no full reload).
          const guide = popup.getElement()?.querySelector('[data-guide]');
          if (guide) guide.addEventListener('click', (ev) => {
            ev.preventDefault();
            popup.remove();
            navigate(guide.getAttribute('href'));
          });
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

  // ── Search ─────────────────────────────────────────────────────────
  // Searching moves the camera; it never hides pins. A reader looking up Lyon
  // still wants to see that Vienne and Valence are an hour down the road.
  const flyToPlace = useCallback((place) => {
    const map = mapRef.current;
    if (!map || !place) return;
    setOpen(false);
    setQuery(place.label);
    const [w, s2, e, n2] = place.bounds;
    if (w === e && s2 === n2) {
      map.easeTo({ center: [w, s2], zoom: place.kind === 'city' ? 12 : 5, duration: 900 });
    } else {
      map.fitBounds([[w, s2], [e, n2]], {
        padding: 80,
        maxZoom: place.kind === 'city' ? 13 : 7,
        duration: 900,
      });
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setSuggestions(searchPlaces(placesRef.current, query)), 120);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => { setHighlight(0); }, [suggestions]);

  const onSearchKeyDown = (e) => {
    if (!open || !suggestions.length) {
      if (e.key === 'ArrowDown' && suggestions.length) { setOpen(true); e.preventDefault(); }
      return;
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlight((h) => (h + 1) % suggestions.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlight((h) => (h - 1 + suggestions.length) % suggestions.length); }
    else if (e.key === 'Enter') { e.preventDefault(); flyToPlace(suggestions[highlight]); }
    else if (e.key === 'Escape') { setOpen(false); }
  };

  const resetView = () => {
    setQuery('');
    setSuggestions([]);
    setOpen(false);
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
        }}>
          <div style={{
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
              onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
              onKeyDown={onSearchKeyDown}
              onFocus={() => setOpen(true)}
              // Let a click on a suggestion land before the list unmounts.
              onBlur={() => setTimeout(() => setOpen(false), 120)}
              placeholder="Search a city or country…"
              aria-label="Search a city or country"
              role="combobox" aria-expanded={open && suggestions.length > 0}
              aria-controls="epi-map-suggestions" aria-autocomplete="list"
              aria-activedescendant={open && suggestions.length ? `epi-place-${highlight}` : undefined}
              style={{
                flex: 1, minWidth: 0, background: 'transparent', border: 'none', outline: 'none',
                fontFamily: tokens.body, fontSize: '1rem', color: INK,
                fontStyle: 'normal',
              }}
            />
            {query && (
              <button onClick={resetView} aria-label="Clear search" style={{
                flex: '0 0 auto', background: 'none', border: 'none', cursor: 'pointer',
                color: GOLD, fontSize: '18px', lineHeight: 1, padding: 0,
              }}>&times;</button>
            )}
          </div>

          {open && suggestions.length > 0 && (
            <ul id="epi-map-suggestions" role="listbox" style={{
              listStyle: 'none', margin: 0, padding: 0,
              background: 'rgba(250,247,240,.98)', backdropFilter: 'blur(6px)',
              border: `1px solid ${INK}`, borderTop: 'none',
              maxHeight: 300, overflowY: 'auto',
            }}>
              {suggestions.map((p2, i) => (
                <li key={p2.key} id={`epi-place-${i}`} role="option" aria-selected={i === highlight}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onMouseEnter={() => setHighlight(i)}
                    onClick={() => flyToPlace(p2)}
                    style={{
                      width: '100%', textAlign: 'left', cursor: 'pointer',
                      background: i === highlight ? 'rgba(168,130,74,.12)' : 'transparent',
                      border: 'none', borderBottom: `1px solid ${tokens.rule}`,
                      padding: '.6rem .9rem', display: 'flex', alignItems: 'baseline',
                      justifyContent: 'space-between', gap: '.8rem',
                    }}
                  >
                    <span style={{ fontFamily: tokens.body, fontSize: '.98rem', color: INK, minWidth: 0 }}>
                      {p2.label}
                    </span>
                    <span style={{
                      fontFamily: tokens.sans, fontSize: '9px', letterSpacing: '.2em',
                      textTransform: 'uppercase', color: tokens.inkMute, whiteSpace: 'nowrap',
                    }}>
                      {p2.kind === 'country' ? 'Country' : 'City'}
                      <span style={{ color: tokens.rule, margin: '0 .5em' }}>·</span>
                      {p2.count.toLocaleString()}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {status === 'loading' && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: tokens.paperDeep,
          fontFamily: tokens.serif, fontStyle: 'normal', fontSize: '1.2rem', color: GOLD,
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
      <h3 style={{
        fontFamily: tokens.serif, fontWeight: 400,
        fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.08,
        letterSpacing: '-.015em', color: tokens.ink, margin: '0 0 1rem',
      }}>The tables are being charted.</h3>
      <p style={{
        fontFamily: tokens.body, fontStyle: 'normal', fontSize: '1.05rem',
        color: tokens.inkSoft, lineHeight: 1.6, margin: '0 0 1.5rem',
      }}>
        Geocode every address into map coordinates. A one-time batch.
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

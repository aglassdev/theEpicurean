import React, { useEffect, useRef } from 'react';
import { tokens, useMediaQuery } from './EpiChrome';

const RAD = Math.PI / 180;
const TILT = 16 * RAD;        // northern hemisphere leaning gently toward the reader
const SPIN = 5.5;             // degrees per second
const GRATICULE_STEP = 30;

/** Latitude trig is constant per vertex, so cache it once instead of every frame. */
const prepareLine = (line) => {
  const n = line.length;
  const lng = new Float64Array(n);
  const sinP = new Float64Array(n);
  const cosP = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const p = line[i][1] * RAD;
    lng[i] = line[i][0] * RAD;
    sinP[i] = Math.sin(p);
    cosP[i] = Math.cos(p);
  }
  return { n, lng, sinP, cosP };
};

const graticule = () => {
  const lines = [];
  for (let lngDeg = -180; lngDeg < 180; lngDeg += GRATICULE_STEP) {
    const arc = [];
    for (let lat = -90; lat <= 90; lat += 3) arc.push([lngDeg, lat]);
    lines.push(prepareLine(arc));
  }
  for (let latDeg = -60; latDeg <= 60; latDeg += GRATICULE_STEP) {
    const arc = [];
    for (let lng = -180; lng <= 180; lng += 3) arc.push([lng, latDeg]);
    lines.push(prepareLine(arc));
  }
  return lines;
};

/**
 * A slowly turning orthographic globe, drawn to canvas.
 *
 * Coastlines and country borders come from Natural Earth 110m, reduced to plain
 * polylines by buildDestinations.js; the gold dots are real restaurant coordinates
 * thinned to one per ~1.6° cell. So the sphere is a real map and the dots sit on
 * recognisable land. Holds still under prefers-reduced-motion.
 */
const Globe = ({ maxSize = 460 }) => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const dataRef = useRef({ points: [], coast: [], borders: [], grid: graticule() });
  const drawRef = useRef(null);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    let live = true;
    fetch('/data/globe.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!live || !d) return;
        dataRef.current = {
          grid: dataRef.current.grid,
          coast: (d.coast || []).map(prepareLine),
          borders: (d.borders || []).map(prepareLine),
          points: (d.points || []).map(([lng, lat]) => {
            const p = lat * RAD;
            return { lng: lng * RAD, sinP: Math.sin(p), cosP: Math.cos(p) };
          }),
        };
        // Under reduced motion nothing else will repaint, so draw on arrival.
        drawRef.current?.();
      })
      .catch(() => {});
    return () => { live = false; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box) return undefined;

    const ctx = canvas.getContext('2d');
    let raf;
    let size = 0;
    let rotation = -20 * RAD;
    let last = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Measure the box, never the canvas: the canvas is taken out of flow so it
      // can't widen its own container and pin itself at the desktop size.
      size = Math.max(160, box.clientWidth);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const cx = size / 2;
      const cy = size / 2;
      const R = size / 2 - 2;
      const sinT = Math.sin(TILT);
      const cosT = Math.cos(TILT);
      const { points, coast, borders, grid } = dataRef.current;

      ctx.clearRect(0, 0, size, size);

      // Sphere. A faint lift off the ink so the disc reads as a body, not a hole.
      const grad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.1, cx, cy, R);
      grad.addColorStop(0, 'rgba(200, 162, 112, 0.10)');
      grad.addColorStop(1, 'rgba(200, 162, 112, 0.015)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Stroke a set of polylines, breaking each wherever it crosses the horizon.
      const strokeLines = (lines, color, width) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.beginPath();
        for (let l = 0; l < lines.length; l++) {
          const { n, lng, sinP, cosP } = lines[l];
          let drawing = false;
          for (let i = 0; i < n; i++) {
            const d = lng[i] - rotation;
            const cosD = Math.cos(d);
            if (sinT * sinP[i] + cosT * cosP[i] * cosD <= 0) { drawing = false; continue; }
            const x = cx + R * cosP[i] * Math.sin(d);
            const y = cy - R * (cosT * sinP[i] - sinT * cosP[i] * cosD);
            if (drawing) ctx.lineTo(x, y);
            else { ctx.moveTo(x, y); drawing = true; }
          }
        }
        ctx.stroke();
      };

      strokeLines(grid, 'rgba(200, 162, 112, 0.10)', 0.6);
      strokeLines(borders, 'rgba(200, 162, 112, 0.26)', 0.6);
      strokeLines(coast, 'rgba(216, 186, 143, 0.66)', 0.9);

      // Limb
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(200, 162, 112, 0.42)';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // Tables. Alpha follows cosc so points sink away at the limb instead of
      // piling into a hard rim.
      ctx.fillStyle = tokens.goldSoft;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const d = p.lng - rotation;
        const cosD = Math.cos(d);
        const cosc = sinT * p.sinP + cosT * p.cosP * cosD;
        if (cosc <= 0) continue;
        ctx.globalAlpha = 0.2 + 0.75 * cosc;
        ctx.beginPath();
        ctx.arc(
          cx + R * p.cosP * Math.sin(d),
          cy - R * (cosT * p.sinP - sinT * p.cosP * cosD),
          1.15, 0, Math.PI * 2
        );
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!document.hidden) {
        rotation += SPIN * RAD * dt;
        draw();
      }
      raf = requestAnimationFrame(frame);
    };

    drawRef.current = draw;
    resize();
    draw();
    if (!reduceMotion) raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(() => { resize(); draw(); });
    ro.observe(box);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      drawRef.current = null;
    };
  }, [reduceMotion, maxSize]);

  return (
    <div style={{ width: '100%', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
      <div ref={boxRef} style={{ position: 'relative', width: '100%', maxWidth: maxSize, aspectRatio: '1 / 1' }}>
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="A rotating globe of the world, marked with the restaurants charted in the guide."
          style={{ position: 'absolute', inset: 0, display: 'block' }}
        />
      </div>
    </div>
  );
};

export default Globe;

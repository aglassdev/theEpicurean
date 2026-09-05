import React, { useEffect, useRef } from 'react';
import { tokens, useMediaQuery } from './EpiChrome';

const RAD = Math.PI / 180;
const TILT = 16 * RAD;        // northern hemisphere leaning gently toward the reader
const SPIN = 5.5;             // degrees per second
const MERIDIAN_STEP = 30;
const PARALLEL_STEP = 30;

/**
 * A slowly turning orthographic globe, drawn to canvas.
 *
 * The dots are real restaurant coordinates, thinned to one per ~1.6° cell by
 * buildDestinations.js — so the shape that emerges is where the guide actually
 * reaches rather than a decorative scatter. Falls back to the bare wireframe if
 * the sample can't be fetched, and holds still under prefers-reduced-motion.
 */
const Globe = ({ maxSize = 460 }) => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const drawRef = useRef(null);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    let live = true;
    fetch('/data/globe.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!live || !d?.points) return;
        // Pre-convert to radians and cache the trig each point needs every frame.
        pointsRef.current = d.points.map(([lng, lat]) => {
          const p = lat * RAD;
          return { lng: lng * RAD, sinP: Math.sin(p), cosP: Math.cos(p) };
        });
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

    // Orthographic projection. Returns null for the far side of the sphere.
    const project = (lng, sinP, cosP, R, cx, cy) => {
      const d = lng - rotation;
      const cosD = Math.cos(d);
      const cosc = Math.sin(TILT) * sinP + Math.cos(TILT) * cosP * cosD;
      if (cosc <= 0) return null;
      return {
        x: cx + R * cosP * Math.sin(d),
        y: cy - R * (Math.cos(TILT) * sinP - Math.sin(TILT) * cosP * cosD),
        cosc,
      };
    };

    const strokeArc = (coords, R, cx, cy) => {
      ctx.beginPath();
      let drawing = false;
      for (const [lngDeg, latDeg] of coords) {
        const p = latDeg * RAD;
        const pt = project(lngDeg * RAD, Math.sin(p), Math.cos(p), R, cx, cy);
        if (!pt) { drawing = false; continue; }
        if (drawing) ctx.lineTo(pt.x, pt.y);
        else { ctx.moveTo(pt.x, pt.y); drawing = true; }
      }
      ctx.stroke();
    };

    const draw = () => {
      const cx = size / 2;
      const cy = size / 2;
      const R = size / 2 - 2;
      ctx.clearRect(0, 0, size, size);

      // Sphere — a faint lift off the ink so the disc reads as a body, not a hole.
      const grad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.1, cx, cy, R);
      grad.addColorStop(0, 'rgba(200, 162, 112, 0.10)');
      grad.addColorStop(1, 'rgba(200, 162, 112, 0.015)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Graticule
      ctx.lineWidth = 0.7;
      ctx.strokeStyle = 'rgba(200, 162, 112, 0.16)';
      for (let lng = -180; lng < 180; lng += MERIDIAN_STEP) {
        const arc = [];
        for (let lat = -90; lat <= 90; lat += 3) arc.push([lng, lat]);
        strokeArc(arc, R, cx, cy);
      }
      for (let lat = -60; lat <= 60; lat += PARALLEL_STEP) {
        const arc = [];
        for (let lng = -180; lng <= 180; lng += 3) arc.push([lng, lat]);
        strokeArc(arc, R, cx, cy);
      }

      // Limb
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(200, 162, 112, 0.38)';
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // Tables. Alpha follows cosc so points sink away at the limb instead of
      // piling into a hard rim.
      const pts = pointsRef.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const pt = project(p.lng, p.sinP, p.cosP, R, cx, cy);
        if (!pt) continue;
        ctx.globalAlpha = 0.18 + 0.72 * pt.cosc;
        ctx.fillStyle = tokens.goldSoft;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 1.25, 0, Math.PI * 2);
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
          aria-label="A rotating globe marked with the restaurants charted in the guide."
          style={{ position: 'absolute', inset: 0, display: 'block' }}
        />
      </div>
    </div>
  );
};

export default Globe;

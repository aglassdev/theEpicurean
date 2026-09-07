/**
 * optimizeImages.js
 * -----------------
 * Derives web-sized WebP copies of the carousel photography.
 *
 * The source PNGs are ~4096px and 1–14 MB each; ten of them on the home page came
 * to 85 MB over the wire. These derivatives keep the full detail a retina display
 * can actually resolve while cutting that by roughly twenty times.
 *
 *   1600px  standard displays
 *   3200px  retina, and the widest full-bleed the hero ever needs
 *
 * Quality 90 measured at 42.9–49.6 dB PSNR against a lossless downscale of the same
 * source, i.e. visually lossless for photography (>40 dB is the usual threshold).
 * Originals are never modified; they stay as the runtime fallback.
 *
 * Usage: node scripts/optimizeImages.js [--force] [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CAROUSEL } from '../src/carousel.js';
import { LOGOS } from '../src/logos.js';


// sharp is a devDependency and the derivatives are committed, so a build
// environment that skips devDependencies should carry on with what is on disk
// rather than failing.
let sharp;
try {
  ({ default: sharp } = await import('sharp'));
} catch {
  console.warn('  ! sharp not installed — keeping the committed image derivatives');
  process.exit(0);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES = path.join(__dirname, '../public/images');
const COMPONENTS = path.join(__dirname, '../public/components');
const OUT = path.join(IMAGES, 'opt');

const WIDTHS = [1600, 3200];
const QUALITY = 90;
const force = process.argv.includes('--force');
const quiet = process.argv.includes('--quiet');
const verbose = process.argv.includes('--verbose');

fs.mkdirSync(OUT, { recursive: true });

const mb = (n) => (n / 1048576).toFixed(2);

/** Every headerImages entry on a detail page, plus every city banner. */
function headerSources() {
  const found = new Set();
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!e.name.endsWith('.json')) continue;
      let d;
      try { d = JSON.parse(fs.readFileSync(p, 'utf8')); } catch { continue; }
      // City banners live on the listing; restaurant artwork on the detail pages.
      if (typeof d.hero === 'string' && d.hero.startsWith('/images/')) found.add(d.hero);
      for (const i of d.headerImages || []) {
        if (typeof i === 'string' && i.startsWith('/images/')) found.add(i);
      }
    }
  };
  walk(COMPONENTS);
  return found;
}

// Carousel slides and detail-page headers get the same treatment: both are
// full-bleed photography shown at up to half or all of the viewport width.
// Article artwork is named in content/news front matter, compiled into this file.
const articleImages = (() => {
  const f = path.join(__dirname, '../public/data/articles.json');
  if (!fs.existsSync(f)) return [];
  try { return (JSON.parse(fs.readFileSync(f, 'utf8')).articles || []).map((a) => a.image).filter(Boolean); }
  catch { return []; }
})();

const sources = [...new Set([
  ...CAROUSEL.map((s) => s.image),
  ...articleImages,
  ...headerSources(),
])];
let srcBytes = 0;
let outBytes = 0;
let written = 0;
let skipped = 0;
const missing = [];

for (const rel of sources) {
  const base = path.basename(rel, path.extname(rel));
  const src = path.join(IMAGES, path.basename(rel));
  if (!fs.existsSync(src)) { missing.push(rel); continue; }

  const srcStat = fs.statSync(src);
  srcBytes += srcStat.size;
  const meta = await sharp(src).metadata();

  for (const width of WIDTHS) {
    const dest = path.join(OUT, `${base}-${width}.webp`);
    const fresh =
      !force && fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= srcStat.mtimeMs;
    if (fresh) { outBytes += fs.statSync(dest).size; skipped++; continue; }

    await sharp(src)
      // Never upscale: a source narrower than the target just stays its own size,
      // and the srcset descriptor below still describes it honestly.
      .resize({ width, kernel: 'lanczos3', withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(dest);

    outBytes += fs.statSync(dest).size;
    written++;
  }

  if (!quiet && verbose) {
    const after = WIDTHS.reduce(
      (s, w) => s + fs.statSync(path.join(OUT, `${base}-${w}.webp`)).size, 0
    );
    console.log(
      `  ${base.padEnd(18)} ${String(meta.width).padStart(4)}px  ` +
      `${mb(srcStat.size).padStart(6)} MB  ->  ${mb(after).padStart(5)} MB  (both widths)`
    );
  }
}

// ── Source marks ─────────────────────────────────────────────────────────────
// These render at 46px tall but ship at up to 2 MB. They are logotypes with
// transparency, so they get a single 240px-tall copy — enough for a 3x display —
// and whichever of lossless or high-quality lossy comes out smaller. Lossless wins
// on flat vector-like marks; lossy wins on the ones that are really photographs.

let logoSrcBytes = 0;
let logoOutBytes = 0;
let logoWritten = 0;

for (const rel of [...new Set(LOGOS.map((l) => l.icon))]) {
  const base = path.basename(rel, path.extname(rel));
  const src = path.join(IMAGES, path.basename(rel));
  if (!fs.existsSync(src)) { missing.push(rel); continue; }

  const srcStat = fs.statSync(src);
  logoSrcBytes += srcStat.size;
  const dest = path.join(OUT, `${base}-mark.webp`);

  if (!force && fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= srcStat.mtimeMs) {
    logoOutBytes += fs.statSync(dest).size;
    skipped++;
    continue;
  }

  const pipeline = () =>
    sharp(src).resize({ height: 240, fit: 'inside', withoutEnlargement: true });
  const [lossless, lossy] = await Promise.all([
    pipeline().webp({ lossless: true, effort: 6 }).toBuffer(),
    pipeline().webp({ quality: 92, effort: 6, alphaQuality: 100 }).toBuffer(),
  ]);
  fs.writeFileSync(dest, lossless.length <= lossy.length ? lossless : lossy);

  logoOutBytes += fs.statSync(dest).size;
  logoWritten++;
}

if (missing.length) {
  console.error(`\n✗ missing source images:\n   ${missing.join('\n   ')}`);
  process.exitCode = 1;
}

if (!quiet) {
  console.log(`
  source marks   ${mb(logoSrcBytes)} MB  ->  ${mb(logoOutBytes)} MB  (${logoWritten} written)

  ${written + logoWritten} written, ${skipped} already current
  photography    ${mb(srcBytes)} MB  ->  ${mb(outBytes)} MB across both widths
  a 2x viewer loads the 3200px set; a 1x viewer the 1600px set
`);
}

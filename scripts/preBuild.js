import { rename, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, '../src');
const tempDir = join(__dirname, '../temp-restaurants');

console.log('Pre-build: Moving restaurant components to temp directory...');

// Create temp directory
if (!existsSync(tempDir)) {
  await mkdir(tempDir, { recursive: true });
}

// List of country directories to move
const countries = [
  'albania', 'andorra', 'argentina', 'australia', 'austria', 'azerbaijan',
  'bahamas', 'bahrain', 'barbados', 'belgium', 'bosnia-and-herzegovina',
  'brazil', 'cambodia', 'canada', 'chile', 'china', 'colombia', 'costa-rica',
  'croatia', 'cyprus', 'czechia', 'denmark', 'dominican-republic', 'ecuador',
  'egypt', 'estonia', 'finland', 'france', 'georgia', 'germany', 'greece',
  'hong-kong', 'hungary', 'iceland', 'india', 'indonesia', 'ireland', 'israel',
  'italy', 'jamaica', 'japan', 'jordan', 'kiribati', 'kosovo', 'kuwait',
  'laos', 'latvia', 'lebanon', 'liechtenstein', 'lithuania', 'luxembourg',
  'macau', 'malaysia', 'malta', 'mexico', 'moldova', 'monaco', 'montenegro',
  'morocco', 'netherlands', 'new-zealand', 'north-macedonia', 'norway', 'oman',
  'panama', 'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'qatar',
  'romania', 'russia', 'san-marino', 'saudi-arabia', 'serbia', 'singapore',
  'slovakia', 'slovenia', 'south-africa', 'south-korea', 'spain', 'sri-lanka',
  'sweden', 'switzerland', 'taiwan', 'thailand', 'tunisia', 'turkey', 'uae',
  'uk', 'united-arab-emirates', 'uruguay', 'usa', 'venezuela', 'vietnam'
];

let moved = 0;
for (const country of countries) {
  const srcPath = join(srcDir, country);
  const tempPath = join(tempDir, country);
  
  if (existsSync(srcPath)) {
    try {
      await rename(srcPath, tempPath);
      moved++;
      if (moved % 10 === 0) {
        console.log(`Moved ${moved}/${countries.length} countries...`);
      }
    } catch (err) {
      console.error(`Error moving ${country}:`, err.message);
    }
  }
}

console.log(`✓ Moved ${moved} country directories to temp`);
console.log('✓ Vite build will now run without restaurant components');

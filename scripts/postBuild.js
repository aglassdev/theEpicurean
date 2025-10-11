import { rename, cp } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tempDir = join(__dirname, '../temp-restaurants');
const distDir = join(__dirname, '../dist');
const publicComponentsDir = join(distDir, 'components');

console.log('Post-build: Copying restaurant components to dist...');

if (existsSync(tempDir)) {
  // Copy restaurant directories to dist/components
  // This way they'll be served as static files
  try {
    await cp(tempDir, publicComponentsDir, { recursive: true });
    console.log('✓ Copied restaurant components to dist/components');
    
    // Optionally restore them to src for dev
    // (commented out to keep src clean)
    // const srcDir = join(__dirname, '../src');
    // await cp(tempDir, srcDir, { recursive: true });
    // console.log('✓ Restored restaurant components to src');
    
  } catch (err) {
    console.error('Error in post-build:', err.message);
  }
}

console.log('✓ Build complete');

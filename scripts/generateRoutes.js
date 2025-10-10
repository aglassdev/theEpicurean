import { readdir } from 'fs/promises';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, '../src');

async function findAllComponents(dir, base = '') {
  const components = [];
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const relativePath = base ? `${base}/${entry.name}` : entry.name;
    
    if (entry.isDirectory() && 
        !entry.name.startsWith('.') && 
        entry.name !== 'node_modules' &&
        entry.name !== 'pictures') {
      components.push(...await findAllComponents(fullPath, relativePath));
    } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
      // Skip main app files
      if (['App.jsx', 'App-backup.jsx', 'App-new.jsx', 'App-optimized.jsx', 
           'main.jsx', 'Home.jsx', 'Destinations.jsx', 'Methodology.jsx', 
           'InteractiveMap.jsx', 'test-routes.js'].includes(entry.name)) {
        continue;
      }
      
      const componentName = entry.name.replace('.jsx', '');
      const routePath = `/${relativePath.replace('.jsx', '').toLowerCase().replace(/\s+/g, '-')}`;
      const importPath = `./${relativePath}`;
      
      components.push({
        path: routePath,
        component: componentName,
        import: importPath
      });
    }
  }
  
  return components;
}

console.log('Scanning for components...');
const components = await findAllComponents(srcDir);

console.log(`Found ${components.length} components`);

// Write routes.json
await writeFile(
  join(srcDir, 'routes.json'),
  JSON.stringify(components, null, 2)
);

console.log('✓ routes.json generated');

// Also generate a list of imports for debugging
const sampleImports = components.slice(0, 10).map(c => c.import).join('\n');
console.log('\nSample import paths:');
console.log(sampleImports);

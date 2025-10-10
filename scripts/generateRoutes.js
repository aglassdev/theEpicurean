import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, '../src');

async function findAllRestaurants(dir, base = '') {
  const routes = [];
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const relativePath = base ? `${base}/${entry.name}` : entry.name;
    
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      routes.push(...await findAllRestaurants(fullPath, relativePath));
    } else if (entry.isFile() && entry.name.endsWith('.jsx') && 
               entry.name !== 'App.jsx' && 
               entry.name !== 'main.jsx' &&
               entry.name !== 'Home.jsx' &&
               entry.name !== 'Destinations.jsx' &&
               entry.name !== 'Methodology.jsx' &&
               entry.name !== 'InteractiveMap.jsx') {
      const componentName = entry.name.replace('.jsx', '');
      const routePath = `/${relativePath.replace('.jsx', '').toLowerCase().replace(/\s+/g, '-')}`;
      const importPath = `./${relativePath}`;
      
      routes.push({
        path: routePath,
        component: componentName,
        import: importPath
      });
    }
  }
  
  return routes;
}

const routes = await findAllRestaurants(srcDir);
await writeFile(
  join(srcDir, 'routes.json'),
  JSON.stringify(routes, null, 2)
);

console.log(`Generated ${routes.length} routes`);

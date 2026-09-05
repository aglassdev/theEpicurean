import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, '../src');
const publicDataDir = join(__dirname, '../public/components');

if (!existsSync(publicDataDir)) {
  await mkdir(publicDataDir, { recursive: true });
}

function extractRestaurantData(content) {
  try {
    const componentMatch = content.match(/const\s+\w+\s*=\s*\(\)\s*=>\s*\(\s*<RestaurantPage\s+([\s\S]*?)\/>\s*\);/);
    if (!componentMatch) return null;

    const propsString = componentMatch[1];
    const data = {};
    let currentPos = 0;
    
    while (currentPos < propsString.length) {
      const propMatch = propsString.substring(currentPos).match(/^\s*(\w+)=/);
      if (!propMatch) break;
      
      const propName = propMatch[1];
      const propStart = currentPos + propMatch.index + propMatch[0].length;
      const nextChar = propsString[propStart];
      
      if (nextChar === '"') {
        const endQuote = propsString.indexOf('"', propStart + 1);
        data[propName] = propsString.substring(propStart + 1, endQuote);
        currentPos = endQuote + 1;
      } else if (nextChar === '{') {
        let braceCount = 1;
        let pos = propStart + 1;
        let inString = false;
        let inTemplate = false;
        let stringChar = '';
        
        while (pos < propsString.length && braceCount > 0) {
          const char = propsString[pos];
          const prevChar = propsString[pos - 1];
          
          if ((char === '"' || char === "'") && prevChar !== '\\') {
            if (!inString && !inTemplate) {
              inString = true;
              stringChar = char;
            } else if (inString && char === stringChar) {
              inString = false;
            }
          } else if (char === '`' && prevChar !== '\\') {
            inTemplate = !inTemplate;
          }
          
          if (!inString && !inTemplate) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }
          pos++;
        }
        
        const valueString = propsString.substring(propStart + 1, pos - 1);
        try {
          const cleaned = valueString.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
          data[propName] = new Function(`'use strict'; return (${cleaned})`)();
        } catch (e) {
          data[propName] = valueString.trim();
        }
        currentPos = pos;
      } else {
        currentPos = propsString.indexOf('\n', currentPos) + 1;
        if (currentPos === 0) break;
      }
    }
    return Object.keys(data).length > 0 ? data : null;
  } catch (error) {
    return null;
  }
}

async function processDirectory(dir, relativePath = '', skipExisting = false) {
  const entries = await readdir(dir, { withFileTypes: true });
  let count = 0, failed = 0, skipped = 0;

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const newRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;

    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'pictures' && entry.name !== 'node_modules') {
      const result = await processDirectory(fullPath, newRelativePath, skipExisting);
      count += result.count;
      failed += result.failed;
      skipped += result.skipped || 0;
    } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
      const skipFiles = ['Restaurants.jsx', 'CityPage.jsx', 'EpiChrome.jsx', 'News.jsx', 'WorldMap.jsx', 'WorldMapPage.jsx', 'Home.jsx', 'App.jsx', 'Destinations.jsx', 'Methodology.jsx', 'InteractiveMap.jsx', 'main.jsx', 'RestaurantTemplate.jsx'];
      if (skipFiles.some(f => entry.name.includes(f)) || entry.name.includes('backup') || entry.name.includes('test')) continue;

      const jsonPath = join(publicDataDir, newRelativePath.replace('.jsx', '.json'));
      if (skipExisting && existsSync(jsonPath)) {
        skipped++;
        continue;
      }

      try {
        const content = await readFile(fullPath, 'utf-8');
        const data = extractRestaurantData(content);

        if (data && Object.keys(data).length > 3) {
          const jsonDir = dirname(jsonPath);
          if (!existsSync(jsonDir)) await mkdir(jsonDir, { recursive: true });
          await writeFile(jsonPath, JSON.stringify(data, null, 2));
          count++;
          if (count % 500 === 0) console.log(`✓ Processed ${count} files...`);
        } else {
          failed++;
        }
      } catch (err) {
        failed++;
      }
    }
  }
  return { count, failed, skipped };
}

const skipExisting = process.argv.includes('--skip-existing');
if (skipExisting) console.log('🔄  --skip-existing mode: skipping JSX files that already have a JSON counterpart.\n');

console.log('Converting JSX components to JSON data...\n');
const startTime = Date.now();
const result = await processDirectory(srcDir, '', skipExisting);
const endTime = Date.now();

console.log(`\n========================================`);
console.log(`✓ Successfully converted: ${result.count} files`);
if (skipExisting) console.log(`⏭  Skipped existing:    ${result.skipped || 0} files`);
console.log(`✗ Failed to convert: ${result.failed} files`);
console.log(`⏱ Time taken: ${((endTime - startTime) / 1000).toFixed(2)} seconds`);
console.log(`========================================\n`);
if (result.count > 0) console.log('✓ Conversion complete! You can now run: npm run build');

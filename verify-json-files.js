import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'components');

function toPascalCase(str) {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
}

function findJsonFiles(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...findJsonFiles(fullPath, relativePath));
    } else if (entry.name.endsWith('.json')) {
      files.push({
        fullPath,
        relativePath,
        fileName: entry.name,
        baseNameWithoutExt: entry.name.replace('.json', '')
      });
    }
  }
  
  return files;
}

const jsonFiles = findJsonFiles(publicDir);

console.log(`Found ${jsonFiles.length} JSON files\n`);

// Group by directory
const byDirectory = {};
jsonFiles.forEach(file => {
  const dir = path.dirname(file.relativePath);
  if (!byDirectory[dir]) {
    byDirectory[dir] = [];
  }
  byDirectory[dir].push(file);
});

console.log('Files by directory:\n');
Object.entries(byDirectory).forEach(([dir, files]) => {
  console.log(`\n${dir}:`);
  files.forEach(file => {
    const kebabCase = file.baseNameWithoutExt
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase();
    const expectedPascalCase = toPascalCase(kebabCase);
    const match = file.baseNameWithoutExt === expectedPascalCase ? '✓' : '✗';
    
    console.log(`  ${match} ${file.fileName}`);
    if (match === '✗') {
      console.log(`     Expected: ${expectedPascalCase}.json`);
      console.log(`     Kebab URL: /${dir}/${kebabCase}`);
    }
  });
});

// Check for any mismatches
const mismatches = jsonFiles.filter(file => {
  const kebabCase = file.baseNameWithoutExt
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  const expectedPascalCase = toPascalCase(kebabCase);
  return file.baseNameWithoutExt !== expectedPascalCase;
});

if (mismatches.length > 0) {
  console.log(`\n\n⚠️  Found ${mismatches.length} files with naming mismatches:`);
  mismatches.forEach(file => {
    const kebabCase = file.baseNameWithoutExt
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase();
    const expectedPascalCase = toPascalCase(kebabCase);
    console.log(`\n  ${file.relativePath}`);
    console.log(`    Current:  ${file.baseNameWithoutExt}`);
    console.log(`    Expected: ${expectedPascalCase}`);
  });
} else {
  console.log('\n\n✓ All files follow the PascalCase naming convention!');
}

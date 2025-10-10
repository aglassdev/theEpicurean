import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping of file paths to their new component names
const fixes = [
  // Canada
  { file: 'src/canada/toronto/toronto/156Cumberland.jsx', oldName: '156Cumberland', newName: 'OneFiveSixCumberland' },
  
  // China
  { file: 'src/china/hong-kong/hong-kong/812OttoEMezzoBombana.jsx', oldName: '812OttoEMezzoBombana', newName: 'EightOneHalfOttoEMezzoBombana' },
  { file: 'src/china/hangzhou/hangzhou/28HubinRoad.jsx', oldName: '28HubinRoad', newName: 'TwoEightHubinRoad' },
];

const basePath = __dirname;

fixes.forEach(({ file, oldName, newName }) => {
  const filePath = path.join(basePath, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace const declaration
    content = content.replace(
      `const ${oldName} = () => (`,
      `const ${newName} = () => (`
    );
    
    // Replace export statement
    content = content.replace(
      `export default ${oldName};`,
      `export default ${newName};`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${file}`);
  } catch (error) {
    console.error(`✗ Error fixing ${file}:`, error.message);
  }
});

console.log('\nDone! All remaining component names have been fixed.');

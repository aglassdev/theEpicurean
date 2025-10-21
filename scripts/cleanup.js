const fs = require('fs');
const path = require('path');

const filesToDelete = [
  'src/App-backup.jsx',
  'src/App-new.jsx',
  'src/App-old-with-routes.jsx',
  'DEPLOYMENT_FIX.md',
  'DEPLOYMENT_FIX_V2.md',
  'README_DEPLOYMENT_FIX.md',
  'package-backup.json',
  'vite-backup.config.js',
  'test-output.json',
  'src/test-routes.js',
  'fix-component-names.js',
  'fix-deployment.sh',
  'fix-remaining-components.js',
  'build-optimized.sh',
  'cleanup.sh',
  'scripts/testConverter.js'
];

console.log('🧹 Cleaning up theEpicurean project...\n');

let deletedCount = 0;
let notFoundCount = 0;

filesToDelete.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✅ Deleted: ${file}`);
      deletedCount++;
    } catch (err) {
      console.log(`❌ Error deleting ${file}:`, err.message);
    }
  } else {
    console.log(`⚠️  Not found: ${file}`);
    notFoundCount++;
  }
});

// Remove .DS_Store files
console.log('\n🔍 Removing .DS_Store files...');
const removeDSStore = (dir) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('node_modules') && !file.startsWith('.git')) {
      removeDSStore(filePath);
    } else if (file === '.DS_Store') {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed: ${filePath.replace(__dirname + '/..', '')}`);
      deletedCount++;
    }
  });
};

try {
  removeDSStore(path.join(__dirname, '..'));
} catch (err) {
  console.log('⚠️  Could not scan for .DS_Store files:', err.message);
}

console.log(`\n✨ Cleanup complete!`);
console.log(`   Deleted: ${deletedCount} files`);
console.log(`   Not found: ${notFoundCount} files`);
console.log(`\n📁 Project structure cleaned up successfully!`);

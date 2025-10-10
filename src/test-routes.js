// Test script to verify routes and modules match
const modules = import.meta.glob('./**/*.jsx');
import routesData from './routes.json';

console.log('Total routes:', routesData.length);
console.log('Total modules:', Object.keys(modules).length);
console.log('\nFirst 5 routes:');
routesData.slice(0, 5).forEach(route => {
  const exists = !!modules[route.import];
  console.log(`${exists ? '✓' : '✗'} ${route.path} -> ${route.import}`);
});

console.log('\nFirst 5 modules:');
Object.keys(modules).slice(0, 5).forEach(path => {
  console.log(path);
});

// Check for mismatches
const mismatches = routesData.filter(route => !modules[route.import]);
console.log(`\nMismatches: ${mismatches.length}`);
if (mismatches.length > 0) {
  console.log('First 5 mismatches:');
  mismatches.slice(0, 5).forEach(route => {
    console.log(`  ${route.path} -> ${route.import}`);
  });
}

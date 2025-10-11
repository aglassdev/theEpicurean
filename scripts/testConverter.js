import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Test on The French Laundry
const testFile = join(__dirname, '../src/usa/california/napa-valley/TheFrenchLaundry.jsx');

function extractRestaurantData(content) {
  try {
    // Find the component usage: const ComponentName = () => ( <RestaurantPage ... /> );
    const componentMatch = content.match(/const\s+\w+\s*=\s*\(\)\s*=>\s*\(\s*<RestaurantPage\s+([\s\S]*?)\/>\s*\);/);
    
    if (!componentMatch) {
      console.log('Could not find component pattern');
      return null;
    }

    const propsString = componentMatch[1];
    console.log('Found props string, length:', propsString.length);
    
    const data = {};
    
    // More sophisticated parsing that handles multi-line values
    let currentPos = 0;
    
    while (currentPos < propsString.length) {
      // Find next prop name
      const propMatch = propsString.substring(currentPos).match(/^\s*(\w+)=/);
      if (!propMatch) break;
      
      const propName = propMatch[1];
      const propStart = currentPos + propMatch.index + propMatch[0].length;
      
      // Determine if it's a string, template literal, or braced value
      const nextChar = propsString[propStart];
      
      if (nextChar === '"') {
        // String value: propName="value"
        const endQuote = propsString.indexOf('"', propStart + 1);
        const value = propsString.substring(propStart + 1, endQuote);
        data[propName] = value;
        currentPos = endQuote + 1;
        console.log(`✓ Extracted ${propName}: "${value.substring(0, 50)}${value.length > 50 ? '...' : ''}"`);
        
      } else if (nextChar === '{') {
        // Braced value: propName={...}
        // Need to find matching closing brace
        let braceCount = 1;
        let pos = propStart + 1;
        let inString = false;
        let inTemplate = false;
        let stringChar = '';
        
        while (pos < propsString.length && braceCount > 0) {
          const char = propsString[pos];
          const prevChar = propsString[pos - 1];
          
          // Handle strings and template literals
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
          
          // Only count braces outside of strings
          if (!inString && !inTemplate) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }
          
          pos++;
        }
        
        const valueString = propsString.substring(propStart + 1, pos - 1);
        
        // Parse the value
        try {
          // Clean up the value string
          const cleaned = valueString
            .replace(/\/\/.*$/gm, '') // Remove single-line comments
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
            .trim();
          
          // Try to evaluate it as JavaScript
          const parsedValue = new Function(`'use strict'; return (${cleaned})`)();
          data[propName] = parsedValue;
          
          // Log what we extracted
          if (Array.isArray(parsedValue)) {
            console.log(`✓ Extracted ${propName}: Array with ${parsedValue.length} items`);
          } else if (typeof parsedValue === 'object') {
            console.log(`✓ Extracted ${propName}: Object with ${Object.keys(parsedValue).length} keys`);
          } else {
            console.log(`✓ Extracted ${propName}: ${String(parsedValue).substring(0, 50)}`);
          }
        } catch (e) {
          console.warn(`⚠ Could not parse ${propName}:`, e.message);
          data[propName] = valueString;
        }
        
        currentPos = pos;
      } else {
        // Skip to next line
        currentPos = propsString.indexOf('\n', currentPos) + 1;
        if (currentPos === 0) break;
      }
    }

    return data;
    
  } catch (error) {
    console.error('Error extracting data:', error.message);
    console.error(error.stack);
    return null;
  }
}

console.log('Testing converter on TheFrenchLaundry.jsx...\n');

const content = await readFile(testFile, 'utf-8');
const data = extractRestaurantData(content);

if (data) {
  console.log('\n========================================');
  console.log('✓ EXTRACTION SUCCESSFUL!');
  console.log('========================================\n');
  console.log(`Extracted ${Object.keys(data).length} properties:\n`);
  
  // Show details for each property
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      console.log(`  ${key}: Array[${value.length}]`);
      if (value.length > 0 && typeof value[0] === 'object') {
        console.log(`    - First item keys: ${Object.keys(value[0]).join(', ')}`);
      }
    } else if (typeof value === 'object' && value !== null) {
      console.log(`  ${key}: Object {${Object.keys(value).join(', ')}}`);
    } else {
      console.log(`  ${key}: ${typeof value} = ${String(value).substring(0, 50)}${String(value).length > 50 ? '...' : ''}`);
    }
  }
  
  // Write to test file
  await writeFile(
    join(__dirname, '../test-output.json'),
    JSON.stringify(data, null, 2)
  );
  
  console.log('\n✓ Wrote test output to test-output.json');
  console.log('\nCheck specific arrays:');
  console.log(`  - headerImages: ${data.headerImages?.length || 0} items`);
  console.log(`  - reservationProviders: ${data.reservationProviders?.length || 0} items`);
  console.log(`  - tags: ${data.tags?.length || 0} items`);
  console.log(`  - awards: ${data.awards?.length || 0} items`);
  
  if (data.awards && data.awards.length > 0) {
    console.log('\nFirst award sample:');
    console.log(JSON.stringify(data.awards[0], null, 2));
  }
  
} else {
  console.log('\n✗ EXTRACTION FAILED');
}

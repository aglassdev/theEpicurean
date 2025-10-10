import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse CSV
const csvPath = path.join(__dirname, '../../michelin_my_maps.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

function parseCSV(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = values[i]?.replace(/^"|"$/g, '') || '';
    });
    return obj;
  }).filter(obj => obj.Name);
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim();
}

function createComponentName(restaurantName, cityAcronym = '') {
  // Remove all special characters and spaces, capitalize each word
  const cleaned = restaurantName
    .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
    .split(/\s+/) // Split by whitespace
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  // Add city acronym if provided
  return cleaned + cityAcronym;
}

function getCityAcronym(city) {
  // Get first 3 letters of city, uppercase
  return city.replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase();
}

// State abbreviation mapping for USA
const stateAbbreviations = {
  'AL': 'alabama', 'AK': 'alaska', 'AZ': 'arizona', 'AR': 'arkansas', 'CA': 'california',
  'CO': 'colorado', 'CT': 'connecticut', 'DE': 'delaware', 'FL': 'florida', 'GA': 'georgia',
  'HI': 'hawaii', 'ID': 'idaho', 'IL': 'illinois', 'IN': 'indiana', 'IA': 'iowa',
  'KS': 'kansas', 'KY': 'kentucky', 'LA': 'louisiana', 'ME': 'maine', 'MD': 'maryland',
  'MA': 'massachusetts', 'MI': 'michigan', 'MN': 'minnesota', 'MS': 'mississippi', 'MO': 'missouri',
  'MT': 'montana', 'NE': 'nebraska', 'NV': 'nevada', 'NH': 'new-hampshire', 'NJ': 'new-jersey',
  'NM': 'new-mexico', 'NY': 'new-york', 'NC': 'north-carolina', 'ND': 'north-dakota', 'OH': 'ohio',
  'OK': 'oklahoma', 'OR': 'oregon', 'PA': 'pennsylvania', 'RI': 'rhode-island', 'SC': 'south-carolina',
  'SD': 'south-dakota', 'TN': 'tennessee', 'TX': 'texas', 'UT': 'utah', 'VT': 'vermont',
  'VA': 'virginia', 'WA': 'washington', 'WV': 'west-virginia', 'WI': 'wisconsin', 'WY': 'wyoming',
  'DC': 'washington-dc'
};

function extractStateFromAddress(address) {
  // Look for state abbreviation pattern (2 uppercase letters before zip code)
  const stateMatch = address.match(/,\s*([A-Z]{2})\s+\d{5}/);
  if (stateMatch) {
    const abbrev = stateMatch[1];
    return stateAbbreviations[abbrev] || 'other';
  }
  return 'other';
}

function getCountryFromLocation(location) {
  const locationLower = location.toLowerCase();
  
  // Map location strings to country codes
  if (locationLower.includes('usa') || locationLower.includes('united states')) return 'usa';
  if (locationLower.includes('denmark')) return 'denmark';
  if (locationLower.includes('canada')) return 'canada';
  if (locationLower.includes('france')) return 'france';
  if (locationLower.includes('united kingdom') || locationLower.includes('england') || 
      locationLower.includes('scotland') || locationLower.includes('wales') || 
      locationLower.includes('northern ireland')) return 'uk';
  if (locationLower.includes('spain')) return 'spain';
  if (locationLower.includes('italy')) return 'italy';
  if (locationLower.includes('germany')) return 'germany';
  if (locationLower.includes('switzerland')) return 'switzerland';
  if (locationLower.includes('belgium')) return 'belgium';
  if (locationLower.includes('netherlands')) return 'netherlands';
  if (locationLower.includes('austria')) return 'austria';
  if (locationLower.includes('portugal')) return 'portugal';
  if (locationLower.includes('norway')) return 'norway';
  if (locationLower.includes('sweden')) return 'sweden';
  if (locationLower.includes('japan')) return 'japan';
  if (locationLower.includes('china')) return 'china';
  if (locationLower.includes('singapore')) return 'singapore';
  if (locationLower.includes('thailand')) return 'thailand';
  if (locationLower.includes('south korea')) return 'south-korea';
  if (locationLower.includes('australia')) return 'australia';
  if (locationLower.includes('new zealand')) return 'new-zealand';
  if (locationLower.includes('brazil')) return 'brazil';
  if (locationLower.includes('mexico')) return 'mexico';
  if (locationLower.includes('argentina')) return 'argentina';
  if (locationLower.includes('chile')) return 'chile';
  if (locationLower.includes('peru')) return 'peru';
  if (locationLower.includes('colombia')) return 'colombia';
  if (locationLower.includes('dubai') || locationLower.includes('united arab emirates')) return 'uae';
  if (locationLower.includes('turkey')) return 'turkey';
  if (locationLower.includes('ireland')) return 'ireland';
  if (locationLower.includes('poland')) return 'poland';
  if (locationLower.includes('czech')) return 'czechia';
  if (locationLower.includes('hungary')) return 'hungary';
  if (locationLower.includes('croatia')) return 'croatia';
  if (locationLower.includes('greece')) return 'greece';
  if (locationLower.includes('ireland')) return 'ireland';
  if (locationLower.includes('luxembourg')) return 'luxembourg';
  if (locationLower.includes('monaco')) return 'monaco';
  if (locationLower.includes('slovenia')) return 'slovenia';
  if (locationLower.includes('estonia')) return 'estonia';
  if (locationLower.includes('hong kong')) return 'hong-kong';
  if (locationLower.includes('macau')) return 'macau';
  if (locationLower.includes('finland')) return 'finland';
  if (locationLower.includes('malta')) return 'malta';
  if (locationLower.includes('malaysia')) return 'malaysia';
  if (locationLower.includes('croatia')) return 'croatia';
  if (locationLower.includes('vietnam')) return 'vietnam';
  if (locationLower.includes('lithuania')) return 'lithuania';
  if (locationLower.includes('qatar')) return 'qatar';
  if (locationLower.includes('serbia')) return 'serbia';
  if (locationLower.includes('latvia')) return 'latvia';
  if (locationLower.includes('andorra')) return 'andorra';
  if (locationLower.includes('russia')) return 'russia';
  return 'other';
}

function getLocationInfo(location, address, country) {
  const parts = location.split(',').map(s => s.trim());
  const city = parts[0];
  
  // For USA, extract state from address
  if (country === 'usa') {
    const state = extractStateFromAddress(address);
    return { 
      country: 'usa',
      region: state,
      city: slugify(city)
    };
  }
  
  // For other countries, use second part as region if available
  const region = parts.length >= 2 ? slugify(parts[parts.length - 2]) : 'other';
  
  return { 
    country: slugify(country),
    region: region,
    city: slugify(city)
  };
}

function getMichelinStars(award) {
  if (award.includes('3 Stars')) return 3;
  if (award.includes('2 Stars')) return 2;
  if (award.includes('1 Star')) return 1;
  return 0;
}

function generateRestaurantComponent(restaurant, componentName) {
  const stars = getMichelinStars(restaurant.Award);
  const priceRange = restaurant.Price || '$$$$';
  const greenStar = restaurant.GreenStar === '1';

  const cleanDescription = restaurant.Description
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .replace(/\r/g, ' ')
    .substring(0, 800);

  return `import React from 'react';

const RestaurantPage = ({
  headerImages,
  restaurantName,
  address,
  cuisine,
  priceRange,
  phoneNumber,
  website,
  reservationProviders,
  tags,
  awards,
  bio,
  googleMapsEmbed,
  pageTitle
}) => {
  React.useEffect(() => {
    document.title = pageTitle || \`\${restaurantName} - The Epicurean\`;
  }, [pageTitle, restaurantName]);

  const renderMichelinStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <img 
        key={index}
        src="/images/michelinstar.png"
        alt="Michelin Star"
        style={{ width: '20px', height: '20px', marginRight: '2px' }}
      />
    ));
  };

  return (
    <div style={{
      fontFamily: 'Times New Roman, serif',
      backgroundColor: 'white',
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img 
            src="/images/theepicurean.png" 
            alt="The Epicurean"
            style={{ width: '150px', height: '40px', objectFit: 'contain' }}
          />
        </a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <button onClick={() => window.location.href = '/destinations'} 
            style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#333' }}>
            Destinations
          </button>
          <button onClick={() => window.location.href = '/methodology'}
            style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#333' }}>
            Methodology
          </button>
        </div>
      </nav>

      {headerImages && headerImages.length > 0 && (
        <div style={{
          width: '100vw',
          height: '70vh',
          marginTop: '92px',
          display: 'flex'
        }}>
          {headerImages.map((image, index) => (
            <div key={index} style={{
              flex: 1,
              backgroundImage: \`url(\${image})\`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          ))}
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '100px auto 0', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
          {restaurantName}
        </h1>
        
        {bio && (
          <p style={{ 
            fontSize: '1.2rem', 
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '3rem',
            lineHeight: '1.8',
            maxWidth: '1000px',
            margin: '0 auto 3rem'
          }}>
            {bio}
          </p>
        )}

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px' }}>
            <p style={{ fontSize: '1.2rem', margin: '0 0 1rem 0', color: '#333' }}>{cuisine}</p>
            <p style={{ fontSize: '1.2rem', margin: '0 0 1.5rem 0', color: '#333' }}>{priceRange}</p>
            <p style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', lineHeight: '1.5', color: '#333' }}>{address}</p>
            {phoneNumber && (
              <p style={{ fontSize: '1.1rem', margin: '0 0 1.5rem 0', color: '#333' }}>{phoneNumber}</p>
            )}
            
            {tags && tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {tags.map((tag, i) => (
                  <div key={i} style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    color: '#333'
                  }}>
                    {tag.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px' }}>
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '0.8rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#333',
                  textDecoration: 'none',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                Visit Website
              </a>
            )}
            
            {reservationProviders && reservationProviders.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {reservationProviders.map((provider, i) => (
                  <a key={i} href={provider.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '0.8rem 1.5rem',
                      backgroundColor: '#333',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      textAlign: 'center',
                      fontSize: '1rem'
                    }}>
                    Book on {provider.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {awards && awards.length > 0 && (
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '3rem', 
              justifyContent: 'center' 
            }}>
              {awards.map((award, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  gap: '0.5rem' 
                }}>
                  {award.name === "Michelin Stars" && (
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      {renderMichelinStars(award.count)}
                    </div>
                  )}
                  <span style={{ fontSize: '1rem', color: '#333', fontWeight: '500' }}>
                    {award.name}
                  </span>
                  {award.organization && (
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>
                      {award.organization}
                    </span>
                  )}
                  {award.year && (
                    <span style={{ fontSize: '0.8rem', color: '#333' }}>
                      {award.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {googleMapsEmbed && (
          <div style={{ 
            marginTop: '2rem', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>

      <footer style={{
        backgroundColor: 'white',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef'
      }}>
        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

const ${componentName} = () => (
  <RestaurantPage
    restaurantName="${restaurant.Name.replace(/"/g, '\\"')}"
    address="${restaurant.Address.replace(/"/g, '\\"')}"
    cuisine="${restaurant.Cuisine.replace(/"/g, '\\"')}"
    priceRange="${priceRange}"
    phoneNumber="${restaurant.PhoneNumber}"
    website="${restaurant.WebsiteUrl || restaurant.Url}"
    tags={${greenStar ? '[{ name: "Green Star" }]' : '[]'}}
    awards={[
      ${stars > 0 ? `{ name: "Michelin Stars", count: ${stars}, year: "2025", organization: "Guide Michelin" }` : ''}
    ].filter(Boolean)}
    bio="${cleanDescription}..."
    googleMapsEmbed="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(restaurant.Address)}"
    pageTitle="${restaurant.Name.replace(/"/g, '\\"')}"
  />
);

export default ${componentName};
`;
}

// Parse all restaurants
const allRestaurants = parseCSV(csvContent);

console.log(`Processing ${allRestaurants.length} total restaurants from CSV\n`);

// Track component names to detect duplicates
const componentNameTracker = new Map();
const countryStats = {};
const routesByCountry = {};
let totalFilesCreated = 0;

// Process each restaurant
allRestaurants.forEach((restaurant, index) => {
  try {
    const country = getCountryFromLocation(restaurant.Location);
    
    if (country === 'other') {
      return; // Skip countries we haven't mapped
    }
    
    const { region, city } = getLocationInfo(restaurant.Location, restaurant.Address, country);
    const restaurantSlug = slugify(restaurant.Name);
    
    // Create base component name
    let componentName = createComponentName(restaurant.Name);
    
    // Check for duplicates and add city acronym if needed
    if (componentNameTracker.has(componentName)) {
      const cityAcronym = getCityAcronym(city);
      componentName = createComponentName(restaurant.Name, cityAcronym);
    }
    
    componentNameTracker.set(componentName, {
      name: restaurant.Name,
      city,
      country
    });
    
    // Create directory structure: src/{country}/{region}/{city}/
    const dir = path.join(__dirname, '../src', country, region, city);
    fs.mkdirSync(dir, { recursive: true });
    
    // Write component file
    const filePath = path.join(dir, `${componentName}.jsx`);
    const component = generateRestaurantComponent(restaurant, componentName);
    fs.writeFileSync(filePath, component);
    
    totalFilesCreated++;
    
    // Track for routes
    const routePath = `/${country}/${region}/${city}/${restaurantSlug}`;
    const importPath = `./${country}/${region}/${city}/${componentName}.jsx`;
    
    if (!routesByCountry[country]) {
      routesByCountry[country] = [];
      countryStats[country] = 0;
    }
    
    routesByCountry[country].push({
      componentName,
      routePath,
      importPath,
      name: restaurant.Name,
      city,
      region
    });
    
    countryStats[country]++;
    
    // Progress indicator
    if ((index + 1) % 200 === 0) {
      console.log(`Processed ${index + 1}/${allRestaurants.length} restaurants...`);
    }
  } catch (error) {
    console.error(`Error processing ${restaurant.Name}:`, error.message);
  }
});

console.log(`\n✅ Successfully created ${totalFilesCreated} restaurant files!\n`);

// Display statistics
console.log('Statistics by country:');
console.log('='.repeat(50));
Object.entries(countryStats)
  .sort((a, b) => b[1] - a[1])
  .forEach(([country, count]) => {
    console.log(`${country.toUpperCase().padEnd(20)} ${count} restaurants`);
  });
console.log('='.repeat(50));

// Write routes to a file for easy copying
const routesOutputPath = path.join(__dirname, 'generated-routes.txt');
let routesOutput = '';

// Generate imports
routesOutput += '='.repeat(80) + '\n';
routesOutput += 'IMPORTS FOR App.jsx:\n';
routesOutput += '='.repeat(80) + '\n\n';

Object.entries(routesByCountry)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .forEach(([country, routes]) => {
    routesOutput += `// ${country.toUpperCase()} Restaurants (${routes.length})\n`;
    routes.forEach(({ componentName, importPath }) => {
      routesOutput += `import ${componentName} from '${importPath}';\n`;
    });
    routesOutput += '\n';
  });

// Generate routes
routesOutput += '\n';
routesOutput += '='.repeat(80) + '\n';
routesOutput += 'ROUTES FOR App.jsx (inside <Routes>):\n';
routesOutput += '='.repeat(80) + '\n\n';

Object.entries(routesByCountry)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .forEach(([country, routes]) => {
    routesOutput += `        {/* ${country.toUpperCase()} Routes - ${routes.length} restaurants */}\n`;
    routes.forEach(({ componentName, routePath }) => {
      routesOutput += `        <Route path="${routePath}" element={<${componentName} />} />\n`;
    });
    routesOutput += '\n';
  });

routesOutput += '\n';
routesOutput += '='.repeat(80) + '\n';
routesOutput += 'SUMMARY:\n';
routesOutput += '='.repeat(80) + '\n';
Object.entries(countryStats)
  .sort((a, b) => b[1] - a[1])
  .forEach(([country, count]) => {
    routesOutput += `${country.toUpperCase().padEnd(20)} ${count} restaurants\n`;
  });
routesOutput += `\nTotal: ${totalFilesCreated} restaurant files created across ${Object.keys(countryStats).length} countries\n`;
routesOutput += '='.repeat(80) + '\n';

fs.writeFileSync(routesOutputPath, routesOutput);

console.log('\n✅ Import statements and routes saved to: scripts/generated-routes.txt');
console.log(`\n✨ Generation complete! Created ${totalFilesCreated} files across ${Object.keys(countryStats).length} countries`);

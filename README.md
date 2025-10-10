# The Epicurean

> A comprehensive global guide to fine dining destinations and culinary experiences worldwide

## 📊 Project Scale

- **98+ Countries** - Global coverage across all major culinary destinations
- **500+ Cities** - From metropolitan capitals to hidden culinary gems  
- **18,000+ Restaurants** - Carefully curated dining experiences
- **18,500+ Total Pages** - Dynamically generated routes and content
- **Automated Generation** - Scripts manage thousands of pages efficiently

## 🚀 Features

- **Interactive World Map** - Explore culinary destinations visually with dynamic geographic navigation
- **Detailed Restaurant Profiles** - In-depth information about each dining establishment
- **City-Specific Guides** - Curated collections organized by location
- **Responsive Design** - Optimized experience across all devices
- **Fast Navigation** - Code-split architecture for optimal performance
- **Global Coverage** - Restaurants across 6 continents

## 🛠️ Technology Stack

- **React 18** - Modern UI framework
- **React Router v6** - Client-side routing
- **Vite 7** - Next-generation build tool
- **Visx** - Data visualization for interactive maps
- **TopojSON** - Geographic data processing
- **Code Splitting** - Lazy-loaded routes for performance

## 📁 Project Structure

```
theEpicurean/
├── src/
│   ├── [country]/              # 98+ country directories
│   │   ├── [region]/           # Regional subdivisions
│   │   │   ├── [city]/         # City-level organization
│   │   │   │   ├── Restaurants.jsx      # City guide page
│   │   │   │   └── [RestaurantName].jsx # Individual restaurant pages
│   ├── App.jsx                 # Main app with lazy-loaded routes
│   ├── Home.jsx                # Landing page
│   ├── Destinations.jsx        # Browse all destinations
│   ├── InteractiveMap.jsx      # Visual geographic explorer
│   └── Methodology.jsx         # About the curation process
├── scripts/
│   ├── generateRoutes.js       # Auto-generates routes from file structure
│   └── generateRestaurants.js  # Processes restaurant data
├── public/                     # Static assets
└── dist/                       # Production build output
```

## 🤖 Automated Page Generation

This project uses automated scripts to generate and maintain **18,500+ pages**:

### Route Generation Script
```bash
npm run generate-routes
```

**What it does:**
- Scans entire `src/` directory structure
- Finds all restaurant and city page components
- Generates `routes.json` with 18,500+ route definitions
- Enables dynamic lazy loading for optimal performance

**Result:** Each restaurant gets its own route without manually defining 18,500 routes in code.

### Restaurant Data Processing
```bash
npm run generate
```

**What it does:**
- Processes restaurant database/spreadsheet
- Creates individual React component files
- Organizes by country → region → city hierarchy
- Generates standardized page templates with:
  - Restaurant name and location
  - Detailed descriptions
  - Cuisine type and price range
  - Contact information and links
  - Images and atmosphere details

**Why automation?**
Managing 18,000+ restaurant pages manually would be impossible. Scripts ensure:
- Consistent formatting across all pages
- Easy bulk updates and data corrections
- Scalable architecture as more restaurants are added
- Reduced human error in data entry

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd theEpicurean
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate routes**
   ```bash
   npm run generate-routes
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

## 📦 Build & Deploy

### Local Build
```bash
npm run build
npm run preview
```

The build process:
1. Runs `generateRoutes.js` to create routes.json
2. Vite builds and optimizes all code
3. Code splits by country/region into chunks
4. Outputs optimized production files to `dist/`

### Production Deployment (Vercel)

The project is optimized for Vercel deployment:
- **Automatic route generation** during build
- **Code splitting** by country/region reduces initial load
- **Lazy loading** ensures fast page loads
- **Build time:** ~5-15 minutes (down from 45+ with optimization)

```bash
git push  # Triggers automatic Vercel deployment
```

**Deployment Optimization:**
See `DEPLOYMENT_FIX.md` for details on how we reduced build time by 70%+ through code splitting and lazy loading.

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Generate routes and build for production |
| `npm run preview` | Preview production build locally |
| `npm run generate-routes` | Generate routes.json from 18,500+ files |
| `npm run generate` | Process and generate restaurant pages |
| `npm run lint` | Run ESLint code quality checks |

## ⚡ Performance Optimizations

- **Lazy Loading**: Only loads routes when visited (not all 18,500 upfront)
- **Code Splitting**: Automatically splits by country/region into separate chunks
- **Tree Shaking**: Removes unused code during build
- **Route Generation**: Dynamic routes prevent massive route definition files
- **Caching Strategy**: Efficient browser caching for repeat visits
- **Optimized Bundle**: Initial bundle ~200KB, additional chunks load on demand

**Before optimization:** 2.66MB App.jsx, 45+ minute builds  
**After optimization:** 2KB App.jsx, 5-15 minute builds

## 🗺️ Coverage by Region

- **Europe**: 44 countries (France, Italy, Spain, UK, Germany, Netherlands, Belgium, Switzerland, Austria, Portugal, and more)
- **North America**: 3 countries (USA, Canada, Mexico)
- **South America**: 10 countries (Argentina, Brazil, Chile, Colombia, Peru, and more)
- **Asia**: 26 countries (Japan, China, Thailand, Singapore, South Korea, India, and more)
- **Oceania**: 3 countries (Australia, New Zealand, Kiribati)
- **Caribbean**: 4 countries (Bahamas, Barbados, Dominican Republic, Jamaica)
- **Africa**: 4 countries (Egypt, Morocco, South Africa, Tunisia)
- **Middle East**: Integrated within Asia count (UAE, Israel, Jordan, Lebanon, and more)

## 📝 Development

### Adding New Restaurants

1. Create a new `.jsx` file in the appropriate location:
   ```
   src/[country]/[region]/[city]/RestaurantName.jsx
   ```

2. Run route generation:
   ```bash
   npm run generate-routes
   ```

3. The route will be automatically available at:
   ```
   /[country]/[region]/[city]/restaurantname
   ```

### Project Guidelines

- **File naming**: Restaurant components use PascalCase (e.g., `TheFrenchLaundry.jsx`)
- **URL format**: Automatically converted to lowercase with hyphens (`/the-french-laundry`)
- **City overviews**: Each city should have a `Restaurants.jsx` page
- **Organization**: Country → Region → City → Restaurant hierarchy
- **Consistency**: Use generation scripts to maintain formatting standards

## 🌐 Countries Covered

<details>
<summary>View all 98+ countries (click to expand)</summary>

**Europe:**
Albania, Andorra, Austria, Azerbaijan, Belgium, Bosnia and Herzegovina, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland, France, Georgia, Germany, Greece, Hungary, Iceland, Ireland, Kosovo, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Monaco, Montenegro, Netherlands, North Macedonia, Norway, Poland, Portugal, Romania, Russia, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, UK

**North America:**
Canada, Mexico, USA

**South America:**
Argentina, Brazil, Chile, Colombia, Costa Rica, Dominican Republic, Ecuador, Panama, Paraguay, Peru, Uruguay, Venezuela

**Asia:**
Bahrain, Cambodia, China, Hong Kong, India, Indonesia, Israel, Japan, Jordan, Kuwait, Laos, Lebanon, Macau, Malaysia, Oman, Philippines, Qatar, Saudi Arabia, Singapore, South Korea, Sri Lanka, Taiwan, Thailand, UAE, Vietnam

**Oceania:**
Australia, Kiribati, New Zealand

**Caribbean:**
Bahamas, Barbados, Jamaica

**Africa:**
Egypt, Morocco, South Africa, Tunisia

</details>

## 📊 Statistics

- **Average restaurants per country**: ~184
- **Total routes generated**: 18,500+
- **Build optimization**: 95% reduction in initial bundle size
- **Page load time**: <1s for initial load, <200ms for subsequent routes
- **Deployment time**: 5-15 minutes (optimized from 45+)

## 🎯 Architecture Highlights

### Why This Structure Works

**Challenge:** Managing 18,500 pages efficiently

**Solutions:**
1. **Automated Generation**: Scripts handle page creation from data sources
2. **Dynamic Routing**: Routes generated at build time, loaded at runtime
3. **Code Splitting**: Each country/region loads independently
4. **Lazy Loading**: Components load only when routes are visited
5. **Hierarchical Organization**: Country → Region → City keeps files organized

### Key Files

- **`src/App.jsx`** - Main app with dynamic route loader (only 2KB!)
- **`scripts/generateRoutes.js`** - Scans file structure, builds routes.json
- **`scripts/generateRestaurants.js`** - Processes data into component files
- **`src/routes.json`** - Generated file with all 18,500+ route definitions
- **`vite.config.js`** - Build optimization and code splitting configuration

## 📄 License

Private - All rights reserved

## 🔗 Links

- **Documentation**: 
  - `/scripts/` - Generation scripts documentation

---

*Last updated: October 2025*  
*18,500+ pages | 98+ countries | 500+ cities*

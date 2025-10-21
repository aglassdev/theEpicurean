# The Epicurean - Restaurant Guide

A modern React-based restaurant guide with dynamic routing for restaurant listings and individual restaurant pages.

## 🏗️ Project Structure

```
theEpicurean/
├── public/
│   ├── components/          # JSON data for individual restaurants
│   │   └── [country]/[region]/[city]/[RestaurantName].json
│   └── images/              # Restaurant images
├── src/
│   ├── [country]/[region]/[city]/
│   │   ├── Restaurants.jsx  # Listing page for a location
│   │   └── [RestaurantName].jsx  # Individual restaurant components (legacy)
│   ├── App.jsx              # Main app with routing logic
│   ├── Home.jsx             # Homepage
│   ├── Destinations.jsx     # Destinations overview
│   ├── Methodology.jsx      # About the methodology
│   └── RestaurantTemplate.jsx  # Template for rendering restaurant JSON data
└── scripts/
    └── convertToJSON.js     # Converts JSX components to JSON
```

## 🚀 How It Works

### Routing System

The app uses a dynamic routing system that handles two types of pages:

1. **Listing Pages** (`/country/region/city/restaurants`)
   - Shows all restaurants in a specific location
   - Rendered from `Restaurants.jsx` components
   - Explicitly imported in `App.jsx`

2. **Individual Restaurant Pages** (`/country/region/city/restaurant-name`)
   - Shows details for a specific restaurant
   - Data loaded from JSON files in `public/components/`
   - Rendered using `RestaurantTemplate.jsx`

### Dynamic Page Loading

When a user visits a URL, the `DynamicPage` component in `App.jsx`:

1. Checks if the path matches a listing page (imported components)
2. If not, attempts to load restaurant JSON with multiple filename variations
3. Displays a 404 error if neither is found

## 📝 Development

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

This will:
1. Run `convertToJSON.js` to generate JSON files from JSX components
2. Build the optimized production bundle

### Adding a New Restaurant

1. Create the JSX component in the appropriate location:
   ```
   src/[country]/[region]/[city]/RestaurantName.jsx
   ```

2. Run the conversion script:
   ```bash
   npm run convert
   ```

3. The JSON file will be created in:
   ```
   public/components/[country]/[region]/[city]/RestaurantName.json
   ```

### Adding a New Listing Page

1. Create `Restaurants.jsx` in the location folder:
   ```
   src/[country]/[region]/[city]/Restaurants.jsx
   ```

2. Import it in `App.jsx` and add to `listingComponents` map:
   ```javascript
   import NewLocationRestaurants from './country/region/city/Restaurants.jsx';
   
   const listingComponents = {
     '/country/region/city/restaurants': NewLocationRestaurants,
     // ... other listings
   };
   ```

## 🧹 Project Cleanup

Unnecessary files have been removed:
- Backup files (`*-backup.jsx`, `*-old*.jsx`)
- Deployment fix documentation
- Test files
- Legacy fix scripts

## 📦 Key Dependencies

- **React** 18.2.0 - UI library
- **React Router** 6.20.1 - Client-side routing
- **Vite** 7.1.2 - Build tool and dev server
- **@visx** - Interactive map visualization

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes JSON conversion)
- `npm run build-fast` - Build without JSON conversion
- `npm run convert` - Convert JSX to JSON only
- `npm run preview` - Preview production build locally

## ⚠️ Important Notes

- Restaurant listing URLs must end with `/restaurants`
- Individual restaurant URLs use lowercase with hyphens
- JSON files support multiple filename variations (PascalCase, kebab-case, etc.)
- All images should be placed in `public/images/`

## 🐛 Troubleshooting

### 404 Error on Restaurant Page

1. Check if the JSON file exists in `public/components/`
2. Run `npm run convert` to regenerate JSON files
3. Check browser console for attempted file paths
4. Verify the URL matches the file structure

### Listing Page Not Loading

1. Ensure `Restaurants.jsx` is imported in `App.jsx`
2. Check that the path in `listingComponents` matches the URL
3. Verify the component exports a default export

## 📄 License

Private project - All rights reserved

# Fix for Vercel Deployment Timeout

## Problem
The build was timing out on Vercel during the "transforming..." step because:
- 17,548 individual JSX component files (one per restaurant)
- generateRoutes.js was creating a routes.json with all 17,548 routes
- Vite was attempting to transform all these files during build
- Build exceeded Vercel's time limits

## Solution Implemented

### 1. Removed Route Generation from Build Process
**File: package.json**
- Changed: `"build": "node scripts/generateRoutes.js && vite build"`
- To: `"build": "vite build"`
- Added: `"build-with-routes": "node scripts/generateRoutes.js && vite build"` (kept as backup)

### 2. Implemented Dynamic Routing
**File: src/App.jsx**
- Replaced route generation approach with catch-all dynamic routing
- Uses `import.meta.glob('./**/*.jsx')` which compiles paths at build time
- Creates normalized path map for O(1) lookups
- Single `<Route path="*" element={<DynamicComponent />} />` handles all restaurant pages
- Components are lazy-loaded on-demand when URLs are visited
- No longer needs routes.json file

**Benefits:**
- Only loads components when needed (lazy loading)
- Build only needs to process 3-4 routes instead of 17,548
- Much faster build times
- Smaller initial bundle size

### 3. Optimized Vite Configuration
**File: vite.config.js**
- Increased chunk size warning limit to 2000
- Improved code splitting strategy:
  - Separate chunks for React, React Router, and other vendors
  - Country-specific chunks (e.g., `country-usa`, `country-france`)
  - Main app files in separate 'app' chunk
- Prevents loading all 17,548 components at once

### 4. Backup Files Created
- `src/App-old-with-routes.jsx` - Original App.jsx with route generation
- Old package.json behavior preserved in `build-with-routes` script

## How It Works Now

1. **Build Time:**
   - Vite compiles the app with dynamic imports
   - Creates a path map of all available components
   - No route generation needed
   - Build completes in reasonable time

2. **Runtime:**
   - User visits a URL (e.g., `/usa/california/napa-valley/thefrenchlaundry`)
   - App extracts path from URL
   - Looks up component in pre-compiled path map
   - Lazy loads only that specific component
   - Shows 404 with suggestions if component not found

## Testing Locally

```bash
# Test the build locally first
npm run build
npm run preview

# Visit various restaurant URLs to verify they load
# Example: http://localhost:4173/usa/california/napa-valley/thefrenchlaundry
```

## Deployment

Simply commit and push:
```bash
git add .
git commit -m "Fix: Switch to dynamic routing to resolve Vercel build timeout"
git push
```

Vercel will now:
- Run `npm run build` (without route generation)
- Complete build much faster (< 5 minutes estimated vs 45+ min timeout)
- Deploy successfully

## Rollback if Needed

If you need to revert:
```bash
# Restore old App.jsx
mv src/App-old-with-routes.jsx src/App.jsx

# Update package.json build script back to:
"build": "node scripts/generateRoutes.js && vite build"
```

## Performance Improvements

**Before:**
- Build: 45+ minutes (timeout)
- Initial bundle: All 17,548 components loaded
- Memory: High

**After:**
- Build: ~2-5 minutes (estimated)
- Initial bundle: Only core app + first viewed component
- Memory: Much lower
- Subsequent page loads: Fast (lazy loaded)

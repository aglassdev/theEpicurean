import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size limit since we have many components
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks
          if (id.includes('node_modules')) {
            // Split large vendor libraries into separate chunks
            if (id.includes('react-router')) {
              return 'react-router';
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
          
          // Create country-specific chunks to avoid loading everything at once
          if (id.includes('/src/')) {
            const parts = id.split('/src/')[1].split('/');
            
            // Skip main app files
            const mainFiles = ['App.jsx', 'Home.jsx', 'Destinations.jsx', 'Methodology.jsx', 'InteractiveMap.jsx'];
            if (mainFiles.some(f => id.includes(f))) {
              return 'app';
            }
            
            // Group by country (first directory level after src)
            if (parts.length > 1 && parts[0] !== 'pictures') {
              return `country-${parts[0]}`;
            }
          }
        }
      }
    }
  },
  server: {
    host: true,
    allowedHosts: [
      '.ngrok-free.app'
    ]
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/src/')) {
            const parts = id.split('/src/')[1].split('/');
            if (parts.length > 1 && parts[0] !== 'App.jsx') {
              return `${parts[0]}-chunk`;
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    host: true,
    allowedHosts: [
      '.ngrok-free.app'
    ]
  }
})

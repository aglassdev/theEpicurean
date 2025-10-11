import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Dramatically reduce memory usage
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    chunkSizeWarningLimit: 3000,
    // Try to use less memory
    minify: 'esbuild', // Faster than terser
    rollupOptions: {
      output: {
        // Reduce chunk complexity
        manualChunks: undefined,
        // Use simpler chunking
        inlineDynamicImports: false,
      }
    }
  },
  // Optimize dependency handling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  server: {
    host: true,
    allowedHosts: [
      '.ngrok-free.app'
    ]
  }
})

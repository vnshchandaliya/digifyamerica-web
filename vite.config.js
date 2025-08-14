import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base: '/digifyamerica-web/', 
  plugins: [react(), tailwindcss()],
  server: {
    
    port: 3000, 
  },
     build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // This creates a 'vendor' chunk for all node_modules dependencies
            return 'vendor';
          }
        },
      },
    },
   
    chunkSizeWarningLimit: 1000, // 1000 kB
  },
})

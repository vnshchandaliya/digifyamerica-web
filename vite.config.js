import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base: '/digifyamerica-web/', 
  plugins: [react(), tailwindcss()],
  server: {
    // यहाँ port number को बदलें। 3000 एक आम विकल्प है।
    port: 3019, 
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
    // You can also increase the warning limit if you've already optimized
    // and the file size is acceptable for your use case.
    chunkSizeWarningLimit: 1000, // 1000 kB
  },
})

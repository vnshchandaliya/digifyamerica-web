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
  proxy: {
      "/connect-with-us": "http://localhost:3033"
    }
})

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // En local, las peticiones a /blog/ se reenvían a la web publicada,
    // así la sección "Últimas entradas" funciona también con npm run dev.
    proxy: {
      '/blog': { target: 'https://ea8djl.com', changeOrigin: true },
    },
  },
})

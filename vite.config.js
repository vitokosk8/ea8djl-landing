import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Dos páginas: inglés en / y español en /es/
    rollupOptions: {
      input: {
        en: resolve(import.meta.dirname, 'index.html'),
        es: resolve(import.meta.dirname, 'es/index.html'),
      },
    },
  },
  server: {
    // En local, las peticiones a /blog/ se reenvían a la web publicada,
    // así la sección "Últimas entradas" funciona también con npm run dev.
    proxy: {
      '/blog': { target: 'https://ea8djl.com', changeOrigin: true },
    },
  },
})

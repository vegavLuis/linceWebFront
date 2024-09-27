import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://89.116.191.144', // Cambia esto a la dirección de tu backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Opcional: elimina /api de la ruta
      }
    }
  }
})

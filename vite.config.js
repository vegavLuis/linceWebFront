import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   server: {
//     proxy: {
//       '/api': {
//         target: JSON.stringify(env.VITE_URL),
//         changeOrigin: true,
//         secure: false
//       }
//     }
//   }
// })
export default defineConfig(({ mode }) => {
  // Cargar las variables de entorno según el modo
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_URL, // Usa env directamente sin JSON.stringify
          changeOrigin: true,
          secure: false
        }
      }
    }
  }
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
import {PrimeVueResolver} from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Components({resolvers: [BootstrapVueNextResolver(), PrimeVueResolver()]}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

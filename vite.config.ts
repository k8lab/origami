import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/sample.ts'),
      name: 'index',
      fileName: 'index',
    },
  },  
  plugins: [vue()],
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/sample.ts'),
      name: 'sample',
      fileName: 'sample',
      formats: ['es', 'umd']
    },
  },  
  plugins: [
    vue(),
    dts({
      exclude: ['src/main.ts']
    })
  ],
})

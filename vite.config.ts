/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom'
  },
  build: {
    
    lib: {
      entry: {
        'magiccomponentshook': resolve(__dirname, './src/magiccomponentshook.ts')
      },
      name: 'magiccomponents-react',
    },
    rollupOptions: {
      external: ['htmx.org','react', 'react-dom'],
      output: {
        globals: {
          'htmx.org': 'htmx',
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    }
   
  }
})

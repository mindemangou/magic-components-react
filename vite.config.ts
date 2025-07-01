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
        'helper': resolve(__dirname, './src/helper.tsx')
      },
      name: 'magiccomponents-react',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: [
        {
          format: 'es',
          entryFileNames: 'helper.js',
          dir: 'dist',
          exports: 'named'
        },
        {
          format: 'cjs',
          entryFileNames: 'helper.umd.cjs',
          dir: 'dist',
          exports: 'named'
        }
      ]
    }
  }
})

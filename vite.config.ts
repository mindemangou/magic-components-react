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
        'helper': resolve(__dirname, './src/helper.ts')
      },
      name: 'magiccomponents-react',
    },
   
  }
})

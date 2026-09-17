import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-200-html',
      closeBundle() {
        const distIndex = path.resolve('dist/index.html')
        const dist200 = path.resolve('dist/200.html')
        if (fs.existsSync(distIndex)) {
          fs.copyFileSync(distIndex, dist200)
        }
      }
    }
  ],
})

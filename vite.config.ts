import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const isPreviewSandbox = process.env.BASE44_PREVIEW_MODE === '1'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: isPreviewSandbox ? { usePolling: true, interval: 300 } : undefined,
  },
})

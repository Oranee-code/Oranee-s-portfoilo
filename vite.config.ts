import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE44_PREVIEW_MODE is set to "1" only inside the Base44 sandbox, where the
// source lives on a bind mount. Polling makes Vite pick up edits reliably there.
// Everywhere else the flag is unset and Vite keeps its default watcher.
const isPreviewSandbox = process.env.BASE44_PREVIEW_MODE === '1'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: isPreviewSandbox ? { usePolling: true, interval: 300 } : undefined,
  },
})

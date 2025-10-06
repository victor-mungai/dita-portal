import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: 5173,
    strictPort: true,
    cors: true,
    allowedHosts: ['.dita.co.ke', 'localhost', '127.0.0.1', 'dita.co.ke']
  }
})

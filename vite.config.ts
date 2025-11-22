import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Usa IPv4 explícitamente para mejor compatibilidad en Windows
    port: 5173,
    strictPort: false,
    open: false,
    cors: true,
    hmr: {
      host: 'localhost',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

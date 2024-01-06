import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  plugins: [svgr(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./config/vitest/setup.ts'],
  },
});

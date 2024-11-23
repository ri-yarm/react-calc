import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      { find: '@/app', replacement: '/src/app' },
      { find: '@/features', replacement: '/src/app/features' },
      { find: '@/shared', replacement: '/src/app/shared' },
      { find: '@/ui', replacement: '/src/app/shared/ui' },
    ],
  },
});

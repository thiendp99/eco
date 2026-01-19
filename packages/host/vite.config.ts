// ============================================
// FILE 1: packages/host/vite.config.ts (UPDATE)
// Update Host config để expose cart store
// ============================================

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        productCatalog: 'http://localhost:3001/assets/remoteEntry.js',
        shoppingCart: 'http://localhost:3002/assets/remoteEntry.js',
      },
      // IMPORTANT: Expose cart store để remotes có thể dùng
      exposes: {
        './cartStore': './src/stores/cartStore',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        'react-router-dom': { singleton: true },
        zustand: { singleton: true, requiredVersion: '^4.4.0' },
        '@tanstack/react-query': { singleton: true },
      },
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});

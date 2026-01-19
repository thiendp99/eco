import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shoppingCart',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/components/Cart',
        './CartButton': './src/components/CartButton',
        './CartStore': './src/stores/cartStore', // ADD THIS
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        zustand: { singleton: true },
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

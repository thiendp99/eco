import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  plugins: [
    react(),
    federation({
      name: 'shoppingCart',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/components/Cart',
        './CartButton': './src/components/CartButton',
        './CartDrawer': './src/components/CartDrawer',
        './CartStore': './src/stores/cartStore',
      },
      shared: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        react: { singleton: true } as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        'react-dom': { singleton: true } as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        zustand: { singleton: true } as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        '@tanstack/react-query': { singleton: true } as any,
      },
    }),
    tailwindcss(),
  ],
  base: './',
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    assetsDir: '',
  },
});

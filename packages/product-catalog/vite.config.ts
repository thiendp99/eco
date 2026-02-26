import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const SHOPPING_CART_URL =
    env.VITE_SHOPPING_CART_URL || 'http://localhost:3002';

  return {
    plugins: [
      react(),
      federation({
        name: 'productCatalog',
        filename: 'remoteEntry.js',
        exposes: {
          './ProductList': './src/components/ProductList',
          './ProductDetail': './src/components/ProductDetail',
        },
        remotes: {
          shoppingCart: `${SHOPPING_CART_URL}/assets/remoteEntry.js`,
        },
        shared: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          react: { singleton: true } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          'react-dom': { singleton: true } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          'react-router-dom': { singleton: true } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          '@tanstack/react-query': { singleton: true } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          zustand: { singleton: true } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          '@ecommerce/shared': { singleton: true } as any,
        },
      }),
      tailwindcss(),
    ],
    base: './',
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  };
});

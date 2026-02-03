import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const PRODUCT_CATALOG_URL =
    env.VITE_PRODUCT_CATALOG_URL || 'http://localhost:3001';
  const SHOPPING_CART_URL =
    env.VITE_SHOPPING_CART_URL || 'http://localhost:3002';

  return {
    server: {
      port: 3000,
    },
    plugins: [
      react(),
      federation({
        name: 'host',
        remotes: {
          productCatalog: `${PRODUCT_CATALOG_URL}/assets/remoteEntry.js`,
          shoppingCart: `${SHOPPING_CART_URL}/assets/remoteEntry.js`,
        },
        shared: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          react: { singleton: true, requiredVersion: '18.2.0' } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          'react-dom': { singleton: true, requiredVersion: '18.2.0' } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          'react-router-dom': { singleton: true } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          zustand: { singleton: true } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          '@tanstack/react-query': { singleton: true } as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          '@ecommerce/shared': { singleton: true } as any,
        },
      }),
      tailwindcss(),
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  };
});

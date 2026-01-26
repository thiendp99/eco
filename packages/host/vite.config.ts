import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // Cấu hình URL mặc định cho Local Development
  const PRODUCT_CATALOG_URL =
    env.VITE_PRODUCT_CATALOG_URL || 'http://localhost:3001';
  const SHOPPING_CART_URL =
    env.VITE_SHOPPING_CART_URL || 'http://localhost:3002';

  console.log('Building Host with remotes:', {
    productCatalog: PRODUCT_CATALOG_URL,
    shoppingCart: SHOPPING_CART_URL,
  });

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
          react: { singleton: true, requiredVersion: '18.2.0' },
          'react-dom': { singleton: true, requiredVersion: '18.2.0' },
          'react-router-dom': { singleton: true },
          zustand: { singleton: true },
          '@tanstack/react-query': { singleton: true },
          //@ecommerce/shared: { singleton: true } // Share cả package type chung để đảm bảo consistent (optional logic)
        },
      }),
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
  };
});

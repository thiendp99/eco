// vite.config.ts
import { defineConfig } from "file:///D:/Improve/ecommerce-microfrontend/node_modules/.pnpm/vite@5.4.21/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Improve/ecommerce-microfrontend/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.4.21/node_modules/@vitejs/plugin-react/dist/index.js";
import federation from "file:///D:/Improve/ecommerce-microfrontend/node_modules/.pnpm/@originjs+vite-plugin-federation@1.4.1/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        productCatalog: "http://localhost:3001/assets/remoteEntry.js",
        shoppingCart: "http://localhost:3002/assets/remoteEntry.js"
      },
      // IMPORTANT: Expose cart store để remotes có thể dùng
      exposes: {
        "./cartStore": "./src/stores/cartStore"
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.2.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
        "react-router-dom": { singleton: true },
        zustand: { singleton: true, requiredVersion: "^4.4.0" },
        "@tanstack/react-query": { singleton: true }
      }
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxJbXByb3ZlXFxcXGVjb21tZXJjZS1taWNyb2Zyb250ZW5kXFxcXHBhY2thZ2VzXFxcXGhvc3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEltcHJvdmVcXFxcZWNvbW1lcmNlLW1pY3JvZnJvbnRlbmRcXFxccGFja2FnZXNcXFxcaG9zdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovSW1wcm92ZS9lY29tbWVyY2UtbWljcm9mcm9udGVuZC9wYWNrYWdlcy9ob3N0L3ZpdGUuY29uZmlnLnRzXCI7Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZJTEUgMTogcGFja2FnZXMvaG9zdC92aXRlLmNvbmZpZy50cyAoVVBEQVRFKVxuLy8gVXBkYXRlIEhvc3QgY29uZmlnIFx1MDExMVx1MUVDMyBleHBvc2UgY2FydCBzdG9yZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6ICdob3N0JyxcbiAgICAgIHJlbW90ZXM6IHtcbiAgICAgICAgcHJvZHVjdENhdGFsb2c6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXNzZXRzL3JlbW90ZUVudHJ5LmpzJyxcbiAgICAgICAgc2hvcHBpbmdDYXJ0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAyL2Fzc2V0cy9yZW1vdGVFbnRyeS5qcycsXG4gICAgICB9LFxuICAgICAgLy8gSU1QT1JUQU5UOiBFeHBvc2UgY2FydCBzdG9yZSBcdTAxMTFcdTFFQzMgcmVtb3RlcyBjXHUwMEYzIHRoXHUxRUMzIGRcdTAwRjluZ1xuICAgICAgZXhwb3Nlczoge1xuICAgICAgICAnLi9jYXJ0U3RvcmUnOiAnLi9zcmMvc3RvcmVzL2NhcnRTdG9yZScsXG4gICAgICB9LFxuICAgICAgc2hhcmVkOiB7XG4gICAgICAgIHJlYWN0OiB7IHNpbmdsZXRvbjogdHJ1ZSwgcmVxdWlyZWRWZXJzaW9uOiAnXjE4LjIuMCcgfSxcbiAgICAgICAgJ3JlYWN0LWRvbSc6IHsgc2luZ2xldG9uOiB0cnVlLCByZXF1aXJlZFZlcnNpb246ICdeMTguMi4wJyB9LFxuICAgICAgICAncmVhY3Qtcm91dGVyLWRvbSc6IHsgc2luZ2xldG9uOiB0cnVlIH0sXG4gICAgICAgIHp1c3RhbmQ6IHsgc2luZ2xldG9uOiB0cnVlLCByZXF1aXJlZFZlcnNpb246ICdeNC40LjAnIH0sXG4gICAgICAgICdAdGFuc3RhY2svcmVhY3QtcXVlcnknOiB7IHNpbmdsZXRvbjogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUtBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUCxnQkFBZ0I7QUFBQSxRQUNoQixjQUFjO0FBQUEsTUFDaEI7QUFBQTtBQUFBLE1BRUEsU0FBUztBQUFBLFFBQ1AsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixPQUFPLEVBQUUsV0FBVyxNQUFNLGlCQUFpQixVQUFVO0FBQUEsUUFDckQsYUFBYSxFQUFFLFdBQVcsTUFBTSxpQkFBaUIsVUFBVTtBQUFBLFFBQzNELG9CQUFvQixFQUFFLFdBQVcsS0FBSztBQUFBLFFBQ3RDLFNBQVMsRUFBRSxXQUFXLE1BQU0saUJBQWlCLFNBQVM7QUFBQSxRQUN0RCx5QkFBeUIsRUFBRSxXQUFXLEtBQUs7QUFBQSxNQUM3QztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

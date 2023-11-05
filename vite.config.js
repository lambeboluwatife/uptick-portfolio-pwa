import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Lambe Boluwatife",
        short_name: "L.B.D's Portfolio",
        description: "Lambe Boluwatife's Portfolio",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/public/Bolu-icon.webp",
            sizes: "512x512",
            type: "image/webp",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              return url.pathname.endsWith(".webp");
            },
            handler: "CacheFirst",
            options: {
              cacheName: "img-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});

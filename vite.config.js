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
        background_color: "#00ff00",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "512x512",
            type: "image/webp",
            purpose: "any maskable",
          },
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "384x384",
            type: "image/webp",
            purpose: "any maskable",
          },
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "256x256",
            type: "image/webp",
            purpose: "any maskable",
          },
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "192x192",
            type: "image/webp",
            purpose: "any maskable",
          },
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "168x168",
            type: "image/webp",
            purpose: "any maskable",
          },
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "144x144",
            type: "image/webp",
            purpose: "any maskable",
          },
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "72x72",
            type: "image/webp",
            purpose: "any maskable",
          },
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "48x48",
            type: "image/webp",
            purpose: "any maskable",
          },
          {
            src: "https://media.licdn.com/dms/image/D4D03AQEpBqyhutdOWg/profile-displayphoto-shrink_800_800/0/1697096605029?e=2147483647&v=beta&t=4bO8fOamzqBml550TRYvEc5h5t9VGjCe9mfm5DKryyE",
            sizes: "20x20",
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

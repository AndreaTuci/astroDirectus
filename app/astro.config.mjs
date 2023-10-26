import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import { loadEnv } from "vite";
import node from "@astrojs/node";

// Since the Astro config file does not normally support environment
// https://vitejs.dev/guide/env-and-mode.html#env-files

// Using loadEnv to load the environment variables from the .env file
// const env = loadEnv("", process.cwd(), "ENVKEY");

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  // vite: {
  //   server: {
  //     hmr: {
  //       clientPort: 4321,
  //       protocol: "ws",
  //     },
  //   },
  // },
});

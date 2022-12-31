import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), compress()],
  site: "https://kelche.co",
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "dracula",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  trailingSlash: "always",
});

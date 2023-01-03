import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import theme from "shiki/themes/github-dark.json";
import remarkToc from "remark-toc";
import { remarkCodeHike } from "@code-hike/mdx";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    compress(),
    mdx({
      remarkPlugins: [
        [
          remarkCodeHike,
          {
            autoImport: false,
            theme,
          },
        ],
        remarkReadingTime,
      ],
    }),
    react(),
  ],
  site: "https://kelche.co",
  base: "/",
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkToc],
    shikiConfig: {
      theme: "dracula",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  trailingSlash: "always",
});

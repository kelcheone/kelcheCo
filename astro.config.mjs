import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import {
  astroCodeSnippets,
  codeSnippetAutoImport,
} from "./integrations/astro-code-snippets";
import AutoImport from "astro-auto-import";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [codeSnippetAutoImport],
    }),
    tailwind(),
    sitemap(),
    compress(),
    astroCodeSnippets(),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
    react(),
    lit(),
    partytown(),
  ],
  site: "https://www.kelche.co",
  base: "/",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "dracula",
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  trailingSlash: "always",
});

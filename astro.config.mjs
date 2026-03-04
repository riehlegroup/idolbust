import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

const repo = "idolbust";

export default defineConfig({
  site: "https://riehlegroup.github.io",
  base: process.env.NODE_ENV === "production" ? `/${repo}/` : "/",
  integrations: [tailwind(), mdx(), sitemap(), react()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});

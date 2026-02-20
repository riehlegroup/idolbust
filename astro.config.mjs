import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const repo = "idolbust";

export default defineConfig({
  site: "https://riehlegroup.github.io",
  base: process.env.NODE_ENV === "production" ? `/${repo}/` : "/",
  integrations: [tailwind(), mdx(), sitemap()],
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

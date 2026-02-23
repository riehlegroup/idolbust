# Idol or Bust!

[![CI](https://github.com/riehlegroup/idolbust/actions/workflows/ci.yml/badge.svg)](https://github.com/riehlegroup/idolbust/actions/workflows/ci.yml)
[![Preview](https://img.shields.io/badge/preview-GitHub%20Pages-1d4ed8)](https://riehlegroup.github.io/idolbust/)
[![License](https://img.shields.io/github/license/riehlegroup/idolbust)](LICENSE.txt)

Simple website software for research projects that want to understand their user needs.

## Quick Start

```bash
bun install
bun dev
```

Open [localhost:4321](http://localhost:4321) in your browser.

## Features

- **Astro.js** - Fast static site generation with partial hydration
- **Tailwind CSS** - Utility-first styling with custom theme
- **TypeScript** - Strict mode for full type safety
- **Content Collections** - Type-safe blog posts with Zod validation
- **MDX Support** - Enhanced markdown with components
- **RSS Feed** - Automatic feed generation (`/rss.xml`)
- **Sitemap** - SEO-friendly sitemap generation (`/sitemap-index.xml`)

## Project Structure

```
src/
├── components/      # Reusable UI components
├── content/         # Blog posts (MDX)
├── layouts/         # Page layouts
├── pages/           # Routes (file-based)
└── styles/          # Global styles
```

## Commands

| Command             | Description              |
| ------------------- | ------------------------ |
| `bun dev`           | Start development server |
| `bun build`         | Build for production     |
| `bun preview`       | Preview production build |
| `bun run lint`      | Run ESLint               |
| `bun run typecheck` | Run TypeScript check     |

## Customize Branding

The site branding now comes from a single file: `src/config/brand.ts`.

- Display identity (site name, logo, favicon, default OG image)
- Organization metadata (name, legal name, optional address, social profiles)
- Theme tokens (primary/secondary color scales and optional fonts)
- Global links (primary CTAs, social links, app links)
- SEO defaults (title template, default description, robots, Twitter defaults)

Minimal example:

```ts
import type { BrandConfig } from "@/config/brand";

export const BRAND_CONFIG: BrandConfig = {
  identity: {
    siteName: "My Research Lab",
    tagline: "Evidence-driven product research",
    siteUrl: "https://example.github.io",
    language: "en",
    locale: "en_US",
    logoPath: "/apple-touch-icon.png",
    faviconPath: "/favicon.svg",
    appleTouchIconPath: "/apple-touch-icon.png",
    manifestPath: "/site.webmanifest",
    defaultOgImagePath: "/og-image.png",
  },
  organization: {
    name: "My Research Lab",
    socialProfiles: ["https://github.com/my-org/my-project"],
  },
  theme: {
    primary: {
      "50": "240 249 255",
      "100": "224 242 254",
      "200": "186 230 253",
      "300": "125 211 252",
      "400": "56 189 248",
      "500": "14 165 233",
      "600": "2 132 199",
      "700": "3 105 161",
      "800": "7 89 133",
      "900": "12 74 110",
      "950": "8 47 73",
    },
    secondary: {
      "50": "250 250 250",
      "100": "245 245 245",
      "200": "229 229 229",
      "300": "212 212 212",
      "400": "163 163 163",
      "500": "115 115 115",
      "600": "82 82 82",
      "700": "64 64 64",
      "800": "38 38 38",
      "900": "23 23 23",
      "950": "10 10 10",
    },
    themeColor: "#0284c7",
  },
  links: {
    primaryCtas: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
    appLinks: [],
    social: [
      { platform: "github", url: "https://github.com/my-org/my-project" },
    ],
  },
  seo: {
    titleTemplate: "%s | {siteName}",
    defaultDescription:
      "A reusable Astro template for research project websites.",
    robots: "index,follow",
    twitterCard: "summary_large_image",
  },
  blog: {
    title: "My Research Lab Blog",
    description: "Updates from our research and product work.",
  },
};
```

### Theming Notes

- Color tokens are exposed as CSS variables in `src/styles/global.css`.
- Tailwind color utilities (`primary-*`, `secondary-*`) map to those variables in `tailwind.config.mjs`.
- The active brand values are injected globally by `src/layouts/BaseLayout.astro`.

## Deployment

Configured for GitHub Pages. Update `astro.config.mjs` with your username:

```js
site: 'https://riehlegroup.github.io',
base: '/idolbust',
```

Pushes to `main` automatically build and deploy via the `Deploy` GitHub Actions workflow.

## License

[AGPL-3.0-or-later](LICENSE.txt)

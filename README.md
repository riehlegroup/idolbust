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
- **RSS Feed** - Automatic feed generation
- **Sitemap** - SEO-friendly sitemap generation

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

## Deployment

Configured for GitHub Pages. Update `astro.config.mjs` with your username:

```js
site: 'https://riehlegroup.github.io',
base: '/idolbust',
```

Pushes to `main` automatically build and deploy via the `Deploy` GitHub Actions workflow.

## License

[AGPL-3.0-or-later](LICENSE.txt)

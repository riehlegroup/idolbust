# Idol or Bust!

[![CI](https://github.com/riehlegroup/idolbust/actions/workflows/ci.yml/badge.svg)](https://github.com/riehlegroup/idolbust/actions/workflows/ci.yml)
[![Preview](https://img.shields.io/badge/preview-GitHub%20Pages-1d4ed8)](https://riehlegroup.github.io/idolbust/)
[![License](https://img.shields.io/github/license/riehlegroup/idolbust)](LICENSE.txt)

Easy startup websites for market research

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
- **Resources Library** - Optional evergreen resources collection with categories and manual ordering
- **MDX Support** - Enhanced markdown with components
- **RSS Feed** - Automatic feed generation (`/rss.xml`)
- **Sitemap** - SEO-friendly sitemap generation (`/sitemap-index.xml`)

## Project Structure

```
src/
├── components/      # Reusable UI components
├── content/         # Blog posts and resources (MDX)
├── data/            # Site-specific page copy and UI content
├── data-models/     # Shared TypeScript models for data modules
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

The site branding now comes from one source of truth: `src/data/brand.ts`.

1. Open `src/data/brand.ts`.
2. Update identity, organization, theme, links, SEO, and blog values.
3. Keep paths aligned with your configured `base` path in `astro.config.mjs`.

For the complete typed example and current defaults, use `src/data/brand.ts` directly.

## Site Content Pattern

Keep site-specific copy and content in `src/data/`, then import it into `.astro` pages.

- Use `src/data/home.ts`, `src/data/about.ts`, `src/data/blog.ts`, and `src/data/resources.ts` for page-level strings and labels.
- Keep shared data interfaces in `src/data-models/` (including `src/data-models/brand.ts`).
- Keep `.astro` pages focused on layout and rendering logic; avoid hard-coded copy in templates.
- Reuse `src/data/brand.ts` for global identity, SEO defaults, and links.

### Theming Notes

- Color tokens are exposed as CSS variables in `src/styles/global.css`.
- Tailwind color utilities (`primary-*`, `secondary-*`) map to those variables in `tailwind.config.mjs`.
- The active brand values are injected globally by `src/layouts/BaseLayout.astro`.

## Resources Collection

The template includes a `resources` collection at `src/content/resources/`.

- Use nested paths if helpful (for example `guides/interview-script-template.mdx`).
- Draft entries (`draft: true`) are excluded from both resources listing and detail routes.
- Resources are sorted by `order` (ascending), then by `updatedDate`/`pubDate` (descending).

Supported frontmatter fields:

- `title`, `description`, `category`, `pubDate`
- `updatedDate`, `tags`, `draft`, `order`
- `heroImage`, `canonical`, `seoTitle`, `seoDescription`, `ogImage`, `related`

Schema source of truth: `src/content.config.ts`.

## Deployment

Configured for GitHub Pages. Update `astro.config.mjs` with your username:

```js
site: 'https://riehlegroup.github.io',
base: '/idolbust',
```

Pushes to `main` automatically build and deploy via the `Deploy` GitHub Actions workflow.

## License

[AGPL-3.0-or-later](LICENSE.txt)

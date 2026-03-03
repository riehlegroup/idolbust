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

## Architecture

This template follows a hexagonal layout: core domain + ports, adapters, and wiring.

- Core domain lives under `src/core/` (models, services, ports, content schemas).
- Adapters live under `src/adapters/` (renderer, content, infra utilities).
- Wiring modules in `src/wiring/` compose adapters + core services into page models.
- Pages render the page model via a renderer adapter.

### Project Structure

```
src/
├── adapters/          # Renderer/content/infra adapters
├── components/        # UI building blocks (sections, ui, features)
├── content/           # Customization data + MDX content
├── core/              # Domain models, ports, services, schemas
├── layouts/           # Layout shells
├── pages/             # Routes (file-based)
├── styles/            # Global styles
└── wiring/            # Composition root per page
```

## Commands

| Command             | Description              |
| ------------------- | ------------------------ |
| `bun dev`           | Start development server |
| `bun build`         | Build for production     |
| `bun preview`       | Preview production build |
| `bun run lint`      | Run ESLint               |
| `bun run typecheck` | Run TypeScript check     |

## Customize Content

All site customization lives in `src/content/**`.

1. Update identity, organization, theme, links, SEO, and blog values in `src/content/site/brand.ts`.
2. Update page copy in `src/content/pages/home.ts` and `src/content/pages/about.ts`.
3. Add blog/resources content under `src/content/blog/` and `src/content/resources/`.

Pages and visuals are wired separately, so new sites can be created by editing content only.

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

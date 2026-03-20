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

Want to migrate an existing site to using IdolBust? See [docs/migrate-existing-site.md](docs/migrate-existing-site.md) for a detailed guide and helpful worksheet templates.

## Features

- **Astro.js** - Fast static site generation with partial hydration
- **Storybook** - Component library with nice UI to browse
- **Tailwind CSS** - Utility-first styling with custom theme
- **TypeScript** - Strict mode for full type safety
- **Content Collections** - Type-safe blog posts with Zod validation
- **MDX Support** - Enhanced markdown with components
- **Interactive Inputs** - Subscription, polls, binary choice, and free-text blocks
- **RSS Feed** - Automatic feed generation (`/rss.xml`)
- **Sitemap** - SEO-friendly sitemap generation (`/sitemap-index.xml`)

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── atoms/        # Atomic components
│   ├── molecules/    # Compound components
│   ├── organisms/    # Section components
│   └── templates/    # Page-level composition (optional)
├── layouts/         # Page layouts
├── pages/           # Routes (file-based), ignores folders and files starting with underscore
└── styles/          # Global styles
```

## Commands

| Command                                | Description                   |
| -------------------------------------- | ----------------------------- |
| `bun dev`                              | Start development server      |
| `bun run build`                        | Build for production          |
| `bun preview`                          | Preview production build      |
| `bun run lint`                         | Run ESLint                    |
| `bun run typecheck`                    | Run TypeScript check          |
| `bun storybook`                        | Start Storybook               |
| `bun storybook:build`                  | Build Storybook static site   |
| `npx vitest --project=storybook --run` | Run Storybook tests (CI/a11y) |

## Storybook

Storybook is configured for TSX components under `src/components/`.

```bash
bun storybook
```

Run Storybook tests (including a11y checks) from CI or locally with:

```bash
npx vitest --project=storybook --run
```

Story conventions (early stage):

- Use a single default export title that matches the component group (Atoms, Molecules, Organisms).
- Keep story names short and descriptive (Primary, WithIcon, Dense).

## Customize Branding

The site branding now comes from one source of truth: `src/pages/_brandConfig.ts`.

1. Open `src/pages/_brandConfig.ts`.
2. Update identity, organization, theme, links, SEO, and blog values.
3. Keep paths aligned with your configured `base` path in `astro.config.mjs`.

For the complete typed example and current defaults, use `src/pages/_brandConfig.ts` directly.

## Site Content Pattern

Except the brand config, all data is initialized in the header of the `.astro` page files.

## Redirects After Renaming Pages

Keep renamed routes in `astro.config.mjs`:

```js
redirects: {
  "/about/": "/project/",
},
```

Remove the old page file, because file-based routes take precedence over configured redirects.

### Theming Notes

- Color tokens are exposed as CSS variables in `src/styles/global.css`.
- Tailwind color utilities (`primary-*`, `secondary-*`) map to those variables in `tailwind.config.mjs`.
- The active brand values are injected globally by `src/layouts/BaseLayout.astro`.

## Resources Collection

The template includes a `resources` collection at `src/pages/resources/_articles`.

- Use nested paths if helpful (for example `guides/interview-script-template.mdx`).
- Draft entries (`draft: true`) are excluded from both resources listing and detail routes.
- Resources are sorted by `order` (ascending), then by `updatedDate`/`pubDate` (descending).

Supported frontmatter fields:

- `title`, `description`, `category`, `pubDate`
- `updatedDate`, `tags`, `draft`, `order`
- `heroImage`, `canonical`, `seoTitle`, `seoDescription`, `ogImage`, `related`

Schema source of truth: `src/content.config.ts`.

## Interactive Components

Interactive components are available from `src/components/molecules` and can be imported from `@/components`:

- `SubscriptionForm`
- `Poll`
- `TwoWaySelection`
- `FreeTextQuestion`

Each component accepts an async `onSubmit` prop in React contexts and falls back to console logging if no handler is provided.

For MDX usage with Astro hydration:

```mdx
import { Poll } from "@/components";

<Poll
  client:load
  question="How often do you run user interviews?"
  options={["Weekly", "Monthly", "Only before major releases"]}
/>
```

## Blog Articles Collection

Same as resources, but markdown files are located under `src/pages/blog/_articles`.

## Deployment

Configured for GitHub Pages. Update `astro.config.mjs` with your username:

```js
site: 'https://riehlegroup.github.io',
base: '/idolbust',
```

Pushes to `main` automatically build and deploy via the `Deploy` GitHub Actions workflow.

## License

[AGPL-3.0-or-later](LICENSE.txt)

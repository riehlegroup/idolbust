# AGENTS.md

Agent instructions for the Idol or Bust project - an Astro.js template for research project websites.

## Project Overview

Idol or Bust is simple website software for research projects that want to understand their user needs. Built with Astro.js, Tailwind CSS, and TypeScript strict mode.

## Commands

### Development

```bash
bun dev              # Start dev server at localhost:4321
bun build            # Build for production to ./dist
bun preview          # Preview production build locally
```

### Code Quality

```bash
bun run lint         # Run ESLint on source files
bun run typecheck    # Run TypeScript type checking
bun run format       # Format code with Prettier
```

### Package Management

```bash
bun add <package>           # Add a dependency
bun add -d <package>        # Add a dev dependency
bun remove <package>        # Remove a dependency
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Generic components (Button, Card)
│   └── features/        # Feature-specific components (Team, SocialLinks)
├── content/             # Content collections (blog posts)
├── layouts/             # Page layouts (BaseLayout, BlogLayout)
├── pages/               # File-based routing
├── styles/              # Global styles and Tailwind config
└── utils/               # Helper functions and utilities
public/                  # Static assets served directly
```

## Code Style Guidelines

### Philosophy

- **Maintainability over everything else** - Prioritize readable, understandable code
- **Clean code standards** - Follow SOLID principles, meaningful names, small functions
- **No backward compatibility constraints** - This is a new project, make good decisions
- **Documentation** - Keep this file and README.md updated with architectural decisions

### Documentation

- Keep documentation concise and maintainable
- Prefer linking to the source-of-truth file over duplicating large config examples
- When documenting configuration, show a short quick-start and point to the canonical file (for branding: `src/config/brand.ts`)
- Update docs in the same PR when behavior, APIs, or customization paths change

### TypeScript

- Strict mode is enabled - no implicit any, strict null checks
- Prefer explicit types over `any` - use `unknown` when type is truly unknown
- Use Zod for runtime validation of external data
- Prefer `interface` for object shapes, `type` for unions/primitives
- Define Props interfaces at the top of `.astro` files

```typescript
// Good
export interface Props {
  title: string;
  items: readonly string[];
}

// Avoid
const data: any = fetchData();
```

### Imports

- Use `@/` alias for all src imports
- Group imports: external packages → internal modules → types
- Named imports preferred over default imports
- Barrel exports via `index.ts` files

```typescript
// Good
import { Button, Card } from "@/components";
import type { CollectionEntry } from "astro:content";

// Avoid
import Button from "@/components/ui/Button.astro";
```

### Components

- `.astro` files for static/presentational components
- One component per file
- PascalCase for component names
- kebab-case for file names
- Props interface named `Props` at file top

```astro
---
export interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---
```

### Styling

- Tailwind CSS utility classes in templates
- Custom utilities in `src/styles/global.css` under `@layer components`
- Mobile-first responsive design (sm:, md:, lg: breakpoints)
- Use semantic color names from theme (primary, secondary)

```html
<!-- Good -->
<button
  class="rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
>
  <!-- Avoid -->
  <button class="rounded-lg bg-blue-500 px-4 py-2"></button>
</button>
```

### Naming Conventions

| Type        | Convention           | Example            |
| ----------- | -------------------- | ------------------ |
| Files       | kebab-case           | `blog-post.astro`  |
| Components  | PascalCase           | `BlogPost`         |
| Functions   | camelCase            | `formatDate()`     |
| Variables   | camelCase            | `pageTitle`        |
| Constants   | SCREAMING_SNAKE_CASE | `MAX_ITEMS`        |
| CSS classes | kebab-case           | `.container-prose` |

### Error Handling

- Validate external data with Zod schemas
- Throw descriptive Error messages with context
- Use Astro's error pages for 404/500 handling
- Never catch and silently ignore errors

```typescript
// Good
const result = schema.safeParse(data);
if (!result.success) {
  throw new Error(`Validation failed: ${result.error.message}`);
}

// Avoid
try {
  something();
} catch (e) {
  /* ignore */
}
```

### Comments

- **Do not add comments** for obvious code
- Document design decisions that are not obvious
- Document side effects and non-local impacts
- Use JSDoc for exported utility functions

```typescript
// Good: Explains non-obvious decision
// Using UTC to avoid timezone issues in blog post dates
const pubDate = new Date(post.data.pubDate).toUTCString();

// Avoid: States the obvious
// Get the title
const title = post.data.title;
```

## Content Collections

Blog posts are managed via Astro Content Collections:

- Posts located in `src/content/blog/`
- Schema defined in `src/content.config.ts`
- Use `.mdx` for posts with components
- Required frontmatter: title, description, pubDate

```yaml
---
title: Post Title
description: Brief description for SEO (max 160 chars)
pubDate: 2026-02-20
author: Research Team
tags: [research, updates]
draft: false
---
```

## Git Commits

Use conventional commits format:

```
type(scope): brief description

[optional body]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Important**: Never add yourself as a co-author. The user takes ownership when code is committed.

## Deployment

- Platform: GitHub Pages
- Base path: `/idolbust/`
- Site URL: `https://yourusername.github.io`
- Update `astro.config.mjs` with your actual GitHub username

### GitHub Actions (automatic)

The project includes sitemap and RSS feed generation. On push to main, GitHub Pages will build and deploy automatically if configured.

## Key Files to Update

When making changes, update these files as needed:

1. **AGENTS.md** - This file (coding standards, commands)
2. **README.md** - Project documentation
3. **package.json** - When adding/removing dependencies
4. **src/content.config.ts** - When adding new content types

# Migrate an Existing Website to IdolBust

This manual-first guide explains how to rebuild an existing website with IdolBust.

## Outcome

By the end, you will have:

- an IdolBust-based repository for your target site
- migrated pages and content using IdolBust conventions
- URL and SEO parity checks complete
- a production-ready build

## Definition of Done

Use this checklist before you call the migration complete:

- URL inventory is complete and every source URL has a destination plan
- all required content is migrated to `src/pages/**` or `src/pages/**/_articles/**`
- `src/pages/_brandConfig.ts` is fully updated for the target identity
- changed URLs are covered by redirects in `astro.config.mjs`
- metadata parity is verified (title, description, canonical, OG image)
- quality checks pass: `bun run lint`, `bun run typecheck`, `bun run build`
- launch QA is complete on desktop and mobile

## 1) Create the project from IdolBust

1. Fork this repository (or use it as a template).
2. Clone your new repository.
3. Install dependencies and run the local dev server.

```bash
bun install
bun dev
```

Verification:

- app loads on `http://localhost:4321`
- no startup errors in terminal output

## 2) Build a migration inventory

Before editing code, build a complete inventory of what you plan to migrate.

Track for each source page:

- current URL
- intended destination URL
- page purpose
- major sections/components
- metadata (title + description)
- media/assets needed
- migration status

Use the worksheet templates in [Migration Worksheets](#migration-worksheets).

Verification:

- no important source route is missing
- all high-traffic and SEO-critical pages are identified

## 3) Configure global brand and identity

Update `src/pages/_brandConfig.ts` for the target website.

At minimum, set:

- identity (`siteName`, `siteUrl`, locale, favicon/logo/OG paths)
- organization data
- theme tokens (colors and fonts)
- CTA, app, and social links
- SEO defaults

Then replace or add matching assets in `public/` (logo, favicon, OG image, manifest references).

Verification:

- header/footer identity is correct
- favicon, logo, and OG image paths resolve
- links and CTA targets are not placeholders

## 4) Rebuild page routes

Rebuild each page under `src/pages/`.

- Keep page copy in `.astro` frontmatter blocks.
- Reuse existing templates/components first.
- Add new components only when existing patterns do not fit.

Typical mapping:

- static marketing pages -> route `.astro` files (for example `src/pages/about.astro`)
- grouped solution/service pages -> nested routes (for example `src/pages/solutions/*.astro`)
- article-like content -> collections under `_articles`

Verification:

- every mapped route renders
- navigation and CTA links resolve to real pages
- mobile layout remains readable without overflow

## 5) Migrate long-form content into collections

Use the built-in collection locations:

- blog entries: `src/pages/blog/_articles/`
- resources entries: `src/pages/resources/_articles/`

Schema source of truth: `src/content.config.ts`.

Tips:

- keep slug structure close to the original site where practical
- mark unpublished content with `draft: true`
- keep frontmatter complete and schema-valid

Verification:

- collection index pages show expected entries
- entry detail routes resolve with correct slugs
- no schema validation errors during build

## 6) Preserve URLs and metadata

If routes change, add redirects in `astro.config.mjs`.

```js
redirects: {
  "/old-path/": "/new-path/",
},
```

Also verify:

- canonical URLs point to intended destinations
- social/OG metadata renders expected values
- sitemap and RSS outputs are present in build output

Verification:

- old critical URLs resolve by direct navigation
- metadata tags match your parity worksheet

## 7) Add required policy and analytics pages

If needed for your organization, add legal/policy pages and analytics tracking.

Verification:

- required legal pages are linked in footer/navigation
- analytics integration loads only where intended

## 8) Validate before launch

Run:

```bash
bun run lint
bun run typecheck
bun run build
```

Manual checks:

- all migrated routes load
- navbar/footer links are correct
- desktop and mobile layouts are usable
- redirect coverage exists for changed high-value URLs

## 9) Deploy and cut over

Deploy with your hosting target and custom domain settings.

- GitHub Pages: configure `site`, `base`, and custom domain
- other hosts: configure equivalent base URL and redirect behavior

After DNS/domain cutover, re-check pages, metadata, and redirects in production.

## Migration Worksheets

Use these templates directly in your migration notes.

### URL Inventory

| Source URL | Destination URL | Type | Keep URL | Priority | Status | Notes              |
| ---------- | --------------- | ---- | -------- | -------- | ------ | ------------------ |
| `/`        | `/`             | page | yes      | high     | todo   | hero + primary CTA |
| `/about`   | `/about/`       | page | yes      | high     | todo   | mission + team     |

### Page and Component Mapping

| Source URL | Destination File        | Template/Component | New Component Needed | Notes                    |
| ---------- | ----------------------- | ------------------ | -------------------- | ------------------------ |
| `/`        | `src/pages/index.astro` | `HomeTemplate`     | no                   | adapt hero/features copy |
| `/about`   | `src/pages/about.astro` | `AboutTemplate`    | maybe                | depends on team layout   |

### Collection Content Mapping

| Source URL                  | Collection  | Destination File                                  | Slug            | Draft | Notes             |
| --------------------------- | ----------- | ------------------------------------------------- | --------------- | ----- | ----------------- |
| `/news/example-post/`       | `blog`      | `src/pages/blog/_articles/example-post.mdx`       | `example-post`  | false | map author + tags |
| `/resources/example-guide/` | `resources` | `src/pages/resources/_articles/example-guide.mdx` | `example-guide` | false | set `category`    |

### Asset Inventory

| Asset Source | Destination Path      | Used By              | Replaced | Status |
| ------------ | --------------------- | -------------------- | -------- | ------ |
| logo.svg     | `public/logo.svg`     | global header/footer | yes      | todo   |
| og-image.png | `public/og-image.png` | default metadata     | yes      | todo   |

### Metadata Parity Check

| URL                         | Title Updated | Description Updated | Canonical Set | OG Image Set | Status |
| --------------------------- | ------------- | ------------------- | ------------- | ------------ | ------ |
| `/`                         | yes           | yes                 | yes           | yes          | todo   |
| `/resources/example-guide/` | yes           | yes                 | yes           | yes          | todo   |

### Launch QA Checklist

| Check                | Result    | Notes |
| -------------------- | --------- | ----- |
| `bun run lint`       | pass/fail |       |
| `bun run typecheck`  | pass/fail |       |
| `bun run build`      | pass/fail |       |
| Route smoke test     | pass/fail |       |
| Mobile layout check  | pass/fail |       |
| Redirect spot checks | pass/fail |       |

## Example Migration Walkthrough

Use this as a neutral reference workflow when rebuilding a typical marketing and resources website.

### Example route map

| Source Pattern               | IdolBust Destination          | Implementation Target                               |
| ---------------------------- | ----------------------------- | --------------------------------------------------- |
| `/`                          | `/`                           | `src/pages/index.astro`                             |
| `/product`                   | `/product/`                   | `src/pages/product.astro`                           |
| `/solutions`                 | `/solutions/`                 | `src/pages/solutions/index.astro`                   |
| `/solutions/{topic}`         | `/solutions/{topic}/`         | `src/pages/solutions/{topic}.astro`                 |
| `/resources`                 | `/resources/`                 | `src/pages/resources/index.astro`                   |
| `/resources/{series}/{slug}` | `/resources/{series}/{slug}/` | `src/pages/resources/_articles/{series}/{slug}.mdx` |
| `/news/{slug}`               | `/blog/{slug}/`               | `src/pages/blog/_articles/{slug}.mdx`               |
| `/about`                     | `/about/`                     | `src/pages/about.astro`                             |
| `/legal-notices`             | `/legal-notices/`             | `src/pages/legal-notices.astro`                     |

### Example migration sequence

1. Copy brand identity and global links into `src/pages/_brandConfig.ts`.
2. Rebuild top-level routes (`/`, `/about/`, `/solutions/`, `/resources/`) in `src/pages/`.
3. Migrate long-form resources into `src/pages/resources/_articles/**` with complete frontmatter.
4. Migrate news/blog content into `src/pages/blog/_articles/**`.
5. Add redirects in `astro.config.mjs` for every changed path.
6. Run lint, typecheck, and build before deploy.

### Example content decisions

- Keep overview pages as `.astro` routes when they are mostly curated content.
- Use collections for repeatable entries that need sorting, tags, dates, and detail pages.
- Keep slug naming stable unless there is a clear SEO or information architecture reason to change.
- Prefer one canonical destination per source URL to avoid duplicate indexable paths.

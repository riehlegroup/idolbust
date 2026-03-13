# Migrate an Existing Website to IdolBust

This guide explains how to rebuild an existing website (for example, `scatool.com`) using IdolBust as the foundation.

## Outcome

By the end, you will have:

- a new IdolBust-based repository for the target site
- migrated pages and content in IdolBust conventions
- preserved SEO signals (or redirect coverage when URLs changed)
- a deployable production build

## 1) Create the project from IdolBust

1. Fork this repository (or use it as a template).
2. Clone your new repository.
3. Install and run locally.

```bash
bun install
bun dev
```

## 2) Inventory the current site

Before editing code, list everything to migrate from the existing website.

For each page, capture:

- current URL
- page purpose
- sections on the page
- title and meta description
- media/assets used
- keep URL as-is or change URL

Use this small worksheet:

| Current URL      | New URL          | Page Type | Notes                    |
| ---------------- | ---------------- | --------- | ------------------------ |
| `/`              | `/`              | static    | home hero + features     |
| `/about`         | `/about`         | static    | team + project mission   |
| `/resources/foo` | `/resources/foo` | content   | move to collection entry |

## 3) Configure global brand and identity

Update `src/pages/_brandConfig.ts` for the target website.

At minimum, set:

- identity: site name, base URL, locale, favicon/logo/OG image paths
- organization metadata
- theme tokens (colors/fonts)
- global links and CTAs
- SEO defaults

Then replace or add matching assets in `public/` (logo, favicon, OG image, manifest references).

## 4) Migrate pages

Rebuild each page under `src/pages/`.

- Keep page copy in the `.astro` frontmatter block (project convention).
- Reuse existing templates/components first.
- Add new components only when a page pattern is not covered.

Typical mapping:

- static marketing pages -> `.astro` page files
- repeated article-like content -> content collections under `_articles`

## 5) Migrate long-form content into collections

Use the built-in collection locations:

- blog entries: `src/pages/blog/_articles/`
- resources entries: `src/pages/resources/_articles/`

Tips:

- keep slug/path structure close to old URLs where possible
- mark unpublished content with `draft: true`
- keep frontmatter complete and valid per `src/content.config.ts`

## 6) Preserve URLs and SEO

If routes change, add redirects in `astro.config.mjs`.

Example:

```js
redirects: {
  "/old-path/": "/new-path/",
},
```

Also verify:

- canonical URLs resolve correctly
- social/OG metadata renders as expected
- sitemap and RSS outputs are present

## 7) Add analytics/tracking (optional)

If needed, add your analytics solution and privacy/legal pages for your organization policy.

## 8) Validate before launch

Run:

```bash
bun run lint
bun run typecheck
bun build
```

Manual checks:

- all migrated routes load
- navbar/footer links are correct
- mobile and desktop layouts look correct
- old critical URLs have redirect coverage

## 9) Deploy and cut over

Deploy with your hosting target and custom domain settings.

- GitHub Pages: configure `site`, `base`, and custom domain
- other hosts: configure equivalent base URL and redirects

After DNS/domain cutover, re-check pages, metadata, and redirects in production.

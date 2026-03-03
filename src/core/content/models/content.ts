import { z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  description: z
    .string()
    .max(160, "Description must be 160 characters or less"),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default("Research Team"),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export const resourcesSchema = z.object({
  title: z.string(),
  description: z
    .string()
    .max(160, "Description must be 160 characters or less"),
  category: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  order: z.number().int().optional(),
  heroImage: z.string().optional(),
  canonical: z.string().url().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z
    .string()
    .max(160, "SEO description must be 160 characters or less")
    .optional(),
  ogImage: z.string().optional(),
  related: z.array(z.string()).default([]),
});

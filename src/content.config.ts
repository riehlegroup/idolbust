import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { blogSchema, resourcesSchema } from "@/core/content/models/content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: blogSchema,
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/resources" }),
  schema: resourcesSchema,
});

export const collections = {
  blog,
  resources,
};

import type { CollectionEntry } from "astro:content";

export type ResourceEntry = CollectionEntry<"resources">;

/**
 * Returns a URL-safe slug path for a resource entry.
 */
export function getResourceSlug(resource: ResourceEntry): string {
  return resource.id.replace(/\.(md|mdx)$/, "");
}

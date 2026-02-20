import type { CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getBlogSlug(post: BlogEntry): string {
  return post.id.replace(/\.(md|mdx)$/, "");
}

export function getPublishedPosts(posts: BlogEntry[]): BlogEntry[] {
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

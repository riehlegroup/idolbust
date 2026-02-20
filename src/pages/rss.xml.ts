import rss from "@astrojs/rss";
import { getCollection, type CollectionEntry } from "astro:content";
import type { APIContext } from "astro";
import { withBase } from "@/utils/with-base";

type BlogEntry = CollectionEntry<"blog">;

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  const sortedPosts = posts
    .filter((post: BlogEntry) => !post.data.draft)
    .sort(
      (a: BlogEntry, b: BlogEntry) =>
        b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );

  return rss({
    title: "Idol or Bust Blog",
    description:
      "Latest updates and insights from the Idol or Bust research project.",
    site: context.site ?? "https://riehlegroup.github.io",
    items: sortedPosts.map((post: BlogEntry) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: withBase(`/blog/${post.id.replace(/\.(md|mdx)$/, "")}/`),
    })),
    customData: `<language>en-us</language>`,
  });
}

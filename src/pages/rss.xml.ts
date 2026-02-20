import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { withBase } from "@/utils/with-base";
import { getBlogSlug, getPublishedPosts } from "@/utils/blog";

export async function GET(context: APIContext) {
  const posts = getPublishedPosts(await getCollection("blog"));

  return rss({
    title: "Idol or Bust Blog",
    description:
      "Latest updates and insights from the Idol or Bust research project.",
    site: context.site ?? "https://riehlegroup.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: withBase(`/blog/${getBlogSlug(post)}/`),
    })),
    customData: `<language>en-us</language>`,
  });
}

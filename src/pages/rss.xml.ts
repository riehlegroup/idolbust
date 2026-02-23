import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { withBase } from "@/utils/with-base";
import { getBlogSlug, getPublishedPosts } from "@/utils/blog";
import { BLOG_DESCRIPTION, BLOG_TITLE, SITE_BASE_URL } from "@/data/site";

export async function GET(context: APIContext) {
  const posts = getPublishedPosts(await getCollection("blog"));

  return rss({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site: context.site ?? SITE_BASE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: withBase(`/blog/${getBlogSlug(post)}/`),
    })),
    customData: `<language>en-us</language>`,
  });
}

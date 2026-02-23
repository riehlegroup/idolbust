import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { withBase } from "@/utils/with-base";
import { getBlogSlug, getPublishedPosts } from "@/utils/blog";
import { BRAND_CONFIG } from "@/config/brand";

export async function GET(context: APIContext) {
  const posts = getPublishedPosts(await getCollection("blog"));

  return rss({
    title: BRAND_CONFIG.blog.title,
    description: BRAND_CONFIG.blog.description,
    site: context.site ?? BRAND_CONFIG.identity.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: withBase(`/blog/${getBlogSlug(post)}/`),
    })),
    customData: `<language>en-us</language>`,
  });
}

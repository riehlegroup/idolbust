import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { withBase } from "@/components/utils/with-base";
import { getBlogSlug, getPublishedPosts } from "@/utils/blog";
import { BRAND_CONFIG } from "@/pages/_brandConfig";

const BLOG_RSS_TITLE = "Idol or Bust Blog";
const BLOG_RSS_DESCRIPTION =
  "Latest updates and insights from the Idol or Bust research project.";

export async function GET(context: APIContext) {
  const posts = getPublishedPosts(await getCollection("blog"));

  return rss({
    title: BLOG_RSS_TITLE,
    description: BLOG_RSS_DESCRIPTION,
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

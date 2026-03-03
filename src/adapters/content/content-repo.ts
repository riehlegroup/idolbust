import type { ContentRepository } from "@/core/ports/content-repository";
import { ABOUT_CONTENT } from "@/content/pages/about";
import { BLOG_PAGE_CONTENT } from "@/content/pages/blog";
import { BLOG_POST_PAGE_CONTENT } from "@/content/pages/blog-post";
import { HOME_CONTENT } from "@/content/pages/home";
import { RESOURCE_DETAIL_PAGE_CONTENT } from "@/content/pages/resource-detail";
import { RESOURCES_PAGE_CONTENT } from "@/content/pages/resources";

export const contentRepository: ContentRepository = {
  getHomeContent() {
    return HOME_CONTENT;
  },
  getAboutContent() {
    return ABOUT_CONTENT;
  },
  getBlogPageContent() {
    return BLOG_PAGE_CONTENT;
  },
  getResourcesPageContent() {
    return RESOURCES_PAGE_CONTENT;
  },
  getBlogPostPageContent() {
    return BLOG_POST_PAGE_CONTENT;
  },
  getResourceDetailPageContent() {
    return RESOURCE_DETAIL_PAGE_CONTENT;
  },
};

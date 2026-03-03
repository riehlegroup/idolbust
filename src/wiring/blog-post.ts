import { contentRepository } from "@/adapters/content/content-repo";
import { buildBlogPostPage } from "@/core/services/build-blog-post-page";
import type { BlogPostSectionModel } from "@/core/models/section";

const content = contentRepository.getBlogPostPageContent();

export const blogPostPage = {
  toPageModel: (data: Omit<BlogPostSectionModel, "type" | "metaSeparator">) =>
    buildBlogPostPage(content, data),
};

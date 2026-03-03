import type { PageModel } from "@/core/models/page";
import type { BlogPostSectionModel } from "@/core/models/section";
import type { BlogPostPageContent } from "@/core/ports/content-repository";

export const buildBlogPostPage = (
  content: BlogPostPageContent,
  data: Omit<BlogPostSectionModel, "type" | "metaSeparator">,
): PageModel => {
  return {
    title: data.title,
    description: data.description,
    sections: [
      {
        type: "blogPost",
        metaSeparator: content.metaSeparator,
        ...data,
      },
    ],
  };
};

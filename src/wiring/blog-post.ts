import { contentRepository } from "@/adapters/content/content-repo";
import type { BlogPostSectionModel } from "@/core/models/section";
import type { PageModel } from "@/core/models/page";

const content = contentRepository.getBlogPostPageContent();

export const blogPostPage = {
  toPageModel: (
    data: Omit<BlogPostSectionModel, "type" | "metaSeparator">,
  ): PageModel => ({
    title: data.title,
    description: data.description,
    sections: [
      {
        type: "blogPost",
        metaSeparator: content.metaSeparator,
        ...data,
      },
    ],
  }),
};

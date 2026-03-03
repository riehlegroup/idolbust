import type { PageModel } from "@/core/models/page";
import type { BlogListItemModel } from "@/core/models/section";
import type { BlogPageContent } from "@/core/ports/content-repository";

export const buildBlogPage = (
  content: BlogPageContent,
  items: readonly BlogListItemModel[],
): PageModel => {
  return {
    title: content.title,
    description: content.description,
    sections: [
      {
        type: "pageHeader",
        title: content.title,
        description: content.description,
      },
      {
        type: "blogList",
        emptyState: content.emptyState,
        items,
      },
    ],
  };
};

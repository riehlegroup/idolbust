import { brandRepository } from "@/adapters/content/brand-repo";
import { contentRepository } from "@/adapters/content/content-repo";
import type { BlogListItemModel } from "@/core/models/section";
import type { PageModel } from "@/core/models/page";

const brand = brandRepository.getBrand();
const content = contentRepository.getBlogPageContent();

const contentWithDefaults = {
  ...content,
  description: content.description || brand.blog.description,
};

export const blogPage = {
  toPageModel: (items: readonly BlogListItemModel[]): PageModel => ({
    title: contentWithDefaults.title,
    description: contentWithDefaults.description,
    sections: [
      {
        type: "pageHeader",
        title: contentWithDefaults.title,
        description: contentWithDefaults.description,
      },
      {
        type: "blogList",
        emptyState: contentWithDefaults.emptyState,
        items,
      },
    ],
  }),
};

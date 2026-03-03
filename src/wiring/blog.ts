import { brandRepository } from "@/adapters/content/brand-repo";
import { contentRepository } from "@/adapters/content/content-repo";
import { buildBlogPage } from "@/core/services/build-blog-page";
import type { BlogListItemModel } from "@/core/models/section";

const brand = brandRepository.getBrand();
const content = contentRepository.getBlogPageContent();

export const blogPage = {
  toPageModel: (items: readonly BlogListItemModel[]) =>
    buildBlogPage(
      {
        ...content,
        description: content.description || brand.blog.description,
      },
      items,
    ),
};

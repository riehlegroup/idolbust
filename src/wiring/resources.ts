import { brandRepository } from "@/adapters/content/brand-repo";
import { contentRepository } from "@/adapters/content/content-repo";
import type { ResourceListItemModel } from "@/core/models/section";
import type { PageModel } from "@/core/models/page";

const brand = brandRepository.getBrand();
const content = contentRepository.getResourcesPageContent();

const contentWithDefaults = {
  ...content,
  description: content.description || brand.seo.defaultDescription,
};

export const resourcesPage = {
  toPageModel: (items: readonly ResourceListItemModel[]): PageModel => ({
    title: contentWithDefaults.title,
    description: contentWithDefaults.description,
    sections: [
      {
        type: "pageHeader",
        title: contentWithDefaults.title,
        description: contentWithDefaults.description,
      },
      {
        type: "resourceList",
        emptyState: contentWithDefaults.emptyState,
        items,
      },
    ],
  }),
};

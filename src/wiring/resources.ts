import { brandRepository } from "@/adapters/content/brand-repo";
import { contentRepository } from "@/adapters/content/content-repo";
import { buildResourcesPage } from "@/core/services/build-resources-page";
import type { ResourceListItemModel } from "@/core/models/section";

const brand = brandRepository.getBrand();
const content = contentRepository.getResourcesPageContent();

export const resourcesPage = {
  toPageModel: (items: readonly ResourceListItemModel[]) =>
    buildResourcesPage(
      {
        ...content,
        description: content.description || brand.seo.defaultDescription,
      },
      items,
    ),
};

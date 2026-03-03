import type { PageModel } from "@/core/models/page";
import type { ResourceListItemModel } from "@/core/models/section";
import type { ResourcesPageContent } from "@/core/ports/content-repository";

export const buildResourcesPage = (
  content: ResourcesPageContent,
  items: readonly ResourceListItemModel[],
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
        type: "resourceList",
        emptyState: content.emptyState,
        items,
      },
    ],
  };
};

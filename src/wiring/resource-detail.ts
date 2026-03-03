import { contentRepository } from "@/adapters/content/content-repo";
import { buildResourceDetailPage } from "@/core/services/build-resource-detail-page";
import type { ResourceDetailSectionModel } from "@/core/models/section";

const content = contentRepository.getResourceDetailPageContent();

export const resourceDetailPage = {
  toPageModel: (
    data: Omit<
      ResourceDetailSectionModel,
      "type" | "updatedLabel" | "relatedTitle" | "canonicalLabel"
    >,
  ) => buildResourceDetailPage(content, data),
};

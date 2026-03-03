import { contentRepository } from "@/adapters/content/content-repo";
import type { ResourceDetailSectionModel } from "@/core/models/section";
import type { PageModel } from "@/core/models/page";

const content = contentRepository.getResourceDetailPageContent();

export const resourceDetailPage = {
  toPageModel: (
    data: Omit<
      ResourceDetailSectionModel,
      "type" | "updatedLabel" | "relatedTitle" | "canonicalLabel"
    >,
  ): PageModel => ({
    title: data.title,
    description: data.description,
    sections: [
      {
        type: "resourceDetail",
        updatedLabel: content.updatedLabel,
        relatedTitle: content.relatedTitle,
        canonicalLabel: content.canonicalLabel,
        ...data,
      },
    ],
  }),
};

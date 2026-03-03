import type { PageModel } from "@/core/models/page";
import type { ResourceDetailSectionModel } from "@/core/models/section";
import type { ResourceDetailPageContent } from "@/core/ports/content-repository";

export const buildResourceDetailPage = (
  content: ResourceDetailPageContent,
  data: Omit<
    ResourceDetailSectionModel,
    "type" | "updatedLabel" | "relatedTitle" | "canonicalLabel"
  >,
): PageModel => {
  return {
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
  };
};

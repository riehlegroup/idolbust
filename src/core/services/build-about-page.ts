import type { PageModel } from "@/core/models/page";
import type { BrandRepository } from "@/core/ports/brand-repository";
import type { ContentRepository } from "@/core/ports/content-repository";

export const buildAboutPage = (
  contentRepository: ContentRepository,
  brandRepository: BrandRepository,
): PageModel => {
  const content = contentRepository.getAboutContent();
  const brand = brandRepository.getBrand();

  return {
    title: "About",
    description: brand.seo.defaultDescription,
    sections: [
      {
        type: "richText",
        title: content.title,
        lead: content.lead,
        blocks: content.blocks,
      },
      {
        type: "team",
        title: content.team.title,
        members: content.team.members,
      },
      {
        type: "social",
        label: content.socialLabel,
        links: brand.links.social,
      },
    ],
  };
};

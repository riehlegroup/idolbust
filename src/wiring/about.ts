import { brandRepository } from "@/adapters/content/brand-repo";
import { contentRepository } from "@/adapters/content/content-repo";
import type { PageModel } from "@/core/models/page";

const content = contentRepository.getAboutContent();
const brand = brandRepository.getBrand();

export const aboutPage: PageModel = {
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

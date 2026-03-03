import type { PageModel } from "@/core/models/page";
import type { BrandRepository } from "@/core/ports/brand-repository";
import type { ContentRepository } from "@/core/ports/content-repository";

export const buildHomePage = (
  contentRepository: ContentRepository,
  brandRepository: BrandRepository,
): PageModel => {
  const content = contentRepository.getHomeContent();
  const brand = brandRepository.getBrand();
  const primaryCta = brand.links.primaryCtas.at(0);
  const secondaryCta = brand.links.primaryCtas.at(1);

  return {
    title: brand.identity.siteName,
    description: content.hero.subheading ?? brand.seo.defaultDescription,
    sections: [
      {
        type: "hero",
        heading: content.hero.heading,
        highlight: content.hero.highlight,
        subheading: content.hero.subheading,
        primaryCta,
        secondaryCta,
      },
      {
        type: "features",
        title: content.features.title,
        items: content.features.items,
      },
      {
        type: "callout",
        title: content.callout.title,
        body: content.callout.body,
        cta: content.callout.cta,
      },
    ],
  };
};

import { brandRepository } from "@/adapters/content/brand-repo";
import { contentRepository } from "@/adapters/content/content-repo";
import type { PageModel } from "@/core/models/page";

const content = contentRepository.getHomeContent();
const brand = brandRepository.getBrand();
const primaryCta = brand.links.primaryCtas.at(0);
const secondaryCta = brand.links.primaryCtas.at(1);

export const homePage: PageModel = {
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

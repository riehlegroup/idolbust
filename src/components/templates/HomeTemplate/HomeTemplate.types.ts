import type { FeatureItem } from "@/components/molecules/FeatureGrid/FeatureGrid.types";

export interface HomeHeroAction {
  label: string;
  href: string;
}

export interface HomeTemplateContent {
  hero: {
    title: string;
    highlight: string;
    descriptionSuffix: string;
    primaryAction?: HomeHeroAction;
    secondaryAction?: HomeHeroAction;
  };
  sections: {
    featuresTitle: string;
    callToAction: {
      title: string;
      description: string;
      buttonLabel: string;
      buttonHref: string;
    };
  };
}

export interface HomeTemplateProps {
  siteDescription: string;
  content: HomeTemplateContent;
  features: readonly FeatureItem[];
}

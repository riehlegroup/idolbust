import type { FeatureItem } from "@/components/molecules/FeatureGrid/FeatureGrid.types";

export interface HomeTemplateBrand {
  links: {
    primaryCtas: readonly {
      label: string;
      href: string;
    }[];
  };
  seo: {
    defaultDescription: string;
  };
}

export interface HomeTemplateContent {
  hero: {
    title: string;
    highlight: string;
    descriptionSuffix: string;
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
  brand: HomeTemplateBrand;
  content: HomeTemplateContent;
  features: readonly FeatureItem[];
}

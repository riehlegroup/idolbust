import type { FeatureItem } from "@/components/molecules/FeatureGrid/FeatureGrid.types";

export interface HomeTemplateBrand {
  links: {
    primaryCtas: readonly {
      label: string;
      href: string;
    }[];
    appLinks: readonly {
      label: string;
      href: string;
    }[];
    social: readonly {
      platform: string;
      url: string;
    }[];
  };
  seo: {
    titleTemplate: string;
    defaultDescription: string;
    robots: string;
    twitterCard: "summary" | "summary_large_image";
    twitterSite?: string;
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

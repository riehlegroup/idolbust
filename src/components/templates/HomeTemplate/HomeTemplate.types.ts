import type { FeatureItem } from "@/components/molecules/FeatureGrid/FeatureGrid.types";

interface BrandColorScale {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
  "950": string;
}

export interface HomeTemplateBrand {
  identity: {
    siteName: string;
    tagline: string;
    siteUrl: string;
    language: string;
    locale: string;
    logoPath: string;
    faviconPath: string;
    appleTouchIconPath: string;
    manifestPath: string;
    defaultOgImagePath: string;
  };
  organization: {
    name: string;
    legalName?: string;
    socialProfiles: readonly string[];
  };
  theme: {
    primary: BrandColorScale;
    secondary: BrandColorScale;
    themeColor: string;
    fonts?: {
      sans: readonly string[];
      mono: readonly string[];
    };
  };
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
  blog: {
    title: string;
    description: string;
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

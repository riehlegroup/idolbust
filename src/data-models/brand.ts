import type { SocialPlatform } from "@/data-models/social";

export interface BrandColorScale {
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

export interface BrandAddress {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface BrandSocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface BrandLink {
  label: string;
  href: string;
}

export interface BrandConfig {
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
    address?: BrandAddress;
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
    primaryCtas: readonly BrandLink[];
    appLinks: readonly BrandLink[];
    social: readonly BrandSocialLink[];
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

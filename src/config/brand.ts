import type { SocialPlatform } from "@/data/social";

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

export const BRAND_CONFIG: BrandConfig = {
  identity: {
    siteName: "Idol or Bust!",
    tagline: "Simple website software for research projects",
    siteUrl: "https://riehlegroup.github.io",
    language: "en",
    locale: "en_US",
    logoPath: "/apple-touch-icon.png",
    faviconPath: "/favicon.svg",
    appleTouchIconPath: "/apple-touch-icon.png",
    manifestPath: "/site.webmanifest",
    defaultOgImagePath: "/og-image.png",
  },
  organization: {
    name: "Idol or Bust",
    legalName: "Idol or Bust Research Project",
    socialProfiles: ["https://github.com/riehlegroup/idolbust"],
  },
  theme: {
    primary: {
      "50": "239 246 255",
      "100": "219 234 254",
      "200": "191 219 254",
      "300": "147 197 253",
      "400": "96 165 250",
      "500": "59 130 246",
      "600": "37 99 235",
      "700": "29 78 216",
      "800": "30 64 175",
      "900": "30 58 138",
      "950": "23 37 84",
    },
    secondary: {
      "50": "248 250 252",
      "100": "241 245 249",
      "200": "226 232 240",
      "300": "203 213 225",
      "400": "148 163 184",
      "500": "100 116 139",
      "600": "71 85 105",
      "700": "51 65 85",
      "800": "30 41 59",
      "900": "15 23 42",
      "950": "2 6 23",
    },
    themeColor: "#2563eb",
    fonts: {
      sans: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
  },
  links: {
    primaryCtas: [
      { label: "Learn More", href: "/about" },
      { label: "Read Blog", href: "/blog" },
    ],
    appLinks: [],
    social: [
      { platform: "github", url: "https://github.com/riehlegroup/idolbust" },
    ],
  },
  seo: {
    titleTemplate: "%s | {siteName}",
    defaultDescription:
      "Simple website software for research projects that want to understand their user needs",
    robots: "index,follow",
    twitterCard: "summary_large_image",
  },
  blog: {
    title: "Idol or Bust Blog",
    description:
      "Latest updates and insights from the Idol or Bust research project.",
  },
};

export function formatPageTitle(pageTitle: string): string {
  const siteName = BRAND_CONFIG.identity.siteName;

  if (pageTitle === siteName) {
    return pageTitle;
  }

  const template = BRAND_CONFIG.seo.titleTemplate;

  if (!template.includes("%s") && !template.includes("{siteName}")) {
    return `${pageTitle} | ${siteName}`;
  }

  return template.replace(/%s/g, pageTitle).replace(/\{siteName\}/g, siteName);
}

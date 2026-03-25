import {
  resolveBrandTheme,
  type BrandConfig,
} from "@/components/foundations/BrandTokens";

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
  theme: resolveBrandTheme({
    palette: {
      primary: "#3b82f6",
      secondary: "#64748b",
    },
    themeColor: "#2563eb",
    fonts: {
      sans: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
  }),
  seo: {
    titleTemplate: "%s | {siteName}",
    defaultDescription:
      "Simple website software for research projects that want to understand their user needs",
    robots: "index,follow",
    twitterCard: "summary_large_image",
  },
};

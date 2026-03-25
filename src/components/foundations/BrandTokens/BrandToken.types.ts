export const BRAND_COLOR_SHADES = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
] as const;

export type BrandColorShade = (typeof BRAND_COLOR_SHADES)[number];

export type BrandColorScale = Record<BrandColorShade, string>;

export interface BrandThemePalette {
  primary: string;
  secondary: string;
}

export type BrandColorScaleOverrides = Partial<Record<BrandColorShade, string>>;

export interface BrandThemeInput {
  palette: BrandThemePalette;
  themeColor?: string;
  overrides?: {
    primary?: BrandColorScaleOverrides;
    secondary?: BrandColorScaleOverrides;
  };
  fonts?: {
    sans: readonly string[];
    mono: readonly string[];
  };
}

export interface BrandTheme {
  primary: BrandColorScale;
  secondary: BrandColorScale;
  themeColor: string;
  fonts?: {
    sans: readonly string[];
    mono: readonly string[];
  };
}

export interface BrandAddress {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
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
  theme: BrandTheme;
  seo: {
    titleTemplate: string;
    defaultDescription: string;
    robots: string;
    twitterCard: "summary" | "summary_large_image";
    twitterSite?: string;
  };
}

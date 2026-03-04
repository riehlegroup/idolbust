export type SocialPlatform = "github" | "twitter" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon?: string;
}

export interface SocialLinksProps {
  links: readonly SocialLink[];
}

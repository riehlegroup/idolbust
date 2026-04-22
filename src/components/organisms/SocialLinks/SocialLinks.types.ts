export type KnownSocialPlatform = "github" | "twitter" | "linkedin" | "bluesky";

export type SocialPlatform = KnownSocialPlatform | (string & {});

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon?: string;
}

export interface SocialLinksProps {
  links: readonly SocialLink[];
}

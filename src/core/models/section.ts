import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { SocialPlatform } from "@/core/models/social";

export interface LinkModel {
  label: string;
  href: string;
}

export interface HeroSectionModel {
  type: "hero";
  heading: string;
  highlight?: string;
  subheading?: string;
  primaryCta?: LinkModel;
  secondaryCta?: LinkModel;
}

export interface FeatureItemModel {
  title: string;
  description: string;
}

export interface FeaturesSectionModel {
  type: "features";
  title: string;
  items: readonly FeatureItemModel[];
}

export interface CalloutSectionModel {
  type: "callout";
  title: string;
  body: string;
  cta?: LinkModel;
}

export interface RichTextBlock {
  title: string;
  body: readonly string[];
}

export interface RichTextSectionModel {
  type: "richText";
  title: string;
  lead?: string;
  blocks: readonly RichTextBlock[];
}

export interface PageHeaderSectionModel {
  type: "pageHeader";
  title: string;
  description?: string;
}

export interface TeamMemberModel {
  name: string;
  role: string;
  bio: string;
}

export interface TeamSectionModel {
  type: "team";
  title: string;
  members: readonly TeamMemberModel[];
}

export interface SocialLinkModel {
  platform: SocialPlatform;
  url: string;
}

export interface SocialSectionModel {
  type: "social";
  label?: string;
  links: readonly SocialLinkModel[];
}

export interface BlogListItemModel {
  title: string;
  description: string;
  href: string;
  pubDate: Date;
  author: string;
  tags: readonly string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface BlogListSectionModel {
  type: "blogList";
  emptyState: string;
  items: readonly BlogListItemModel[];
}

export interface ResourceListItemModel {
  title: string;
  description: string;
  href: string;
  category: string;
  date: Date;
  tags: readonly string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface ResourceListSectionModel {
  type: "resourceList";
  emptyState: string;
  items: readonly ResourceListItemModel[];
}

export interface BlogPostSectionModel {
  type: "blogPost";
  title: string;
  description?: string;
  pubDate: Date;
  author: string;
  tags: readonly string[];
  metaSeparator: string;
  content: AstroComponentFactory;
}

export interface RelatedResourceModel {
  title: string;
  href: string;
}

export interface ResourceDetailSectionModel {
  type: "resourceDetail";
  category: string;
  title: string;
  description?: string;
  date: Date;
  showUpdatedLabel: boolean;
  updatedLabel: string;
  tags: readonly string[];
  heroImageSrc?: string;
  heroImageAlt: string;
  canonicalLabel: string;
  canonicalUrl?: string;
  relatedTitle: string;
  related: readonly RelatedResourceModel[];
  content: AstroComponentFactory;
}

export type SectionModel =
  | HeroSectionModel
  | FeaturesSectionModel
  | CalloutSectionModel
  | RichTextSectionModel
  | PageHeaderSectionModel
  | TeamSectionModel
  | SocialSectionModel
  | BlogListSectionModel
  | ResourceListSectionModel
  | BlogPostSectionModel
  | ResourceDetailSectionModel;

export type SectionType = SectionModel["type"];

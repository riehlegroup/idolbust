import type {
  CalloutSectionModel,
  FeatureItemModel,
  LinkModel,
  RichTextBlock,
  TeamMemberModel,
} from "@/core/models/section";

export interface HomePageContent {
  hero: {
    heading: string;
    highlight?: string;
    subheading?: string;
    primaryCta?: LinkModel;
    secondaryCta?: LinkModel;
  };
  features: {
    title: string;
    items: readonly FeatureItemModel[];
  };
  callout: Omit<CalloutSectionModel, "type">;
}

export interface AboutPageContent {
  title: string;
  lead: string;
  blocks: readonly RichTextBlock[];
  team: {
    title: string;
    members: readonly TeamMemberModel[];
  };
  socialLabel?: string;
}

export interface BlogPageContent {
  title: string;
  description: string;
  emptyState: string;
}

export interface ResourcesPageContent {
  title: string;
  description: string;
  emptyState: string;
}

export interface BlogPostPageContent {
  metaSeparator: string;
}

export interface ResourceDetailPageContent {
  updatedLabel: string;
  relatedTitle: string;
  canonicalLabel: string;
}

export interface ContentRepository {
  getHomeContent(): HomePageContent;
  getAboutContent(): AboutPageContent;
  getBlogPageContent(): BlogPageContent;
  getResourcesPageContent(): ResourcesPageContent;
  getBlogPostPageContent(): BlogPostPageContent;
  getResourceDetailPageContent(): ResourceDetailPageContent;
}

export interface RelatedResourceLink {
  title: string;
  href: string;
}

export interface ResourcesDetailTemplateProps {
  title: string;
  category: string;
  dateIso: string;
  dateLabel: string;
  showUpdatedLabel: boolean;
  updatedLabel: string;
  tags: readonly string[];
  heroImageSrc?: string;
  heroImageAlt?: string;
  canonicalUrl?: string;
  canonicalLabel: string;
  relatedResourcesTitle: string;
  relatedResources: readonly RelatedResourceLink[];
  children?: React.ReactNode;
}

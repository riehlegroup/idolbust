export interface ResourcesIndexItem {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  category: string;
  dateIso: string;
  dateLabel: string;
  tags: readonly string[];
}

export interface ResourcesIndexTemplateProps {
  title: string;
  description: string;
  emptyState: string;
  resources: readonly ResourcesIndexItem[];
}

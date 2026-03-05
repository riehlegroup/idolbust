export interface BlogIndexPost {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
  dateIso: string;
  dateLabel: string;
  author: string;
  tags: readonly string[];
}

export interface BlogIndexTemplateProps {
  title: string;
  emptyState: string;
  posts: readonly BlogIndexPost[];
}

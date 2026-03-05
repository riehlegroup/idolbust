export interface ArticleHeaderProps {
  title: string;
  description?: string;
  dateIso: string;
  dateLabel: string;
  author?: string;
  updatedLabel?: string;
  tags: readonly string[];
  category?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
}

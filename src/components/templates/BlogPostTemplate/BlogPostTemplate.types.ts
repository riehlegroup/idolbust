export interface BlogPostTemplateProps {
  title: string;
  description: string;
  dateIso: string;
  dateLabel: string;
  author: string;
  tags: readonly string[];
}

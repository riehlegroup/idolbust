import type { BlogPostTemplateProps } from "./BlogPostTemplate.types";
import { ArticleHeader } from "@/components/organisms/ArticleHeader";

export const BlogPostTemplate = ({
  title,
  dateIso,
  dateLabel,
  author,
  tags,
  description,
  children,
}: BlogPostTemplateProps) => (
  <>
    <ArticleHeader
      title={title}
      description={description}
      dateIso={dateIso}
      dateLabel={dateLabel}
      author={author}
      tags={tags}
    />
    {children}
  </>
);

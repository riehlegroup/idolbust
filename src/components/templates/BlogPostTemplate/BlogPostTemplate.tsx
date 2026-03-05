import type { BlogPostTemplateProps } from "./BlogPostTemplate.types";

export const BlogPostTemplate = ({
  title,
  dateIso,
  dateLabel,
  author,
  tags,
}: BlogPostTemplateProps) => (
  <header className="mb-8 not-prose">
    <h1 className="text-4xl font-bold text-secondary-900">{title}</h1>
    <div className="mt-4 flex items-center gap-2 text-secondary-600">
      <time dateTime={dateIso}>{dateLabel}</time>
      <span>·</span>
      <span>{author}</span>
    </div>
    {tags.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary-100 px-3 py-1 text-sm text-secondary-600"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </header>
);

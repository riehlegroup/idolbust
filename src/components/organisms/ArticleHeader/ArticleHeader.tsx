import { MetaGroup } from "@/components/molecules/MetaGroup";
import { PageHeading } from "@/components/atoms/PageHeading";
import { TagList } from "@/components/molecules/TagList";
import type { ArticleHeaderProps } from "./ArticleHeader.types";

export const ArticleHeader = ({
  title,
  description,
  dateIso,
  dateLabel,
  author,
  updatedLabel,
  tags,
  category,
  heroImageSrc,
  heroImageAlt,
}: ArticleHeaderProps) => {
  const hasMetaLine = Boolean(author || updatedLabel);

  return (
    <header className="mb-8 not-prose">
      {category ? (
        <MetaGroup
          category={category}
          dateIso={dateIso}
          dateLabel={dateLabel}
          updatedLabel={updatedLabel}
          className="mb-3 text-secondary-600"
        />
      ) : null}
      <PageHeading title={title} className={category ? undefined : "mb-4"} />
      {!category && hasMetaLine && (
        <MetaGroup
          dateIso={dateIso}
          dateLabel={dateLabel}
          author={author}
          updatedLabel={updatedLabel}
          className="text-secondary-600"
        />
      )}
      {description && (
        <p className="mt-4 text-lg text-secondary-600">{description}</p>
      )}
      {tags.length > 0 && (
        <TagList
          tags={tags}
          tone={category ? "primary" : "neutral"}
          size="sm"
          prefix={category ? "#" : undefined}
          className="mt-4"
        />
      )}
      {heroImageSrc && (
        <img
          src={heroImageSrc}
          alt={heroImageAlt ?? title}
          className="mt-6 aspect-video w-full rounded-lg object-cover"
          width={1200}
          height={675}
          loading="lazy"
        />
      )}
    </header>
  );
};

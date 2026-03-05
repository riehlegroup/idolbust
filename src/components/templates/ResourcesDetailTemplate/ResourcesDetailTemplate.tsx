import type { ResourcesDetailTemplateProps } from "./ResourcesDetailTemplate.types";
import { ResourceCanonicalLink } from "@/components/molecules/ResourceCanonicalLink";
import { ArticleHeader } from "@/components/organisms/ArticleHeader";
import { ResourcesRelatedList } from "@/components/organisms/ResourcesRelatedList";

export const ResourcesDetailTemplate = ({
  title,
  category,
  dateIso,
  dateLabel,
  showUpdatedLabel,
  updatedLabel,
  tags,
  heroImageSrc,
  heroImageAlt,
  canonicalUrl,
  canonicalLabel,
  relatedResourcesTitle,
  relatedResources,
  children,
}: ResourcesDetailTemplateProps) => (
  <article className="prose prose-secondary mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
    <ArticleHeader
      title={title}
      dateIso={dateIso}
      dateLabel={dateLabel}
      updatedLabel={showUpdatedLabel ? updatedLabel : undefined}
      tags={tags}
      category={category}
      heroImageSrc={heroImageSrc}
      heroImageAlt={heroImageAlt}
    />

    {children}

    {(canonicalUrl || relatedResources.length > 0) && (
      <section className="mt-12 border-t border-secondary-200 pt-8 not-prose">
        {canonicalUrl && (
          <ResourceCanonicalLink
            canonicalUrl={canonicalUrl}
            canonicalLabel={canonicalLabel}
          />
        )}

        {relatedResources.length > 0 && (
          <div className="mt-6">
            <ResourcesRelatedList
              title={relatedResourcesTitle}
              resources={relatedResources}
            />
          </div>
        )}
      </section>
    )}
  </article>
);

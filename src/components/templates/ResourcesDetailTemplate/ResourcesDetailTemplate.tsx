import type {
  RelatedResourceLink,
  ResourcesDetailTemplateProps,
} from "./ResourcesDetailTemplate.types";
import { ArticleHeader } from "@/components/organisms/ArticleHeader";

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
          <p className="text-sm text-secondary-600">
            {canonicalLabel}{" "}
            <a
              className="text-primary-700 hover:text-primary-800"
              href={canonicalUrl}
              rel="noopener noreferrer"
            >
              {canonicalUrl}
            </a>
          </p>
        )}

        {relatedResources.length > 0 && (
          <>
            <h2 className="mt-6 text-xl font-semibold text-secondary-900">
              {relatedResourcesTitle}
            </h2>
            <ul className="mt-3 space-y-2 text-secondary-700">
              {relatedResources.map((related: RelatedResourceLink) => (
                <li key={related.href}>
                  <a className="hover:text-primary-700" href={related.href}>
                    {related.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    )}
  </article>
);

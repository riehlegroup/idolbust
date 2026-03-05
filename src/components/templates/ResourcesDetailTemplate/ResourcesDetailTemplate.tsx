import type {
  RelatedResourceLink,
  ResourcesDetailTemplateProps,
} from "./ResourcesDetailTemplate.types";

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
    <header className="mb-8 not-prose">
      <p className="mb-3 inline-flex rounded-full bg-secondary-100 px-3 py-1 text-sm font-medium text-secondary-700">
        {category}
      </p>
      <h1 className="text-4xl font-bold text-secondary-900">{title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-secondary-600">
        <time dateTime={dateIso}>{dateLabel}</time>
        {showUpdatedLabel && <span>{updatedLabel}</span>}
      </div>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700"
            >
              #{tag}
            </span>
          ))}
        </div>
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

import type {
  ResourcesIndexItem,
  ResourcesIndexTemplateProps,
} from "./ResourcesIndexTemplate.types";
import { Card } from "@/components/molecules/Card";

export const ResourcesIndexTemplate = ({
  title,
  description,
  emptyState,
  resources,
}: ResourcesIndexTemplateProps) => (
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="mb-3 text-4xl font-bold text-secondary-900">{title}</h1>
    <p className="mb-8 max-w-2xl text-secondary-600">{description}</p>

    {resources.length === 0 ? (
      <p className="text-secondary-600">{emptyState}</p>
    ) : (
      <>
        <h2 className="sr-only">Latest resources</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource: ResourcesIndexItem) => (
            <Card
              key={resource.href}
              title={resource.title}
              description={resource.description}
              href={resource.href}
              image={resource.image}
              imageAlt={resource.imageAlt}
            >
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-secondary-500">
                <span className="rounded-full bg-secondary-100 px-2 py-1 text-xs font-medium text-secondary-600">
                  {resource.category}
                </span>
                <span>·</span>
                <time dateTime={resource.dateIso}>{resource.dateLabel}</time>
              </div>

              {resource.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary-50 px-2 py-1 text-xs text-primary-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </>
    )}
  </div>
);

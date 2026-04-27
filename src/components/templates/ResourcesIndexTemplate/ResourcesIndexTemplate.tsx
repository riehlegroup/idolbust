import type {
  ResourcesIndexItem,
  ResourcesIndexTemplateProps,
} from "./ResourcesIndexTemplate.types";
import { PageIntro } from "@/components/organisms/PageIntro";
import { Card } from "@/components/molecules/Card";
import { MetaGroup } from "@/components/molecules/MetaGroup";
import { TagList } from "@/components/molecules/TagList";

export const ResourcesIndexTemplate = ({
  title,
  description,
  emptyState,
  resources,
}: ResourcesIndexTemplateProps) => (
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <PageIntro
      title={title}
      description={description}
      descriptionClassName="!mx-0 !max-w-5xl"
    />

    {resources.length === 0 ? (
      <p className="text-secondary-600">{emptyState}</p>
    ) : (
      <>
        <h2 className="sr-only">Latest resources</h2>
        <div className="grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource: ResourcesIndexItem) => (
            <Card
              key={resource.href}
              title={resource.title}
              description={resource.description}
              href={resource.href}
              image={resource.image}
              imageAlt={resource.imageAlt}
            >
              <MetaGroup
                category={resource.category}
                dateIso={resource.dateIso}
                dateLabel={resource.dateLabel}
                className="mt-4 text-sm text-secondary-500"
              />

              {resource.tags.length > 0 && (
                <TagList
                  tags={resource.tags}
                  tone="primary"
                  prefix="#"
                  className="mt-3"
                />
              )}
            </Card>
          ))}
        </div>
      </>
    )}
  </div>
);

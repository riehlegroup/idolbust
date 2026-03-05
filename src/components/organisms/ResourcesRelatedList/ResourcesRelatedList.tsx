import type { ResourcesRelatedListProps } from "./ResourcesRelatedList.types";

export const ResourcesRelatedList = ({
  title,
  resources,
}: ResourcesRelatedListProps) => (
  <section>
    <h2 className="text-xl font-semibold text-secondary-900">{title}</h2>
    <ul className="mt-3 space-y-2 text-secondary-700">
      {resources.map((resource) => (
        <li key={resource.href}>
          <a className="hover:text-primary-700" href={resource.href}>
            {resource.title}
          </a>
        </li>
      ))}
    </ul>
  </section>
);

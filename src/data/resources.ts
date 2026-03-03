import type { ResourcesPageContent } from "@/data-models/resources";

export const RESOURCES_PAGE_CONTENT = {
  title: "Resources",
  description:
    "Evergreen guides, templates, and references to support your research workflow.",
  emptyState: "No resources published yet. Check back soon.",
  relatedResourcesTitle: "Related resources",
  canonicalLabel: "Canonical source:",
  updatedLabel: "Updated",
} satisfies ResourcesPageContent;

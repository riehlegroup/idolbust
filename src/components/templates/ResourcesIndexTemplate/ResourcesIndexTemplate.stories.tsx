import type { Meta, StoryObj } from "@storybook/react";

import { ResourcesIndexTemplate } from "./ResourcesIndexTemplate";

const meta = {
  title: "Templates/ResourcesIndexTemplate",
  component: ResourcesIndexTemplate,
  tags: ["autodocs"],
  args: {
    title: "Resources",
    description:
      "Evergreen guides, templates, and references to support your research workflow.",
    emptyState: "No resources published yet. Check back soon.",
    resources: [
      {
        title: "Interview guide template",
        description:
          "A practical guide for planning and running user interviews.",
        href: "/resources/interview-guide/",
        image: "/images/resource-placeholder.png",
        imageAlt: "Interview notes",
        category: "Templates",
        dateIso: "2026-02-12T00:00:00.000Z",
        dateLabel: "February 12, 2026",
        tags: ["qualitative", "planning"],
      },
      {
        title: "Synthesis workshop checklist",
        description: "Steps and prompts to align your team on findings.",
        href: "/resources/synthesis-workshop/",
        image: "/images/resource-placeholder.png",
        imageAlt: "Workshop board",
        category: "Guides",
        dateIso: "2026-01-05T00:00:00.000Z",
        dateLabel: "January 5, 2026",
        tags: ["collaboration"],
      },
    ],
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Resources index template with summary copy, cards, and tag metadata.",
      },
    },
  },
} satisfies Meta<typeof ResourcesIndexTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyState: Story = {
  args: {
    resources: [],
  },
};

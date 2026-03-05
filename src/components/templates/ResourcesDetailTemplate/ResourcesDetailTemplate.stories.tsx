import type { Meta, StoryObj } from "@storybook/react";

import { ResourcesDetailTemplate } from "@/components/templates/ResourcesDetailTemplate";

const meta = {
  title: "Templates/ResourcesDetailTemplate",
  component: ResourcesDetailTemplate,
  tags: ["autodocs"],
  args: {
    title: "Interview guide template",
    category: "Templates",
    dateIso: "2026-02-12T00:00:00.000Z",
    dateLabel: "February 12, 2026",
    showUpdatedLabel: true,
    updatedLabel: "Updated February 18, 2026",
    tags: ["qualitative", "planning"],
    heroImageSrc: "/images/resource-placeholder.png",
    heroImageAlt: "Interview notes",
    canonicalUrl: "https://example.com/interview-guide",
    canonicalLabel: "Canonical source:",
    relatedResourcesTitle: "Related resources",
    relatedResources: [
      { title: "Synthesis workshop checklist", href: "/resources/synthesis/" },
      {
        title: "Participant recruitment guide",
        href: "/resources/recruitment/",
      },
    ],
    children: (
      <div>
        <p>
          Use this guide to plan and run user interviews. It includes prompts,
          consent language, and note-taking tips.
        </p>
        <h2>What is included</h2>
        <ul>
          <li>Interview outline</li>
          <li>Scripted questions</li>
          <li>Debrief checklist</li>
        </ul>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        component:
          "Resource detail template with metadata, hero media, canonical links, and related resources.",
      },
    },
  },
} satisfies Meta<typeof ResourcesDetailTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutRelated: Story = {
  args: {
    relatedResources: [],
    canonicalUrl: undefined,
  },
};

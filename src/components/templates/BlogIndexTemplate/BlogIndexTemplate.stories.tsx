import type { Meta, StoryObj } from "@storybook/react";

import { BlogIndexTemplate } from "@/components/templates/BlogIndexTemplate";

const meta = {
  title: "Templates/BlogIndexTemplate",
  component: BlogIndexTemplate,
  tags: ["autodocs"],
  args: {
    title: "Blog",
    emptyState: "No posts yet. Check back soon!",
    posts: [
      {
        title: "Research updates: Spring field notes",
        description: "Highlights from recent interviews and survey insights.",
        href: "/blog/research-updates-spring/",
        image: "/images/blog-placeholder.png",
        imageAlt: "Research notes on a desk",
        dateIso: "2026-02-20T00:00:00.000Z",
        dateLabel: "February 20, 2026",
        author: "Research Team",
        tags: ["research", "updates"],
      },
      {
        title: "Designing for clarity",
        description: "How we distill user feedback into actionable steps.",
        href: "/blog/designing-for-clarity/",
        image: "/images/blog-placeholder.png",
        imageAlt: "Sticky notes on a wall",
        dateIso: "2026-01-18T00:00:00.000Z",
        dateLabel: "January 18, 2026",
        author: "Alex Chen",
        tags: ["process"],
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        component:
          "Blog index template with grid cards and an empty-state fallback.",
      },
    },
  },
} satisfies Meta<typeof BlogIndexTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyState: Story = {
  args: {
    posts: [],
  },
};

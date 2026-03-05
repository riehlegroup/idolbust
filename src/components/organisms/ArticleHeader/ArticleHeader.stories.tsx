import type { Meta, StoryObj } from "@storybook/react";

import { ArticleHeader } from "@/components/organisms/ArticleHeader";

const meta = {
  title: "Organisms/ArticleHeader",
  component: ArticleHeader,
  tags: ["autodocs"],
  args: {
    title: "Mapping stakeholder insights",
    description: "A walkthrough of how we synthesize research findings.",
    dateIso: "2026-02-20",
    dateLabel: "Feb 20, 2026",
    author: "Research Team",
    tags: ["research", "synthesis"],
  },
  parameters: {
    docs: {
      description: {
        component: "Header block for blog posts and resource articles.",
      },
    },
  },
} satisfies Meta<typeof ArticleHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlogPost: Story = {};

export const ResourceDetail: Story = {
  args: {
    author: undefined,
    category: "Toolkits",
    updatedLabel: "Updated Feb 28, 2026",
    tags: ["interviews", "analysis"],
    heroImageSrc: "/og-image.png",
  },
};

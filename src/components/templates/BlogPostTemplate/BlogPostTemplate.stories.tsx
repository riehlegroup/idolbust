import type { Meta, StoryObj } from "@storybook/react";

import { BlogPostTemplate } from "./BlogPostTemplate";

const meta = {
  title: "Templates/BlogPostTemplate",
  component: BlogPostTemplate,
  tags: ["autodocs"],
  args: {
    title: "Designing for clarity",
    description: "How we distill user feedback into actionable steps.",
    dateIso: "2026-01-18T00:00:00.000Z",
    dateLabel: "January 18, 2026",
    author: "Alex Chen",
    tags: ["process", "research"],
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Blog post header template with title, byline, and tag list.",
      },
    },
  },
} satisfies Meta<typeof BlogPostTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutTags: Story = {
  args: {
    tags: [],
  },
};

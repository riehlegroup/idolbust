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
    children: (
      <div>
        <p>
          We asked 12 teams how they translate insights into decisions and
          compiled a checklist of what actually moves work forward.
        </p>
        <h2>Where we started</h2>
        <p>
          The most effective teams create a shared narrative before they look at
          roadmaps or ticket backlogs.
        </p>
      </div>
    ),
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Blog post header template that wraps content below the metadata.",
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

import type { Meta, StoryObj } from "@storybook/react";

import { MetaGroup } from "@/components/molecules/MetaGroup";

const meta = {
  title: "Molecules/MetaGroup",
  component: MetaGroup,
  tags: ["autodocs"],
  args: {
    category: "Guide",
    dateIso: "2026-02-20",
    dateLabel: "Feb 20, 2026",
    updatedLabel: "Updated Feb 28, 2026",
  },
  parameters: {
    docs: {
      description: {
        component: "Compact grouping of category and date metadata.",
      },
    },
  },
} satisfies Meta<typeof MetaGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAuthor: Story = {
  args: {
    category: undefined,
    author: "Research Team",
    updatedLabel: undefined,
  },
};

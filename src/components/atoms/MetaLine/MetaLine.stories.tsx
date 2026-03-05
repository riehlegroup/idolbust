import type { Meta, StoryObj } from "@storybook/react";

import { MetaLine } from "./MetaLine";

const meta = {
  title: "Atoms/MetaLine",
  component: MetaLine,
  tags: ["autodocs"],
  args: {
    dateIso: "2026-02-20",
    dateLabel: "Feb 20, 2026",
    author: "Research Team",
  },
  parameters: {
    docs: {
      description: {
        component: "Inline metadata line for dates, authors, or updates.",
      },
    },
  },
} satisfies Meta<typeof MetaLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Updated: Story = {
  args: {
    author: undefined,
    updatedLabel: "Updated Feb 28, 2026",
  },
};

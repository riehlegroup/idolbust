import type { Meta, StoryObj } from "@storybook/react";

import { PageHeading } from "./PageHeading";

const meta = {
  title: "Atoms/PageHeading",
  component: PageHeading,
  tags: ["autodocs"],
  args: {
    title: "Research updates",
  },
  parameters: {
    docs: {
      description: {
        component: "Primary page title with consistent scale and weight.",
      },
    },
  },
} satisfies Meta<typeof PageHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongTitle: Story = {
  args: {
    title: "Research updates and field notes from the latest study",
  },
};

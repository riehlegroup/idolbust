import type { Meta, StoryObj } from "@storybook/react";

import { HighlightedTitle } from "@/components/atoms/HighlightedTitle";

const meta: Meta<typeof HighlightedTitle> = {
  title: "Atoms/HighlightedTitle",
  component: HighlightedTitle,
  args: {
    title: "Understanding Your",
    highlight: "User Needs",
  },
};

export default meta;

type Story = StoryObj<typeof HighlightedTitle>;

export const Default: Story = {};

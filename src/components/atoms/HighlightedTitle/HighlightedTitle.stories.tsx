import type { Meta, StoryObj } from "@storybook/react";

import { HighlightedTitle } from "@/components/atoms/HighlightedTitle";

const meta = {
  title: "Atoms/HighlightedTitle",
  component: HighlightedTitle,
  tags: ["autodocs"],
  args: {
    title: "Understanding Your",
    highlight: "User Needs",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Headline component that emphasizes a highlighted phrase for visual focus.",
      },
    },
  },
} satisfies Meta<typeof HighlightedTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

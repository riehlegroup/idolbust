import type { Meta, StoryObj } from "@storybook/react";

import { TagList } from "./TagList";

const meta = {
  title: "Molecules/TagList",
  component: TagList,
  tags: ["autodocs"],
  args: {
    tags: ["research", "updates", "interviews"],
    tone: "neutral",
    size: "xs",
  },
  parameters: {
    docs: {
      description: {
        component: "Collection of tags rendered as pill labels.",
      },
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPrefix: Story = {
  args: {
    prefix: "#",
    tone: "primary",
  },
};

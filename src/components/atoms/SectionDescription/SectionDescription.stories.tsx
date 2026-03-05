import type { Meta, StoryObj } from "@storybook/react";

import { SectionDescription } from "./SectionDescription";

const meta = {
  title: "Atoms/SectionDescription",
  component: SectionDescription,
  tags: ["autodocs"],
  args: {
    description:
      "Simple website software for research projects that want to understand their user needs.",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Supporting text block for section intros and short explanatory copy.",
      },
    },
  },
} satisfies Meta<typeof SectionDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongCopy: Story = {
  args: {
    description:
      "Share the latest user insights with stakeholders and provide a clear view of what's changing, why it matters, and how it shapes upcoming decisions across the project team.",
  },
};

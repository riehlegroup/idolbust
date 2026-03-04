import type { Meta, StoryObj } from "@storybook/react";

import { SectionDescription } from "@/components/atoms/SectionDescription";

const meta: Meta<typeof SectionDescription> = {
  title: "Atoms/SectionDescription",
  component: SectionDescription,
  args: {
    description:
      "Simple website software for research projects that want to understand their user needs.",
  },
};

export default meta;

type Story = StoryObj<typeof SectionDescription>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { PageIntro } from "@/components/organisms/PageIntro";

const meta = {
  title: "Organisms/PageIntro",
  component: PageIntro,
  tags: ["autodocs"],
  args: {
    title: "Resources",
    description: "Articles, tools, and templates to guide your research work.",
  },
  parameters: {
    docs: {
      description: {
        component: "Intro block for listing pages with title and summary copy.",
      },
    },
  },
} satisfies Meta<typeof PageIntro>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    description: undefined,
  },
};

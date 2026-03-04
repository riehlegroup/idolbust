import type { Meta, StoryObj } from "@storybook/react";

import { SocialLinks } from "@/components/organisms/SocialLinks";

const meta = {
  title: "Organisms/SocialLinks",
  component: SocialLinks,
  tags: ["autodocs"],
  args: {
    links: [
      { platform: "github", url: "https://github.com" },
      { platform: "twitter", url: "https://x.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
} satisfies Meta<typeof SocialLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

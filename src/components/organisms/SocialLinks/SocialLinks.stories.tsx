import type { Meta, StoryObj } from "@storybook/react";

import { SocialLinks } from "@/components/organisms/SocialLinks";

const meta: Meta<typeof SocialLinks> = {
  title: "Organisms/SocialLinks",
  component: SocialLinks,
  args: {
    links: [
      { platform: "github", url: "https://github.com" },
      { platform: "twitter", url: "https://x.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof SocialLinks>;

export const Default: Story = {};

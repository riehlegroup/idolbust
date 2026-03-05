import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "storybook/test";

import { SocialLinks } from "./SocialLinks";

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
  parameters: {
    docs: {
      description: {
        component:
          "List of social platform links rendered with accessible labels and icons.",
      },
    },
  },
} satisfies Meta<typeof SocialLinks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ExternalTargets: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole("link");
    for (const link of links) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  },
};

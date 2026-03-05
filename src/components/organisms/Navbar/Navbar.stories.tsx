import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";

import { Navbar } from "./Navbar";

const meta = {
  title: "Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  args: {
    siteName: "Idol or Bust",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
    ],
  },
  parameters: {
    docs: {
      description: {
        component:
          "Top navigation bar with site name and primary links. Keep links short for best spacing.",
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NavigatesToLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "About" });
    link.addEventListener("click", (event) => event.preventDefault());
    await userEvent.click(link);
    await expect(link).toHaveAttribute("href", "/about");
  },
};

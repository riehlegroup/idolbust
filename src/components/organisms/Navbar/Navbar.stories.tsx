import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "@/components/organisms/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Organisms/Navbar",
  component: Navbar,
  args: {
    siteName: "Idol or Bust",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Resources", href: "/resources" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};

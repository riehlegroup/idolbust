import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "@/components/organisms/Navbar";

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
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

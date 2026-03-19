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

export const WithDropdown: Story = {
  args: {
    links: [
      { label: "About", href: "/about" },
      {
        label: "Solutions",
        href: "/solutions",
        items: [
          { label: "Discovery", href: "/solutions/discovery" },
          { label: "Synthesis", href: "/solutions/synthesis" },
        ],
      },
      { label: "Resources", href: "/resources" },
    ],
  },
};

export const MobileDropdown: Story = {
  args: WithDropdown.args,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const NavigatesToLink: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: "About" });
    link.addEventListener("click", (event) => event.preventDefault());
    await userEvent.click(link);
    await expect(link).toHaveAttribute("href", "/about");
  },
};

export const OpensDropdown: Story = {
  args: WithDropdown.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("link", { name: "Solutions" });

    trigger.focus();
    await expect(
      canvas.getByRole("link", { name: "Discovery" }),
    ).toHaveAttribute("href", "/solutions/discovery");
  },
};

export const OpensMobileSidebar: Story = {
  args: WithDropdown.args,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByText("Open menu").closest("label");

    if (!menuButton) {
      throw new Error("Open menu control not found.");
    }

    await userEvent.click(menuButton);
    const toggle = canvasElement.querySelector(
      "#mobile-navigation-toggle",
    ) as HTMLInputElement | null;

    if (!toggle) {
      throw new Error("Mobile navigation toggle not found.");
    }

    await expect(toggle.checked).toBe(true);
    await expect(canvas.getByLabelText("Navigation menu")).toBeInTheDocument();
  },
};

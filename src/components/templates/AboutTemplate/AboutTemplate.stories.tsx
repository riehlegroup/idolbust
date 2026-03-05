import type { Meta, StoryObj } from "@storybook/react";

import { AboutTemplate } from "./AboutTemplate";

const meta = {
  title: "Templates/AboutTemplate",
  component: AboutTemplate,
  tags: ["autodocs"],
  args: {
    title: "About",
    hero: {
      title: "About the Project",
      body: "Idol or Bust is a research project focused on developing simple website software that helps other research projects understand their user needs.",
    },
    sections: [
      {
        title: "Our Mission",
        body: "We believe that understanding users is the foundation of successful research projects. Our goal is to provide lightweight, maintainable tools that help researchers gather insights and make data-driven decisions.",
      },
      {
        title: "Our Approach",
        body: "We follow a user-centered design process, constantly iterating based on feedback from the research community. Our tools are built with maintainability in mind, ensuring they can evolve with changing needs.",
      },
    ],
    teamTitle: "Research Team",
    teamMembers: [
      {
        name: "Jane Doe",
        role: "Principal Investigator",
        bio: "Leading research in user-centered design methodologies.",
      },
      {
        name: "John Smith",
        role: "Research Lead",
        bio: "Specializing in qualitative user research and data analysis.",
      },
      {
        name: "Alex Chen",
        role: "Developer",
        bio: "Building tools that help researchers understand their users.",
      },
    ],
    socialLabel: "Follow us:",
    socialLinks: [
      { platform: "github", url: "https://github.com" },
      { platform: "twitter", url: "https://x.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Full about page template showing hero copy, narrative sections, team, and social links.",
      },
    },
  },
} satisfies Meta<typeof AboutTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

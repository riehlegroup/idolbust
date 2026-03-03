export interface AboutBlock {
  title: string;
  body: readonly string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const ABOUT_CONTENT = {
  title: "About the Project",
  lead: "Idol or Bust is a research project focused on developing simple website software that helps other research projects understand their user needs.",
  blocks: [
    {
      title: "Our Mission",
      body: [
        "We believe that understanding users is the foundation of successful research projects.",
        "Our goal is to provide lightweight, maintainable tools that help researchers gather insights and make data-driven decisions.",
      ],
    },
    {
      title: "Our Approach",
      body: [
        "We follow a user-centered design process, constantly iterating based on feedback from the research community.",
        "Our tools are built with maintainability in mind, ensuring they can evolve with changing needs.",
      ],
    },
  ] satisfies readonly AboutBlock[],
  team: {
    title: "Research Team",
    members: [
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
    ] satisfies readonly TeamMember[],
  },
  socialLabel: "Follow us:",
};

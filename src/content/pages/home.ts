export interface HomeFeature {
  title: string;
  description: string;
}

export const HOME_CONTENT = {
  hero: {
    heading: "Understanding Your",
    highlight: "User Needs",
    subheading:
      "Simple website software for research projects that want to understand their user needs through modern methodologies and tools.",
  },
  features: {
    title: "What We Offer",
    items: [
      {
        title: "User Research",
        description:
          "Understand your users through surveys, interviews, and behavioral analysis.",
      },
      {
        title: "Rapid Prototyping",
        description:
          "Quickly validate ideas with iterative prototyping and user testing.",
      },
      {
        title: "Data-Driven Insights",
        description:
          "Make informed decisions backed by quantitative and qualitative data.",
      },
    ] satisfies readonly HomeFeature[],
  },
  callout: {
    title: "Ready to get started?",
    body: "Join us in building better research tools for understanding user needs.",
    cta: { label: "About Us", href: "/about" },
  },
};

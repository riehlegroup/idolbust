import type { SocialPlatform } from "@/data/social";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
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
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "github", url: "https://github.com/riehlegroup/idolbust" },
];

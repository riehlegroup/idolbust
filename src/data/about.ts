import type { SocialPlatform } from "@/data/social";
import { BRAND_CONFIG } from "@/config/brand";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export const TEAM_MEMBERS = [
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
] satisfies readonly TeamMember[];

export const SOCIAL_LINKS = [
  ...BRAND_CONFIG.links.social,
] satisfies readonly SocialLink[];

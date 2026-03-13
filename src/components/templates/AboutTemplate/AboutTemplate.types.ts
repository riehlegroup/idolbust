import type { SocialLink } from "@/components/organisms/SocialLinks";

export interface AboutTemplateProps {
  title: string;
  hero: {
    title: string;
    body: string;
  };
  sections: readonly AboutSection[];
  teamTitle: string;
  teamMembers: readonly TeamMember[];
  socialLabel: string;
  socialLinks: readonly SocialLink[];
}

export interface AboutSection {
  title: string;
  body: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

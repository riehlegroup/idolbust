import type { AboutSection, TeamMember } from "@/data-models/about";
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

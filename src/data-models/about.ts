export interface AboutPageContent {
  title: string;
  description: string;
  hero: AboutHeroContent;
  sections: AboutSection[];
  teamTitle: string;
  socialLabel: string;
}

export interface AboutHeroContent {
  title: string;
  body: string;
}

export interface AboutSection {
  title: string;
  body: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
}

import type { AboutTemplateProps } from "./AboutTemplate.types";
import { PageHeading } from "@/components/atoms/PageHeading";
import { SocialLinks } from "@/components/organisms/SocialLinks";
import { Team } from "@/components/organisms/Team";

export const AboutTemplate = ({
  hero,
  sections,
  teamTitle,
  teamMembers,
  socialLabel,
  socialLinks,
}: AboutTemplateProps) => (
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <PageHeading title={hero.title} className="mb-8" />

    <div className="prose prose-secondary max-w-3xl">
      <p className="lead text-xl text-secondary-600">{hero.body}</p>

      {sections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </div>
      ))}
    </div>

    <Team members={teamMembers} title={teamTitle} />

    <div className="mt-12 flex items-center justify-center gap-4">
      <span className="text-secondary-600">{socialLabel}</span>
      <SocialLinks links={socialLinks} />
    </div>
  </div>
);

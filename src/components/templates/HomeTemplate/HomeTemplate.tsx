import { Button } from "@/components/atoms/Button";
import { CallToActionSection } from "@/components/organisms/CallToActionSection";
import { FeaturesSection } from "@/components/organisms/FeaturesSection";
import { HomeHero } from "@/components/organisms/HomeHero";
import { withBase } from "@/components/utils/with-base";
import type { HomeTemplateProps } from "./HomeTemplate.types";

export const HomeTemplate = ({
  siteDescription,
  content,
  features,
}: HomeTemplateProps) => {
  const primaryCta = content.hero.primaryAction;
  const secondaryCta = content.hero.secondaryAction;

  return (
    <>
      <HomeHero
        title={content.hero.title}
        highlight={content.hero.highlight}
        description={`${siteDescription} ${content.hero.descriptionSuffix}`}
        primaryAction={
          primaryCta ? (
            <Button
              href={withBase(primaryCta.href)}
              variant="primary"
              size="lg"
            >
              {primaryCta.label}
            </Button>
          ) : undefined
        }
        secondaryAction={
          secondaryCta ? (
            <Button
              href={withBase(secondaryCta.href)}
              variant="outline"
              size="lg"
            >
              {secondaryCta.label}
            </Button>
          ) : undefined
        }
      />
      <FeaturesSection
        title={content.sections.featuresTitle}
        features={features}
      />
      <CallToActionSection
        title={content.sections.callToAction.title}
        description={content.sections.callToAction.description}
        action={
          <Button
            href={withBase(content.sections.callToAction.buttonHref)}
            variant="secondary"
            size="lg"
            className="mt-6"
          >
            {content.sections.callToAction.buttonLabel}
          </Button>
        }
      />
    </>
  );
};

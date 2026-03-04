import React from "react";

import type { BrandConfig } from "@/data-models/brand";
import type { Feature, HomePageContent } from "@/data-models/home";
import { Button } from "@/components/atoms/Button";
import {
  CallToActionSection,
  FeaturesSection,
  HomeHero,
} from "@/components/organisms";
import { withBase } from "@/utils/with-base";

export interface HomeTemplateProps {
  brand: BrandConfig;
  content: HomePageContent;
  features: readonly Feature[];
}

export const HomeTemplate = ({
  brand,
  content,
  features,
}: HomeTemplateProps) => {
  const primaryCta = brand.links.primaryCtas.at(0);
  const secondaryCta = brand.links.primaryCtas.at(1);

  return (
    <>
      <HomeHero
        title={content.hero.title}
        highlight={content.hero.highlight}
        description={`${brand.seo.defaultDescription} ${content.hero.descriptionSuffix}`}
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

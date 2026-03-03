export interface Feature {
  title: string;
  description: string;
}

export interface HomePageContent {
  hero: HomeHeroContent;
  sections: HomeSections;
}

export interface HomeHeroContent {
  title: string;
  highlight: string;
  descriptionSuffix: string;
}

export interface HomeSections {
  featuresTitle: string;
  callToAction: HomeCallToAction;
}

export interface HomeCallToAction {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

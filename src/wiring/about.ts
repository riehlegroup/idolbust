import { brandRepository } from "@/adapters/content/brand-repo";
import { contentRepository } from "@/adapters/content/content-repo";
import { buildAboutPage } from "@/core/services/build-about-page";

export const aboutPage = buildAboutPage(contentRepository, brandRepository);

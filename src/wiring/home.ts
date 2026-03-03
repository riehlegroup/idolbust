import { brandRepository } from "@/adapters/content/brand-repo";
import { contentRepository } from "@/adapters/content/content-repo";
import { buildHomePage } from "@/core/services/build-home-page";

export const homePage = buildHomePage(contentRepository, brandRepository);

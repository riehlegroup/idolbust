import type { BrandRepository } from "@/core/ports/brand-repository";
import { BRAND_CONFIG } from "@/content/site/brand";

export const brandRepository: BrandRepository = {
  getBrand() {
    return BRAND_CONFIG;
  },
};

import type { BrandConfig } from "@/core/models/brand";

export interface BrandRepository {
  getBrand(): BrandConfig;
}

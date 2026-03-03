import type { SectionModel } from "@/core/models/section";

export interface PageModel {
  title: string;
  description?: string;
  sections: readonly SectionModel[];
}

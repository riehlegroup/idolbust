import type { ReactNode } from "react";

export interface CardProps {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  children?: ReactNode;
}

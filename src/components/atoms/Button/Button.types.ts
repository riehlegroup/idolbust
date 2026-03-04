import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface BaseProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  class?: string;
  children?: ReactNode;
}

export type AnchorProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: string;
  };

import type { ReactElement } from "react";

import type { AnchorProps, BaseProps, ButtonProps } from "./Button.types";

export function Button(props: AnchorProps): ReactElement;
export function Button(props: ButtonProps): ReactElement;
export function Button(props: AnchorProps | ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    class: classProp,
    children,
  } = props;
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
    secondary:
      "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
  } satisfies Record<NonNullable<BaseProps["variant"]>, string>;
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  } satisfies Record<NonNullable<BaseProps["size"]>, string>;
  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
    classProp,
  ]
    .filter(Boolean)
    .join(" ");

  if (props.href) {
    const {
      variant: _variant,
      size: _size,
      className: _className,
      class: _classProp,
      ...anchorProps
    } = props as AnchorProps;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    variant: _variant,
    size: _size,
    className: _className,
    class: _classProp,
    type,
    ...buttonProps
  } = props as ButtonProps;

  return (
    <button className={classes} type={type ?? "button"} {...buttonProps}>
      {children}
    </button>
  );
}

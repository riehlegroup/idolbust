import { withBaseIfRelative } from "@/utils/with-base";
import type { CardProps } from "@/components/molecules/Card/Card.types";

export const Card = ({
  title,
  description,
  href,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  children,
}: CardProps) => {
  const fallbackWidth = 1200;
  const fallbackHeight = 675;
  const imageSrc = image ? withBaseIfRelative(image) : undefined;

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-lg border border-secondary-200 bg-white shadow-sm transition-shadow hover:shadow-md",
        href &&
          "focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {href && (
        <a href={href} className="absolute inset-0 z-30" aria-label={title} />
      )}
      {imageSrc && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            width={imageWidth ?? fallbackWidth}
            height={imageHeight ?? fallbackHeight}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="relative z-20 p-6">
        <h3 className="mb-2 text-lg font-semibold text-secondary-900 transition-colors group-hover:text-primary-600">
          {title}
        </h3>
        {description && <p className="text-secondary-600">{description}</p>}
        {children}
      </div>
    </article>
  );
};

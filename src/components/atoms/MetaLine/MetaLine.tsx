import type { MetaLineProps } from "./MetaLine.types";

export const MetaLine = ({
  dateIso,
  dateLabel,
  author,
  updatedLabel,
  className,
}: MetaLineProps) => (
  <div
    className={["flex flex-wrap items-center gap-2", className]
      .filter(Boolean)
      .join(" ")}
  >
    <time dateTime={dateIso}>{dateLabel}</time>
    {updatedLabel && <span>{updatedLabel}</span>}
    {author && (
      <>
        <span>·</span>
        <span>{author}</span>
      </>
    )}
  </div>
);

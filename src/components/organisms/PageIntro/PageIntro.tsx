import { PageHeading } from "@/components/atoms/PageHeading";
import { SectionDescription } from "@/components/atoms/SectionDescription";
import type { PageIntroProps } from "./PageIntro.types";

export const PageIntro = ({
  title,
  description,
  className,
  descriptionClassName,
}: PageIntroProps) => (
  <div className={["mb-8", className].filter(Boolean).join(" ")}>
    <PageHeading title={title} />
    {description && (
      <SectionDescription
        description={description}
        className={["mt-3", descriptionClassName].filter(Boolean).join(" ")}
      />
    )}
  </div>
);

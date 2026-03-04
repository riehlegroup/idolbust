import type { CallToActionSectionProps } from "./CallToActionSection.types";

export const CallToActionSection = ({
  title,
  description,
  action,
}: CallToActionSectionProps) => (
  <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="rounded-lg bg-primary-700 p-8 text-center text-white md:p-12">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-primary-50">{description}</p>
      {action}
    </div>
  </section>
);

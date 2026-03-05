import type { ResourceCanonicalLinkProps } from "./ResourceCanonicalLink.types";

export const ResourceCanonicalLink = ({
  canonicalUrl,
  canonicalLabel,
}: ResourceCanonicalLinkProps) => (
  <p className="text-sm text-secondary-600">
    {canonicalLabel}{" "}
    <a
      className="text-primary-700 hover:text-primary-800"
      href={canonicalUrl}
      rel="noopener noreferrer"
    >
      {canonicalUrl}
    </a>
  </p>
);

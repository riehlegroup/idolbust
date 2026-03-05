export interface ResourcesRelatedListItem {
  title: string;
  href: string;
}

export interface ResourcesRelatedListProps {
  title: string;
  resources: readonly ResourcesRelatedListItem[];
}

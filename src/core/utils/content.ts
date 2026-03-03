interface DraftableData {
  draft?: boolean;
}

interface SortableData {
  order?: number;
  pubDate: Date;
  updatedDate?: Date;
}

/**
 * Returns entries that are not marked as draft.
 */
export function getPublishedEntries<T extends { data: DraftableData }>(
  entries: readonly T[],
): T[] {
  return entries.filter((entry) => !entry.data.draft);
}

/**
 * Sorts entries by order ascending, then updatedDate/pubDate descending.
 */
export function sortEntries<T extends { id: string; data: SortableData }>(
  entries: readonly T[],
): T[] {
  return [...entries].sort((a, b) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    const dateA = (a.data.updatedDate ?? a.data.pubDate).valueOf();
    const dateB = (b.data.updatedDate ?? b.data.pubDate).valueOf();

    if (dateA !== dateB) {
      return dateB - dateA;
    }

    return a.id.localeCompare(b.id);
  });
}

/**
 * Filters drafts and returns sorted published entries.
 */
export function getPublishedSortedEntries<
  T extends { id: string; data: DraftableData & SortableData },
>(entries: readonly T[]): T[] {
  return sortEntries(getPublishedEntries(entries));
}

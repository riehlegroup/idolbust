import type { SubmitHandler } from "@/components/utils/interactive-submit";

interface SubscriptionInput {
  email: string;
}

interface CreateListmonkSubmitHandlerOptions {
  apiUrl: string;
  listUuids: readonly string[];
}

function createSubscriptionEndpoint(apiUrl: string): string {
  const trimmedApiUrl = apiUrl.trim();
  if (trimmedApiUrl.endsWith("/api/public/subscription")) {
    return trimmedApiUrl;
  }

  return `${trimmedApiUrl.replace(/\/+$/, "")}/api/public/subscription`;
}

export function createListmonkSubmitHandler({
  apiUrl,
  listUuids,
}: CreateListmonkSubmitHandlerOptions): SubmitHandler<SubscriptionInput> {
  const endpoint = createSubscriptionEndpoint(apiUrl);

  return async ({ email }) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        list_uuids: listUuids,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Listmonk subscription failed with status ${response.status}`,
      );
    }
  };
}

import type { SubmitHandler } from "@/components/utils/interactive-submit";
import { createListmonkSubmitHandler } from "@/components/utils/listmonk-submit";
import { useUmamiInteractiveSubmit } from "@/components/utils/use-umami-interactive-submit";

import { SubscriptionForm } from "./SubscriptionForm";
import type {
  SubscriptionFormProps,
  SubscriptionFormSubmission,
} from "./SubscriptionForm.types";

export interface TrackedSubscriptionFormProps extends Omit<
  SubscriptionFormProps,
  "onSubmit"
> {
  eventName: string;
  emailDomainEventKey?: string;
  onSubmit?: SubmitHandler<SubscriptionFormSubmission>;
}

const listmonkApiUrl = import.meta.env["PUBLIC_LISTMONK_API_URL"]?.trim() ?? "";
const listmonkListUuids =
  import.meta.env["PUBLIC_LISTMONK_LIST_UUIDS"]
    ?.split(",")
    .map((listUuid: string) => listUuid.trim())
    .filter((listUuid): listUuid is string => listUuid.length > 0) ?? [];

const listmonkSubmit =
  listmonkApiUrl && listmonkListUuids.length > 0
    ? createListmonkSubmitHandler({
        apiUrl: listmonkApiUrl,
        listUuids: listmonkListUuids,
      })
    : undefined;

function getEmailDomain(email: string): string {
  const atIndex = email.lastIndexOf("@");
  if (atIndex < 0 || atIndex === email.length - 1) {
    return "unknown";
  }

  return email.slice(atIndex + 1).toLowerCase();
}

export const TrackedSubscriptionForm = ({
  eventName,
  emailDomainEventKey = "emailDomain",
  onSubmit,
  ...formProps
}: TrackedSubscriptionFormProps) => {
  const submitWithBackends: SubmitHandler<SubscriptionFormSubmission> = async (
    input,
  ) => {
    if (listmonkSubmit) {
      await listmonkSubmit(input);
    }

    if (onSubmit) {
      await onSubmit(input);
    }
  };

  const trackedSubmit = useUmamiInteractiveSubmit<SubscriptionFormSubmission>({
    eventName,
    component: "subscription_form",
    onSubmit: submitWithBackends,
    mapEventData: (input) => ({
      [emailDomainEventKey]: getEmailDomain(input.email),
    }),
  });

  return <SubscriptionForm {...formProps} onSubmit={trackedSubmit} />;
};

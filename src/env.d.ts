/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
  readonly PUBLIC_UMAMI_SCRIPT_URL?: string;
  readonly PUBLIC_UMAMI_HOST_URL?: string;
  readonly PUBLIC_UMAMI_DOMAINS?: string;
  readonly PUBLIC_LISTMONK_API_URL?: string;
  readonly PUBLIC_LISTMONK_LIST_UUIDS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

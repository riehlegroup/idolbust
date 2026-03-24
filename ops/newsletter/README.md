# IdolBust Newsletter (listmonk)

We use [listmonk](https://listmonk.app) as newsletter backend for the `SubscriptionForm` component.

## Learnings and troubleshooting

- `POST /api/public/subscription` only works with lists of type `public`.
- A `400 Bad Request` during subscription is often caused by using a `private` list UUID.
- Browser submissions from a different origin require CORS allowlisting in listmonk.
- Keep `PUBLIC_LISTMONK_API_URL` browser-reachable from the site origin.

## Local development

Generate a local env file with random secrets:

```bash
./setup-local.sh
```

Run listmonk and postgres:

```bash
docker compose \
  -f ops/newsletter/docker-compose.yml \
  --env-file ops/newsletter/.env.local \
  up -d
```

Open listmonk at `http://localhost:9000`.

On first launch:

1. Log in with credentials from `ops/newsletter/.env.local` (`LISTMONK_ADMIN_USER` and `LISTMONK_ADMIN_PASSWORD`).
2. Create a public list in the UI.
3. Copy the list UUID to the app env as `PUBLIC_LISTMONK_LIST_UUIDS`.

## Deployment

**Prerequisites:**

- VPN access to the target VM
- The target VM should be reachable through `ssh idolbust-analytics` (or override `SSH_TARGET`)

**Step 1: Create env config**

```bash
cp .env.example .env
```

Fill in secure values for all credentials. If you deploy behind cloudflared, set `LISTMONK_TUNNEL_TOKEN`.

**Step 2: Deploy**

```bash
./deploy.sh
```

The compose file supports the optional `tunnel` profile for cloudflared.

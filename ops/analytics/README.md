# IdolBust Analytics

We use [Umami](https://umami.is) as tracking tool.
For local testing, deploy a local instance via the `docker-compose.yml` file, see the corresponding sections in the [REDME](../../README.md).

## Deployment

We have an instance of analytics running on one of our servers.

**Prerequisites:**
- VPN access to our target VM
- The target VM needs to be accessible via `ssh idolbust-analytics`. You might need to expand your local SSH setup in `~/.ssh/config` for this. Example
```
Host idolbust-analytics
  HostName 10.131.64.38
  User idolbust
  IdentityFile ~/.ssh/idolbust
  IdentitiesOnly yes
```
 
**Step 1: Generate env config**
```bash
# 1. Create blueprint
cp .env.example .env

# 2. Configure accordingly. Make sure to replace all placeholders with actual secrets!
```

**Step 2: Deploy**
```bash
./deploy.sh
```

The `docker-compose.yml` file uses the **profile** tunnel (e.g., `docker compose --profile tunnel up -d`) to also deploy a cloudflare tunnel container to route traffic from `https://um.idolbust.com` to the umami instance.

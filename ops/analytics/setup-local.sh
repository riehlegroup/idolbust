#!/usr/bin/env sh

set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
SOURCE_FILE="$SCRIPT_DIR/.env.example"
TARGET_FILE=${1:-"$SCRIPT_DIR/.env.local"}

if [ ! -f "$SOURCE_FILE" ]; then
  printf 'Missing env template: %s\n' "$SOURCE_FILE" >&2
  exit 1
fi

if [ -e "$TARGET_FILE" ]; then
  printf 'Refusing to overwrite existing file: %s\n' "$TARGET_FILE" >&2
  exit 1
fi

random_hex() {
  python3 -c 'import secrets; print(secrets.token_hex(32))'
}

postgres_password=$(random_hex)
app_secret=$(random_hex)

cp "$SOURCE_FILE" "$TARGET_FILE"

python3 - "$TARGET_FILE" "$postgres_password" "$app_secret" <<'PY'
from pathlib import Path
import sys

target = Path(sys.argv[1])
postgres_password = sys.argv[2]
app_secret = sys.argv[3]

content = target.read_text()
content = content.replace("UMAMI_POSTGRES_PASSWORD=umami", f"UMAMI_POSTGRES_PASSWORD={postgres_password}")
content = content.replace(
    "UMAMI_DATABASE_URL=postgresql://umami:umami@db:5432/umami",
    f"UMAMI_DATABASE_URL=postgresql://umami:{postgres_password}@db:5432/umami",
)
content = content.replace(
    "UMAMI_APP_SECRET=replace-this-with-a-long-random-secret",
    f"UMAMI_APP_SECRET={app_secret}",
)
target.write_text(content)
PY

printf 'Created %s\n' "$TARGET_FILE"
printf 'Generated random values for UMAMI_POSTGRES_PASSWORD and UMAMI_APP_SECRET.\n'

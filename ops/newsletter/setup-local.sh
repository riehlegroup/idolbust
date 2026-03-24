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
admin_password=$(random_hex)

cp "$SOURCE_FILE" "$TARGET_FILE"

python3 - "$TARGET_FILE" "$postgres_password" "$admin_password" <<'PY'
from pathlib import Path
import sys

target = Path(sys.argv[1])
postgres_password = sys.argv[2]
admin_password = sys.argv[3]

content = target.read_text()
content = content.replace(
    "LISTMONK_POSTGRES_PASSWORD=listmonk",
    f"LISTMONK_POSTGRES_PASSWORD={postgres_password}",
)
content = content.replace(
    "LISTMONK_ADMIN_PASSWORD=listmonk",
    f"LISTMONK_ADMIN_PASSWORD={admin_password}",
)
target.write_text(content)
PY

printf 'Created %s\n' "$TARGET_FILE"
printf 'Generated random values for LISTMONK_POSTGRES_PASSWORD and LISTMONK_ADMIN_PASSWORD.\n'

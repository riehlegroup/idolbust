#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Resolve git root directory (independent of invocation location)
GIT_ROOT_DIR="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel 2>/dev/null || true)"

if [[ -z "$GIT_ROOT_DIR" ]]; then
  printf 'Error: could not determine git root. Are you inside a git repository?\n' >&2
  exit 1
fi

SSH_TARGET="${SSH_TARGET:-idolbust-analytics}"
REMOTE_DIR="${REMOTE_DIR:-/home/idolbust/idolbust}"
TARGET_ANALYTICS_ENV_FILE="${TARGET_ANALYTICS_ENV_FILE:-${SCRIPT_DIR}/.env}"

REMOTE_ANALYTICS_DIR="${REMOTE_DIR}/ops/analytics"

require_command() {
  local command_name="$1"

  if ! command -v "$command_name" >/dev/null 2>&1; then
    printf 'Missing required command: %s\n' "$command_name" >&2
    exit 1
  fi
}

require_file() {
  local file_path="$1"

  if [[ ! -f "$file_path" ]]; then
    printf 'Missing required file: %s\n' "$file_path" >&2
    exit 1
  fi
}

require_command rsync
require_command ssh
require_command git

require_file "$SCRIPT_DIR/docker-compose.yml"
require_file "$TARGET_ANALYTICS_ENV_FILE"

printf 'Deploying analytics setup to %s:%s\n' "$SSH_TARGET" "$REMOTE_DIR"

ssh "$SSH_TARGET" "mkdir -p '$REMOTE_ANALYTICS_DIR'"

rsync -avz \
  "$GIT_ROOT_DIR/ops/analytics/docker-compose.yml" \
  "$SSH_TARGET:$REMOTE_ANALYTICS_DIR/docker-compose.yml"

rsync -avz \
  "$TARGET_ANALYTICS_ENV_FILE" \
  "$SSH_TARGET:$REMOTE_ANALYTICS_DIR/.env"

ssh "$SSH_TARGET" "set -euo pipefail; \
  if ! command -v docker >/dev/null 2>&1; then \
    printf 'docker is required on the VM\n' >&2; \
    exit 1; \
  fi; \
  cd '$REMOTE_DIR'; \
  docker compose -f ops/analytics/docker-compose.yml --env-file ops/analytics/.env up -d"

printf 'Done. Umami is deployed with env from %s\n' "$TARGET_ANALYTICS_ENV_FILE"
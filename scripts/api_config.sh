#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$ROOT_DIR/src/.env"

read -r -p "Please enter Auth Api Url: " auth_url
read -r -p "Please enter Notes Api Url: " notes_url

mkdir -p "$ROOT_DIR/src"
cat > "$ENV_FILE" <<EOF
VITE_AUTH_API_URL=$auth_url
VITE_NOTES_API_URL=$notes_url
EOF

echo "Environment file created at $ENV_FILE"

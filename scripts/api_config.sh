#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
PROJECT_DIR="$ROOT_DIR/src"
ENV_FILE="$PROJECT_DIR/.env"

read -r -p "Please enter Auth Api Url: " auth_url
read -r -p "Please enter Notes Api Url: " notes_url

cat > "$ENV_FILE" <<EOF
VITE_AUTH_API_URL=$auth_url
VITE_NOTES_API_URL=$notes_url
EOF

echo "✅ Environment file configured"

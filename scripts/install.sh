#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
PROJECT_DIR="$ROOT_DIR/src"

echo "Installing dependencies for Kube-Notes-FrontEnd..."

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js was not found. Installing it now..."

  case "$(uname -s)" in
    Darwin)
      if ! command -v brew >/dev/null 2>&1; then
        echo "Homebrew was not found. Please install it first: https://brew.sh/"
        exit 1
      fi
      brew update
      brew install node
      ;;
    Linux)
      if command -v apt-get >/dev/null 2>&1; then
        sudo apt-get update
        sudo apt-get install -y nodejs npm
      elif command -v dnf >/dev/null 2>&1; then
        sudo dnf install -y nodejs npm
      elif command -v yum >/dev/null 2>&1; then
        sudo yum install -y nodejs npm
      else
        echo "Unsupported Linux distribution. Please install Node.js manually."
        exit 1
      fi
      ;;
    MINGW*|MSYS*|CYGWIN*)
      if command -v winget >/dev/null 2>&1; then
        winget install OpenJS.NodeJS.LTS --source winget
      else
        echo "winget was not found. Please install Node.js manually: https://nodejs.org/"
        exit 1
      fi
      ;;
    *)
      echo "Unsupported operating system: $(uname -s)"
      exit 1
      ;;
  esac
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm was not found after attempting to install Node.js."
  exit 1
fi

echo "Using Node.js: $(node --version)"
echo "Using npm: $(npm --version)"

if [ ! -f "$PROJECT_DIR/package.json" ]; then
  echo "Could not find package.json in $PROJECT_DIR"
  exit 1
fi

cd "$PROJECT_DIR"
npm install

echo "✅ Dependencies installed successfully."


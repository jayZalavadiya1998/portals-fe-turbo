#!/bin/bash

# Install pnpm if not already installed
curl -fsSL https://get.pnpm.io/install.sh | sh -
export PATH="$HOME/.local/share/pnpm:$PATH"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null
then
    echo "pnpm could not be installed"
    exit 1
fi

# Install all dependencies
pnpm install


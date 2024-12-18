#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Install dependencies for app
echo "Installing dependencies..."
npm install

# Build step the app
echo "Building the app..."
npm run build

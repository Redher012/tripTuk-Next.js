#!/bin/bash

echo "Pulling latest code..."
cd /var/www/tripTuk-Next.js

# force sync with GitHub
git fetch origin main
git reset --hard origin/main
git clean -fd

echo "Installing dependencies..."
npm install

echo "Building frontend..."
npm run build

echo "Restarting server..."
pm2 restart triptuk

echo "Deplyment complete"

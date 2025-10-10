#!/bin/bash

echo "🔧 Fixing deployment issues..."

# Navigate to project directory
cd ~/Desktop/theEpicurean

echo "📝 Regenerating routes.json..."
npm run generate-routes

echo "🗑️  Removing problematic backup files from git..."
git rm --cached src/App-backup.jsx 2>/dev/null || true
git rm --cached src/App-new.jsx 2>/dev/null || true
git rm --cached src/App-optimized.jsx 2>/dev/null || true
git rm --cached src/test-routes.js 2>/dev/null || true

echo "📦 Staging changes..."
git add .

echo "💾 Committing fix..."
git commit -m "Fix: Remove problematic backup files causing build failures"

echo "🚀 Pushing to trigger redeployment..."
git push

echo "✅ Done! Vercel should now deploy successfully."
echo "⏱️  Expected build time: 5-15 minutes"

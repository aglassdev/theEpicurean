#!/bin/bash

# Cleanup script for theEpicurean project
# This removes unnecessary backup and temporary files

echo "🧹 Cleaning up theEpicurean project..."

# Root directory cleanup
echo "Removing root directory clutter..."
rm -f build-optimized.sh
rm -f fix-component-names.js
rm -f fix-deployment.sh
rm -f fix-remaining-components.js
rm -f test-output.json
rm -f package-backup.json
rm -f vite-backup.config.js
rm -f DEPLOYMENT_FIX.md
rm -f DEPLOYMENT_FIX_V2.md
rm -f README_DEPLOYMENT_FIX.md

# Src directory cleanup
echo "Removing src directory backups..."
rm -f src/App-backup.jsx
rm -f src/App-new.jsx
rm -f src/App-old-with-routes.jsx
rm -f src/test-routes.js
rm -f src/routes.json

# Remove .DS_Store files (Mac)
echo "Removing .DS_Store files..."
find . -name ".DS_Store" -delete

# Remove .vscode directory if present
if [ -d "src/.vscode" ]; then
  echo "Removing .vscode directory from src..."
  rm -rf src/.vscode
fi

# Scripts directory cleanup (keep only essential scripts)
echo "Cleaning scripts directory..."
cd scripts
rm -f generated-routes.txt
rm -f testConverter.js
cd ..

echo "✅ Cleanup complete!"
echo ""
echo "Remaining files:"
echo "Root: .gitignore, .vercelignore, package.json, vite.config.js, vercel.json"
echo "Scripts: convertToJSON.js, generateReadme.js, generateRestaurants.js, generateRoutes.js, postBuild.js, preBuild.js"
echo ""
echo "Next steps:"
echo "1. Test the app locally: npm run dev"
echo "2. If working, commit changes: git add . && git commit -m 'Fix restaurant loading and cleanup project'"
echo "3. Push to deploy: git push"

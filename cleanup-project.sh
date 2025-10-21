#!/bin/bash

echo "🧹 Cleaning up theEpicurean project..."

# Remove backup files
echo "Removing backup files..."
find src -name "*-backup.jsx" -type f -delete
find src -name "*-old*.jsx" -type f -delete
find src -name "*-new.jsx" -type f -delete

# Remove markdown deployment files
echo "Removing deployment documentation..."
rm -f DEPLOYMENT_FIX.md
rm -f DEPLOYMENT_FIX_V2.md
rm -f README_DEPLOYMENT_FIX.md

# Remove backup configs
echo "Removing backup configs..."
rm -f package-backup.json
rm -f vite-backup.config.js

# Remove test files
echo "Removing test files..."
rm -f src/test-routes.js
rm -f test-output.json
rm -f scripts/testConverter.js

# Remove fix scripts
echo "Removing fix scripts..."
rm -f fix-component-names.js
rm -f fix-deployment.sh
rm -f fix-remaining-components.js
rm -f build-optimized.sh

# Remove .DS_Store files
echo "Removing .DS_Store files..."
find . -name ".DS_Store" -type f -delete

echo "✅ Cleanup complete!"
echo ""
echo "Remaining structure:"
ls -la

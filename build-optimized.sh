#!/bin/bash

echo "Building theEpicurean with restaurant components..."

# Step 1: Move restaurant components to public temporarily
echo "Step 1: Moving restaurant components to public/components..."
mkdir -p public/components

# Move all country directories except main files
for dir in src/*/; do
  dirname=$(basename "$dir")
  # Skip if it's a dot directory or pictures
  if [[ "$dirname" != "."* ]] && [[ "$dirname" != "pictures" ]]; then
    echo "Moving $dirname..."
    cp -r "$dir" "public/components/$dirname"
  fi
done

# Step 2: Build the app (without restaurant components in src)
echo "Step 2: Building app..."
npm run build

# Step 3: Restore restaurant components (optional, for dev)
echo "Build complete!"
echo "Restaurant components are now in public/components/"

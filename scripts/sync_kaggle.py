#!/usr/bin/env python3
"""
sync_kaggle.py
--------------
Delta-sync the Michelin restaurant dataset from Kaggle.

What it does:
  1. Downloads the latest version of the Kaggle dataset using kagglehub
     (kagglehub caches downloads, so it only hits the network when a
     new version is available — no full re-downloads on every run).
  2. Reads the existing michelin_my_maps.csv that the site already uses.
  3. Identifies NEW rows (by Name+Location key) not yet in the CSV.
  4. Appends only those new rows and writes the updated CSV.
  5. Prints a summary so you know exactly what changed.

Usage:
  # First-time setup
  pip install kagglehub pandas

  # Make sure your Kaggle API credentials are set:
  #   ~/.kaggle/kaggle.json  {"username":"<you>","key":"<api_key>"}
  # OR set env vars: KAGGLE_USERNAME, KAGGLE_KEY

  python scripts/sync_kaggle.py

After running, re-run the restaurant generator to create JSX for new entries:
  node scripts/generateRestaurants.js --skip-existing
"""

import sys
import os
import csv
import io
from pathlib import Path
from datetime import datetime

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
SCRIPT_DIR  = Path(__file__).resolve().parent           # theEpicurean/scripts/
PROJECT_DIR = SCRIPT_DIR.parent                         # theEpicurean/
CSV_OUT     = PROJECT_DIR.parent / "michelin_my_maps.csv"  # two levels up

# Kaggle dataset slug
DATASET_SLUG = "ngshiheng/michelin-guide-restaurants-2021"

# The column header row we expect in the Kaggle CSV
# (may differ from our local CSV column names — we normalise below)
KAGGLE_NAME_COL     = "Name"
KAGGLE_LOCATION_COL = "Location"

# Local CSV expected columns (from generateRestaurants.js)
LOCAL_COLS = [
    "Name", "Location", "Address", "Award", "Price",
    "GreenStar", "Description", "Cuisine", "PhoneNumber",
    "WebsiteUrl", "Url"
]

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def row_key(row: dict) -> str:
    """Unique identity: Name + Location (case-insensitive, stripped)."""
    return (
        str(row.get("Name", "")).strip().lower()
        + "|"
        + str(row.get("Location", "")).strip().lower()
    )


def read_csv_rows(filepath: Path) -> list[dict]:
    """Read a CSV into a list of dicts. Returns [] if the file doesn't exist."""
    if not filepath.exists():
        return []
    with open(filepath, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader)


def normalise_kaggle_row(row: dict) -> dict:
    """
    Map Kaggle CSV column names → local CSV column names.
    Kaggle dataset uses 'Url' for the restaurant's web page.
    Our local CSV also has 'WebsiteUrl' (sometimes the same).
    Adjust this mapping if the Kaggle schema changes.
    """
    return {
        "Name":        row.get("Name", ""),
        "Location":    row.get("Location", ""),
        "Address":     row.get("Address", ""),
        "Award":       row.get("Award", ""),
        "Price":       row.get("Price", ""),
        "GreenStar":   row.get("GreenStar", ""),
        "Description": row.get("Description", ""),
        "Cuisine":     row.get("Cuisine", ""),
        "PhoneNumber": row.get("PhoneNumber", ""),
        "WebsiteUrl":  row.get("WebsiteUrl", row.get("Url", "")),
        "Url":         row.get("Url", row.get("WebsiteUrl", "")),
    }


def write_csv(filepath: Path, rows: list[dict], fieldnames: list[str]) -> None:
    filepath.parent.mkdir(parents=True, exist_ok=True)
    with open(filepath, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f, fieldnames=fieldnames, extrasaction="ignore", quoting=csv.QUOTE_ALL
        )
        writer.writeheader()
        writer.writerows(rows)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    print("=" * 60)
    print("  Michelin Dataset Kaggle Sync")
    print(f"  {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    # ------------------------------------------------------------------
    # 1. Download (or use cached) Kaggle dataset
    # ------------------------------------------------------------------
    try:
        import kagglehub
    except ImportError:
        print("\n❌  kagglehub is not installed.")
        print("    Run:  pip install kagglehub")
        sys.exit(1)

    print(f"\n📥  Downloading dataset: {DATASET_SLUG}")
    print("    (Uses local cache if already up-to-date — no re-download needed)")
    dataset_path = kagglehub.dataset_download(DATASET_SLUG)
    print(f"    Dataset path: {dataset_path}")

    # Find the CSV file inside the downloaded dataset directory
    dataset_dir = Path(dataset_path)
    csv_files = list(dataset_dir.glob("*.csv"))
    if not csv_files:
        print("❌  No CSV file found in the downloaded dataset.")
        sys.exit(1)

    # Prefer the file that looks most like the main dataset
    # The Kaggle dataset typically contains one primary CSV
    kaggle_csv = sorted(csv_files)[0]
    if len(csv_files) > 1:
        # Prefer the largest file
        kaggle_csv = max(csv_files, key=lambda p: p.stat().st_size)
    print(f"    Using CSV: {kaggle_csv.name}")

    # ------------------------------------------------------------------
    # 2. Read both CSVs
    # ------------------------------------------------------------------
    print(f"\n📖  Reading Kaggle data …")
    with open(kaggle_csv, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        kaggle_rows_raw = list(reader)

    kaggle_rows = [normalise_kaggle_row(r) for r in kaggle_rows_raw]
    print(f"    Kaggle total rows: {len(kaggle_rows)}")

    print(f"\n📖  Reading existing CSV: {CSV_OUT}")
    local_rows = read_csv_rows(CSV_OUT)

    if local_rows:
        print(f"    Existing local rows: {len(local_rows)}")
        # Ensure local CSV has all required columns (in case first-run or old format)
        local_fieldnames = list(local_rows[0].keys()) if local_rows else LOCAL_COLS
    else:
        print("    No existing CSV found — will create it from scratch.")
        local_rows = []
        local_fieldnames = LOCAL_COLS

    # ------------------------------------------------------------------
    # 3. Compute delta
    # ------------------------------------------------------------------
    print("\n🔍  Computing delta …")
    existing_keys = {row_key(r) for r in local_rows}

    new_rows = []
    for row in kaggle_rows:
        k = row_key(row)
        if k and k not in existing_keys:
            new_rows.append(row)
            existing_keys.add(k)   # avoid adding dups from Kaggle itself

    print(f"    New entries found: {len(new_rows)}")

    if not new_rows:
        print("\n✅  Already up to date — nothing to add.")
        return

    # ------------------------------------------------------------------
    # 4. Preview new entries
    # ------------------------------------------------------------------
    print("\n🆕  New restaurants being added:")
    print(f"    {'Name':<45} {'Location'}")
    print(f"    {'-'*44} {'-'*20}")
    for r in new_rows[:30]:
        print(f"    {r['Name'][:44]:<45} {r['Location'][:20]}")
    if len(new_rows) > 30:
        print(f"    … and {len(new_rows) - 30} more")

    # ------------------------------------------------------------------
    # 5. Backup existing CSV
    # ------------------------------------------------------------------
    if CSV_OUT.exists():
        backup_path = CSV_OUT.with_suffix(f".backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv")
        import shutil
        shutil.copy2(CSV_OUT, backup_path)
        print(f"\n💾  Backup saved: {backup_path.name}")

    # ------------------------------------------------------------------
    # 6. Write updated CSV
    # ------------------------------------------------------------------
    merged_rows = local_rows + new_rows

    # Determine fieldnames: union of local + kaggle columns, preserving local order
    all_fieldnames = list(local_fieldnames)
    for row in new_rows:
        for k in row.keys():
            if k not in all_fieldnames:
                all_fieldnames.append(k)

    write_csv(CSV_OUT, merged_rows, all_fieldnames)

    print(f"\n✅  CSV updated!")
    print(f"    Previous rows : {len(local_rows)}")
    print(f"    New rows added: {len(new_rows)}")
    print(f"    Total rows now: {len(merged_rows)}")
    print(f"    Written to    : {CSV_OUT}")

    # ------------------------------------------------------------------
    # 7. Next steps hint
    # ------------------------------------------------------------------
    print("\n📌  Next steps:")
    print("    1. Review the new entries above")
    print("    2. Run the restaurant generator to create JSX files for new entries:")
    print("       node scripts/generateRestaurants.js --skip-existing")
    print("    3. Rebuild the site:")
    print("       npm run build")
    print("=" * 60)


if __name__ == "__main__":
    main()

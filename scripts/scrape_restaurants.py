#!/usr/bin/env python3
"""
Scraper for thebestrestaurantsguide.com
Reads the sitemap, visits each restaurant page, extracts Schema.org JSON-LD,
and writes name, address, city, country, site_link to restaurants.csv

Restart-safe: uses the CSV itself as the source of truth for what's been done.
"""

import csv
import json
import sys
import time
import xml.etree.ElementTree as ET
from pathlib import Path

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://thebestrestaurantsguide.com"
SITEMAP_URL = f"{BASE_URL}/sitemap-restaurants.xml"
OUTPUT_CSV = Path(__file__).parent.parent / "restaurants.csv"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
}

REQUEST_DELAY = 1.0  # seconds between requests


def fetch(url: str, retries: int = 3) -> requests.Response | None:
    for attempt in range(retries):
        try:
            resp = requests.get(url, headers=HEADERS, timeout=20)
            resp.raise_for_status()
            return resp
        except requests.RequestException as e:
            wait = (attempt + 1) * 3
            print(f"  [warn] {url} → {e} (retry {attempt + 1}/{retries} in {wait}s)")
            time.sleep(wait)
    return None


def get_restaurant_urls() -> list[str]:
    """Parse sitemap and return deduplicated restaurant page URLs."""
    print(f"Fetching sitemap: {SITEMAP_URL}")
    resp = fetch(SITEMAP_URL)
    if not resp:
        sys.exit("Failed to fetch sitemap.")

    root = ET.fromstring(resp.text)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    raw = [loc.text.strip() for loc in root.findall(".//sm:loc", ns) if loc.text]
    # Deduplicate while preserving order
    urls = list(dict.fromkeys(raw))
    print(f"Found {len(raw)} URLs in sitemap ({len(urls)} unique).")
    return urls


def load_done_from_csv() -> set[str]:
    """Read which source_urls are already in the CSV (restart-safe)."""
    if not OUTPUT_CSV.exists():
        return set()
    done = set()
    with open(OUTPUT_CSV, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if reader.fieldnames and "source_url" in reader.fieldnames:
            for row in reader:
                url = row.get("source_url", "").strip()
                if url:
                    done.add(url)
    return done


def extract_schema_data(soup: BeautifulSoup) -> dict:
    """Extract the Restaurant Schema.org JSON-LD block."""
    for script in soup.find_all("script", type="application/ld+json"):
        try:
            data = json.loads(script.string or "")
            if isinstance(data, list):
                for item in data:
                    if isinstance(item, dict) and item.get("@type") in ("Restaurant", "FoodEstablishment"):
                        return item
            elif isinstance(data, dict) and data.get("@type") in ("Restaurant", "FoodEstablishment"):
                return data
        except (json.JSONDecodeError, TypeError):
            continue
    return {}


def parse_restaurant(url: str) -> dict | None:
    resp = fetch(url)
    if not resp:
        return None

    soup = BeautifulSoup(resp.text, "lxml")
    schema = extract_schema_data(soup)

    # --- Name ---
    name = schema.get("name", "")
    if not name:
        h1 = soup.find("h1")
        name = h1.get_text(strip=True) if h1 else ""

    # --- Address components ---
    address_obj = schema.get("address", {})
    if isinstance(address_obj, str):
        street = address_obj
        city = ""
        country = ""
    else:
        street = address_obj.get("streetAddress", "")
        city = address_obj.get("addressLocality", "")
        country = address_obj.get("addressCountry", "")
        if not city:
            city = address_obj.get("addressRegion", "")

    # Fall back to visible text if schema address is empty
    if not street:
        addr_div = soup.find("div", class_=lambda c: c and "text-black" in c and "text-sm" in c)
        if addr_div:
            street = addr_div.get_text(separator=", ", strip=True)

    # --- Website / site link ---
    # sameAs holds the restaurant's own website; schema.url is the guide page URL
    same_as = schema.get("sameAs", [])
    if isinstance(same_as, str):
        same_as = [same_as]
    site_link = ""
    for s in same_as:
        if s and not any(t in s for t in ["instagram", "facebook", "twitter", "tiktok"]):
            site_link = s
            break
    # Fall back to scanning page links
    if not site_link:
        for a in soup.find_all("a", href=True):
            href = a["href"]
            if href.startswith("http") and BASE_URL not in href:
                if not any(t in href for t in ["instagram", "facebook", "twitter", "tiktok", "tel:", "mailto:"]):
                    site_link = href
                    break

    return {
        "name": name,
        "address": street,
        "city": city,
        "country": country,
        "site_link": site_link,
        "source_url": url,
    }


def main():
    urls = get_restaurant_urls()

    # Use CSV as the authoritative record of what's done (not a separate progress file)
    done = load_done_from_csv()
    remaining = [u for u in urls if u not in done]
    total = len(urls)
    print(f"Already scraped: {len(done)}/{total} | Remaining: {len(remaining)}")

    if not remaining:
        print("All done!")
        return

    fieldnames = ["name", "address", "city", "country", "site_link", "source_url"]
    needs_header = not OUTPUT_CSV.exists() or OUTPUT_CSV.stat().st_size == 0

    with open(OUTPUT_CSV, "a", newline="", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if needs_header:
            writer.writeheader()

        for i, url in enumerate(remaining, start=1):
            elapsed_pct = (len(done) + i) / total * 100
            print(f"[{len(done) + i}/{total} {elapsed_pct:.1f}%] {url}")
            row = parse_restaurant(url)
            if row:
                writer.writerow(row)
                csvfile.flush()

            time.sleep(REQUEST_DELAY)

    print(f"\nDone! Output: {OUTPUT_CSV}")


if __name__ == "__main__":
    main()

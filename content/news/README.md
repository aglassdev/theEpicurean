# Writing an article

Add a `.md` file to this folder. That's the whole job: no code, no imports,
nothing to register. The filename becomes the URL, so `sysco-deal.md` is
published at `/news/sysco-deal`.

```markdown
---
title: Is Michelin Selling Out?
section: opinion
date: 2026-08-21
byline: A Glass Production
image: /images/michelin.png
dek: One or two sentences that sit under the headline.
draft: false
---

Ordinary writing. Blank line between paragraphs.

## A subheading

**Bold**, *italic*, a [link](/methodology), and:

> a pull quote, which sets in large serif with a gold rule.

- a list
- of things
```

## The fields

| Field | Required | Notes |
|---|---|---|
| `title`   | yes | The headline. |
| `date`    | yes | `YYYY-MM-DD`. Decides ordering and which piece leads the page. |
| `section` | no  | `opinion`, `awards` or `restaurants`. Defaults to `restaurants`. |
| `dek`     | no  | Standfirst under the headline, and the blurb on the News page. |
| `image`   | no  | Path under `public/`. Checked at build time; a missing file is reported. |
| `byline`  | no  | |
| `draft`   | no  | `true` keeps it out of the build entirely. |

## Seeing it

- `npm run articles` recompiles just the news, and prints what it found.
- `npm run dev` then shows it at `/news`.
- `npm run build` does it as part of a full build, so a deploy always picks
  up whatever is in this folder.

The newest article leads the News page. Each section column shows its own
newest piece, skipping whatever is already leading, so a section never
repeats itself.

Bad front matter fails the build loudly rather than shipping a broken page:
a missing title, a date that isn't `YYYY-MM-DD`, an unknown section, or an
image path that doesn't exist.

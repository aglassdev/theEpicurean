# Masters

The original photographs. Multi-megabyte PNGs and JPEGs that are never served:
`scripts/optimizeImages.js` reads them and writes the WebP derivatives in
`public/images/opt/`, and those derivatives are what the site loads.

They are deliberately outside `public/` and outside git. Keeping them in the
repository meant every deploy shipped about 750 MB that no visitor could ever
receive, and every replacement of a photograph added another copy to the history
rather than freeing the old one.

A checkout without this directory builds and deploys correctly. The derivatives
are committed, so a source with nothing to redo is simply skipped. What you lose
without the masters is the ability to re-derive at a different size or quality,
which is why they are worth keeping somewhere durable.

To add a photograph: drop it here, then `npm run images`.

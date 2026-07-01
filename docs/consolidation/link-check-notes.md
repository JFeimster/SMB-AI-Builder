# Link Check Notes

Manual link strategy used in this branch:

## Public Pages

New pages use nested paths:

- CSS: `../../styles.css`
- JS: `../../script.js`

## New Public URLs

- `/pages/directories/connector-library.html`
- `/pages/directories/skills-library.html`

Both are included in `sitemap.xml`.

## Cross-Links

New docs link to:

- Existing pages from main where possible
- New pages created in this branch
- New docs created in this branch

## Known Deferrals

Some links point to pages already present in the repo from earlier merged work, such as:

- `pages/tools/connectors.html`
- `pages/tools/connector-playbooks.html`
- `pages/tools/connector-risk-map.html`

If a link checker flags older pages not touched here, repair in a separate focused PR.

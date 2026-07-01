# UI Refactor Deferral

The stale UI/layout PR is not merged directly.

## Reason

The old UI refactor had useful direction but also had known issues:

- Mobile nav breakpoint dead zone
- Prompt copy-button selector bug
- Stale branch conflicts
- Broad changes across many pages

## Rule

Rebuild UI changes in a separate PR after this connector/tooling foundation merges.

## Required Fixes For Future UI PR

- Keep `.nav-toggle` visible through the same breakpoint where `.site-nav` is hidden/offscreen.
- Make copy buttons read the closest prompt card code element, not only `nextElementSibling`.
- Check nested page CSS and JS paths.
- Confirm one H1 per page.
- Confirm no horizontal overflow on mobile.
- Confirm prompt pages copy correctly.

## Best Next UI Batch

One PR only:

`Refactor static site UI and prompt interactions`

Scope:

- `styles.css`
- `script.js`
- page shell/nav/footer partial consistency
- prompt-card copy behavior
- sitemap/nav discovery checks

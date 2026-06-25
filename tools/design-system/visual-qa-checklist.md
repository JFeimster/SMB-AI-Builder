# Visual QA Checklist

Before shipping any new page, embed, or component, review this checklist to ensure it meets the SMB AI Builder brand standards.

## The 5-Second Test
- [ ] **Headline readable in 5 seconds?** Is the H1 massive, clear, and immediately explanatory?
- [ ] **CTA visible above fold?** Can the user see the primary action button without scrolling on a standard laptop screen?
- [ ] **Clear Value?** Is it obvious *why* the user should click the CTA?

## Brand Vibe
- [ ] **No generic SaaS blandness.** Are we avoiding soft pastels, vague "synergy" buzzwords, and corporate vector illustrations?
- [ ] **Operator-focused language.** Are we speaking directly to the person doing the work (e.g., using terms like "audit," "clean up," "deploy")?
- [ ] **High contrast.** Do the colors pop? Are the shadows harsh and unblurred?

## Layout & Components
- [ ] **Cards not overcrowded.** Is there adequate breathing room (padding/gap) inside and between `.brutal-card` and `.outcome-card` elements?
- [ ] **Grid alignment.** Do elements align to the implicit grid on desktop?
- [ ] **Intentional asymmetry.** Are elements like the hero cockpit or specific highlight cards slightly rotated (e.g., `.tilt-left`, `.tilt-right`) to break up the rigidity?

## Responsive Design
- [ ] **Mobile layout clean.** Do all bento grids and multi-column layouts stack logically into a single column on mobile?
- [ ] **Touch targets large enough.** Are all buttons and links at least 44x44px?
- [ ] **Embed fits dimensions.** If this is a partner embed, does it render cleanly within a constrained iframe without unnecessary scrollbars or cut-off content?
- [ ] **Typography scales.** Do headings use `clamp()` so they shrink gracefully on small screens without breaking words awkwardly?

## Accessibility
- [ ] **Focus states visible.** Can you navigate the page using only the `Tab` key and clearly see where you are (cyan outline)?
- [ ] **Color contrast.** Is all text legible against its background color?
- [ ] **Motion check.** Do interactions feel snappy? Have you avoided long, distracting animations?

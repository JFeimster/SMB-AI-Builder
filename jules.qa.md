# Jules QA Checklist

## File Structure
- [ ] All expected files exist.
- [ ] Appropriate folder mapping rules from `jules.json` are followed.

## Links and Paths
- [ ] Relative CSS paths are correct.
- [ ] Relative JS paths are correct.
- [ ] Internal links work and point to correct destinations.

## Metadata
- [ ] Metadata is unique for each page.

## SEO
- [ ] One H1 per page.
- [ ] Descriptive H2s are used.
- [ ] Sitemap is updated when pages are added.
- [ ] XML is valid.

## Accessibility
- [ ] Pages are mobile-friendly.
- [ ] Focus states are visible.
- [ ] Semantic landmarks and descriptive links are used.

## Copy Quality
- [ ] No vague AI buzzwords (e.g., "revolutionize", "seamless").
- [ ] Tone is direct, operator-friendly, and anti-hype.

## Safety and Claims
- [ ] No fake proof.
- [ ] No unsupported claims.
- [ ] No fake testimonials, reviews, ratings, logos, or partner claims.
- [ ] Sensitive workflow disclaimers are included where needed.

## CTA Checks
- [ ] CTA uses the correct GPT URL (`https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`).
- [ ] CTAs are not buried and have good contrast.

## Schema Checks
- [ ] JSON is valid.
- [ ] FAQ markup works where used.
- [ ] No fake ratings or review schemas.

## Static HTML Checks
- [ ] Uses plain semantic HTML.
- [ ] No external frameworks (unless already in use).
- [ ] Reuses root `styles.css` and `script.js`.

## Next.js Checks
- [ ] Follows Next.js App Router conventions (if in `app/`).
- [ ] Components are kept simple.
- [ ] Avoids unnecessary dependencies.

## Final Verification
- [ ] All above checks have been manually verified and pass.

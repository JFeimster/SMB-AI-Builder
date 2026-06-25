# final-seo-qa

## Purpose
To execute the ultimate, non-negotiable checklist before any SEO page or update is deployed, guaranteeing absolute compliance with project standards.

## When to use this skill
- As the final step before merging a PR or submitting changes to the repository.

## When not to use this skill
- When still drafting or actively writing content.

## Inputs SEO should collect
- The final set of changed files (HTML, JSON, XML).
- The list of target keywords.

## Files and folders this skill may touch
- All created or modified files (read-only verification).

## Source-of-truth files to read first
- `jules.qa.md`
- `tools/jules/jules-seo-rules.md`
- `JULES.md`

## Process
1. **Metadata Unique:** Verify every page has a unique `<title>` and `<meta name="description">`.
2. **One H1:** Verify every HTML page has exactly one `<h1>`.
3. **FAQ Present:** Verify relevant pages contain 4-6 FAQs.
4. **Schema Valid:** Run a JSON validation pass on all injected `<script type="application/ld+json">`. Ensure NO fake `aggregateRating` exists.
5. **Links Work:** Check internal `<a href="...">` paths for accuracy and verify no orphan pages were created.
6. **Sitemap Updated:** Confirm the absolute URL is present in `sitemap.xml`.
7. **No Fake Proof:** Execute a final scan for forbidden claims (fake testimonials, ratings, unsupported guarantees).

## Output requirements
- A final pass/fail QA report.

## SEO safety rules
- Do not pass a page that contains any fake proof or violates safety guidelines.
- Do not pass a page with broken internal links or duplicate metadata.

## QA checklist
- [ ] Metadata unique?
- [ ] Exactly one H1?
- [ ] FAQs present?
- [ ] Schema valid and truthful?
- [ ] Links working?
- [ ] Sitemap updated?
- [ ] ZERO fake proof?

## Common mistakes to avoid
- Skimming the checks instead of actually verifying the code.
- Assuming another agent already did the QA properly.

## Final response format
A definitive statement confirming that all final SEO QA checks have passed, accompanied by the detailed checklist results.

# content-refresh-audit

## Purpose
To audit existing SEO pages for staleness, ensuring all copy, CTAs, FAQs, and metadata remain high-quality, unique, and aligned with current guidelines.

## When to use this skill
- When performing a routine site audit.
- When updating older content to match new `JULES.md` rules.
- When an agent is asked to "refresh" a specific page or cluster.

## When not to use this skill
- When building a brand new page from scratch.

## Inputs SEO should collect
- The target page(s) to audit.
- Current metadata and CTA metrics (if available).

## Files and folders this skill may touch
- Any HTML file in `pages/` or the root directory.

## Source-of-truth files to read first
- `JULES.md`
- `jules.qa.md`
- `tools/jules/jules-seo-rules.md`

## Process
1. Read the target HTML file.
2. Check for stale, fluffy, or banned copy (e.g., "revolutionize", "unlock your potential"). Replace with approved, operator-friendly phrases.
3. Check the CTA: Ensure it uses the primary URL and has strong, direct language.
4. Check for missing or weak FAQs; draft and add them if needed.
5. Check metadata (title, description) against other site pages to ensure it is unique.
6. Verify internal links still work and point to relevant, active pages.

## Output requirements
- A set of recommended updates or direct edits to the target HTML file.

## SEO safety rules
- Do not blindly overwrite content without ensuring the new copy meets the anti-hype voice guidelines.
- Do not remove the sensitive workflow disclaimer if the page covers a sensitive topic.

## QA checklist
- [ ] Is banned copy removed?
- [ ] Is the CTA strong and accurate?
- [ ] Are there 4-6 FAQs present?
- [ ] Is the metadata unique?

## Common mistakes to avoid
- Over-optimizing an already good page and ruining its natural tone.
- Forgetting to check metadata uniqueness across the cluster.

## Final response format
A summary of the changes made during the content refresh audit, grouped by page.

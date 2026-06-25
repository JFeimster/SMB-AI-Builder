# Internal Linking & Sitemap Builder

## Purpose

Manage internal links, sitemap, robots.txt, and llms.txt to ensure crawler efficiency.

## When to use this skill

- When new pages are added to the site.
- For SEO audits.

## When not to use this skill

- When editing a single isolated page without structural impact.

## Inputs Codex should collect

- New URLs.
- Existing URL maps.

## Files and folders this skill may touch

- `sitemap.xml`
- `robots.txt`
- `pages/seo-support/llms.txt`
- Various HTML files for links

## Source-of-truth files to read first

- JULES.md
- jules.json
- qa-checklist.md
- style-guide.md
- tools/jules/file-map.json
- tools/jules/copy-rules.md
- tools/jules/seo-rules.md
- tools/jules/accessibility-checklist.md

## Process

1. Map out the SEO keyword and link cluster strategy.
2. Verify relative path accuracy across all modified pages.
3. Update `sitemap.xml` with absolute URLs pointing to the production domain.
4. Validate XML.
5. Update `robots.txt` and `llms.txt` as needed.
6. Apply production domain placeholder rules properly (`https://smb-ai-builder.vercel.app`).

## Output requirements

Updated sitemap, robots, llms files, and internal links.

## Safety and claims rules
- **No fake proof:** Do not invent fake testimonials, reviews, ratings, logos, case studies, user counts, revenue numbers, guarantees, compliance claims, partner relationships, certifications, benchmarks, integrations, or unsupported competitor claims.
- **Sensitive workflows:** For workflows involving customer-facing communication, money, finance, tax, accounting, legal, HR, medical, lending, underwriting, compliance, private data, or sensitive personal data, recommend:
  - Draft-only mode
  - Human approval before action
  - Limited permissions
  - Test data first
  - Audit logs
  - Escalation rules
  - Rollback plan
  - Qualified human review
- **Safety stance:** Include the exact disclaimer visibly near the relevant safety/CTA section when handling sensitive workflows:
  > This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- All canonical and sitemap URLs must use the absolute production domain.

## QA checklist

- [ ] Sitemap is valid XML.
- [ ] Absolute URLs used in sitemap.
- [ ] Internal relative paths verified.

## Common mistakes to avoid

- Using relative paths in sitemap.xml.
- Forgetting to update `llms.txt`.

## Final response format

Confirm updates to routing/SEO support files.

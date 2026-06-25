# keyword-map-builder

## Purpose
To build and maintain the SEO keyword map, grouping keywords, mapping URLs, planning page clusters, and defining the CTA strategy for the SMB AI Workflow & Agent Builder.

## When to use this skill
- When planning a new content cluster.
- When organizing target keywords.
- When updating the site's URL strategy or mapping new keywords to pages.

## When not to use this skill
- When writing the actual page content.
- When optimizing specific page metadata.

## Inputs SEO should collect
- Target topics or areas of expansion.
- Competitor gaps (if provided).
- Existing `pages/seo-support/seo-keyword-map.md`.

## Files and folders this skill may touch
- `pages/seo-support/seo-keyword-map.md`

## Source-of-truth files to read first
- `pages/seo-support/seo-keyword-map.md`
- `JULES.md`
- `jules.json`

## Process
1. Analyze the target topics.
2. Group keywords logically (e.g., Primary Commercial, Problem-Aware, Agency, Safety).
3. Map keywords to specific URLs or URL patterns (`pages/seo/`, `pages/seo/workflows/`, `pages/seo/comparisons/`).
4. Develop a cluster plan detailing how pages relate.
5. Define the CTA strategy for the mapped pages, ensuring alignment with the core product CTA.
6. Update the keyword map documentation.

## Output requirements
- A structured keyword map containing keyword groups, URL mapping, cluster plan, and CTA strategy.

## SEO safety rules
- Do not target keywords with fake claims or unsupported comparisons.
- Ensure all mapped keywords align with search intent and the operator-friendly voice.

## QA checklist
- [ ] Are keywords grouped logically?
- [ ] Is there a clear URL mapping for each keyword group?
- [ ] Is the cluster plan defined?
- [ ] Is the CTA strategy aligned with the primary product CTA?

## Common mistakes to avoid
- Keyword stuffing or creating thin doorway pages for keyword variations.
- Mapping keywords without considering user search intent.

## Final response format
A summary of the keyword map updates, including the new groups, URL mappings, cluster plan, and CTA strategy.

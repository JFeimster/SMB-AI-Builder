# comparison-seo-builder

## Purpose
To create balanced, objective comparison SEO pages that help users decide between different AI workflow strategies or Custom GPT implementations, framing the builder as a planning/readiness layer.

## When to use this skill
- When building pages that compare different approaches, tools, or concepts (e.g., Zapier vs. Custom GPTs).
- When executing a brief mapped to `pages/seo/comparisons/`.

## When not to use this skill
- When building general guides or workflow audit pages.

## Inputs SEO should collect
- The entities or strategies being compared.
- The approved page brief.

## Files and folders this skill may touch
- `pages/seo/comparisons/[filename].html`

## Source-of-truth files to read first
- `tools/jules/jules-seo-rules.md`
- `JULES.md`

## Process
1. Frame the page as a decision guide, not an attack piece.
2. Structure the content to be balanced.
3. Include specific sections: "Use this when..." and "Audit first when...".
4. Create a clear comparison table or card grid.
5. Position the SMB AI Builder as a planning/readiness layer *before* building with other tools.
6. Include 4-6 FAQs.
7. Include the CTA band.
8. Use plain semantic HTML.

## Output requirements
- A completed HTML file in `pages/seo/comparisons/` that is balanced and structured as a decision guide.

## SEO safety rules
- NEVER attack competitors (e.g., Zapier, Make).
- Do not invent benchmarks, direct integrations, or unsupported claims about what the SMB AI Builder can do compared to other tools.

## QA checklist
- [ ] Is the tone balanced and objective?
- [ ] Are the "Use this when..." and "Audit first when..." sections present?
- [ ] Is there a comparison table/grid?
- [ ] Are there 4-6 FAQs?
- [ ] Are there zero fake benchmarks or unsupported competitor claims?

## Common mistakes to avoid
- Writing heavily biased or aggressive copy against competitors.
- Implying the SMB AI Builder replaces execution tools rather than planning for them.

## Final response format
A confirmation that the comparison page is complete, noting the file path and verifying that no competitors were attacked.

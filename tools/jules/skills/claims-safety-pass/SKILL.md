# claims-safety-pass

## Purpose
Review fake proof and unsafe claims.

## When to use this skill
- Prior to finalizing any public-facing content (pages, tools, docs, embeds).

## When not to use this skill
- When strictly evaluating code logic or CSS styles.

## Inputs Jules should collect
- The drafted content block or HTML page.

## Files and folders this skill may touch
- Any file containing user-facing copy (HTML, Markdown, prompts).

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Read the provided content.
2. Scan for any invented testimonials, reviews, or case studies and remove them.
3. Check for implicit or explicit performance or revenue guarantees and rewrite them to reflect planning/auditing.
4. If the page discusses sensitive workflows (finance, HR, legal, compliance, etc.), verify the sensitive workflow disclaimer is prominently included.
5. Remove any unsupported partner claims or integrations.

## Output requirements
- A sanitized version of the content that fully complies with all project safety boundaries.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] No invented testimonials.
- [ ] No guarantees of outcomes.
- [ ] Sensitive workflow disclaimer present if required.
- [ ] No fake partnerships or integrations.

## Common mistakes to avoid
- Leaving in placeholder testimonials (e.g., "John Doe says...") from generic templates.
- Forgetting the disclaimer on pages dealing with HR or finance.

## Final response format
Output the sanitized text and list any specific dangerous claims or fake proofs that were removed.

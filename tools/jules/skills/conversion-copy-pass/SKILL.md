# conversion-copy-pass

## Purpose
Improve conversion copy.

## When to use this skill
- When rewriting pages for better performance, clarity, and action orientation.
- When cleaning up first drafts of generated content.

## When not to use this skill
- When conducting an accessibility pass or modifying layout logic.

## Inputs Jules should collect
- Existing copy.
- Target audience (e.g., SMB owners, freelancers).
- Goal of the page.

## Files and folders this skill may touch
- Any HTML file in `pages/`

## Source-of-truth files to read first
- JULES.md
- jules.json
- jules.qa.md
- jules.style.md
- tools/jules/*

## Process
1. Analyze existing copy against the `copy-rules.md`.
2. Remove generic AI/SaaS fluff and banned phrases.
3. Strengthen operator-friendly language. Make it direct and practical.
4. Ensure the safety stance is preserved, particularly for sensitive workflows.
5. Clarify the CTA and ensure it uses approved action-oriented language.

## Output requirements
- Refined, high-converting copy formatted in HTML or Markdown.

## Safety and claims rules
- This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
- Do not invent fake testimonials, fake reviews, fake ratings, fake logos, fake case studies, fake user counts, fake revenue numbers, fake guarantees, fake compliance claims, fake partner relationships, fake integrations, or unsupported competitor claims.

## QA checklist
- [ ] No generic fluff.
- [ ] Language is operator-friendly.
- [ ] Safety stance preserved.
- [ ] CTA is strong and accurate.
- [ ] No fake proof added.

## Common mistakes to avoid
- Over-promising automation outcomes.
- Using phrases like "effortless automation" or "seamless".

## Final response format
Provide the revised copy block and summarize the major changes made to improve clarity and tone.

# faq-builder

## Purpose
To create practical, highly useful FAQ sections for SEO pages that address real operator questions without fluff or fake claims.

## When to use this skill
- When drafting a new SEO page or workflow audit page.
- When performing a content refresh to add missing FAQs.

## When not to use this skill
- When building metadata or JSON-LD schema (schema should be built *after* the FAQs are finalized).

## Inputs SEO should collect
- The page's target keyword and primary search intent.
- The target audience for the page.

## Files and folders this skill may touch
- Any HTML file in `pages/` where FAQs are needed.

## Source-of-truth files to read first
- `tools/jules/jules-seo-rules.md`
- `JULES.md`
- `jules.json`

## Process
1. Identify 4-6 common, practical questions related to the page's topic.
2. Draft clear, concise answers to each question.
3. Use the operator-friendly, direct, anti-hype voice.
4. Ensure answers do not contain fake claims, guarantees, or unsupported capabilities.
5. Format the FAQs using semantic HTML (e.g., using `<details>` and `<summary>` or clear heading structures).
6. Insert the FAQ section into the target page before the CTA band.

## Output requirements
- A formatted HTML section containing 4-6 practical FAQs inserted into the target page.

## SEO safety rules
- Do not invent fake reviews or testimonials masquerading as FAQs.
- Do not make fake compliance, legal, or financial claims in the answers.

## QA checklist
- [ ] Are there 4-6 FAQs?
- [ ] Are the questions practical and relevant to the page topic?
- [ ] Is the tone direct and operator-friendly?
- [ ] Are there zero fake claims or guarantees in the answers?

## Common mistakes to avoid
- Writing generic, fluffy FAQs that don't answer real business problems.
- Burying the FAQ section at the very bottom below the footer.

## Final response format
A confirmation that the FAQs have been built and added to the page, including a list of the drafted questions.

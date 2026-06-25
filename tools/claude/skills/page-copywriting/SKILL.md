# Page Copywriting

## Purpose
Write product/site page copy with CTA clarity and anti-hype tone.

## When to use this skill
Use when creating new landing pages, site pages, or product descriptions.

## When not to use this skill
Do not use for technical documentation or internal SOPs.

## Inputs Claude should collect
- Target audience for the page.
- Core value proposition.
- Primary CTA.

## Files and folders this skill may touch
- `pages/site/`
- `pages/seo/`

## Source-of-truth files to read first
- `tools/jules/jules-copy-rules.md`
- `tools/jules/jules-seo-rules.md`
- `jules.json`

## Process
1. Determine the page structure (Headline, Value Prop, Details, CTA).
2. Draft copy using the approved direct, anti-hype voice.
3. Ensure CTA is prominent and uses approved language (e.g., 'Audit My First Workflow').
4. Incorporate safety disclaimers if sensitive workflows are mentioned.

## Output requirements
- Semantic HTML or clean Markdown.
- One H1 per page.
- Clear, actionable CTA.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Do not invent fake testimonials, fake reviews, or fake metrics.

## QA checklist
- Is there exactly one H1?
- Is the tone direct and free of hype?
- Is the CTA link correct (`https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`)?

## Common mistakes to avoid
- Using banned words like 'unlock your potential'.
- Burying the CTA.
- Inventing social proof.

## Final response format
HTML or Markdown file content ready to be saved.

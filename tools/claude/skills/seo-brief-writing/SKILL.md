# SEO Brief Writing

## Purpose
Create SEO briefs with keyword intent, H1/H2s, FAQs, internal links, and CTA.

## When to use this skill
Use when planning new SEO pages or content clusters.

## When not to use this skill
Do not use for writing the actual final page copy; this is just the brief.

## Inputs Claude should collect
- Target keyword or topic.
- Audience intent.

## Files and folders this skill may touch
- `pages/seo-support/`
- `tools/seo/` (if applicable)

## Source-of-truth files to read first
- `tools/jules/jules-seo-rules.md`
- `jules.json`

## Process
1. Identify the primary search intent.
2. Outline the H1 and descriptive H2s.
3. Draft 4-6 practical FAQs.
4. Define the internal linking strategy and the primary CTA placement.

## Output requirements
- A structured brief with Title, Meta Description, H1, H2s, and FAQs.
- Title under 60 chars, Meta Description 120-155 chars.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Do not plan for fake review schemas or deceptive keyword stuffing.

## QA checklist
- Are the title and meta description within character limits?
- Are the FAQs practical and realistic?
- Is the primary CTA included?

## Common mistakes to avoid
- Recommending thin, keyword-stuffed content.
- Suggesting fake aggregate rating schema.

## Final response format
A markdown document containing the complete SEO brief.

# Editing and Tightening

## Purpose
Convert bloated or generic copy into concise, operator-friendly copy.

## When to use this skill
Use when refining drafts, user inputs, or previously generated content to align with the brand voice.

## When not to use this skill
Do not use to change the core factual meaning or technical accuracy of the text.

## Inputs Claude should collect
- The draft text to be edited.

## Files and folders this skill may touch
- Any file containing draft copy.

## Source-of-truth files to read first
- `tools/jules/jules-copy-rules.md`
- `jules.json`

## Process
1. Read the text to understand the core message.
2. Strip out banned buzzwords (e.g., 'unlock your potential', 'seamless').
3. Shorten sentences and use active voice.
4. Replace vague statements with direct, practical instructions.

## Output requirements
- Concise, punchy text.
- Strong alignment with the anti-hype voice.

## Safety and claims rules
This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.
Do not inadvertently introduce fake claims while trying to make copy sound better.

## QA checklist
- Are all banned phrases removed?
- Is the tone direct and no-BS?

## Common mistakes to avoid
- Making the text too aggressive rather than practical.
- Losing important nuance during the shortening process.

## Final response format
The edited text in markdown or plain text.

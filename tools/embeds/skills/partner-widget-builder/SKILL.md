# partner-widget-builder

## Purpose
Build or edit the full partner widget.

## When to use this skill
- When creating or modifying `embeds/partner-widget.html`, `css`, or `js`.

## When not to use this skill
- When building small/compact iframe embeds.

## Inputs Jules should collect
- Desired widget copy or partner context.

## Files and folders this skill may touch
- `embeds/partner-widget.html`
- `embeds/partner-widget.css`
- `embeds/partner-widget.js`

## Source-of-truth files to read first
Usually include:
- JULES.md
- jules.json
- jules.style.md
- jules.qa.md
- tools/jules/jules-copy-rules.md
- embeds/EMBED-README.md when present
- embeds/partner-config.js when present
- embeds/partners.json when present

## Process
1. Review design constraints.
2. Implement widget HTML structure.
3. Apply neobrutalist CSS styling.
4. Add interactivity with JS.
5. Ensure all required sections are present.

## Output requirements
- Fully functional partner widget files.
Requirements:
- Max full embed size: 940px wide by 1200px tall.
- Include mini hero.
- Include readiness self-check.
- Include workflow type selector if practical.
- Include score preview.
- Include “What the full GPT gives you.”
- Include primary CTA.
- Include secondary CTA.
- Include partner attribution.
- Include disclaimer.
- Do not duplicate the full landing page.

## Safety and partner-claims rules
Do not invent or imply:
- Fake partner relationships
- Fake affiliate relationships
- Fake endorsements
- Fake testimonials
- Fake reviews
- Fake ratings
- Fake revenue numbers
- Fake conversion rates
- Fake compliance claims
- Fake guarantees
- Fake integrations
- Official platform approval unless explicitly documented

Include embed safety disclaimer: For planning support only. Sensitive business decisions need qualified human review. This is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice.

## Accessibility and responsive rules
- Use the project’s neobrutalist + futurist fintech + cyberpunk style (Ink black, Off-white cards, Acid lime, Cyber pink, Electric cyan, Signal orange, Violet accents, Thick borders, Hard offset shadows, Monospace labels, Compact dashboard panels, Readiness scorecard motifs, High contrast).
- Ensure keyboard navigation, visible focus states, button/link labels, sufficient contrast, correct heading order, and reduced motion constraints.
- Comply with responsive limits: Max full embed size 940px wide by 1200px tall. Compact size constraints applied correctly.

## QA checklist
- [ ] Required source files read?
- [ ] Requirements for this specific embed skill met?
- [ ] Partner-claims rules followed?
- [ ] Accessibility and responsive rules verified?
- [ ] Disclaimer language included appropriately?

## Common mistakes to avoid
- Duplicating the full landing page content in the embed.
- Introducing external frameworks (use standalone HTML/CSS/JS).
- Failing to bounds-check embed sizing.
- Missing explicit safety disclaimers.
- Introducing open redirects via referral parameter handling.

## Final response format
Return a concise summary with:
1. Files created or updated.
2. Any existing files that were expanded.
3. Any assumptions made.
4. Any files that could not be created or verified.
5. Confirmation that the expanded Embeds skills library now exists under `tools/embeds/skills/`.

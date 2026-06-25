# embeds-orientation

## Purpose
Teach Jules how to understand the embed system before editing.

## When to use this skill
- When beginning work on the embed system.
- When needing to understand the architecture of existing embeds.

## When not to use this skill
- When actively writing CSS or HTML for a specific embed layout.

## Inputs Jules should collect
- None explicitly required beyond standard read permissions.

## Files and folders this skill may touch
- Reads `embeds/` directory contents.

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
1. Inspect existing `embeds/` files.
2. Detect whether iframe, script loader, partner config, partners JSON, or demo page exists.
3. Ensure default/demo partner data clearly labeled as example only.
4. Keep embeds static-compatible unless instructed otherwise.

## Output requirements
- A clear understanding of the embed system state.
Include:
- Inspect existing `embeds/` files.
- Detect whether iframe, script loader, partner config, partners JSON, or demo page exists.
- Do not create fake partner IDs as real partners.
- Use default/demo partner data clearly labeled as example only.
- Keep embeds static-compatible unless instructed otherwise.

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

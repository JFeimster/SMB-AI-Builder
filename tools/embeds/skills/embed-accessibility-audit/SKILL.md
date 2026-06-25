# embed-accessibility-audit

## Purpose
Run accessibility checks for embeds.

## When to use this skill
- When validating embed components before release.

## When not to use this skill
- During early structural drafting.

## Inputs Jules should collect
- Finished embed HTML/CSS/JS.

## Files and folders this skill may touch
- Analyzes all files in `embeds/`.

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
1. Check keyboard navigation and focus states.
2. Verify color contrast and text sizes.
3. Confirm iframe title and heading hierarchy.

## Output requirements
- Accessibility compliance validation.
Include:
- Keyboard navigation.
- Visible focus states.
- Button/link labels.
- Contrast.
- iframe title.
- Heading order.
- Reduced motion.
- No tiny unreadable text.

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

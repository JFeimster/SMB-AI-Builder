# Prompt: Create Embed Files

## Purpose
Create the partner and affiliate embed package for SMB AI Workflow & Agent Builder.

## Source-of-Truth Requirement
Before starting, read these root files if they exist:

- `JULES.md`
- `jules.json`
- `jules.tasks.md`
- `jules.qa.md`
- `jules.style.md`

Use `JULES.md` as the human-readable source of truth. Use `jules.json` as the machine-readable source of truth.

## Project Context
- **Project:** SMB AI Workflow & Agent Builder
- **Product description:** SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans.
- **Primary CTA URL:** https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
- **Notion resource:** https://feimster.notion.site/smb-ai-builder
- **GitHub resource:** https://github.com/JFeimster/SMB-AI-Builder
- **Core positioning:** Stop automating broken workflows. Audit the mess first. Score readiness. Pick the safest pilot. Build an AI agent plan your business can survive.

## Target Files
Create or update only these files:

- `embeds/partner-widget.html`
- `embeds/partner-widget.css`
- `embeds/partner-widget.js`
- `embeds/iframe.html`
- `embeds/iframe-compact.html`
- `embeds/affiliate-card.html`
- `embeds/embed-loader.js`
- `embeds/partner-config.js`
- `embeds/partners.json`
- `embeds/EMBED-README.md`
- `embeds/demo-partner-page.html`

Do not create core site pages, SEO pages, comparison pages, workflow pages, OpenAPI docs, or tool docs in this task.

## Size and Layout Rules
- Full embed max width: `940px`.
- Full embed max height: `1200px`.
- Compact embed should have smaller sidebar/card guidance and should not duplicate the full widget.
- Embeds must be responsive and avoid horizontal overflow.
- Embeds must fit cleanly in iframe containers.
- Use `box-sizing: border-box`.

## File Path Rules
- Files inside `embeds/` should use paths relative to the `embeds/` folder.
- `partner-widget.html`, `iframe.html`, `iframe-compact.html`, `affiliate-card.html`, and `demo-partner-page.html` should load embed-specific CSS/JS from the same `embeds/` folder.
- Do not depend on root `styles.css` unless explicitly required by the repo; the embed package should be portable.
- `partner-widget.css` must scope styles to the embed wrapper and avoid leaking styles globally.
- `partner-widget.js`, `partner-config.js`, and `embed-loader.js` must be vanilla JS with no external dependencies.
- README snippets must show where to replace `YOURDOMAIN.com`.

## Required Full Embed Wireframe
The full embed should include:

1. Header badge: `Partner workflow readiness tool`
2. Mini hero headline: `Score the workflow before you let AI touch it.`
3. Mini hero subhead explaining the three-question readiness direction
4. 3-question readiness picker:
   - Is the workflow documented?
   - Is the data reliable?
   - Is there a human review point?
5. Answer options:
   - Yes
   - Sort of
   - No
6. Result preview with recommendation states:
   - Automate now
   - Clean up first
   - Keep human
   - Revisit later
   - Optional internal/display state: Pilot carefully
7. What the full GPT gives you:
   - Process audit
   - Readiness score
   - Opportunity ranking
   - Agent blueprint
   - Pilot plan
8. Primary CTA: `Launch GPT + Audit This Workflow`
9. Secondary CTA: `View Builder Resource`
10. Partner attribution: `Shared by [Partner Name]`
11. Disclaimer

## Scoring Logic Guidance
Use this simple scoring model unless `jules.json` or a later task overrides it:

- Yes = 2 points
- Sort of = 1 point
- No = 0 points

Suggested recommendation mapping:

- 0-1: Keep human
- 2-3: Clean up first
- 4-5: Pilot carefully
- 6: Automate now

Include `Revisit later` somewhere in the recommendation language or empty/starting state so the required label is represented.

## Partner Attribution and Referral Rules
- Read partner name from query param `partner` where applicable.
- Support partner data attributes for script embeds.
- Use fallback defaults from `partner-config.js`.
- Append safe referral/UTM parameters to CTA URLs when a partner is present.
- Treat partner IDs as attribution/tracking helpers, not secure access control.
- Do not imply official partner relationships unless explicitly configured in `partners.json`.

Suggested tracking params:

- `utm_source=partner`
- `utm_medium=embed`
- `utm_campaign=smb_ai_builder`
- `utm_content=[partner-id]`
- `ref=[partner-id]`

## Embed Examples Required
Include iframe and script examples in `EMBED-README.md` and `demo-partner-page.html`.

Full iframe example:

```html
<iframe
  src="https://YOURDOMAIN.com/embeds/iframe.html?partner=your-partner-id"
  width="940"
  height="1200"
  style="border:0; max-width:100%;"
  title="SMB AI Workflow & Agent Builder">
</iframe>
```

Compact iframe example:

```html
<iframe
  src="https://YOURDOMAIN.com/embeds/iframe-compact.html?partner=your-partner-id"
  width="420"
  height="680"
  style="border:0; max-width:100%;"
  title="SMB AI Workflow Readiness Check">
</iframe>
```

Script embed example:

```html
<div
  id="smb-ai-builder-widget"
  data-partner="your-partner-id"
  data-size="full">
</div>

<script src="https://YOURDOMAIN.com/embeds/embed-loader.js" defer></script>
```

## Safety Disclaimer Rules
Include this disclaimer where relevant in the widget, iframe UI, affiliate card, README, or demo page:

> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

Also use compact disclaimer language where space is tight:

> For planning support only. Sensitive business decisions need qualified human review.

## Style Rules
Use neobrutalist, futurist fintech, cyberpunk-inspired design patterns from `jules.style.md`: ink black, off-white cards, acid lime, cyber pink, electric cyan, signal orange, violet accents, thick borders, hard shadows, dashboard panels, scorecard motifs, terminal snippets, high contrast, and loud but readable CTA buttons.

## Copy Rules
Tone: direct, no-BS, operator-friendly, anti-hype, practical, safety-aware, clear, concise.

Use approved language where natural:

- Stop automating broken workflows.
- Audit the mess before you wire it into your business.
- Score the workflow before AI touches it.
- Know what to automate, what to clean up, and what should stay human.
- Build a pilot plan your business can actually survive.
- Plan the workflow before choosing the tool.

Avoid banned language:

- unlock your potential
- revolutionize your workflow
- seamless experience
- game-changing
- cutting-edge
- transform your business
- leverage AI
- AI-powered magic
- effortless automation
- fully autonomous business

## No-Fake-Proof Rules
Do not invent or imply:

- Fake partner access claims
- Fake affiliate claims
- Fake official partner relationships
- Fake testimonials
- Fake reviews
- Fake ratings
- Fake logos
- Fake case studies
- Fake user counts
- Fake revenue numbers
- Fake guarantees
- Fake compliance claims
- Fake certifications
- Fake benchmarks
- Fake integrations

## Accessibility Requirements
- Buttons must be keyboard accessible.
- Use semantic HTML.
- Use `aria-live` for result updates.
- Use descriptive iframe titles in examples.
- Ensure focus states are visible.
- Ensure contrast is strong.
- Avoid motion-dependent content.
- Respect reduced motion preferences.

## Final QA Checklist
Before completing, verify:

- [ ] `JULES.md` and `jules.json` were read.
- [ ] Only the listed `embeds/` files were created or updated.
- [ ] Full embed max width is `940px`.
- [ ] Full embed max height is `1200px`.
- [ ] Compact embed is smaller and not a duplicate of the full embed.
- [ ] Embed CSS is scoped and portable.
- [ ] JS uses no external libraries.
- [ ] Partner attribution works with `?partner=agency-partner`.
- [ ] CTA URLs use the correct GPT URL.
- [ ] Notion CTA uses the correct Notion resource URL.
- [ ] README includes full iframe, compact iframe, affiliate/card, and script embed examples.
- [ ] README explains UTM/ref behavior and static access-control limitations.
- [ ] No fake partner, affiliate, access, proof, guarantee, or compliance claims were added.
- [ ] Safety disclaimers are included where relevant.
- [ ] Embeds are responsive and keyboard-accessible.
- [ ] Final response summarizes files created, assumptions, and anything that could not be verified.

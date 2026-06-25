You are working inside the `smb-ai-builder` repo.

Create a separate limited Partner / Affiliate Embedded Version package for SMB AI Workflow & Agent Builder.

Create these files inside:

embeds/
├── partner-widget.html
├── partner-widget.css
├── partner-widget.js
├── iframe.html
├── iframe-compact.html
├── affiliate-card.html
├── embed-loader.js
├── partner-config.js
├── partners.json
├── EMBED-README.md
└── demo-partner-page.html

Product:
SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit messy workflows, score automation readiness, identify automation opportunities, design safer AI-powered workflows, and build practical AI agent pilot plans before buying tools, hiring developers, or automating broken processes.

Primary CTA URL:
https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

Notion / Builder Resource URL:
https://feimster.notion.site/smb-ai-builder

GitHub Resource URL:
https://github.com/JFeimster/SMB-AI-Builder

Core message:
Score the workflow before you let AI touch it.

Partner embed purpose:
Create a compact, branded mini-tool preview that partners and affiliates can embed in:
- Blog posts
- Directories
- Affiliate pages
- Notion docs
- Resource hubs
- Client portals
- Course dashboards
- Agency client portals

This is a limited embed package, separate from the main site. It should not duplicate the whole landing page.

Hard layout constraints:
- Full embed max width: 940px
- Full embed max height: 1200px
- Compact embed should work between 360px and 520px wide
- Compact embed should work between 540px and 720px tall
- All embeds must be responsive
- All embeds must avoid horizontal overflow
- All embeds must fit cleanly inside iframe containers
- Use `box-sizing: border-box`

Design style:
Use the existing neobrutalist + futurist fintech + cyberpunk style from the main landing page.

Visual language:
- Ink black background
- Off-white cards
- Acid lime, cyber pink, electric cyan, signal orange, violet accents
- Thick black borders
- Hard offset shadows
- Oversized type
- Monospace labels
- Scorecard / cockpit motifs
- Dashboard panels
- Terminal-style snippets
- Loud but readable CTA buttons
- High contrast
- Mobile-friendly stacked layout

Tone:
Direct, practical, operator-friendly, anti-hype, trust-building.

Avoid these phrases:
- unlock your potential
- revolutionize your workflow
- seamless experience
- cutting-edge
- game-changing
- transform your business
- leverage AI

Use copy like:
- Stop automating broken workflows.
- Score the workflow before AI touches it.
- Audit the mess first.
- Know what to automate, what to clean up, and what should stay human.
- Build a pilot plan your business can survive.

Important trust rules:
Do not invent:
- Testimonials
- Logos
- Partner claims
- Affiliate payouts
- Revenue results
- User counts
- Guarantees
- Compliance claims
- Ratings
- Reviews
- Case studies

Access-control note:
This is a static embed package. Do not imply secure partner-only access unless a hosting or backend layer is added. Frame partner IDs as attribution and tracking helpers, not real security.

Required partner embed wireframe:
The full embed should include:

1. Header badge
Text:
Partner workflow readiness tool

2. Mini hero
Headline:
Score the workflow before you let AI touch it.

Subhead:
Answer three quick questions, get a readiness direction, then launch the GPT to audit the workflow and build a safer pilot plan.

3. 3-question readiness picker
Questions:
- Is the workflow documented?
- Is the data reliable?
- Is there a human review point?

Answer options should be simple:
- Yes
- Sort of
- No

4. Result preview
Show one of these recommendation labels based on answers:
- Automate now
- Clean up first
- Keep human
- Revisit later

Scoring logic suggestion:
- Yes = 2 points
- Sort of = 1 point
- No = 0 points

Total:
- 0–1: Keep human
- 2–3: Clean up first
- 4–5: Pilot carefully
- 6: Automate now

Use `Pilot carefully` as an additional internal display state if useful, but make sure the four required labels appear somewhere:
- Automate now
- Clean up first
- Keep human
- Revisit later

5. What the full GPT gives you
Include:
- Process audit
- Readiness score
- Opportunity ranking
- Agent blueprint
- Pilot plan

6. Primary CTA
Text:
Launch GPT + Audit This Workflow

URL:
Primary CTA URL above

7. Secondary CTA
Text:
View Builder Resource

URL:
Notion resource URL above

8. Partner attribution
Text:
Shared by [Partner Name]

This should dynamically update based on:
- query param `partner`
- data attribute from script embed
- default fallback from partner-config.js

9. Disclaimer
Text:
For planning support only. Sensitive business decisions need qualified human review.

Also include where relevant:
This is not legal, financial, tax, HR, lending, accounting, or compliance advice.

File-specific requirements:

1. embeds/partner-widget.html
Create the full standalone widget page.
- Uses `partner-widget.css`
- Uses `partner-widget.js`
- Max width 940px
- Max height 1200px
- Contains full mini-tool flow
- Reads partner name from URL query string `?partner=partner-id`
- Uses partner config when available
- Primary CTA appends UTM/ref parameters
- Secondary CTA appends partner/ref parameters when possible
- Should work if opened directly in browser or embedded in iframe

2. embeds/partner-widget.css
Create scoped CSS for the embed package.
- Do not depend on root `styles.css`
- Do not leak styles globally beyond the embed wrapper
- Use CSS variables
- Use mobile-first styling
- Use high contrast
- Include focus-visible states
- Include reduced motion media query
- Include max-width and max-height constraints
- Include compact size utility classes
- Include styles for:
  - widget shell
  - badges
  - hero
  - question cards
  - answer buttons
  - result panel
  - recommendation labels
  - CTA buttons
  - partner attribution
  - disclaimer
  - affiliate card
  - compact iframe layout
  - demo page layout

3. embeds/partner-widget.js
Create vanilla JS for:
- 3-question readiness picker
- Score calculation
- Recommendation state updates
- CTA UTM/ref appending
- Partner attribution rendering
- URL query param parsing
- Local fallback config if partner-config.js is unavailable
- Keyboard-friendly answer buttons
- Safe default state

Do not use external libraries.

4. embeds/iframe.html
Create iframe-safe full embed page.
- Should load `partner-widget.css`
- Should load `partner-config.js`
- Should load `partner-widget.js`
- Should include the full widget markup
- Should be embeddable with:

<iframe
  src="https://YOURDOMAIN.com/embeds/iframe.html?partner=your-partner-id"
  width="940"
  height="1200"
  style="border:0; max-width:100%;"
  title="SMB AI Workflow & Agent Builder">
</iframe>

- Add comments where the production domain should be replaced.

5. embeds/iframe-compact.html
Create compact iframe version.
- Recommended width: 420px
- Recommended height: 680px
- Should include:
  - Badge
  - Short headline
  - 3 mini bullets
  - Mini readiness status
  - Primary CTA
  - Partner attribution
  - Disclaimer
- Should not include the full long widget.
- Should use the same CSS and JS where reasonable.
- Should be embeddable with:

<iframe
  src="https://YOURDOMAIN.com/embeds/iframe-compact.html?partner=your-partner-id"
  width="420"
  height="680"
  style="border:0; max-width:100%;"
  title="SMB AI Workflow Readiness Check">
</iframe>

6. embeds/affiliate-card.html
Create a very small shareable affiliate/resource card.
- Should work as a standalone HTML snippet/page.
- Include:
  - Badge: Workflow readiness tool
  - Headline: Stop automating broken workflows.
  - Short body: Audit one SMB process and build a safer AI agent pilot plan.
  - CTA: Launch Workflow Audit
  - Secondary small link: View Builder Resource
  - Partner attribution
  - Disclaimer
- Should be usable inside partner resource pages.

7. embeds/embed-loader.js
Create a script-based embed loader.
It should support this partner snippet:

<div
  id="smb-ai-builder-widget"
  data-partner="your-partner-id"
  data-size="full">
</div>

<script src="https://YOURDOMAIN.com/embeds/embed-loader.js" defer></script>

Behavior:
- Find containers with id `smb-ai-builder-widget` or class `.smb-ai-builder-widget`
- Read:
  - data-partner
  - data-size: full | compact | card
  - data-theme: neon | light | dark, with neon default
- Inject an iframe by default
- Choose iframe source:
  - full → /embeds/iframe.html
  - compact → /embeds/iframe-compact.html
  - card → /embeds/affiliate-card.html
- Append `partner`, `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` parameters
- Set iframe title
- Set responsive width
- Respect max dimensions
- Avoid duplicate injection if script runs twice
- Include comments showing where to replace YOURDOMAIN.com

8. embeds/partner-config.js
Create a global partner config file.

It should expose:

window.SMB_AI_BUILDER_PARTNERS = {
  default: {
    name: "SMB AI Builder",
    referral: "direct",
    ctaLabel: "Launch GPT + Audit This Workflow"
  },
  agencyPartner: {
    name: "Agency Partner",
    referral: "agency-partner",
    ctaLabel: "Audit a Client Workflow"
  },
  consultantPartner: {
    name: "Consultant Partner",
    referral: "consultant-partner",
    ctaLabel: "Map a Client Workflow"
  },
  builderPartner: {
    name: "Automation Builder Partner",
    referral: "automation-builder-partner",
    ctaLabel: "Run Pre-Build Discovery"
  }
};

Do not include real partner claims unless provided.

9. embeds/partners.json
Create a static partner config data file.

Include:
{
  "default": {
    "name": "SMB AI Builder",
    "ref": "direct",
    "allowed": true
  },
  "agency-partner": {
    "name": "Agency Partner",
    "ref": "agency-partner",
    "allowed": true
  },
  "consultant-partner": {
    "name": "Consultant Partner",
    "ref": "consultant-partner",
    "allowed": true
  },
  "automation-builder-partner": {
    "name": "Automation Builder Partner",
    "ref": "automation-builder-partner",
    "allowed": true
  }
}

Add a note in EMBED-README.md that this JSON is configuration only, not secure access control.

10. embeds/EMBED-README.md
Create partner embed documentation.

Include:
- Overview
- Full iframe embed snippet
- Compact iframe embed snippet
- Affiliate card iframe snippet
- Script embed snippet
- Partner ID instructions
- Recommended dimensions
- UTM/ref behavior
- Where to replace YOURDOMAIN.com
- Safety disclaimer requirements
- Notes for Wix, Webflow, Framer, Carrd, Notion, WordPress, and custom HTML
- Static access-control warning
- QA checklist

Include these snippets:

Full iframe:

<iframe
  src="https://YOURDOMAIN.com/embeds/iframe.html?partner=your-partner-id"
  width="940"
  height="1200"
  style="border:0; max-width:100%;"
  title="SMB AI Workflow & Agent Builder">
</iframe>

Compact iframe:

<iframe
  src="https://YOURDOMAIN.com/embeds/iframe-compact.html?partner=your-partner-id"
  width="420"
  height="680"
  style="border:0; max-width:100%;"
  title="SMB AI Workflow Readiness Check">
</iframe>

Script embed:

<div
  id="smb-ai-builder-widget"
  data-partner="your-partner-id"
  data-size="full">
</div>

<script src="https://YOURDOMAIN.com/embeds/embed-loader.js" defer></script>

11. embeds/demo-partner-page.html
Create a demo page that shows:
- Full iframe demo
- Compact iframe demo
- Affiliate card demo
- Script embed demo
- Partner attribution demo
- Notes for testing partner query params
- Link to EMBED-README.md
- Link to primary GPT URL
- Link to Notion resource

The demo page can use `partner-widget.css`.

Content requirements for the full embed:
Header badge:
Partner workflow readiness tool

Hero headline:
Score the workflow before you let AI touch it.

Hero subhead:
Answer three quick questions, get a readiness direction, then launch the GPT to audit the workflow and build a safer pilot plan.

Questions:
1. Is the workflow documented?
2. Is the data reliable?
3. Is there a human review point?

Full GPT output list:
- Process audit
- Readiness score
- Opportunity ranking
- Agent blueprint
- Pilot plan

Primary CTA:
Launch GPT + Audit This Workflow

Secondary CTA:
View Builder Resource

Partner attribution:
Shared by [Partner Name]

Disclaimer:
For planning support only. Sensitive business decisions need qualified human review.

Also include:
This is not legal, financial, tax, HR, lending, accounting, or compliance advice.

CTA tracking:
When a partner is present, append:
utm_source=partner
utm_medium=embed
utm_campaign=smb_ai_builder
utm_content=[partner-id]
ref=[partner-id]

Use safe URL handling.

Accessibility requirements:
- Buttons must be keyboard accessible
- Use semantic HTML
- Use `aria-live` for result updates
- Use descriptive iframe titles in examples
- Ensure focus states are visible
- Ensure contrast is strong
- Avoid motion-dependent content
- Respect reduced motion preferences

Responsive requirements:
- Full widget must work at 320px width and up
- Compact widget must work in narrow sidebars
- No horizontal scrolling
- CTA buttons stack on small screens
- Cards stack cleanly

Final QA:
- Confirm all 11 files exist in `embeds/`
- Confirm full embed max width is 940px
- Confirm full embed max height is 1200px
- Confirm compact embed is smaller and not a duplicate of the full embed
- Confirm partner attribution works with `?partner=agency-partner`
- Confirm CTA URLs use the correct GPT URL
- Confirm Notion CTA uses the correct Notion URL
- Confirm GitHub link appears in README or demo page
- Confirm no external dependencies are used
- Confirm no fake proof, fake partner claims, fake reviews, fake ratings, or unsupported claims are included
- Confirm `EMBED-README.md` explains that static partner config is not secure access control
- Confirm all files are plain static HTML/CSS/JS/JSON/Markdown

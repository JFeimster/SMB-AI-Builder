# Prompt: Create Embed Files

**Purpose:** Prompt for partner and affiliate embed files.

## Pre-requisites
Read `JULES.md` and `jules.json` as source-of-truth files before starting.

## Context
**Project:** SMB AI Workflow & Agent Builder
**Product Description:** SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans.
**Primary CTA URL:** https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder

## Target Files
Create or update the following files exactly as named:
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

## Technical & Sizing Rules
- **Full embed max size:** 940px wide by 1200px tall.
- **Compact embed:** Provide size guidance and styling for a compact version.
- Ensure static-site compatibility (no complex server-side logic required to render).
- Include examples of iframe embeds.
- Include examples of script embeds.

## Content & Partner Rules
- Follow partner attribution rules and referral parameter rules where applicable.
- Follow CTA URL rules (use the primary CTA URL as base, appending params as necessary).
- **No fake claims:** Do not invent or imply fake partner access claims, fake affiliate claims, or fake official partner relationships unless explicitly configured in `partners.json`.
- Tone: Direct, no-BS, operator-friendly, anti-hype, practical, safety-aware.

## Safety Disclaimer Rule
Where relevant (e.g., within the widget or iframe UI), include the following safety disclaimer:
> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## Final QA Checklist
- [ ] Have you read `JULES.md` and `jules.json`?
- [ ] Have all listed embed files been created?
- [ ] Is the full embed configured for a max size of 940px by 1200px?
- [ ] Is compact embed size guidance included?
- [ ] Are both iframe and script embed examples provided in the README or demo page?
- [ ] Are partner attribution, referral parameter, and CTA URL rules followed?
- [ ] Is the code compatible with static sites?
- [ ] Is the content free of fake partner/affiliate claims?
- [ ] Has the sensitive-workflow disclaimer been included where relevant?
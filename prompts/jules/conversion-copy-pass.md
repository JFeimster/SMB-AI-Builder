# Prompt: Conversion Copy Pass

## Purpose
Sharpen conversion copy for SMB AI Workflow & Agent Builder while preserving the product's direct, anti-hype, operator-friendly voice.

## Source-of-Truth Requirement
Before starting, read these root files if they exist:

- `JULES.md`
- `jules.json`
- `jules.qa.md`
- `jules.style.md`

Use `JULES.md` as the human-readable source of truth. Use `jules.json` as the machine-readable source of truth. Use `jules.style.md` as the copy/style guide.

## Project Context
- **Project:** SMB AI Workflow & Agent Builder
- **Product description:** SMB AI Workflow & Agent Builder helps small business owners, operators, freelancers, agencies, consultants, and automation builders audit workflows, score automation readiness, identify automation opportunities, design AI-powered workflows, and build safe AI agent pilot plans.
- **Primary CTA URL:** https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
- **Notion resource:** https://feimster.notion.site/smb-ai-builder
- **GitHub resource:** https://github.com/JFeimster/SMB-AI-Builder
- **Core positioning:** Stop automating broken workflows. Audit the mess first. Score readiness. Pick the safest pilot. Build an AI agent plan your business can survive.

## Task Instructions
Review the designated files and sharpen the copy. Make it clearer, more useful, more direct, and more credible. Do not add fake urgency, fake proof, vague AI promises, or unsupported claims.

## File Path Rules
- Preserve existing file locations.
- Preserve existing valid relative paths.
- When editing `pages/site/*.html`, CSS should link as `../../styles.css` and JS should link as `../../script.js` with `defer`.
- When editing `pages/seo/*.html`, CSS should link as `../../styles.css` and JS should link as `../../script.js` with `defer`.
- When editing `pages/seo/comparisons/*.html`, CSS should link as `../../../styles.css` and JS should link as `../../../script.js` with `defer`.
- When editing `pages/seo/workflows/*.html`, CSS should link as `../../../styles.css` and JS should link as `../../../script.js` with `defer`.
- When editing `embeds/*`, keep embed assets portable and relative to the `embeds/` folder unless the file intentionally loads root assets.
- Do not move files unless explicitly asked.

## Remove
Remove or replace:

- unlock your potential
- revolutionize
- revolutionize your workflow
- seamless
- seamless experience
- cutting-edge
- game-changing
- transform your business
- leverage AI
- AI-powered magic
- effortless automation
- fully autonomous business
- set it and forget it
- generic AI assistant language
- vague enterprise SaaS language
- fake urgency
- fake proof
- unsupported compliance language
- unsupported integration claims
- promises of automation outcomes

## Replace With
Use sharper operator-friendly language such as:

- Stop automating broken workflows.
- Audit the mess first.
- Score the workflow before AI touches it.
- Know what to automate, clean up, or keep human.
- Build a pilot plan your business can survive.
- Plan the workflow before choosing the tool.
- Use AI where it helps, keep people in the loop where it matters.

## Hero Clarity Checks
For each hero section, verify:

- The headline names the problem or outcome clearly.
- The subhead explains what the tool helps users do.
- The copy avoids hype and vague AI language.
- The page makes clear this is a planning/readiness/pilot-design layer.

## CTA Clarity Checks
For each CTA, verify:

- CTA text is direct and action-oriented.
- CTA links use the primary GPT URL when launching the GPT.
- CTA text does not promise a result, approval, automation outcome, revenue outcome, compliance outcome, or guaranteed savings.

Primary CTA URL:

`https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`

Approved CTA examples:

- Audit My First Workflow
- Score My Automation Readiness
- Build My AI Agent Pilot Plan
- Find What To Automate First
- Launch GPT + Audit This Workflow

## Safety Stance Checks
Copy should make clear:

- The product supports planning and pilot design.
- It is not a replacement for professional judgment.
- Sensitive decisions need qualified human review.
- Sensitive workflows should use draft-only mode, human approval, limited permissions, test data, audit logs, escalation rules, and rollback plans where relevant.

Use this disclaimer where relevant:

> This GPT supports workflow planning and pilot design. It is not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review.

## No-Fake-Proof Checks
Do not invent or imply:

- Fake testimonials
- Fake reviews
- Fake ratings
- Fake logos
- Fake case studies
- Fake user counts
- Fake revenue numbers
- Fake guarantees
- Fake compliance claims
- Fake partner relationships
- Fake certifications
- Fake benchmarks
- Fake integrations
- Unsupported competitor claims

## Anti-Hype Checks
Before completing, search for and remove banned phrases where they appear in generated/edited copy unless the phrase appears inside a banned-phrase list or QA rule.

## Final QA Checklist
Before completing, verify:

- [ ] `JULES.md`, `jules.json`, and `jules.style.md` were read.
- [ ] Existing file paths were preserved.
- [ ] Correct relative CSS/JS paths were preserved or fixed.
- [ ] Hero copy is clear and problem-focused.
- [ ] CTA copy is direct and action-oriented.
- [ ] Primary GPT CTA URL is correct.
- [ ] Safety stance is realistic and visible where relevant.
- [ ] Hype language was removed or replaced.
- [ ] Generic AI assistant copy was replaced with operator-friendly language.
- [ ] Vague enterprise SaaS language was removed.
- [ ] No fake urgency was added.
- [ ] No fake proof, guarantees, fake ratings, fake reviews, fake logos, fake integrations, or unsupported claims were added.
- [ ] Sensitive-workflow disclaimers were preserved or added where relevant.

## Final Summary Format
Return a concise report with:

1. **Files Reviewed**
2. **Key Copy Changes**
3. **Removed Hype Language**
4. **Safety/Claims Fixes**
5. **Files Updated**
6. **Unresolved Issues**

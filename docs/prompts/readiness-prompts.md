# Readiness Prompts

## Purpose
Assess how ready a business or workflow is for AI automation.

## When to use
Use before committing resources to build an automation to ensure prerequisites are met.

## Inputs needed
- Workflow complexity
- Tool stack info
- Team technical capability

## 0–30 readiness score
**Prompt:**
```text
Calculate an automation readiness score from 0-30 based on data structure, API availability, exception rate, and risk level.
```
**Expected output:** A score and a brief explanation of the band (e.g., Pilot carefully).
**Follow-up prompts:** What is the quickest way to improve this score?
**Safety notes:** Scoring is an estimate, not a guarantee of success.
**Human-review reminders:** Review the score against the business reality.
**Example use cases:** Initial vetting of multiple automation ideas.
**Final QA checklist:**
- [ ] Score is between 0-30
- [ ] Explanation provided

## Category-by-category scoring
**Prompt:**
```text
Break down the readiness score across 10 categories including data quality, tool APIs, standardization, and risk.
```
**Expected output:** A detailed scorecard.
**Follow-up prompts:** Which category is our weakest link?
**Safety notes:** Ensure risk is heavily weighted.
**Human-review reminders:** Verify subjective scores with team input.
**Example use cases:** Deep dive into process viability.
**Final QA checklist:**
- [ ] All 10 categories scored
- [ ] Clear definitions for each category

## Biggest blocker analysis
**Prompt:**
```text
Identify the single biggest blocker preventing this workflow from being automated today.
```
**Expected output:** A description of the primary obstacle.
**Follow-up prompts:** How much would it cost to fix this blocker?
**Safety notes:** None.
**Human-review reminders:** Discuss the blocker with technical staff.
**Example use cases:** Identifying that a legacy CRM lacks API access.
**Final QA checklist:**
- [ ] Blocker clearly identified
- [ ] Impact explained

## Readiness improvement plan
**Prompt:**
```text
Provide a step-by-step plan to improve the workflow's readiness score from its current state to a 'Ready for automation pilot' state.
```
**Expected output:** An actionable improvement plan.
**Follow-up prompts:** Who should own each of these steps?
**Safety notes:** Plan should prioritize data security and compliance.
**Human-review reminders:** Ensure the plan is feasible given resources.
**Example use cases:** Upgrading tools or cleaning up data before automating.
**Final QA checklist:**
- [ ] Actionable steps provided
- [ ] Realistic timeline suggested

## Pilot readiness review
**Prompt:**
```text
Review our proposed pilot plan. Are we ready to launch a limited test in a safe environment?
```
**Expected output:** A go/no-go recommendation for the pilot.
**Follow-up prompts:** What is our rollback plan if the pilot fails?
**Safety notes:** Ensure pilot data is not production-critical or PII-heavy.
**Human-review reminders:** Get management approval before pilot launch.
**Example use cases:** Final check before launching a Zapier draft.
**Final QA checklist:**
- [ ] Go/no-go clear
- [ ] Risks highlighted

## Human review readiness
**Prompt:**
```text
For this draft-first automation, outline the procedure for a human to review and approve the AI's output before it is finalized.
```
**Expected output:** A clear human-in-the-loop SOP.
**Follow-up prompts:** How long should this review take per item?
**Safety notes:** Crucial for sensitive communications or financial data.
**Human-review reminders:** Train the reviewer on what to look for.
**Example use cases:** Reviewing AI-drafted email replies.
**Final QA checklist:**
- [ ] SOP is clear
- [ ] Review criteria established

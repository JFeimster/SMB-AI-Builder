## Recommended Knowledge Files

Below is a recommended optional knowledge-file roadmap for SMB AI Workflow & Agent Builder. These files would extend the current uploaded gpt-builder-instructions-v1.md, which already defines the GPT’s purpose, operating style, output formats, readiness scoring, safety boundaries, and suggested knowledge sources.

| File name | Description | Prompt to create file | Additional recommendation |
| --- | --- | --- | --- |
| `smb-workflow-audit-playbook-v1.md` | A reusable guide for auditing SMB workflows step by step. | “Create a Markdown playbook for auditing small business workflows. Include discovery questions, workflow mapping steps, common bottlenecks, automation fit indicators, cleanup indicators, risk flags, and recommended next-step language.” | Make this the GPT’s main reference for process audits. 
| `automation-readiness-scorecard-v1.json` | Structured readiness scoring model using the 0–3 scale. | “Create a JSON schema for an automation readiness scorecard with categories for workflow clarity, process consistency, data quality, tool access, ownership, risk level, human review, customer experience, measurement, and rollback. Include scoring descriptions and readiness bands.” | Useful if you later want consistent machine-readable scoring. |
| `automation-opportunity-matrix-v1.md` | A prioritization matrix for deciding what to automate first. | “Create a Markdown framework for ranking SMB automation opportunities by frequency, time saved, revenue impact, customer experience impact, risk, data readiness, tool readiness, and human review needs.” | Include examples of ‘Automate now,’ ‘Clean up first,’ ‘Keep human,’ and ‘Revisit later.’ |
workflow-intake-question-bank-v1.md	A bank of focused intake questions by workflow type.	“Create a Markdown question bank for SMB workflow discovery. Group questions by lead management, sales follow-up, onboarding, document collection, invoicing, customer support, internal operations, and reporting.”	Helps the GPT ask better questions without overwhelming users.
smb-automation-use-case-library-v1.md	Practical examples of low-risk, high-value SMB automations.	“Create a Markdown library of SMB automation use cases. For each use case, include workflow, trigger, inputs, AI task, tools commonly involved, human review point, outputs, risk level, and pilot idea.”	Prioritize common workflows like lead response, quote follow-up, onboarding, reminders, CRM updates, and FAQ drafting.
ai-agent-blueprint-template-v1.md	Standard template for designing AI agents.	“Create a Markdown AI agent blueprint template for SMB workflows. Include agent name, purpose, user, job-to-be-done, inputs, outputs, instructions, guardrails, permission boundaries, human handoff rules, example prompts, tests, and launch checklist.”	This will make agent designs more consistent.
automation-blueprint-template-v1.md	Standard template for automation plans.	“Create a Markdown automation blueprint template. Include goal, trigger, inputs, systems, workflow steps, AI tasks, human review points, outputs, exceptions, success metrics, pilot plan, and implementation checklist.”	Use this as a reusable output reference.
sensitive-workflow-safety-guide-v1.md	Safety guide for workflows involving money, legal, HR, medical, compliance, or customer-facing decisions.	“Create a Markdown safety guide for SMB AI automation involving sensitive workflows. Include risk categories, safer draft-only patterns, human approval rules, audit logs, limited permissions, escalation rules, and examples of workflows that should not be fully automated.”	Important for keeping recommendations safe and practical.
human-in-the-loop-patterns-v1.md	Patterns for review, approval, escalation, and rollback.	“Create a Markdown guide to human-in-the-loop automation patterns for small businesses. Include draft-only workflows, approval queues, exception handling, confidence thresholds, escalation paths, audit trails, and rollback plans.”	Strong companion to sensitive workflow guidance.
tool-stack-patterns-for-smbs-v1.md	Tool-neutral automation patterns using common SMB apps.	“Create a Markdown guide mapping common SMB tool stacks to automation patterns. Include examples using Gmail, Google Sheets, Airtable, Notion, HubSpot, Slack, QuickBooks, Stripe, Zapier, Make, n8n, form builders, and document storage.”	Keep it vendor-neutral; focus on patterns, not tool hype.
prompt-library-smb-automation-v1.md	Reusable prompts for audits, maps, blueprints, testing, and SOPs.	“Create a Markdown prompt library for SMB automation consulting. Include prompts for auditing workflows, finding bottlenecks, scoring readiness, drafting SOPs, creating automation blueprints, designing AI agents, and generating pilot plans.”	This can improve response quality and consistency.
sample-workflow-maps-v1.md	Example before-and-after workflow maps.	“Create a Markdown file with sample current-state and future-state workflow maps for lead intake, quote follow-up, client onboarding, document collection, invoice reminders, customer support triage, and weekly reporting.”	Include simple arrow-style maps that non-technical users can understand.
sop-template-library-v1.md	SOP templates the GPT can use when a process needs cleanup first.	“Create a Markdown library of simple SOP templates for SMB workflows. Include purpose, owner, trigger, inputs, steps, tools, handoffs, quality checks, exceptions, and review cadence.”	Helps the GPT recommend cleanup before automation.
automation-pilot-plan-template-v1.md	A repeatable pilot-launch framework.	“Create a Markdown pilot plan template for testing SMB automations. Include scope, test users, sample data, success metrics, failure criteria, review schedule, rollback plan, and go/no-go checklist.”	Very useful for moving users from planning to safe testing.
agent-test-scenarios-v1.json	Machine-readable test scenarios for common AI agents.	“Create a JSON file of test scenarios for SMB AI agents. Include scenarios for normal requests, missing information, ambiguous requests, sensitive data, customer escalation, tool failure, incorrect input, and human handoff.”	Good for validating agent behavior before launch.
email-and-message-templates-v1.md	Draft templates for common SMB communications.	“Create a Markdown file of SMB communication templates for lead response, quote follow-up, appointment reminders, onboarding, document requests, invoice reminders, status updates, and escalation messages.”	Mark all customer-facing messages as draft-first unless approved.
crm-pipeline-automation-patterns-v1.md	CRM-specific workflow ideas without requiring one CRM.	“Create a Markdown guide to CRM automation patterns for SMBs. Include lead capture, qualification, task creation, follow-up reminders, stage changes, stale deal alerts, handoff notes, and reporting summaries.”	Keep CRM examples generic enough for HubSpot, Pipedrive, Airtable, Notion, or Sheets.
document-collection-workflows-v1.md	Specialized guide for onboarding and document collection.	“Create a Markdown guide for automating document collection workflows. Include intake forms, required document checklists, missing-item reminders, status tracking, human review, privacy handling, and escalation rules.”	High-value use case for service businesses, agencies, lenders, accountants, and consultants.
static-demo-page-v1.html	A simple static HTML demo showing how the GPT evaluates a workflow.	“Create a single static HTML page that demonstrates an SMB workflow audit. Include sections for current workflow, pain points, readiness score, automation recommendation, AI agent idea, and pilot checklist. No external dependencies.”	Useful as a sample artifact, landing-page demo, or internal reference.
workflow-card-components-v1.ts	TypeScript component logic for future UI prototypes.	“Create TypeScript interfaces and sample data for workflow audit cards, readiness scorecards, automation opportunity tables, and AI agent blueprint cards.”	Only useful if you may later build a web app or dashboard around the GPT.
workflow-demo-styles-v1.css	Lightweight CSS for the static demo page.	“Create a CSS file for a clean SMB automation audit demo page. Use readable cards, tables, badges for readiness levels, and simple spacing. Avoid heavy frameworks.”	Pair with static-demo-page-v1.html.
readiness-score-calculator-v1.js	Simple browser-side calculator for readiness scores.	“Create a vanilla JavaScript file that calculates an automation readiness score from ten 0–3 category scores, returns total score, readiness level, biggest blocker placeholder, and recommendation text.”	Useful if you want an interactive readiness demo later.


## Suggested Creation Order

Start with these five because they will improve the GPT’s practical usefulness the most:

1. `smb-workflow-audit-playbook-v1.md`
2. `automation-readiness-scorecard-v1.json`
3. `automation-opportunity-matrix-v1.md`
4. `automation-blueprint-template-v1.md`
5. `ai-agent-blueprint-template-v1.md`

After that, add the safety, testing, and pilot files:

`human-in-the-loop-patterns-v1.md`, `sensitive-workflow-safety-guide-v1.md`, `automation-pilot-plan-template-v1.md`, and `agent-test-scenarios-v1.json`.

### Recommendations

- keep most knowledge files in Markdown for readability
- use JSON only for structured scorecards or test cases
- save HTML/CSS/JS/TS for demo assets or future app prototypes

<img width="2033" height="773" alt="Image" src="https://github.com/user-attachments/assets/e5b05a79-f315-470a-8a79-e64fac2b3176" />

# SMB AI Builder

Optional knowledge files, no-auth GPT Actions, demo assets, prompts, and implementation references for **SMB AI Workflow & Agent Builder**.

This repository supports a Custom GPT that helps small business owners, operators, freelancers, agencies, and lean teams audit business workflows, identify automation opportunities, design practical AI-powered automations, and build safe AI agent plans before investing in tools or development work.

> This repo is designed as a supporting asset library. It does not replace the GPT's builder instructions.

---

## Access & Links

| Site | URL |
| --- | --- |
| `Web` | https://smb-ai-builder.vercel.app/ |
| `ChatGPT` | https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder |
| `GitHub` | https://github.com/JFeimster/SMB-AI-Builder |
| `Vercel` | https://vercel.com/jason-feimsters-projects/smb-ai-builder | 
| `Notion` | https://feimster.notion.site/smb-ai-builder |

---

## Repository Goals

- Store GPT knowledge files in a clean, versioned structure.
- Host no-auth Actions for deterministic workflow analysis.
- Provide OpenAPI schemas for GPT Action setup.
- Keep reusable templates, prompts, examples, and demo assets organized.
- Support future Vercel deployment for public API routes and static demo pages.
- Keep sensitive business data out of the repo.

---

## Suggested Repository Description

**Knowledge files, no-auth GPT Actions, prompts, templates, and Vercel-ready utilities for an SMB AI workflow and agent builder.**

---

## Recommended Site Structure

```txt
SMB-AI-Builder/
├── README.md
├── AGENTS.md
├── LICENSE
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── vercel.json
├── .env.example
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── api/
│   │   ├── readiness-score/
│   │   │   └── route.ts
│   │   ├── opportunity-ranker/
│   │   │   └── route.ts
│   │   ├── automation-roi/
│   │   │   └── route.ts
│   │   ├── blueprint-validator/
│   │   │   └── route.ts
│   │   ├── agent-validator/
│   │   │   └── route.ts
│   │   ├── workflow-map/
│   │   │   └── route.ts
│   │   ├── pilot-plan/
│   │   │   └── route.ts
│   │   ├── test-scenarios/
│   │   │   └── route.ts
│   │   ├── risk-classifier/
│   │   │   └── route.ts
│   │   ├── human-review-pattern/
│   │   │   └── route.ts
│   │   ├── public-holidays/
│   │   │   └── route.ts
│   │   ├── weather/
│   │   │   └── route.ts
│   │   ├── geocode/
│   │   │   └── route.ts
│   │   ├── site-metadata/
│   │   │   └── route.ts
│   │   ├── sitemap-reader/
│   │   │   └── route.ts
│   │   ├── robots-check/
│   │   │   └── route.ts
│   │   └── openapi/
│   │       ├── route.ts
│   │       ├── readiness-score/
│   │       │   └── route.ts
│   │       ├── opportunity-ranker/
│   │       │   └── route.ts
│   │       └── combined/
│   │           └── route.ts
│   │
│   ├── demos/
│   │   ├── readiness-score/
│   │   │   └── page.tsx
│   │   ├── opportunity-ranker/
│   │   │   └── page.tsx
│   │   └── workflow-audit/
│   │       └── page.tsx
│   │
│   ├── privacy/
│   │   └── page.tsx
│   └── terms/
│       └── page.tsx
│
├── lib/
│   ├── automation-readiness.ts
│   ├── automation-opportunity-ranker.ts
│   ├── automation-roi.ts
│   ├── blueprint-validator.ts
│   ├── agent-validator.ts
│   ├── workflow-map.ts
│   ├── pilot-plan.ts
│   ├── test-scenarios.ts
│   ├── risk-classifier.ts
│   ├── human-review-pattern.ts
│   ├── public-holidays.ts
│   ├── weather.ts
│   ├── geocode.ts
│   ├── site-metadata.ts
│   ├── sitemap-reader.ts
│   ├── robots-check.ts
│   ├── openapi/
│   │   ├── readiness-openapi.ts
│   │   ├── opportunity-ranker-openapi.ts
│   │   ├── automation-roi-openapi.ts
│   │   └── combined-openapi.ts
│   ├── security/
│   │   ├── url-safety.ts
│   │   ├── rate-limit.ts
│   │   └── request-validation.ts
│   └── types/
│       ├── actions.ts
│       ├── readiness.ts
│       ├── opportunities.ts
│       └── openapi.ts
│
├── openapi/
│   ├── score-automation-readiness.openapi.json
│   ├── rank-automation-opportunities.openapi.json
│   ├── automation-roi.openapi.json
│   ├── blueprint-validator.openapi.json
│   ├── agent-validator.openapi.json
│   ├── workflow-map.openapi.json
│   ├── pilot-plan.openapi.json
│   ├── test-scenarios.openapi.json
│   ├── public-holidays.openapi.json
│   ├── weather.openapi.json
│   ├── site-metadata.openapi.json
│   └── combined-smb-actions.openapi.json
│
├── docs/
│   ├── knowledge-files/
│   │   ├── gpt-builder-instructions-v1.md
│   │   ├── smb-workflow-audit-playbook-v1.md
│   │   ├── automation-readiness-scorecard-v1.json
│   │   ├── automation-opportunity-matrix-v1.md
│   │   ├── workflow-intake-question-bank-v1.md
│   │   ├── smb-automation-use-case-library-v1.md
│   │   ├── ai-agent-blueprint-template-v1.md
│   │   ├── automation-blueprint-template-v1.md
│   │   ├── sensitive-workflow-safety-guide-v1.md
│   │   ├── human-in-the-loop-patterns-v1.md
│   │   ├── tool-stack-patterns-for-smbs-v1.md
│   │   ├── prompt-library-smb-automation-v1.md
│   │   ├── sample-workflow-maps-v1.md
│   │   ├── sop-template-library-v1.md
│   │   ├── automation-pilot-plan-template-v1.md
│   │   ├── agent-test-scenarios-v1.json
│   │   ├── email-and-message-templates-v1.md
│   │   ├── crm-pipeline-automation-patterns-v1.md
│   │   └── document-collection-workflows-v1.md
│   │
│   ├── prompts/
│   │   ├── audit-prompts.md
│   │   ├── readiness-prompts.md
│   │   ├── automation-blueprint-prompts.md
│   │   ├── agent-blueprint-prompts.md
│   │   ├── testing-prompts.md
│   │   └── demo-prompts.md
│   │
│   ├── actions/
│   │   ├── action-catalog.md
│   │   ├── no-auth-action-guidelines.md
│   │   ├── gpt-action-setup-checklist.md
│   │   ├── openapi-style-guide.md
│   │   └── vercel-deployment-notes.md
│   │
│   ├── examples/
│   │   ├── sample-lead-follow-up-audit.md
│   │   ├── sample-client-onboarding-blueprint.md
│   │   ├── sample-document-collection-agent.md
│   │   ├── sample-invoice-reminder-workflow.md
│   │   └── sample-weekly-reporting-automation.md
│   │
│   └── architecture/
│       ├── repo-map.md
│       ├── action-data-flow.md
│       ├── privacy-and-data-handling.md
│       └── future-roadmap.md
│
├── examples/
│   ├── readiness-score-request.example.json
│   ├── opportunity-ranker-request.example.json
│   ├── automation-roi-request.example.json
│   ├── blueprint-validator-request.example.json
│   ├── agent-validator-request.example.json
│   ├── workflow-map-request.example.json
│   ├── pilot-plan-request.example.json
│   └── test-scenarios-request.example.json
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── demo/
│       ├── static-demo-page-v1.html
│       ├── workflow-demo-styles-v1.css
│       └── readiness-score-calculator-v1.js
│
├── assets/
│   ├── icons/
│   ├── logos/
│   ├── banners/
│   ├── screenshots/
│   └── diagrams/
│
├── styles/
│   ├── styles.css
│   └── demo.css
│
├── scripts/
│   ├── validate-openapi.ts
│   ├── build-combined-openapi.ts
│   ├── test-actions.ts
│   └── generate-action-index.ts
│
└── tests/
    ├── automation-readiness.test.ts
    ├── opportunity-ranker.test.ts
    ├── automation-roi.test.ts
    ├── blueprint-validator.test.ts
    └── fixtures/
        ├── readiness-valid.json
        ├── readiness-invalid.json
        ├── opportunities-valid.json
        └── opportunities-sensitive-workflow.json
```

---

## Core Knowledge Files

Place optional GPT knowledge files here:

```txt
docs/knowledge-files/
```

Recommended files:

| File | Purpose |
| --- | --- |
| `gpt-builder-instructions-v1.md` | Primary GPT builder instruction reference. |
| `smb-workflow-audit-playbook-v1.md` | Step-by-step process audit guide. |
| `automation-readiness-scorecard-v1.json` | Structured readiness scoring model. |
| `automation-opportunity-matrix-v1.md` | Ranking matrix for deciding what to automate first. |
| `workflow-intake-question-bank-v1.md` | Discovery questions by workflow type. |
| `smb-automation-use-case-library-v1.md` | Library of common SMB automation opportunities. |
| `ai-agent-blueprint-template-v1.md` | Reusable AI agent design template. |
| `automation-blueprint-template-v1.md` | Reusable automation plan template. |
| `sensitive-workflow-safety-guide-v1.md` | Safety guidance for high-risk workflows. |
| `human-in-the-loop-patterns-v1.md` | Approval, escalation, audit, and rollback patterns. |
| `tool-stack-patterns-for-smbs-v1.md` | Tool-neutral SMB automation patterns. |
| `prompt-library-smb-automation-v1.md` | Prompt library for audits, maps, blueprints, and testing. |
| `sample-workflow-maps-v1.md` | Before-and-after workflow maps. |
| `sop-template-library-v1.md` | SOP templates for workflows that need cleanup first. |
| `automation-pilot-plan-template-v1.md` | Pilot plan and go/no-go checklist. |
| `agent-test-scenarios-v1.json` | Structured test cases for AI agents. |
| `email-and-message-templates-v1.md` | Draft customer and internal message templates. |
| `crm-pipeline-automation-patterns-v1.md` | CRM workflow automation patterns. |
| `document-collection-workflows-v1.md` | Document collection workflow guide. |

---

## No-Auth GPT Actions

This repo is designed to support public, no-auth Actions that can be hosted on Vercel.

### Recommended Action Pattern

Each Action should include:

```txt
app/api/{action-route}/route.ts
lib/{action-logic}.ts
openapi/{action-name}.openapi.json
examples/{action-name}-request.example.json
docs/actions/{action-name}.md
tests/{action-name}.test.ts
```

### Suggested Actions

| Action | Route | Purpose | Status |
| --- | --- | --- | --- |
| `scoreAutomationReadiness` | `/api/readiness-score` | Calculates a 0–30 readiness score. | Created |
| `rankAutomationOpportunities` | `/api/opportunity-ranker` | Ranks workflow candidates by automation fit. | Created |
| `calculateAutomationROI` | `/api/automation-roi` | Estimates time savings, cost savings, and payback. | Recommended |
| `validateAutomationBlueprint` | `/api/blueprint-validator` | Checks whether an automation blueprint is complete. | Recommended |
| `validateAgentBlueprint` | `/api/agent-validator` | Checks whether an AI agent plan has clear guardrails and handoffs. | Recommended |
| `generateWorkflowMap` | `/api/workflow-map` | Converts structured process steps into a workflow map. | Recommended |
| `buildPilotTestPlan` | `/api/pilot-plan` | Creates a limited test plan for a workflow automation. | Recommended |
| `generateTestScenarios` | `/api/test-scenarios` | Creates test cases for normal, missing, ambiguous, and risky inputs. | Recommended |
| `classifyWorkflowRisk` | `/api/risk-classifier` | Classifies workflow risk and recommends review level. | Recommended |
| `suggestHumanReviewPattern` | `/api/human-review-pattern` | Suggests draft-only, approval, exception, or escalation patterns. | Recommended |
| `getPublicHolidays` | `/api/public-holidays` | Returns public holidays for planning reminders and follow-ups. | Recommended |
| `getWeatherByLocation` | `/api/weather` | Supports field-service, event, delivery, and local operations planning. | Recommended |
| `geocodeLocation` | `/api/geocode` | Converts locations to coordinates for weather or local planning. | Recommended |
| `extractWebsiteMetadata` | `/api/site-metadata` | Extracts public website metadata for lead-flow and customer journey audits. | Recommended |
| `analyzeSitemap` | `/api/sitemap-reader` | Reads a public sitemap and summarizes page structure. | Recommended |
| `checkRobotsTxt` | `/api/robots-check` | Checks public robots.txt rules before website analysis. | Recommended |

---

## OpenAPI Schemas

Store GPT Action schemas in:

```txt
openapi/
```

Recommended individual schemas:

```txt
score-automation-readiness.openapi.json
rank-automation-opportunities.openapi.json
automation-roi.openapi.json
blueprint-validator.openapi.json
agent-validator.openapi.json
workflow-map.openapi.json
pilot-plan.openapi.json
test-scenarios.openapi.json
public-holidays.openapi.json
weather.openapi.json
site-metadata.openapi.json
combined-smb-actions.openapi.json
```

Recommended dynamic schema routes:

```txt
/api/openapi/readiness-score
/api/openapi/opportunity-ranker
/api/openapi/combined
```

Use placeholder server URLs while developing:

```json
{
  "servers": [
    {
      "url": "https://YOUR-VERCEL-DOMAIN.vercel.app"
    }
  ]
}
```

Replace the placeholder after deployment.

---

## GPT Action Setup Checklist

When adding an Action to the GPT Builder:

1. Deploy the repo to Vercel or another public host.
2. Confirm the endpoint works with a sample JSON request.
3. Confirm the OpenAPI schema is valid.
4. In GPT Builder, add a new Action.
5. Set authentication to `None`.
6. Paste the schema or import it from the public schema URL.
7. Add a privacy policy URL.
8. Test with safe sample data first.
9. Keep customer-identifying or sensitive data out of test requests.

---

## Local Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Test an endpoint:

```bash
curl -X POST http://localhost:3000/api/readiness-score \
  -H "Content-Type: application/json" \
  -d @examples/readiness-score-request.example.json
```

---

## Deployment

Recommended deployment target:

```txt
Vercel
```

Typical public endpoint format:

```txt
https://YOUR-VERCEL-DOMAIN.vercel.app/api/readiness-score
```

Typical OpenAPI schema endpoint format:

```txt
https://YOUR-VERCEL-DOMAIN.vercel.app/api/openapi/readiness-score
```

---

## Privacy and Safety Notes

This repository should not store:

- Customer records
- Private client documents
- API keys
- Passwords
- Financial account credentials
- Medical, legal, HR, tax, underwriting, or compliance records
- Sensitive personally identifiable information

For no-auth Actions:

- Prefer stateless calculation endpoints.
- Avoid database writes.
- Avoid logging full request bodies.
- Use short request size limits.
- Add rate limiting if endpoints become public.
- Validate all inputs.
- For URL-fetching Actions, block localhost and private network requests.
- Return summaries or metadata, not full scraped pages.
- Keep high-risk workflows in draft-only or human-review modes.

---

## Suggested `.gitignore`

```gitignore
node_modules
.next
.vercel
.env
.env.local
.env.*.local
.DS_Store
coverage
dist
*.log
```

---

## Suggested `AGENTS.md`

Create an `AGENTS.md` file for coding agents or collaborators:

```md
# AGENTS.md

This repo supports SMB AI Workflow & Agent Builder.

When editing:
- Do not commit secrets or customer data.
- Keep Actions no-auth unless explicitly changed.
- Keep API routes stateless where possible.
- Validate all request bodies.
- Keep OpenAPI schemas synchronized with route behavior.
- Prefer deterministic scoring logic over model calls for utility Actions.
- Use plain English in docs.
- Keep safety guidance for sensitive workflows.
```

---

## Naming Conventions

Recommended file naming style:

```txt
lowercase-kebab-case-v1.md
lowercase-kebab-case-v1.json
action-name.openapi.json
```

Examples:

```txt
smb-workflow-audit-playbook-v1.md
automation-readiness-scorecard-v1.json
score-automation-readiness.openapi.json
```

---

## Roadmap

### Phase 1: Core Action Utilities

- `scoreAutomationReadiness`
- `rankAutomationOpportunities`
- `calculateAutomationROI`

### Phase 2: Blueprint Validation

- `validateAutomationBlueprint`
- `validateAgentBlueprint`
- `generateWorkflowMap`

### Phase 3: Pilot and Testing

- `buildPilotTestPlan`
- `generateTestScenarios`
- `classifyWorkflowRisk`
- `suggestHumanReviewPattern`

### Phase 4: Public Data Helpers

- `getPublicHolidays`
- `getWeatherByLocation`
- `geocodeLocation`
- `extractWebsiteMetadata`
- `analyzeSitemap`
- `checkRobotsTxt`

### Phase 5: Demo Site

- Static demo page
- Readiness score calculator
- Workflow audit example
- Action schema browser
- Privacy and terms pages

---

## License

Choose a license before publishing publicly.

Common options:

- MIT License for open-source utility code.
- Private/internal repo if you do not want others to reuse the templates or Actions.

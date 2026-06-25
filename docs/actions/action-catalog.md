# Action Catalog

Repository path: `docs/actions/action-catalog.md`

## Overview

This catalog defines the no-auth GPT Actions planned for **SMB AI Workflow & Agent Builder**.

The goal is to move the GPT from advice-only workflow consulting into structured, repeatable operational analysis while keeping the first version low-risk:

- No authentication
- No persistent storage
- No private account access
- Deterministic scoring and validation first
- Public-data lookups only where they clearly support SMB workflow decisions
- Human review required for sensitive workflows

## Design Principles

1. **No-auth by default**
   - Initial Actions should use `Authentication: None` in GPT Builder.
   - Do not require user accounts, OAuth, API keys, or private integrations.

2. **Stateless and read-only**
   - Do not store submitted workflows, customer names, private documents, emails, financial details, passwords, credentials, or API keys.
   - Return analysis only.

3. **Deterministic Actions first**
   - Prioritize calculator-style, validator-style, and ranking-style endpoints.
   - Add external public-data Actions only after the core workflow intelligence Actions are stable.

4. **Human-in-the-loop safety**
   - Workflows involving money, legal, tax, HR, medical, underwriting, compliance, or sensitive customer data should default to draft-only, approval-first, or exception-review modes.

5. **OpenAPI-ready**
   - Every Action should have a stable `operationId`, clear request schema, clear response schema, and useful examples.

6. **Vercel-ready**
   - Endpoints should map cleanly to Next.js App Router routes under `app/api/.../route.ts`.

---

## Priority Build Order

| Phase | Focus | Actions |
|---|---|---|
| Phase 1 | Core deterministic workflow intelligence | `scoreAutomationReadiness`, `rankAutomationOpportunities`, `calculateAutomationROI`, `validateAutomationBlueprint`, `validateAgentBlueprint`, `generateWorkflowMap` |
| Phase 2 | Pilot planning and safety | `buildPilotTestPlan`, `generateTestScenarios`, `classifyWorkflowRisk`, `suggestHumanReviewPattern` |
| Phase 3 | Public-data support | `extractWebsiteMetadata`, `analyzeSitemap`, `checkRobotsTxt`, `getPublicHolidays`, `getWeatherByLocation`, `geocodeLocation`, `convertCurrencyEstimate` |
| Phase 4 | Builder utilities | `generateActionSpecFromEndpoint`, combined OpenAPI generator, example request library, partner/demo integrations |

---

## Core No-Auth Actions

| Action | Route | Purpose | Required Input | Primary Output | Dependency | Priority |
|---|---|---|---|---|---|---|
| `scoreAutomationReadiness` | `/api/readiness-score` | Calculate a 0–30 readiness score across ten categories. | Workflow name and ten 0–3 scores. | Total score, readiness level, blockers, next step. | None | Very high |
| `rankAutomationOpportunities` | `/api/opportunity-ranker` | Rank multiple workflows by impact, readiness, risk, and fit. | List of workflows with ranking factors. | Ranked list, top recommendations, priority scores. | None | Very high |
| `calculateAutomationROI` | `/api/automation-roi` | Estimate time savings, cost savings, and payback period. | Time per task, frequency, labor cost, setup estimate, review time. | Monthly hours saved, estimated value, payback estimate. | None | Very high |
| `validateAutomationBlueprint` | `/api/blueprint-validator` | Check whether an automation blueprint is complete before pilot. | Trigger, inputs, systems, AI tasks, review points, outputs, exceptions, metrics, rollback. | Missing fields, risk warnings, pilot readiness status. | None | Very high |
| `validateAgentBlueprint` | `/api/agent-validator` | Review an AI agent concept for missing instructions, weak permissions, or testing gaps. | Agent role, inputs, outputs, instructions, guardrails, permissions, handoffs, tests. | Validation report, safety warnings, launch readiness. | None | Very high |
| `generateWorkflowMap` | `/api/workflow-map` | Convert structured steps into a current-state or future-state workflow map. | Process name, steps, owners, tools, handoffs, decision points. | Plain-English map, Mermaid diagram, bottleneck markers. | None | Very high |
| `buildPilotTestPlan` | `/api/pilot-plan` | Turn a proposed automation into a structured pilot plan. | Workflow name, automation goal, risk level, users, test period, success metrics. | Scope, test cases, go/no-go criteria, rollback checklist. | None | High |
| `generateTestScenarios` | `/api/test-scenarios` | Create standard test cases for an AI agent or automation. | Workflow type, risk level, inputs, outputs, edge cases. | Normal, missing-data, ambiguous, sensitive, escalation, and failure scenarios. | None | High |
| `classifyWorkflowRisk` | `/api/risk-classifier` | Classify workflow risk and recommend a safer automation mode. | Workflow description and sensitivity flags. | Risk level, reason, review requirement, safer mode. | None | High |
| `suggestHumanReviewPattern` | `/api/human-review-pattern` | Recommend the right approval model for a workflow. | Risk level, customer-facing status, sensitivity, failure impact. | Draft-only, approve-before-send, exception review, audit log, escalation model. | None | High |

---

## Public-Data No-Auth Actions

| Action | Route | Purpose | Required Input | Primary Output | Dependency | Priority |
|---|---|---|---|---|---|---|
| `extractWebsiteMetadata` | `/api/site-metadata` | Fetch public website metadata for SMB website and lead-flow audits. | Public website URL. | Title, meta description, headings, forms detected, CTA text, contact links. | Public website fetch | High |
| `analyzeSitemap` | `/api/sitemap-reader` | Read a public sitemap to understand a business website structure. | Website domain or sitemap URL. | Pages, likely service pages, resources pages, contact/onboarding pages. | Public sitemap fetch | Medium-high |
| `checkRobotsTxt` | `/api/robots-check` | Check public `robots.txt` before suggesting crawl-like workflows. | Website domain. | Rules summary, allowed/disallowed paths, sitemap links. | Public website fetch | Medium |
| `getPublicHolidays` | `/api/public-holidays` | Plan follow-ups, reminders, campaigns, staffing, and due dates around holidays. | Country code, year, optional region/state. | Holiday dates, names, types, business-day warnings. | Nager.Date | Medium |
| `getWeatherByLocation` | `/api/weather` | Support scheduling-sensitive SMB workflows. | Location or coordinates; date range. | Forecast summary and operational impact flags. | Open-Meteo | Medium |
| `geocodeLocation` | `/api/geocode` | Convert a city, postal code, or address-like location into coordinates. | Location search string. | Matching locations, coordinates, country, timezone. | Open-Meteo Geocoding | Medium |
| `convertCurrencyEstimate` | `/api/currency-convert` | Estimate quoted amounts across currencies for international SMB planning. | Amount, source currency, target currency, optional date. | Converted amount, rate date, source note, disclaimer. | Frankfurter | Medium |
| `getLaborMarketSeries` | `/api/bls-series` | Pull public labor or economic series for staffing, wage, or market context. | BLS series ID, start year, end year. | Time series values, latest value, trend summary. | BLS public API | Medium |
| `lookupPublicationMetadata` | `/api/crossref-lookup` | Retrieve citation metadata for articles, reports, DOI references, or research sources. | DOI, title, author, or query. | Title, authors, date, DOI, publisher, abstract availability. | Crossref REST API | Medium-low |

---

## Builder-Support Action

| Action | Route | Purpose | Required Input | Primary Output | Dependency | Priority |
|---|---|---|---|---|---|---|
| `generateActionSpecFromEndpoint` | `/api/openapi-helper` | Convert a plain endpoint definition into an OpenAPI Action schema draft. | Action name, route, method, inputs, outputs. | Draft OpenAPI path object and operation ID. | None | High for builder |

---

## Implemented Action Packages

### `scoreAutomationReadiness`

**Status:** Package created

**Endpoint**

```text
POST /api/readiness-score
```

**Authentication**

```text
None
```

**Optional OpenAPI endpoint**

```text
GET /api/openapi
```

**Expected input**

```json
{
  "workflowName": "Lead follow-up after website inquiry",
  "scores": {
    "workflowClarity": 2,
    "processConsistency": 2,
    "dataQuality": 2,
    "toolAccess": 2,
    "ownership": 3,
    "riskLevel": 2,
    "humanReviewPlan": 2,
    "customerExperienceImpact": 3,
    "measurementPlan": 1,
    "rollbackPlan": 1
  }
}
```

**Returned output includes**

```text
totalScore
readinessLevel
recommendationCategory
biggestBlocker
lowestScoringCategories
categoryResults
humanReviewRequired
recommendedAutomationMode
riskFlags
nextStep
assumptions
```

### `rankAutomationOpportunities`

**Status:** Package created

**Endpoint**

```text
POST /api/opportunity-ranker
```

**Authentication**

```text
None
```

**Optional OpenAPI endpoint**

```text
GET /api/openapi/rank-automation-opportunities
```

**Ranking factors**

```text
frequency
timeSavedPotential
revenueImpact
customerExperienceImpact
dataReadiness
toolReadiness
processClarity
ownershipClarity
riskLevel
humanReviewPlan
```

**Returned output includes**

```text
rankedOpportunities
topRecommendations
recommendation
automationFit
priorityScore
riskFlags
humanReviewRequired
recommendedAutomationMode
factorBreakdown
portfolioSummary
assumptions
```

---

## Recommended Vercel Route Structure

```text
app/
  api/
    readiness-score/
      route.ts
    opportunity-ranker/
      route.ts
    automation-roi/
      route.ts
    blueprint-validator/
      route.ts
    agent-validator/
      route.ts
    workflow-map/
      route.ts
    pilot-plan/
      route.ts
    test-scenarios/
      route.ts
    risk-classifier/
      route.ts
    human-review-pattern/
      route.ts
    site-metadata/
      route.ts
    sitemap-reader/
      route.ts
    robots-check/
      route.ts
    public-holidays/
      route.ts
    weather/
      route.ts
    geocode/
      route.ts
    currency-convert/
      route.ts
    openapi/
      route.ts
```

---

## Recommended OpenAPI Organization

```text
openapi/
  score-automation-readiness.openapi.json
  rank-automation-opportunities.openapi.json
  automation-roi.openapi.json
  blueprint-validator.openapi.json
  agent-validator.openapi.json
  workflow-map.openapi.json
  pilot-plan.openapi.json
  test-scenarios.openapi.json
  risk-classifier.openapi.json
  human-review-pattern.openapi.json
  public-data-actions.openapi.json
  combined.openapi.json
```

Recommended public schema endpoints:

```text
/api/openapi
/api/openapi/score-automation-readiness
/api/openapi/rank-automation-opportunities
/api/openapi/core-actions
/api/openapi/public-data-actions
```

---

## GPT Builder Setup Checklist

For each Action:

- [ ] Confirm the Vercel endpoint is deployed.
- [ ] Confirm the endpoint accepts and returns JSON.
- [ ] Confirm the endpoint does not require authentication.
- [ ] Confirm the endpoint does not store submitted user data.
- [ ] Confirm the OpenAPI schema uses a stable `operationId`.
- [ ] Import or paste the OpenAPI schema into GPT Builder.
- [ ] Set Authentication to `None`.
- [ ] Add or confirm a valid Privacy Policy URL.
- [ ] Test with a simple example request.
- [ ] Test edge cases:
  - Missing required fields
  - Invalid score ranges
  - Empty workflow name
  - High-risk workflow
  - Ambiguous input
  - Very large payload

---

## Shared Recommendation Categories

Use these labels consistently across Actions:

| Category | Meaning |
|---|---|
| `Automate now` | Workflow is clear, repeatable, low enough risk, and ready for a limited pilot. |
| `Clean up first` | Workflow has automation potential but needs better data, clearer steps, ownership, or handoffs. |
| `Keep human` | Workflow is too risky, sensitive, judgment-heavy, or poorly suited for automation. |
| `Revisit later` | Workflow may be useful to automate later but is not currently the best first target. |

---

## Shared Automation Modes

Use these modes consistently across Actions:

| Mode | Best For |
|---|---|
| `Manual process only` | High-risk or unclear workflows that should not be automated yet. |
| `Draft-only AI assist` | Sensitive or customer-facing workflows where AI can prepare drafts but not act. |
| `Human approval before action` | Workflows where AI can prepare an output but a person must approve before sending, publishing, or deciding. |
| `Exception review` | Mostly repeatable workflows where unusual cases should be routed to a person. |
| `Limited pilot automation` | Lower-risk workflows ready for a small, monitored test. |
| `Ready for automation pilot` | Clear, repeatable, measurable workflows with good data and rollback planning. |

---

## Common Risk Flags

Use these flags consistently in responses:

- Customer-facing communication
- Financial decision
- Legal or compliance impact
- Tax or accounting impact
- Credit, lending, or underwriting impact
- HR or employment impact
- Medical or health-related impact
- Sensitive personal data
- Private business data
- No human review point
- Unclear rollback plan
- Poor data quality
- Unclear process owner
- Unclear success metric
- Tool access gap
- Inconsistent workflow steps

---

## Security and Safety Guardrails

### All no-auth endpoints

- Validate every request body.
- Reject unsupported methods.
- Return JSON consistently.
- Use clear error messages.
- Limit payload size.
- Avoid storing request bodies.
- Avoid logging sensitive user-provided data.
- Do not accept passwords, private API keys, account credentials, or full financial account details.
- Add rate limiting when public usage grows.

### Public website-fetching endpoints

For `extractWebsiteMetadata`, `analyzeSitemap`, and `checkRobotsTxt`:

- Allow only `http` and `https` URLs.
- Block localhost.
- Block private IP ranges.
- Use short request timeouts.
- Limit page size.
- Avoid full-site crawling unless explicitly designed for it.
- Return extracted metadata, not full page dumps.
- Respect `robots.txt` where relevant.
- Add light caching and rate limiting.

### External public API endpoints

For weather, holidays, currency, labor-market, and publication metadata endpoints:

- Include source notes in responses.
- Handle API downtime gracefully.
- Avoid real-time guarantees unless the source provides them.
- Add disclaimers where data may be approximate, delayed, or unsuitable for final decisions.
- Cache when appropriate.

---

## Suggested Repository Placement

Save this file at:

```text
docs/actions/action-catalog.md
```

Recommended surrounding structure:

```text
docs/
  actions/
    action-catalog.md
    score-automation-readiness.md
    rank-automation-opportunities.md
    automation-roi.md
    blueprint-validator.md
    agent-validator.md
    workflow-map.md
```

---

## Roadmap

### Phase 1 — Core deterministic Actions

- [x] `scoreAutomationReadiness`
- [x] `rankAutomationOpportunities`
- [ ] `calculateAutomationROI`
- [ ] `validateAutomationBlueprint`
- [ ] `validateAgentBlueprint`
- [ ] `generateWorkflowMap`

### Phase 2 — Pilot and safety Actions

- [ ] `buildPilotTestPlan`
- [ ] `generateTestScenarios`
- [ ] `classifyWorkflowRisk`
- [ ] `suggestHumanReviewPattern`

### Phase 3 — Public-data Actions

- [ ] `extractWebsiteMetadata`
- [ ] `analyzeSitemap`
- [ ] `checkRobotsTxt`
- [ ] `getPublicHolidays`
- [ ] `getWeatherByLocation`
- [ ] `geocodeLocation`
- [ ] `convertCurrencyEstimate`

### Phase 4 — Builder utilities

- [ ] `generateActionSpecFromEndpoint`
- [ ] Combined OpenAPI generator
- [ ] Example request library
- [ ] Static demo pages
- [ ] Partner embed integrations

---

## Implementation Recommendation

Build the deterministic workflow-intelligence Actions before adding public-data lookups.

These Actions are lower risk, easier to test, and most aligned with the GPT’s core consulting value:

1. Audit a workflow.
2. Score readiness.
3. Rank opportunities.
4. Estimate ROI.
5. Validate the automation plan.
6. Validate the agent plan.
7. Generate a workflow map.
8. Build a limited, human-reviewed pilot.

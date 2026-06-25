# rankAutomationOpportunities Action

This package contains a no-auth GPT Action endpoint for ranking SMB automation opportunities.

## Files

```txt
app/api/opportunity-ranker/route.ts
lib/automation-opportunity-ranker.ts
openapi/rank-automation-opportunities.openapi.json
examples/opportunity-ranker-request.example.json
app/api/openapi/rank-automation-opportunities/route.ts
lib/opportunity-ranker-openapi.ts
```

## What the Action does

`rankAutomationOpportunities` accepts a list of workflow candidates and returns a safety-adjusted ranking.

It scores each workflow by:

- frequency
- time saved potential
- revenue impact
- customer experience impact
- data readiness
- tool readiness
- process clarity
- ownership clarity
- risk level
- human review plan

It returns:

- ranked opportunities
- top recommendations
- recommendation category for each workflow
- safety and readiness blockers
- human-review requirement
- recommended automation mode
- factor-level score breakdown
- portfolio summary

## Recommendation categories

```txt
Automate now   = strong pilot candidate with manageable risk and review
Clean up first = worthwhile opportunity, but readiness gaps exist
Keep human     = too sensitive, risky, or under-reviewed for automation
Revisit later  = lower priority based on impact or frequency
```

## Score scale

```txt
0 = Not ready / very low
1 = Needs cleanup / low
2 = Mostly ready / medium
3 = Ready / high
```

For `riskLevel`, a higher score means lower risk and stronger suitability for a controlled pilot:

```txt
0 = high-risk workflow or sensitive final decision
1 = meaningful risk that needs cleanup and review
2 = moderate risk with manageable review points
3 = low-risk workflow suitable for a controlled pilot
```

## Required request body

```txt
opportunities[]
```

Each opportunity must include:

```txt
workflowName
```

The factor scores are optional, but the ranking is better when all factor scores are provided. Missing factor scores default to `1`, which means low readiness / needs cleanup.

## Vercel / Next.js placement

Place the files into your Next.js App Router project:

```txt
your-project/
  app/
    api/
      opportunity-ranker/
        route.ts
      openapi/
        rank-automation-opportunities/
          route.ts
  lib/
    automation-opportunity-ranker.ts
    opportunity-ranker-openapi.ts
  openapi/
    rank-automation-opportunities.openapi.json
  examples/
    opportunity-ranker-request.example.json
```

Vercel deploys files under `app/api/.../route.ts` as functions in a Next.js App Router project.

## GPT Action setup

In GPT Builder:

```txt
Authentication: None
Schema: Paste the OpenAPI JSON, or import from your deployed /api/openapi/rank-automation-opportunities endpoint.
Server URL: The dynamic OpenAPI endpoint uses your deployed origin. If you paste the static JSON manually, replace https://YOUR-VERCEL-DOMAIN.vercel.app with your deployed Vercel URL.
```

You will also need a public privacy policy URL if you publish or share the GPT with Actions.

## Local test example

```bash
curl -X POST "http://localhost:3000/api/opportunity-ranker" \
  -H "Content-Type: application/json" \
  -d @examples/opportunity-ranker-request.example.json
```

## Notes

- This endpoint is stateless.
- It does not store submitted workflow information.
- It does not require API keys, cookies, sessions, or user authentication.
- It uses deterministic scoring logic only.
- It is not a substitute for professional financial, legal, tax, HR, medical, underwriting, or compliance judgment.
- Customer-facing, financial, legal, tax, accounting, HR, medical, or sensitive workflows should remain human-reviewed.
- If you add this to the same Vercel project as other GPT Actions, you can either import this schema separately or merge the `/api/opportunity-ranker` path and components into a combined OpenAPI schema.

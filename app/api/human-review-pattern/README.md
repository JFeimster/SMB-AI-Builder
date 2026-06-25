# suggestHumanReviewPattern Action

This package contains a no-auth GPT Action endpoint for recommending human-in-the-loop approval models for workflows.

## Files

```txt
app/api/human-review-pattern/route.ts
app/api/human-review-pattern/human-review-pattern.ts
app/api/human-review-pattern/human-review-pattern-openapi.ts
app/api/human-review-pattern/human-review-pattern.openapi.json
app/api/human-review-pattern/human-review-pattern-request.example.json
app/api/human-review-pattern/route (optional-endpoints).ts
```

## What the Action does

`suggestHumanReviewPattern` takes workflow risk profiles and recommends the appropriate level of human review (e.g., Draft-only, Approval queue, Exception review).

It returns:

- a recommended review pattern
- human vs AI roles
- whether approval is required before action
- exception and escalation rules
- audit and rollback recommendations

## Input fields

- `workflowName`: string (required)
- `riskLevel`: "low" | "medium" | "high" (required)
- `customerFacing`: boolean (required)
- `touchesSensitiveData`: boolean (required)
- `failureImpact`: "low" | "medium" | "high" (required)
- `decisionType`: string (optional)
- `requiresLicensedJudgment`: boolean (optional)
- `currentReviewProcess`: string (optional)
- `notes`: string (optional)

## Safety Stance

These Actions support workflow planning and pilot design. They are not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. High risk, sensitive data, and licensed judgment workflows will always result in recommendations for human approval before action, or draft-only assistance.

## Vercel / Next.js placement

Place the files into your Next.js App Router project:

```txt
your-project/
  app/
    api/
      human-review-pattern/
        route.ts
```

## Local test example

```bash
curl -X POST "http://localhost:3000/api/human-review-pattern" \
  -H "Content-Type: application/json" \
  -d @app/api/human-review-pattern/human-review-pattern-request.example.json
```

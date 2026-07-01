# buildPilotTestPlan Action

This package contains a no-auth GPT Action endpoint for creating structured SMB automation pilot plans.

## Files

```txt
app/api/pilot-plan/route.ts
app/api/pilot-plan/pilot-plan.ts
app/api/pilot-plan/pilot-plan-openapi.ts
app/api/pilot-plan/pilot-plan.openapi.json
app/api/pilot-plan/pilot-plan-request.example.json
app/api/pilot-plan/route (optional-endpoints).ts
```

## What the Action does

`buildPilotTestPlan` accepts details about a proposed automation workflow and generates a structured test plan.

It returns:

- test period and scope
- sample data guidance
- success metrics and failure criteria
- human review requirements
- 5-8 practical test cases
- go/no-go criteria
- rollback checklist
- risk warnings based on safety factors
- recommended automation mode

## Input fields

- `workflowName`: string (required)
- `automationGoal`: string (required)
- `riskLevel`: "low" | "medium" | "high" (required)
- `successMetrics`: array of strings (required)
- `users`: array of strings (optional)
- `testPeriodDays`: number (optional)
- `failureCriteria`: array of strings (optional)
- `humanReviewPoints`: array of strings (optional)
- `rollbackPlan`: string (optional)
- `sampleDataDescription`: string (optional)
- `touchesCustomers`: boolean (optional)
- `touchesMoney`: boolean (optional)
- `touchesSensitiveData`: boolean (optional)
- `touchesLegalComplianceHRMedicalOrFinance`: boolean (optional)
- `notes`: string (optional)

## Safety Stance

These Actions support workflow planning and pilot design. They are not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. Sensitive decisions should stay under qualified human review. High-risk workflows will always trigger a recommendation for "Draft-only" or "Human approval before action" patterns rather than autonomous execution.

## Vercel / Next.js placement

Place the files into your Next.js App Router project:

```txt
your-project/
  app/
    api/
      pilot-plan/
        route.ts
```

## Local test example

```bash
curl -X POST "http://localhost:3000/api/pilot-plan" \
  -H "Content-Type: application/json" \
  -d @app/api/pilot-plan/pilot-plan-request.example.json
```

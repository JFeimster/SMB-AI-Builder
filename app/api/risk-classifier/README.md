# classifyWorkflowRisk Action

This package contains a no-auth GPT Action endpoint for classifying workflow risk and recommending a safer automation mode.

## Files

```txt
app/api/risk-classifier/route.ts
app/api/risk-classifier/risk-classifier.ts
app/api/risk-classifier/risk-classifier-openapi.ts
app/api/risk-classifier/risk-classifier.openapi.json
app/api/risk-classifier/risk-classifier-request.example.json
app/api/risk-classifier/route (optional-endpoints).ts
```

## What the Action does

`classifyWorkflowRisk` analyzes a workflow's characteristics (such as touching money, legal, medical, or customers) to assign a risk level (low, medium, high) and recommend safe operation patterns.

It returns:

- a computed risk level
- reasons for the risk classification
- a recommended automation mode (e.g., Draft-only)
- a safer workflow pattern
- actions that are explicitly not recommended

## Input fields

- `workflowName`: string (required)
- `workflowDescription`: string (required)
- `touchesCustomers`: boolean (required)
- `touchesMoney`: boolean (required)
- `touchesSensitiveData`: boolean (required)
- `touchesLegal`: boolean (optional)
- `touchesHR`: boolean (optional)
- `touchesMedical`: boolean (optional)
- `touchesCompliance`: boolean (optional)
- `touchesTaxAccountingOrFinance`: boolean (optional)
- `touchesLendingCreditOrUnderwriting`: boolean (optional)
- `failureImpact`: "low" | "medium" | "high" (optional)
- `requiresLicensedJudgment`: boolean (optional)
- `notes`: string (optional)

## Safety Stance

These Actions support workflow planning and pilot design. They are not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. This action specifically acts as a classifier to catch high-risk assumptions, but it does not claim final compliance or legal safety. Sensitive decisions should stay under qualified human review.

## Vercel / Next.js placement

Place the files into your Next.js App Router project:

```txt
your-project/
  app/
    api/
      risk-classifier/
        route.ts
```

## Local test example

```bash
curl -X POST "http://localhost:3000/api/risk-classifier" \
  -H "Content-Type: application/json" \
  -d @app/api/risk-classifier/risk-classifier-request.example.json
```

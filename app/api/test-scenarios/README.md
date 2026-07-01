# generateTestScenarios Action

This package contains a no-auth GPT Action endpoint for generating test scenarios for an AI agent or automation.

## Files

```txt
app/api/test-scenarios/route.ts
app/api/test-scenarios/test-scenarios.ts
app/api/test-scenarios/test-scenarios-openapi.ts
app/api/test-scenarios/test-scenarios.openapi.json
app/api/test-scenarios/test-scenarios-request.example.json
app/api/test-scenarios/route (optional-endpoints).ts
```

## What the Action does

`generateTestScenarios` accepts details about a proposed automation workflow and generates standard test scenarios using fictional data.

It returns scenarios categorized by:

- normal requests
- missing data
- ambiguous requests
- sensitive data
- escalations
- failures
- permission boundaries

It also returns expected behaviors and human handoff triggers.

## Input fields

- `workflowName`: string (required)
- `workflowType`: string (required)
- `riskLevel`: "low" | "medium" | "high" (required)
- `inputs`: array of strings (required)
- `outputs`: array of strings (required)
- `edgeCases`: array of strings (optional)
- `humanHandoffRules`: array of strings (optional)
- `touchesCustomers`: boolean (optional)
- `touchesMoney`: boolean (optional)
- `touchesSensitiveData`: boolean (optional)
- `touchesLegalComplianceHRMedicalOrFinance`: boolean (optional)
- `notes`: string (optional)

## Safety Stance

These Actions support workflow planning and pilot design. They are not legal, financial, tax, HR, lending, accounting, medical, underwriting, or compliance advice. This action specifically warns to use fictional data for test scenarios, and not real customer data.

## Vercel / Next.js placement

Place the files into your Next.js App Router project:

```txt
your-project/
  app/
    api/
      test-scenarios/
        route.ts
```

## Local test example

```bash
curl -X POST "http://localhost:3000/api/test-scenarios" \
  -H "Content-Type: application/json" \
  -d @app/api/test-scenarios/test-scenarios-request.example.json
```

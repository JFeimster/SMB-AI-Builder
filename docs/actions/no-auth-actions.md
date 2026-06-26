# No-Auth Actions

These actions do not require authentication. They should be stateless and not store sensitive data.

## Available Actions
- `scoreAutomationReadiness`
- `rankAutomationOpportunities`
- `generateWorkflowMap`
- `buildPilotPlan`
- `classifyWorkflowRisk`
- `suggestHumanReviewPattern`

## Planned Actions
- `generateSystemPrompt`
- `evaluateConnectorRisk`

## Guidelines
- Do not process personally identifiable information (PII).
- Do not accept passwords or private keys.
- Input validation is mandatory.
- Return structured JSON responses clearly explaining outcomes.

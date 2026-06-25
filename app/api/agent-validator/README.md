# Validate Agent Blueprint Action

**Endpoint**: `POST /api/agent-validator`

**Purpose**: Validate whether an AI agent blueprint has enough instructions, guardrails, permission boundaries, handoff rules, and tests to be piloted safely.

## Input fields

- `agentName` (string, required)
- `agentRole` (string, required)
- `targetUser` (string, required)
- `primaryJob` (string, required)
- `inputsNeeded` (array of strings, required)
- `outputsProduced` (array of strings, required)
- `instructions` (string, required)
- `guardrails` (array of strings, required)
- `permissionBoundaries` (array of strings, required)
- `humanHandoffRules` (array of strings, required)
- `testScenarios` (array of strings, required)
- `failureModes` (array of strings, optional)
- `escalationRules` (array of strings, optional)
- `touchesCustomers` (boolean, optional)
- `touchesMoney` (boolean, optional)
- `touchesSensitiveData` (boolean, optional)
- `touchesLegalComplianceHRMedicalOrFinance` (boolean, optional)
- `notes` (string, optional)

## Output

Returns a validation status, indicating if the agent has enough guardrails or if it has testing gaps and unsafe permissions, providing a recommended pilot automation mode.

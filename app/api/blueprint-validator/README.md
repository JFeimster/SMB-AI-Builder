# Validate Automation Blueprint Action

**Endpoint**: `POST /api/blueprint-validator`

**Purpose**: Validate whether an automation blueprint is complete and safe enough for pilot planning.

## Input fields

- `workflowName` (string, required)
- `automationGoal` (string, required)
- `trigger` (string, required)
- `inputs` (array of strings, required)
- `tools` (array of strings, required)
- `workflowSteps` (array of strings, required)
- `aiTasks` (array of strings, required)
- `humanReviewPoints` (array of strings, required)
- `outputs` (array of strings, required)
- `successMetrics` (array of strings, required)
- `rollbackPlan` (string, required)
- `exceptions` (array of strings, optional)
- `riskLevel` ("low" | "medium" | "high", optional)
- `touchesCustomers` (boolean, optional)
- `touchesMoney` (boolean, optional)
- `touchesSensitiveData` (boolean, optional)
- `touchesLegalComplianceHRMedicalOrFinance` (boolean, optional)
- `notes` (string, optional)

## Output

Returns validation status, missing/weak fields, risk warnings, human review required status, and recommendations on how to proceed safely.

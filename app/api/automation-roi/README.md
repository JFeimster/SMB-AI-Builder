# Calculate Automation ROI Action

**Endpoint**: `POST /api/automation-roi`

**Purpose**: Estimate potential time savings, cost savings, and payback period for an SMB workflow automation.

## Input fields

- `workflowName` (string, required)
- `timePerTaskMinutes` (number, required)
- `taskFrequency` (object, required)
  - `count` (number, required)
  - `period` ("day" | "week" | "month" | "quarter" | "year", required)
- `laborCostPerHour` (number, required)
- `automationSetupCostEstimate` (number, optional)
- `automationMaintenanceCostMonthly` (number, optional)
- `humanReviewTimeMinutes` (number, optional)
- `expectedAutomationCoveragePercent` (number from 0 to 100, optional)
- `notes` (string, optional)
- `riskLevel` ("low" | "medium" | "high", optional)
- `touchesSensitiveWorkflow` (boolean, optional)

## Output

Returns estimated savings, ROI metrics, human review requirements based on risk levels, recommendations, and warnings.

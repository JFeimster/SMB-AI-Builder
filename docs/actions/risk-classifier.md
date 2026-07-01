# classifyWorkflowRisk

**Status**: Available

## Purpose
Classify the inherent risk of automating a specific workflow.

## Auth Type
None

## Inputs
workflowName (string), dataTypes (array), touchesCustomers (boolean)

## Outputs
riskLevel, riskFactors, mitigationStrategies

## Safe Use Cases
- Assessing risk before building automation.

## Unsafe Use Cases
- Replacing formal legal, compliance, or security audits.

## Human Review Requirements
Requires human security or compliance review for high-risk flags.

## Example Prompt
> Classify the risk of automating customer refund processing.

## Example Output Structure
```json
{
  "riskLevel": "High",
  "riskFactors": []
}
```

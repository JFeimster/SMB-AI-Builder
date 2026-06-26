# scoreAutomationReadiness

**Status**: Available

## Purpose
Score a workflow's readiness for automation based on clarity, risk, and data.

## Auth Type
None

## Inputs
workflowName (string), scores (object with 1-3 ratings)

## Outputs
totalScore, readinessLevel, recommendationCategory, biggestBlocker

## Safe Use Cases
- Internal workflow assessment, planning pilot automations.

## Unsafe Use Cases
- Executing the actual workflow, scoring employee performance.

## Human Review Requirements
Human review required to finalize the decision to automate.

## Example Prompt
> Evaluate the automation readiness for our customer onboarding workflow.

## Example Output Structure
```json
{
  "totalScore": 25,
  "readinessLevel": "Ready",
  "recommendationCategory": "Automate now"
}
```

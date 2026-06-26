# buildPilotPlan

**Status**: Available

## Purpose
Create a safe, limited pilot plan for testing an automation.

## Auth Type
None

## Inputs
workflowName (string), pilotScope (string)

## Outputs
pilotPlan (object with phases, metrics, rollback steps)

## Safe Use Cases
- Planning a 2-week limited test of a new AI tool.

## Unsafe Use Cases
- Deploying untested automation directly to all customers.

## Human Review Requirements
Mandatory human review of the pilot plan before starting.

## Example Prompt
> Create a 14-day pilot plan for testing AI email drafting.

## Example Output Structure
```json
{
  "phases": [],
  "rollbackPlan": ""
}
```

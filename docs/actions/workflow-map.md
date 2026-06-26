# generateWorkflowMap

**Status**: Available

## Purpose
Generate a structured map of a workflow's steps, inputs, and outputs.

## Auth Type
None

## Inputs
workflowName (string), steps (array of strings)

## Outputs
workflowMap (object detailing steps, actors, tools)

## Safe Use Cases
- Documenting existing processes.

## Unsafe Use Cases
- Enforcing compliance or legal process requirements automatically.

## Human Review Requirements
Review to ensure the mapped workflow accurately reflects reality.

## Example Prompt
> Map out the steps for our monthly payroll reconciliation.

## Example Output Structure
```json
{
  "workflowName": "Payroll",
  "steps": []
}
```

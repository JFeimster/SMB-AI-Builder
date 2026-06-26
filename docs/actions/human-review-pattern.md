# suggestHumanReviewPattern

**Status**: Available

## Purpose
Suggest the best pattern for keeping a human in the loop for a workflow.

## Auth Type
None

## Inputs
workflowName (string), decisionType (string)

## Outputs
reviewPattern (e.g., Maker-Checker, Exception-only), implementationSteps

## Safe Use Cases
- Designing oversight for AI-assisted workflows.

## Unsafe Use Cases
- Removing humans entirely from sensitive decisions.

## Human Review Requirements
The output explicitly defines how humans should review the work.

## Example Prompt
> How should humans review AI-generated sales quotes?

## Example Output Structure
```json
{
  "reviewPattern": "Maker-Checker",
  "implementationSteps": []
}
```

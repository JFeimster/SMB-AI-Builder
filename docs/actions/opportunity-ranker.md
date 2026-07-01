# rankAutomationOpportunities

**Status**: Available

## Purpose
Rank multiple automation opportunities to find the best first target.

## Auth Type
None

## Inputs
businessName (string), opportunities (array of workflow inputs)

## Outputs
rankedOpportunities, topRecommendations, portfolioSummary

## Safe Use Cases
- Prioritizing internal workflows for pilot phases.

## Unsafe Use Cases
- Making final financial investment decisions without review.

## Human Review Requirements
Human review needed to approve the prioritization and budget.

## Example Prompt
> Rank these three workflows: invoice processing, lead follow-up, and report generation.

## Example Output Structure
```json
{
  "rankedOpportunities": [],
  "topRecommendations": []
}
```

# evaluateConnectorRisk

**Status**: Planned

## Purpose
Evaluate the risk of using a specific third-party API or connector.

## Auth Type
None

## Inputs
connectorName (string), dataAccessed (array)

## Outputs
riskScore, concerns, alternatives

## Safe Use Cases
- Preliminary vetting of integration tools.

## Unsafe Use Cases
- Final security approval of a third-party vendor.

## Human Review Requirements
IT or security team must review connector risks.

## Example Prompt
> Evaluate the risk of using Zapier to move customer emails to Google Sheets.

## Example Output Structure
```json
{
  "riskScore": 7,
  "concerns": ["Data exfiltration"]
}
```

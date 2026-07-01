# Quickbooks Tool-Ops Layer

## Purpose
Defines protocols for integrating with the QuickBooks Online API to handle accounting and financial workflows safely.

## Best Used For
- Creating invoices automatically
- Syncing customer data
- Logging expenses
- Retrieving payment statuses
- Generating basic financial summaries

## Not For
- Performing complex tax calculations without accountant review
- Handling payroll operations
- Authorizing actual fund transfers

## Common Tasks
- Draft a new invoice for a client
- Create a new customer profile
- Query the status of an unpaid invoice

## Inputs Needed
- Customer details
- Line items and amounts
- Invoice dates

## Outputs
- Invoice IDs
- Customer IDs
- Financial data representations (JSON)

## Skills
List related skills in `tools/quickbooks/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/quickbooks/prompts/` if present.

## Risk Notes
Extreme caution required. Must include disclaimers that AI does not provide financial advice. Handle OAuth 2.0 flow securely. Never automate final invoice sending without human approval.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

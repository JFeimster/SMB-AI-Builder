# Sample Automation: Weekly Reporting

## Purpose
Shows an internal, low-risk automation for summarizing data.

## Fictional scenario
"Growth Marketing Agency" (Fictional) needs to send internal weekly updates on ad spend and lead volume across 5 client accounts.

## Workflow summary
Pull data from Ad platforms -> Pull data from CRM -> Combine into a summary -> Post in Slack.

## Current-state process
An analyst spends 3 hours every Monday morning downloading CSVs and copy-pasting numbers into a Slack message.

## Pain points
- Highly repetitive, low-value work.
- Prone to copy-paste errors.

## Readiness considerations
- APIs exist for all platforms.
- Data is numerical and structured.
- Low risk (internal audience only).

## Human review points
- The Slack message is posted in an internal channel. The team reviews it. If a number looks wildly off, an analyst investigates.

## Recommended automation mode
**Fully Automated** (with exception review).

## Suggested pilot
Automate the data pull for just 1 of the 5 clients first to ensure the math matches the manual process perfectly.

## Risks and disclaimers
*Disclaimer: This is a fictional example for planning purposes. Ensure automated reports clearly state that they are machine-generated.*

## Sample output
(Slack Message): "🤖 Automated Weekly Update for Client A: Spend: $500, Leads: 25, CPL: $20. (Data updated as of 8:00 AM Monday)."

## Next step
Build the data formatting script to normalize the outputs from the different APIs.

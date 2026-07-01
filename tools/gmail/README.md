# Gmail Tool-Ops Layer

## Purpose
Outlines how AI agents should draft, read, and manage emails via the Gmail API to facilitate communication workflows.

## Best Used For
- Drafting client update emails
- Parsing incoming support requests
- Sending automated alerts
- Organizing inbox with labels
- Scheduling summary emails

## Not For
- Sending mass marketing campaigns (spam)
- Processing highly sensitive personal data without consent
- Automated deletion of important correspondence

## Common Tasks
- Draft an email based on a summary
- Read unread emails with a specific label
- Reply to a support ticket automatically

## Inputs Needed
- Recipient addresses
- Email subject lines
- Body content
- Search filters

## Outputs
- Draft IDs
- Sent email confirmations
- Parsed email data (JSON)

## Skills
List related skills in `tools/gmail/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/gmail/prompts/` if present.

## Risk Notes
Requires strict OAuth scopes. Avoid sending unreviewed drafts for critical communications. Be aware of Gmail sending limits.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

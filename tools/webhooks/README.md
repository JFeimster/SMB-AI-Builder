# Webhooks Tool-Ops Layer

## Purpose
Guidelines and tooling for receiving, verifying, and processing incoming webhooks from external services.

## Best Used For
- Triggering workflows on external events
- Receiving payment confirmations
- Processing form submissions
- Handling repository activity alerts
- Integrating asynchronous APIs

## Not For
- Synchronous data fetching
- Handling high-volume streams without queuing mechanisms
- Processing unverified requests

## Common Tasks
- Create a webhook verification middleware
- Define a payload schema for an incoming event
- Route webhook events to specific actions

## Inputs Needed
- Webhook payload schemas
- Verification secrets
- Event types

## Outputs
- Verification logic
- Routing handlers
- Processing confirmation logs

## Skills
List related skills in `tools/webhooks/skills/`. Note: Subfolders are created only when needed since Git does not preserve empty directories.

## Prompts
Point to `tools/webhooks/prompts/` if present.

## Risk Notes
Always verify webhook signatures to prevent spoofing. Handle events idempotently to avoid duplicate processing. Respond quickly (e.g., 200 OK) before processing complex logic.

## Related Site Pages
- Relevant documentation or capability pages will be linked here.

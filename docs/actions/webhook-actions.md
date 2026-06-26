# Webhook Actions

Event-driven actions triggered by external systems via webhooks.

## Guidelines
- Verify payload signatures.
- Process webhooks asynchronously if operations are long-running.
- Ensure idempotent processing to handle duplicate events safely.

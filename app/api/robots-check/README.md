# checkRobotsTxt Action

This package contains a no-auth GPT Action endpoint for: Check public robots.txt before suggesting crawl-like automations.

## Files

```txt
app/api/robots-check/route.ts
app/api/robots-check/route.optional-endpoints.ts
app/api/robots-check/robots-check.ts
app/api/robots-check/robots-check-openapi.ts
app/api/robots-check/robots-check.openapi.json
app/api/robots-check/robots-check-request.example.json
```

## Setup

Vercel deploys files under `app/api/robots-check/route.ts` as functions in a Next.js App Router project.

In GPT Builder:

```txt
Authentication: None
Schema: Paste the OpenAPI JSON.
```

# generateActionSpecFromEndpoint Action

This package contains a no-auth GPT Action endpoint for: Help the builder turn a plain endpoint definition into an OpenAPI Action schema draft.

## Files

```txt
app/api/openapi-helper/route.ts
app/api/openapi-helper/route.optional-endpoints.ts
app/api/openapi-helper/openapi-helper.ts
app/api/openapi-helper/openapi-helper-openapi.ts
app/api/openapi-helper/openapi-helper.openapi.json
app/api/openapi-helper/openapi-helper-request.example.json
```

## Setup

Vercel deploys files under `app/api/openapi-helper/route.ts` as functions in a Next.js App Router project.

In GPT Builder:

```txt
Authentication: None
Schema: Paste the OpenAPI JSON.
```

# geocodeLocation Action

This package contains a no-auth GPT Action endpoint for: Convert city, postal code, or address-like location text into coordinates for weather or local planning Actions.

## Files

```txt
app/api/geocode/route.ts
app/api/geocode/route.optional-endpoints.ts
app/api/geocode/geocode.ts
app/api/geocode/geocode-openapi.ts
app/api/geocode/geocode.openapi.json
app/api/geocode/geocode-request.example.json
```

## Setup

Vercel deploys files under `app/api/geocode/route.ts` as functions in a Next.js App Router project.

In GPT Builder:

```txt
Authentication: None
Schema: Paste the OpenAPI JSON.
```

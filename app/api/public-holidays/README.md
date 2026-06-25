# getPublicHolidays Action

This package contains a no-auth GPT Action endpoint for: Return public holidays to help plan follow-ups, reminders, staffing, campaigns, and due dates.

## Files

```txt
app/api/public-holidays/route.ts
app/api/public-holidays/route.optional-endpoints.ts
app/api/public-holidays/public-holidays.ts
app/api/public-holidays/public-holidays-openapi.ts
app/api/public-holidays/public-holidays.openapi.json
app/api/public-holidays/public-holidays-request.example.json
```

## Setup

Vercel deploys files under `app/api/public-holidays/route.ts` as functions in a Next.js App Router project.

In GPT Builder:

```txt
Authentication: None
Schema: Paste the OpenAPI JSON.
```

# getWeatherByLocation Action

This package contains a no-auth GPT Action endpoint for: Look up weather for scheduling-sensitive SMB workflows such as field service, landscaping, construction, delivery, and events.

## Files

```txt
app/api/weather/route.ts
app/api/weather/route.optional-endpoints.ts
app/api/weather/weather.ts
app/api/weather/weather-openapi.ts
app/api/weather/weather.openapi.json
app/api/weather/weather-request.example.json
```

## Setup

Vercel deploys files under `app/api/weather/route.ts` as functions in a Next.js App Router project.

In GPT Builder:

```txt
Authentication: None
Schema: Paste the OpenAPI JSON.
```

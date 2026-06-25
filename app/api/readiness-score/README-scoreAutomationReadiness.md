# scoreAutomationReadiness Action

This package contains a no-auth GPT Action endpoint for scoring SMB automation readiness.

## Files

```txt
app/api/readiness-score/route.ts
lib/automation-readiness.ts
openapi/score-automation-readiness.openapi.json
examples/readiness-score-request.example.json
app/api/openapi/route.ts
lib/readiness-openapi.ts
```

## What the Action does

`scoreAutomationReadiness` accepts ten readiness category scores from `0` to `3` and returns:

- total score out of 30
- readiness band
- recommendation category
- biggest blocker
- lowest-scoring categories
- human review requirement
- risk flags
- recommended next step

## Score scale

```txt
0 = Not ready
1 = Needs cleanup
2 = Mostly ready
3 = Ready for pilot
```

For `riskLevel`, a higher score means lower risk and stronger suitability for a controlled pilot.

## Readiness bands

```txt
0-10  = Do not automate yet
11-20 = Clean up first
21-26 = Pilot carefully
27-30 = Ready for automation pilot
```

## Vercel / Next.js placement

Place the files into your Next.js App Router project:

```txt
your-project/
  app/
    api/
      readiness-score/
        route.ts
  lib/
    automation-readiness.ts
  openapi/
    score-automation-readiness.openapi.json
```

Vercel deploys files under `app/api/.../route.ts` as functions in a Next.js App Router project.

## GPT Action setup

In GPT Builder:

```txt
Authentication: None
Schema: Paste the OpenAPI JSON, or import from your deployed /api/openapi endpoint.
Server URL: The /api/openapi endpoint dynamically uses the deployed origin. If you paste the JSON file manually, replace https://YOUR-VERCEL-DOMAIN.vercel.app with your deployed Vercel URL.
```

You will also need a public privacy policy URL if you publish or share the GPT with Actions.

## Local test example

```bash
curl -X POST "http://localhost:3000/api/readiness-score" \
  -H "Content-Type: application/json" \
  -d @examples/readiness-score-request.example.json
```

## Notes

- This endpoint is stateless.
- It does not store submitted workflow information.
- It does not require API keys, cookies, sessions, or user authentication.
- It should not be used to make final financial, legal, tax, HR, medical, underwriting, or compliance decisions.


## Optional OpenAPI URL route

This package also includes:

```txt
app/api/openapi/route.ts
lib/readiness-openapi.ts
```

After deployment, this serves the schema at:

```txt
https://YOUR-VERCEL-DOMAIN.vercel.app/api/openapi
```

You can paste the static JSON file instead if you prefer.

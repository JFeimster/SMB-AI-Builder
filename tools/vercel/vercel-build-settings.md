# Build Settings

This file documents the recommended deployment configuration for the project via `vercel.json`.

## Current Recommended Safe `vercel.json`

At the repository root, `vercel.json` should default to this safe posture:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}
```

### What this means:
- **`false`** means automatic Git deployments are disabled. Pushing to GitHub will not trigger an automatic Vercel build to preview or production.
- **`true`** means automatic Git deployments are enabled.
- The repository owner can manually deploy via the Vercel Dashboard or change this to `true` when they are ready to establish a CI/CD pipeline.

---

## Static Site Settings
If deploying the raw HTML:
- Keep the Framework Preset in Vercel as "Other".
- Leave the Build Command and Output Directory blank.
- Vercel will serve the files directly from the root.

## Next.js Settings
If deploying the Next.js version:
- Vercel automatically detects Next.js.
- Framework Preset should be "Next.js".
- Build Command defaults to `next build` (usually triggered via `npm run build`).
- Output Directory defaults to `.next`.

## Hybrid Repo Notes
If the repository contains both raw static files at the root and a Next.js `app/` structure:
- You must clearly specify via Vercel settings which mode you intend to build, otherwise the build step may conflict or overwrite standard routing.
- If running Next.js, move static HTML files into the `public/` directory so they are served correctly alongside the app router, or rewrite them completely into Next.js routes.

## Manual Deploy Notes
While `deploymentEnabled: false` is active, you must deploy manually:
- Via Vercel CLI: `vercel` for preview, `vercel --prod` for production.
- Via Dashboard: Go to Deployments > Deploy.

## Production Deploy Caution
Before changing `deploymentEnabled` to `true`, ensure that:
1. You have completed the Production Checklist.
2. The `main` branch is stable.
3. Your custom domain is secured and configured.
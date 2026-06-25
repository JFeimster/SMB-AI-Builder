# Build Settings Documentation

Understanding the `vercel.json` configuration for this project.

## Recommended Safe `vercel.json`

The root `vercel.json` should default to:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}
```

### Explanation:
- `false` means automatic Git deployments (e.g., pushing to main triggers a prod build) are disabled. This enforces manual QA and deployment.
- `true` means automatic Git deployments are enabled.
- The project owner can change this back to `true` when they are ready to allow automatic preview and production deployments.

## Static Site Settings
For a plain static site, Vercel generally requires zero configuration. The `deploymentEnabled` setting is used solely to control deployment flow, not build output.

## Next.js Settings
Next.js handles its own build step (`npm run build`). Vercel will automatically detect a Next.js project. You generally do not need to configure build commands in `vercel.json` unless overriding defaults.

## Hybrid Repo Notes
If combining static pages and Next.js, rely on Vercel's Next.js preset. Be aware of routing overlaps.

## Manual Deploy Notes
While `deploymentEnabled: false` is active, you must use the Vercel CLI (`vercel` for preview, `vercel --prod` for production) or the Vercel Dashboard to trigger deployments.

## Production Deploy Caution
Never merge to a production branch assuming it will auto-deploy if `deploymentEnabled` is false. Always verify the deployment status in the Vercel dashboard.
# Static Access Control Warning

**WARNING:** Static partner config is not secure partner-only access.

The configuration in `partners.json` and logic in `partner-config.js` or `embed-loader.js` (such as checking `document.referrer` or the current origin against an allowed domains list) is entirely client-side. This means it can be bypassed or manipulated by malicious actors or direct requests.

**Real restriction requires:**
- Hosting-level protection (e.g., CORS policies enforced by the server)
- Authentication (Auth)
- Signed URLs
- Backend enforcement

Use the static config for UX purposes (e.g., showing the right branding) and basic deterrence, but do not rely on it to secure sensitive data or strictly enforce paid partner-only access.

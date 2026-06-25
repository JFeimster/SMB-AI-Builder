# Partner Embeds

## Overview
This folder contains the standalone, embeddable versions of the SMB AI Workflow & Agent Builder. These tools are designed to be embedded in partner resource hubs, blogs, notion docs, client portals, and affiliate pages without duplicating the entire landing page.

## Snippets

### 1. Full iframe
This gives the user the full mini-tool flow with the questions and score.

```html
<iframe
  src="https://smb-ai-builder.vercel.app/embeds/iframe.html?partner=your-partner-id"
  width="940"
  height="1200"
  style="border:0; max-width:100%;"
  title="SMB AI Workflow & Agent Builder">
</iframe>
```

### 2. Compact iframe
A smaller variation ideal for sidebars or tight spaces.

```html
<iframe
  src="https://smb-ai-builder.vercel.app/embeds/iframe-compact.html?partner=your-partner-id"
  width="420"
  height="680"
  style="border:0; max-width:100%;"
  title="SMB AI Workflow Readiness Check">
</iframe>
```

### 3. Affiliate Card iframe
A tiny static card format.

```html
<iframe
  src="https://smb-ai-builder.vercel.app/embeds/affiliate-card.html?partner=your-partner-id"
  width="400"
  height="380"
  style="border:0; max-width:100%;"
  title="SMB AI Affiliate Card">
</iframe>
```

### 4. Script Embed
A smart embed script that dynamically creates the iframe based on data attributes. Use `data-size="full"`, `"compact"`, or `"card"`.

```html
<div
  id="smb-ai-builder-widget"
  data-partner="your-partner-id"
  data-size="full">
</div>
<script src="https://smb-ai-builder.vercel.app/embeds/embed-loader.js" defer></script>
```

*(Note: Replace `https://smb-ai-builder.vercel.app` with the actual production domain where appropriate, but this codebase defaults to using the production vercel url).*

## Partner IDs and Tracking
By using `?partner=your-partner-id` in the iframe URL or `data-partner="your-partner-id"` in the script tag, the tool will:
- Update the attribution text (e.g. "Shared by Agency Partner")
- Append UTM tags to the primary CTA
- Pass the referral `ref` to tracking links

The ID matches keys inside `partners.json` / `partner-config.js` to show custom naming. If an ID is passed that does not exist in the config, it will still pass the ID to the tracking parameters and display it.

## Safety & Security Notice
**Important:** `partners.json` and `partner-config.js` are strictly for configuration and display. They are **not secure access control mechanisms**. Do not imply secure, partner-only access to this tool unless a proper backend or hosting layer handles authentication.

## Dimensions Constraints
- Full widget max-width: 940px
- Full widget max-height: 1200px
- Compact widget max-width: 420px (responsive down to 360px)
- Compact widget max-height: 680px (responsive up to 720px)

## Platform Integration Notes
- **Notion**: Use the standard iframe snippet.
- **WordPress/Webflow/Wix/Framer/Carrd**: Use the HTML embed block and paste the Script Embed snippet or iframe snippet directly.

## QA Checklist
When reviewing or modifying this embed package, verify:
- [ ] No horizontal scrolling occurs on mobile devices.
- [ ] CTAs use safe URL tracking parameters.
- [ ] Buttons are keyboard accessible.
- [ ] No external dependencies are used (vanilla JS and scoped CSS only).
- [ ] No fake partner claims, testimonials, or guarantees are invented.

See `demo-partner-page.html` for local testing.

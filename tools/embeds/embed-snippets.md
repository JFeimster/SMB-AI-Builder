# Embed Snippets

These snippets can be provided to partners and affiliates for embedding the widget on their sites. Replace `YOURDOMAIN.com` with the actual domain where the assets are hosted.

## Full Iframe Embed

```html
<iframe
  src="https://YOURDOMAIN.com/embeds/iframe.html?partner=[partner-id]"
  width="100%"
  height="1200"
  style="max-width: 940px; border: none; overflow: hidden;"
  title="SMB AI Workflow Builder">
</iframe>
```

## Compact Iframe Embed

```html
<iframe
  src="https://YOURDOMAIN.com/embeds/iframe-compact.html?partner=[partner-id]"
  width="100%"
  height="680"
  style="min-width: 360px; max-width: 520px; min-height: 540px; max-height: 720px; border: none; overflow: hidden;"
  title="SMB AI Workflow Builder (Compact)">
</iframe>
```

## Affiliate Card Embed

```html
<iframe
  src="https://YOURDOMAIN.com/embeds/affiliate-card.html?partner=[partner-id]"
  width="100%"
  height="380"
  style="max-width: 420px; border: none; overflow: hidden;"
  title="SMB AI Workflow Builder Affiliate Card">
</iframe>
```

## Script Embed (Loader)

The loader expects either `#smb-ai-builder-widget` or `.smb-ai-builder-widget` as the target container.

```html
<div id="smb-ai-builder-widget" data-partner="[partner-id]"></div>
<script src="https://YOURDOMAIN.com/embeds/embed-loader.js" async defer></script>
```

# Embed Generation Rules

When creating embeddable versions of SMB AI Builder tools for third-party partners, adhere to the following constraints to ensure safety, tracking, and visual consistency.

## 1. Dimensional Constraints
- **Maximum Width:** 940px. The design must gracefully scale down to mobile widths (e.g., 320px).
- **Maximum Height:** 1200px. Content should fit within this boundary to prevent excessive scrolling within the iframe. Use internal scrolling if necessary, but keep the primary CTA visible.

## 2. Visual & Brand Consistency
- Maintain the core neobrutalist and cyberpunk visual style (thick borders, high contrast), but ensure it is clean enough not to clash violently with a partner's generic website.
- **Partner Attribution:** Every embed MUST include clear attribution at the bottom of the frame: "Powered by SMB AI Builder".

## 3. Architecture & Security
- **Self-Contained:** The embed package (HTML/CSS/JS) should generally be self-contained or explicitly link to the public assets on `https://smb-ai-builder.vercel.app`.
- **Static Config Limits:** Do NOT use static configuration files or frontend JS variables for real access control or secret management. The embed is a frontend presentation layer; it is inherently insecure. Never embed API keys.

## 4. Tracking & CTAs
- **CTA Routing:** All "Action" CTAs must eventually route the user to the Primary Custom GPT URL.
- **Parameter Tracking:** CTA links within the embed MUST be configured to append standard tracking parameters (e.g., `?utm_source=partner_name`, `&ref=embed`) so traffic origin can be identified.
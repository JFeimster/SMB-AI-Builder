# Cursor QA Checklist

Before committing changes generated or modified by Cursor, verify the following:

## General Content & Tone
- [ ] No fake testimonials, logos, ratings, reviews, revenue claims, compliance claims, guarantees, or user counts.
- [ ] Voice is direct, practical, anti-hype, and SMB-friendly.
- [ ] Sensitive workflows include explicit safety disclaimers.

## Design & UI
- [ ] Preserves the neobrutalist + futurist fintech + cyberpunk style (thick borders, hard shadows, ink black backgrounds, vivid accents).
- [ ] Semantic HTML is used.
- [ ] Accessibility standards are met (visible focus states, color contrast, proper labels).
- [ ] Embeds comply with max width (940px) and max height (1200px) constraints.

## Technical Rules
- [ ] No heavy dependencies or build tools introduced unless already present.
- [ ] Existing URLs and internal link structures are preserved.
- [ ] Static HTML files have correct relative CSS/JS paths based on depth.
- [ ] Next.js files follow App Router conventions (server component default, explicit `"use client"`).
- [ ] Unique titles, meta descriptions, and valid JSON-LD schema (Article and FAQPage) are present.

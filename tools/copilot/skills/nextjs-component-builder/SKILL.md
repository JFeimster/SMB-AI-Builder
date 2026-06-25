# nextjs-component-builder

## Purpose
To assist in building simple, accessible Next.js components and handling basic styling within the App Router structure for the demo site.

## When to use this skill
- When creating or editing files in `app/**/*.tsx`.
- When updating global styles in `app/globals.css`.
- When building simple, reusable UI components.

## When not to use this skill
- When writing backend API route logic.
- When generating static HTML files outside of the Next.js ecosystem.

## Inputs Copilot should collect
- The intended component behavior or UI mockup description.
- Accessibility requirements (ARIA roles, states).
- Existing CSS or design system variables.

## Files and folders this skill may touch
- `app/**/*.tsx`
- `app/globals.css`
- Components directories if applicable.

## Source-of-truth files to read first
- `next.config.ts`
- `README.md` (for design/UI constraints)

## Process
1. Use standard Next.js App Router conventions (e.g., Server Components by default, `"use client"` only when necessary).
2. Write clean, semantic HTML inside JSX.
3. Apply styling adhering to the established neobrutalist/cyberpunk design system, using existing `globals.css` variables if possible.
4. Ensure accessibility attributes (e.g., `aria-label`, `tabIndex`, appropriate contrast) are included.
5. Keep components simple and focused.

## Output requirements
- Valid `tsx` code.
- Minimal client-side JavaScript.
- Accessible markup.

## Security and safety rules
- Do not expose sensitive environment variables on the client side (e.g., do not use `NEXT_PUBLIC_` for secrets).
- Ensure any user input rendered in the UI is sanitized to prevent XSS.

## QA checklist
- [ ] Is it a Server Component by default?
- [ ] Are accessibility attributes present and correct?
- [ ] Is the design consistent with the project's aesthetic?
- [ ] Is client-side state minimized?

## Common mistakes to avoid
- Overusing `"use client"` for static UI.
- Ignoring keyboard navigation and screen reader accessibility.
- Introducing complex UI frameworks when simple CSS will suffice.

## Final response format
Component code block, styled appropriately, with a brief explanation of accessibility considerations.

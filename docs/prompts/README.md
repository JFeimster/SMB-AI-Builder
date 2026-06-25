# SMB AI Workflow & Agent Builder Landing Page

A static, launch-ready landing page for **SMB AI Workflow & Agent Builder**.

The page positions the GPT as a workflow audit cockpit for SMB owners, agencies, freelancers, consultants, and automation builders who need to audit messy processes before buying tools or launching AI agents.

## Files

```text
smb-ai-workflow-agent-builder/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Preview Locally

Open `index.html` directly in your browser.

For a local static server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Primary Links Already Included

Primary GPT CTA:

```text
https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
```

Notion resource:

```text
https://feimster.notion.site/smb-ai-builder
```

GitHub repo:

```text
https://github.com/JFeimster/SMB-AI-Builder
```

## Customization Notes

### Replace CTA Tracking

Search for this URL in `index.html` and replace it with a tracked version when ready:

```text
https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder
```

Suggested tracked variants:
- `?utm_source=landing_page&utm_medium=cta&utm_campaign=smb_ai_builder`
- A short link from your analytics or link tracking tool.

### Replace Open Graph Image

In `index.html`, replace:

```html
<meta property="og:image" content="og-image-placeholder.png" />
```

With a real social preview image URL after you design one.

Recommended social preview concept:
- Black brutalist background
- Huge text: “STOP AUTOMATING BROKEN WORKFLOWS”
- Neon readiness dashboard
- Score badge: “18/30 — CLEAN UP FIRST”

### Change Colors

Edit CSS variables at the top of `styles.css`:

```css
:root {
  --ink: #050505;
  --off-white: #F8F4E8;
  --lime: #C6FF00;
  --pink: #FF2BD6;
  --cyan: #00E5FF;
}
```

### Add Analytics

Paste analytics scripts before the closing `</head>` or `</body>` tag in `index.html`.

Recommended events:
- Primary CTA click
- Secondary CTA click
- GitHub repo click
- Notion resource click
- FAQ expand

### Add an Embed or Demo

The page currently links directly to the GPT. To add a demo block:
1. Find the `Live Demo / Launch CTA` section.
2. Add your iframe, video, screenshot, or walkthrough below the paragraph.
3. Keep the launch CTA visible above and below the embed.

## Deployment

### Netlify

1. Create a new site from drag-and-drop.
2. Drag the folder containing `index.html`, `styles.css`, and `script.js`.
3. Netlify will publish it as a static site.
4. Add a custom domain if desired.

### Vercel

1. Create a new project.
2. Import the folder or GitHub repo.
3. Use default static settings.
4. No build command is required.
5. Output directory can remain the root.

### GitHub Pages

1. Create a GitHub repo.
2. Upload these files to the root.
3. Go to **Settings → Pages**.
4. Select the main branch and root folder.
5. Publish.

### Static Hosting / cPanel

Upload all files to the target public folder, usually `public_html` or your static host root.

## Embed Steps

### Wix

1. Add an **Embed HTML** block.
2. Use an iframe pointing to the deployed page:

```html
<iframe src="https://your-domain.com" width="100%" height="900" style="border:0;"></iframe>
```

### Framer

1. Publish the static site separately.
2. Add an Embed component.
3. Paste the iframe code.
4. Set height to at least `900px`.

### Webflow

1. Add an Embed element.
2. Paste the iframe snippet.
3. Publish the Webflow page.

### Carrd

1. Add an Embed element.
2. Choose Code.
3. Paste the iframe snippet.
4. Use a deployed version of this static site as the iframe source.

### Custom HTML

Paste this where you want the launch CTA card:

```html
<div style="border:4px solid #050505;padding:24px;background:#C6FF00;box-shadow:8px 8px 0 #050505;font-family:system-ui,sans-serif;">
  <h2 style="margin-top:0;">Stop automating broken workflows.</h2>
  <p>Audit one messy workflow, score readiness, and build a safe AI agent pilot plan.</p>
  <a href="https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder" target="_blank" rel="noopener" style="display:inline-block;background:#050505;color:#F8F4E8;padding:14px 18px;text-decoration:none;font-weight:900;">
    Audit My First Workflow
  </a>
</div>
```

## Positioning Snapshot

**Core promise:** Turn one messy SMB workflow into a readiness diagnosis, opportunity ranking, and safe AI agent pilot plan.

**Primary audience:** SMB owners, agency owners, automation builders, freelancers, consultants, creator-operators, lean teams, and productized service providers.

**Sharp angle:** Most SMBs should not rush into AI automation. They should first check whether the workflow is clear, repeatable, measurable, safe, and ready for a human-reviewed AI pilot.

**Primary CTA:** Audit My First Workflow.

**Secondary CTA:** Score Readiness First.

**Trust position:** Honest, safety-aware, workflow-first planning before tool buying or implementation.

## Page Wireframe

1. **Hero** — clear anti-hype promise, primary CTA, readiness cockpit visual.
2. **Problem / Anti-Hype** — why AI agents amplify broken processes.
3. **Built For** — audience cards for SMB owners, agencies, builders, operators, consultants.
4. **What It Does** — audit, score, rank, cleanup, blueprint, pilot.
5. **How It Works** — 4-step flow.
6. **Readiness Scorecard** — 0–30 model with bands.
7. **Opportunity Matrix** — ranking and recommendation preview.
8. **Blueprint Preview** — agent plan fields.
9. **Use Cases** — SMB-specific examples.
10. **Human Safety** — draft-first, review, escalation, rollback.
11. **Launch CTA** — direct GPT access.
12. **GitHub Resource** — builder foundation, not overclaimed.
13. **Access Framing** — lead magnet promise.
14. **Trust Strip** — honest proof language.
15. **FAQ** — objections and sensitive decision disclaimer.
16. **Final CTA** — repeat core action.
17. **Footer** — links and disclaimer.

## QA Checklist

- Hero is clear in 5 seconds.
- Page avoids generic AI software copy.
- Style is neobrutalist + futurist fintech + cyberpunk.
- CTA is visible above the fold and repeated.
- Copy explains why SMBs should audit before automating.
- GPT feels practical, safe, and useful.
- No fake testimonials, logos, revenue numbers, or compliance claims.
- Code is static, responsive, accessible, and deployable.

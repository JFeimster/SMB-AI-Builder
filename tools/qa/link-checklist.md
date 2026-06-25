# Link Checklist

Ensure all internal, external, and asset links are correct and functional across the project.

## External Links
- [ ] **GPT URL**: Primary CTA links point exactly to: `https://chatgpt.com/g/g-6a3cac9b87f08191af3f98ab42ad55ae-smb-ai-workflow-agent-builder`
- [ ] **Notion URL**: Workspace links point to: `https://feimster.notion.site/smb-ai-builder`
- [ ] **GitHub URL**: Repo links point to: `https://github.com/JFeimster/SMB-AI-Builder`

## Internal Architecture
- [ ] **Internal links**: Navigation and in-content links point to valid pages.
- [ ] **Relative CSS/JS paths**: CSS and JS files load correctly. Check nested pages (e.g., in `pages/seo/workflows/`) to ensure paths like `../../../styles.css` resolve.
- [ ] **Sitemap paths**: URLs defined in `sitemap.xml` are valid, accessible, and use absolute paths (`https://smb-ai-builder.vercel.app/...`).

## Embeds
- [ ] **Embed paths**: `src` attributes for any iframes/embeds are correct and load without cross-origin errors (unless intended).

# Content Engine Stack

## What This Stack Is For
This stack is designed to plan, research, draft, design, and organize a consistent stream of marketing content (blog posts, newsletters, social media) without getting overwhelmed by the blank page.

## Minimum Stack
- **Notion**: For the content calendar and tracking piece status (Idea, Drafting, Review, Published).
- **Semrush / Ahrefs (or free alternative)**: For basic keyword research and topic ideation.
- **GPT**: For outlining, drafting initial copy, and generating headline variations.
- **Canva**: For creating featured images and social graphics.
- **Drive**: For storing high-res assets and final copy if needed.

## Expanded Stack
*(Add these only after the minimum stack is working reliably)*
- **Buffer/Hootsuite**: For automated social media scheduling and publishing.
- **Zapier/Make**: To auto-publish Notion pages directly to a Webflow/WordPress CMS.
- **Midjourney**: For advanced AI image generation instead of Canva templates.

## Data Flow
1. Topics and keywords are researched in **Semrush** and logged as ideas in **Notion**.
2. **GPT** is used to generate a detailed outline and initial draft based on the topic.
3. The human writer edits the draft in **Notion** to ensure brand voice and accuracy.
4. Graphics are created in **Canva** and attached to the **Notion** card (or saved in **Drive**).
5. The final approved piece is manually published to the website/socials, and the status in **Notion** is updated to "Published".

## What AI Can Draft
- Blog post outlines and section headings.
- First drafts of SEO-optimized articles or newsletters.
- Multiple variations of social media captions and headlines.
- Summaries of long-form content for social platforms.

## What AI Should Not Decide
- Publishing directly to the live website without review.
- Inventing statistics, quotes, or case studies (hallucination risk).
- Determining the final, overarching brand voice and strategy.

## Risk Level
**Low**. Content errors are usually easy to fix post-publication. However, publishing hallucinated facts or plagiarized content carries reputational risk, making human editing crucial.

## Setup Checklist
- [ ] Create a Kanban board in Notion for the Content Calendar.
- [ ] Establish a folder structure in Drive for raw assets.
- [ ] Create a "Brand Voice Guide" document to feed into GPT for better outputs.
- [ ] Set up Canva templates for your standard blog and social image sizes.
- [ ] Write a standard GPT prompt for outlining blog posts.

## Starter GPT Prompt
```text
I am writing a blog post about [Topic] targeting the keyword "[Keyword]".
Please generate a detailed outline for a 1,000-word article.
Include an introduction, 3-4 main body sections with subheadings, and a conclusion with a clear call-to-action.
Keep the tone informative and conversational, suitable for small business owners.
```

## Success Criteria
- Content production increases from erratic to a predictable weekly cadence.
- Time spent staring at a blank page is eliminated by AI outlining.
- The business has a clear, searchable archive of all published content in Notion.

## Related Docs
- [Connectors Directory](../connectors/README.md)
- [Workflow Connector Maps](../workflow-connector-maps/README.md)
- [Tools: Connectors](../../pages/tools/connectors.html)

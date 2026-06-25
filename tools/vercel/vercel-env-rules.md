# Environment Variable Rules

For this mostly static project, environment variables may not be immediately needed. If analytics, forms, or dynamic elements are added later, document the required environment variables here.

## Core Security Rules
- **Never Commit Secrets:** Do not commit `.env` files to the repository.
- **No Private Keys in Code:** Do not commit API keys or access tokens directly into the source code.
- **Do Not Hallucinate Keys:** Do not ask AI agents to generate or create real secret values.
- **Use Vercel Dashboard:** Use the Vercel dashboard exclusively for injecting real environment values into the build and runtime environments.
- **Placeholders Only:** In code examples or local `.env.example` files, use placeholder examples only.

## Placeholder Examples

If the project is converted to use environment variables, standard placeholders might look like:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | The base URL of the site. |
| `NEXT_PUBLIC_GPT_URL` | The URL for the primary GPT agent. |
| `NEXT_PUBLIC_NOTION_URL` | The URL for the Notion workspace/resources. |
| `NEXT_PUBLIC_GITHUB_URL` | The URL for the GitHub repository. |
| `NEXT_PUBLIC_ANALYTICS_ID` | Identifier for tracking setup (e.g., Google Analytics or PostHog). |

*Note: These are placeholders and are not required unless the project actively uses them in the Next.js App Router or an updated build process.*
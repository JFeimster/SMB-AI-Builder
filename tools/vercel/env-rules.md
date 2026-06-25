# Environment Variable Rules

This project primarily consists of static files and minimal Next.js applications. Avoid using environment variables unless absolutely necessary.

## General Rules
- Do not commit `.env` files to the repository.
- Do not commit real API keys, secrets, or private tokens.
- Do not ask agents to create or use real secrets.
- Use the Vercel dashboard to securely manage environment values.
- Only use placeholder examples in the repository documentation.

## Example Placeholders

If the project is later updated to require environment variables (e.g., for analytics, forms, or APIs), document them here. The following are placeholders and are **not required** for the current static setup:

| Variable | Description (Placeholder) |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | e.g., `https://smb-ai-builder.vercel.app` |
| `NEXT_PUBLIC_GPT_URL` | e.g., `https://chatgpt.com/g/...` |
| `NEXT_PUBLIC_NOTION_URL` | e.g., `https://feimster.notion.site/...` |
| `NEXT_PUBLIC_GITHUB_URL` | e.g., `https://github.com/...` |
| `NEXT_PUBLIC_ANALYTICS_ID` | Placeholder for analytics integration |

*Note: These are placeholders, not required unless the project is explicitly converted to use them.*
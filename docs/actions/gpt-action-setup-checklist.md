# GPT Action Setup Checklist

Use this checklist when configuring a new Action in the ChatGPT Custom GPT Builder interface.

## 1. GPT Builder setup steps
- Navigate to your Custom GPT -> 'Configure' -> 'Actions' -> 'Add Action'.

## 2. Authentication: None
- Ensure the Authentication type is explicitly set to **None**. We do not use API keys or OAuth for these endpoints.

## 3. OpenAPI import
- Paste the raw OpenAPI schema JSON or YAML into the 'Schema' text box.
- Verify that the Builder successfully parses the endpoints without syntax errors.

## 4. Privacy policy URL
- Provide a valid link to your privacy policy (e.g., `https://yourdomain.com/privacy`). This is required for public GPTs.

## 5. Server URL
- Ensure the `servers.url` in the OpenAPI schema points to your live deployment (e.g., `https://smb-ai-builder.vercel.app/api`).
- Do not use `http://localhost` or staging URLs in the final production GPT.

## 6. Schema validation
- Check the 'Available Actions' list below the schema box.
- Ensure the Action names (operationIds) match what you expect.

## 7. Test request
- Click the 'Test' button next to an Action in the Builder interface.
- Provide sample JSON input if prompted.
- Verify the Action returns a `200 OK` and the expected JSON payload.

## 8. Error handling test
- Intentionally send a bad request (e.g., missing a required field) via the Test button.
- Verify the Action returns a clean `400 Bad Request` with an understandable error message, rather than a generic `500` or a crash.

## 9. Safety review
- Ask the GPT to perform the Action using sensitive data (e.g., "Score this workflow, my SSN is..."). Ensure the GPT's instructions or the Action itself rejects the request.

## 10. Launch checklist
- [ ] Schema parses cleanly.
- [ ] Authentication is 'None'.
- [ ] Privacy Policy linked.
- [ ] Test request succeeds.
- [ ] Error test handled gracefully.
- [ ] Safety constraints verified.

## Troubleshooting
- **"Unrecognized schema"**: Ensure you are using OpenAPI 3.1.0 and valid JSON/YAML.
- **Timeout**: The external server took too long. Optimize the Vercel function or reduce payload size.
- **Action fails silently**: Check Vercel logs for unhandled exceptions or CORS issues.

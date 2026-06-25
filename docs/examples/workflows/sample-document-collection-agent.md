# Sample Agent Blueprint: Document Collection

## Purpose
Shows how to design a safe, boundary-restricted AI agent for collecting sensitive files.

## Fictional scenario
"SecureTax Prep" (Fictional) uses an AI chatbot on a secure client portal to guide clients through uploading their W2s and 1099s.

## Workflow summary
Client logs in -> Chatbot asks for specific missing forms based on a checklist -> Client uploads file -> Chatbot confirms receipt.

## Current-state process
Administrative staff calls and emails clients repeatedly asking for specific forms.

## Pain points
- High administrative overhead.
- Clients get confused about which forms they still owe.

## Readiness considerations
- The agent operates *behind* a secure login (Crucial).
- The agent only reads from a checklist, it does not analyze the tax documents themselves.

## Human review points
- A human accountant reviews the actual uploaded documents. The AI merely acts as a checklist manager.

## Recommended automation mode
**Limited pilot automation** (Strictly constrained).

## Suggested pilot
Deploy the agent to 10 returning clients. Restrict the agent's knowledge base to just the "required documents checklist".

## Risks and disclaimers
*Disclaimer: This is a fictional example. Tax, financial, and legal document handling requires strict compliance (e.g., IRS guidelines, SOC2). AI agents should NEVER be used to provide tax advice or process PII unless explicitly engineered and certified for that purpose.*

## Sample output
(Agent Chat): "Hi Sarah. I see we still need your 1099-INT from your primary bank. You can upload it using the button below."

## Next step
Define the exact strict guardrails preventing the agent from answering tax-related questions.

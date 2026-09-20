# Open Technologies Support API

This directory contains the server-side adapter for P01-CP-SUPPORT-01.

## Required environment

\`\`\`text
GEMINI_API_KEY
GROQ_API_KEY
SUPPORT_ALLOWED_ORIGIN=https://emeraude-kiangana.github.io
\`\`\`

Optional model overrides:

\`\`\`text
GEMINI_MODEL=gemini-2.5-flash-lite
GROQ_MODEL=openai/gpt-oss-20b
\`\`\`

The browser must never receive provider API keys.

## Contract

POST JSON:

\`\`\`json
{"question":"Which projects have automated tests?"}
\`\`\`

Response:

\`\`\`json
{
  "answer": "...",
  "evidence_ids": ["..."],
  "limitations": ["..."],
  "mode": "llm-grounded",
  "provider": "gemini"
}
\`\`\`

If no provider keys are configured, the same handler returns a deterministic grounded answer rather than inventing an LLM result.

## Deployment state

No live serverless deployment is claimed until a server-side host is connected, secrets are configured there, and an end-to-end request is observed.

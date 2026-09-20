# P01-CP-SUPPORT-01 — Evidence-Grounded Portfolio Assistant

Status: **IMPLEMENTATION CANDIDATE — NOT CLOSED**

## Purpose

Open Technologies Support is an interaction layer over the public portfolio. Its contract is:

> **NO EVIDENCE → NO CLAIM**

It must explain demonstrated project capabilities, limitations, checkpoints and evidence without converting documentation into implementation, internal tests into field validation, or prototypes into production systems.

## V0.1 flow

\`\`\`text
Visitor
  ↓
Static P01 chat UI
  ↓
Deterministic retrieval over curated support knowledge
  ↓
Deterministic grounded draft
  ↓
Optional server-side provider router
  ├─ Gemini
  └─ Groq fallback
  ↓
Evidence-ID validation
  ↓
Answer + evidence + limitations
\`\`\`

## Why the LLM is optional at runtime

P01 is exported with Next.js \`output: "export"\` and hosted on GitHub Pages. GitHub Pages cannot execute a private API route. Calling Gemini or Groq directly from the browser would expose credentials.

Therefore the public UI always has a safe deterministic evidence-retrieval mode. An LLM can be enabled only through a separately hosted server-side endpoint configured with \`NEXT_PUBLIC_SUPPORT_API_URL\`.

## Knowledge

\`src/support/knowledge.mjs\` contains a bounded, public-safe support snapshot for the current P01 projects.

Required record fields:

- \`project_id\`
- \`project_name\`
- \`description\`
- \`status\`
- \`maturity\`
- \`technologies\`
- \`implemented_features\`
- \`tests\`
- \`evidence\`
- \`repositories\`
- \`checkpoints\`
- \`known_limitations\`
- \`explicit_non_claims\`

The support maturity vocabulary is:

\`DOCUMENTED · IMPLEMENTED · TESTED · REPRODUCIBLE · FIELD-VALIDATED · PRODUCTION\`

A project does not receive a status merely because the vocabulary supports it. CPCN, for example, records \`field_validation=PARTIAL\` instead of promoting the whole project to \`FIELD-VALIDATED\`.

## Retrieval

\`src/support/retrieval.mjs\` uses deterministic weighted matching over:

- project name and aliases;
- technologies;
- implemented features;
- test/checkpoint text;
- search terms;
- non-claims and limitations;
- explicit intents such as tested, field validation, LLM providers, backend and deterministic architecture.

No vector database or embedding service is used.

## Grounding

The deterministic draft is produced before any LLM call.

The LLM receives:

1. the visitor question;
2. the deterministic draft;
3. retrieved project records;
4. an allow-list of evidence IDs.

A model answer is accepted only when it returns at least one evidence ID present in the retrieved evidence set. Otherwise P01 falls back to the deterministic answer.

## Providers

Provider contract:

- \`generate(prompt)\`
- \`health()\`
- \`metadata()\`

Order:

1. Gemini — default model \`gemini-2.5-flash-lite\`
2. Groq — default model \`openai/gpt-oss-20b\`

Fallback occurs only for transient/network/quota/server failures. Permanent request errors do not silently cascade.

No provider SDK is required; V0.1 uses native \`fetch\`.

## Secrets

Server-side only:

- \`GEMINI_API_KEY\`
- \`GEMINI_MODEL\` (optional)
- \`GROQ_API_KEY\`
- \`GROQ_MODEL\` (optional)
- \`SUPPORT_ALLOWED_ORIGIN\`

Never expose provider keys through \`NEXT_PUBLIC_*\`.

The frontend may expose only:

- \`NEXT_PUBLIC_SUPPORT_API_URL\`

## Hosting boundary

The portfolio remains on GitHub Pages.

\`support-api/handler.mjs\` is a framework-light Node HTTP adapter intended for a separate free serverless deployment. The connected Vercel account currently exposes no usable team/project, so no live serverless deployment is claimed by this checkpoint implementation.

## Tests

\`node --test tests/support/*.test.mjs\` validates:

- known-project retrieval;
- evidence return;
- unsupported-question refusal;
- provider fallback;
- explicit non-claim handling;
- knowledge-schema validity;
- invented evidence-ID rejection;
- private-source safety.

\`npm run scan:secrets\` scans tracked text files for common credential patterns.

## Closure rule

CP-SUPPORT-01 must remain OPEN until all Definition-of-Done items are evidenced, including a securely deployed endpoint with at least one live provider and the tested fallback path. Implementation and mocked provider tests alone are not sufficient to claim a live LLM service.

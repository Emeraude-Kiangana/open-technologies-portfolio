# Emeraude Kiangana — Open Technologies Portfolio

Public evidence index for technical projects built, tested and documented by Emeraude Kiangana.

## Status

- Product: **P01 — Open Technologies Portfolio**
- Phase: **PUBLIC EVIDENCE HUB**
- Application version: \`0.1.0\`
- Repository: **PUBLIC**
- Live Portfolio: https://emeraude-kiangana.github.io/open-technologies-portfolio/
- License: **No license currently granted**
- Last project-evidence synchronization: **2026-09-20**

The Pages URL is configuration evidence until an external HTTP smoke test confirms anonymous reachability after the current normalization merge.

## Purpose

This repository is the public presentation layer for Open Technologies project evidence. It shows what source repositories actually demonstrate and keeps maturity separate from public inspectability.

Operating rule:

\`Build → Test → Prove → Publish\`

P01 presents proofs. P01 does not create proofs for another project.

## Evidence model

A public technical claim should resolve to an identifiable source such as:

- originating repository;
- commit;
- GitHub Actions run;
- test result;
- release;
- artifact;
- checksum;
- bounded field evidence;
- public page.

If the source project does not prove a claim, P01 must not claim it.

The portfolio tracks two different dimensions:

### Project maturity

\`DOCUMENTED · IMPLEMENTED · TESTED · REPRODUCIBLE · PUBLIC · EXTERNALLY VALIDATED\`

### Public evidence availability

\`AVAILABLE · PARTIAL · PRIVATE SOURCE · UNKNOWN · BLOCKED\`

A private source repository is not automatically a blocked project, and a public repository is not automatically licensed software.

## Project index

The unified public evidence index contains exactly:

- CPCN;
- eCDF;
- KIANGANA 2.0 / KIF;
- NovaForge;
- RegenTwin;
- RWA Red-Team Lab;
- C.A.O — Chief Agent Officer;
- P01 — Open Technologies Portfolio.

The application source of truth for normalized card data is \`src/data/projects.ts\`.

## Stack

- Next.js 16.3.4
- React 19.2.8
- TypeScript
- Tailwind CSS 4
- Static export
- GitHub Pages
- GitHub Actions

## Local development

\`\`\`bash
npm ci
npm run dev
\`\`\`

Open \`http://localhost:3000\`.

## Verification

\`\`\`bash
npm ci
npm run lint
npm run build
\`\`\`

The production build must generate the static export successfully before merge.


## Freelance Tool-First Services

P01 now exposes a bounded freelance service layer at:

`/services/`

The catalog covers:

- API Automation;
- GitHub Setup;
- GitHub Actions CI/CD;
- FFmpeg Automation;
- Dockerisation;
- Backend Prototypes;
- Technical Audits;
- Technical Documentation.

Each service records:

`CLIENT PROBLEM → TOOL-FIRST ROUTE → DELIVERABLE → ACCEPTANCE TEST → PUBLIC PROOF`

Canonical service data: `src/data/services.ts`.

Commercial architecture and evidence boundary: `docs/FREELANCE-TOOL-FIRST.md`.

Offer packaging and pricing doctrine: `docs/FREELANCE-OFFERS.md`.

Canonical package data: `src/data/offers.json`.

All eight services now have bounded public technical proof. This does not imply paid-client experience, production scale, SLA guarantees or certification.


## Freelance Case Studies

P01 exposes evidence-backed reference narratives at:

`/case-studies/`

Current canonical cases:

- NovaForge — reproducible FFmpeg media pipeline;
- KIANGANA 2.0 / KIF V0.2 — dual-provider API routing with fallback;
- eCDF — deterministic lifecycle with CI-backed evidence;
- P01 Service Proof Packs — API Automation, Backend Prototype and Dockerisation.

Case studies are explicitly labelled `INTERNAL PROJECT` or `TECHNICAL PROOF`. They are not client testimonials and do not imply paid-client delivery.

Canonical data: `src/data/case-studies.ts`.

Validation:

```bash
npm run validate:case-studies
```

Architecture and claim boundary: `docs/FREELANCE-CASE-STUDIES.md`.


## Freelance Client Intake

P01 exposes a structured project-intake route at:

`/intake/`

The canonical collection provider is Tally form `PdK4ex`.

The intake captures only information needed to qualify a bounded mission: contact, service, package, problem, expected result, optional stack/public link/deadline, budget and acceptance of cost/security boundaries.

It explicitly rejects passwords, API keys, private keys, credentials, regulated personal data and confidential source files.

Canonical configuration: `src/data/intake.ts`.

Validation:

```bash
npm run validate:intake
```

Architecture and #0$ boundary: `docs/FREELANCE-CLIENT-INTAKE.md`.

## Ask Open Technologies

P01-CP-SUPPORT-01 adds an evidence-grounded support layer over the portfolio.

Contract:

`NO EVIDENCE → NO CLAIM`

The public `/support/` route always supports deterministic local retrieval over a bounded knowledge snapshot. An optional server-side endpoint may add Gemini with Groq fallback, but provider keys must remain server-side.

Verification:

```bash
npm run test:support
npm run scan:secrets
```

Architecture and provider boundaries: `docs/SUPPORT-ARCHITECTURE.md`.

Current checkpoint state: **OPEN / IMPLEMENTED CANDIDATE** until a secure live serverless endpoint and live provider/fallback evidence are recorded.

## Deployment

\`next.config.ts\` uses:

- \`output: "export"\`
- \`basePath: "/open-technologies-portfolio"\`
- \`trailingSlash: true\`

\`.github/workflows/deploy.yml\` builds \`./out\` and publishes it to GitHub Pages after pushes to \`main\`.

## Limitations

- P01 does not replace project repositories as technical sources of truth.
- Private repositories remain private; P01 does not publish their private contents or participant data.
- A public demo does not imply public source code.
- A public repository does not imply an open-source license.
- P01 is not classified \`REPRODUCIBLE\` without independent clean-reproduction evidence.

## License

No root \`LICENSE\` file is present.

**No license is currently granted by this repository.**

Copyright is separate from licensing.

## Author

**Emeraude Kiangana**  
Founder / Builder — Open Technologies  
Democratic Republic of the Congo

© EMERAUDE KIANGANA
# P01 — Open Technologies Portfolio — Project Status

Status date: **2026-09-25**

## Current phase

**PUBLIC EVIDENCE HUB**

P01 is the public presentation layer for inspectable technical evidence. Source projects remain the technical sources of truth.

## Canonical repository

`Emeraude-Kiangana/open-technologies-portfolio`

The pre-normalization repository name is historical only and is not an active canonical surface.

## Current verified state

| Dimension | Status | Evidence |
|---|---|---|
| Next.js application | IMPLEMENTED | `src/`, `package.json` |
| Static GitHub Pages export | IMPLEMENTED | `next.config.ts` with `output: "export"` and `basePath: "/open-technologies-portfolio"` |
| Application version | DOCUMENTED | `package.json` = `0.1.0` |
| Repository visibility | PUBLIC | GitHub repository metadata |
| License | NONE | No root `LICENSE` file detected |
| Unified Project Evidence Index | IMPLEMENTED | Historical P01-CP-HUB-02 merge `1b7274847d61a097155dc98e2377d58afd5e5c13` |
| Project/evidence status separation | IMPLEMENTED | `src/data/projects.ts` + public index UI |
| Source visibility separation | IMPLEMENTED | Explicit `PUBLIC` / `PRIVATE` field on every card |
| Portfolio CI workflow | TESTED | CP03 post-merge run `36167308078` = SUCCESS |
| GitHub Pages deploy workflow | TESTED | CP03 post-merge deploy `36167307873` = SUCCESS |
| Freelance Tool-First Service Layer | IMPLEMENTED / PUBLIC | 8 canonical services in `src/data/services.ts` |
| Freelance Service Proof Packs | TESTED / PUBLIC | Dedicated workflow `36167307880` = SUCCESS |
| Freelance Offer Packaging | TESTED / PUBLIC | 24 bounded packages in `src/data/offers.json`; validator included in Portfolio CI |
| Anonymous HTTP reachability | UNKNOWN | External clients could not complete GitHub Pages DNS/HTTP verification in this execution environment |

## Evidence model

P01 tracks separate dimensions.

### Project maturity

`DOCUMENTED · IMPLEMENTED · TESTED · REPRODUCIBLE · PUBLIC · EXTERNALLY VALIDATED`

### Public evidence availability

`AVAILABLE · PARTIAL · PRIVATE SOURCE · UNKNOWN · BLOCKED`

### Source visibility

`PUBLIC · PRIVATE`

A private source repository is not a maturity failure. A public repository is not automatically open source. A public artifact does not imply public source code.

## Completed checkpoint

### P01-CP-HUB-02 — Unified Project Evidence Index

**Status: PASS / CLOSED**

Historical evidence remains valid and must not be rewritten:

- branch head `a714f03a43a2e6a51b5ca58c0874f73f9fc096d9`;
- merge `1b7274847d61a097155dc98e2377d58afd5e5c13`;
- test run `35330237656`;
- PR Portfolio CI `35330237752`;
- post-merge Portfolio CI `35330354290`;
- deploy `35330354285`;
- Pages build/deployment `35330400690`.

The current normalization correction does **not** recreate HUB-02 and does not promote those historical runs as the current final state.

## Freelance checkpoints

### P01-CP-FREELANCE-01 — Tool-First Service Layer

**Status: CLOSED / DEPLOYED**

- merge `120003759f79942538d47bc4ea90f281ed9efdc4`;
- eight bounded service definitions;
- Tool-First routes, deliverables, acceptance gates and evidence links;
- public `/services/` surface.

### P01-CP-FREELANCE-02 — Service Proof Packs

**Status: CLOSED / TESTED / PUBLIC / REPRODUCIBLE**

- merge `ebef5b4b4ca4f868f9753155dcf703853b85c244`;
- API Automation proof pack;
- Backend Prototype proof pack;
- Dockerisation proof pack;
- dedicated post-merge workflow `36166734206` = SUCCESS.

### P01-CP-FREELANCE-03 — Offer Packaging

**Status: CLOSED / TESTED / PUBLIC / DEPLOYED**

- canonical implementation commit `49a9ede7e679a2f5fa4ded9e4a9d3194e11b02fc`;
- 8 services × 3 tiers = 24 bounded launch packages;
- prices, target delivery windows, revisions, scope, deliverables, exclusions and acceptance gates are machine-readable;
- `npm run validate:offers` is part of Portfolio CI;
- post-merge Portfolio CI `36167308078` = SUCCESS;
- proof-pack regression run `36167307880` = SUCCESS;
- GitHub Pages deploy `36167307873` = SUCCESS.

Commercial boundary: these are launch offers, not market-rate claims, SLA guarantees, production certification or evidence of paid-client history.

## Current source synchronization

| Project | Canonical source state | Current interpretation |
|---|---|---|
| CPCN | private `main@f98056fd5db26377545e0dc6549bfe47fd9d91af` | Global `DOCUMENTED`; G0-01 frozen field collection; G0-02 `DOCUMENTED / IMPLEMENTED / TESTED`; partial public evidence; external validation not claimed |
| eCDF | public `main@c3a82329bdcd339a99595b64ea3a3dd4ee3adefa`; CI `35463718531` SUCCESS | `TESTED · PUBLIC`; 27/27 tests; Apache-2.0; no public demo; no live Stellar settlement |
| KIANGANA 2.0 | public `main@0f9829e54436ae860977c3d2b3349d74482258da`; normalization PR #8 CI `35465436732` SUCCESS | `DOCUMENTED / IMPLEMENTED / TESTED / PUBLIC`; product-normalization documentation is now canonical main |
| KIF V0.2 CP-01 | proof `69d3c9a1fdfc9616700572011a466b549be0c867`; freeze `57c4bfc2664398383a784128a9fa03dc3e41c0e4`; live run `35286354669`; freeze run `35287044624` | Historical `REPRODUCIBLE`, CLOSED / FROZEN checkpoint; `kif/` is not present on current main |
| NovaForge | private `main@74aa0bbbd7a9b4dceb0b987b27d2c670cac40903`; main CI `35464627769` SUCCESS | `REPRODUCIBLE`; v0.1.0-alpha; 100/100 regression + 1/1 E2E on reference release CI; public P01 proof assets exist; anonymous HTTP status UNKNOWN |
| RegenTwin | public `main@fadf386ed5c62dcd45a66008e8b2989b6402b63f`; CI `35324672286` SUCCESS | `TESTED` Gate 0; 4 tests; no release version claimed; no license file detected |
| RWA Red-Team Lab | public `main@922291ca7076ed871f70d6c70623c7b61541297e`; CI `35327731335` SUCCESS | `TESTED` deterministic Gate 0 verifier; 4 tests; no release version claimed; no license file detected |
| C.A.O — Chief Agent Officer | private `main@991a5b7c93e17c6e2769732b59a81e9765aff61f`; CP-07 proof run `35479200779` SUCCESS | CP-01 → CP-07 CLOSED / TESTED — CI-BACKED; 95/95 full suite; deterministic mission-execution sandbox; reproducibility/public source not claimed |
| P01 | public `main@bd5659b373b15699ae444217f9abdf97d85a5b74`; CI `35468893760`, deploy `35468893825`, Pages `35468916827` SUCCESS | Public evidence hub synchronized before the C.A.O closure pass |

## CPCN boundary

CPCN is **not merely BLOCKED**.

Correct interpretation:

- project global status: **DOCUMENTED**;
- G0-01 v0.1: **FROZEN — VALIDATED FOR CONTINUED GATE 0 FIELD COLLECTION**;
- field evidence: founder SELF_TEST + one bounded external SME pilot (UD-001);
- UD-002: pending;
- UD-003: pending;
- G0-02 v0.1: **DOCUMENTED / IMPLEMENTED / TESTED**;
- source repository: **PRIVATE**;
- public evidence: **PARTIAL**;
- external / market validation: **NOT CLAIMED**.

## KIANGANA 2.0 / KIF boundary

KIANGANA 2.0 and KIF must not be collapsed into one status.

- **KIANGANA 2.0 current main**: public repository, governance implementation and current-main Gate Zero tests are inspectable.
- **KIF V0.2 CP-01**: historical reproducible checkpoint in Git history.
- proof → freeze comparison: one commit, zero changed files.
- live proof run `35286354669`: SUCCESS, 41 unit tests + 3 integration tests.
- freeze run `35287044624`: SUCCESS, 41 unit tests and tracked-file secret hygiene CLEAN.
- `kif/` is not present in a fresh checkout of current `main`.
- PR #8 was merged as `main@0f9829e54436ae860977c3d2b3349d74482258da`; its normalized product documentation is now canonical.

## NovaForge public evidence boundary

The public P01 repository contains:

- `public/novaforge/NovaForge-v0.1.0-alpha-demo.mp4` — 260699 bytes;
- `public/novaforge/SHA256SUMS.txt`;
- expected SHA-256 `8510fbe5fbbfd4e8aca362dab2d5cf8f4f18f1d1f0565deb5baa5601c46a994d`;
- `src/app/projects/novaforge/page.tsx`.

This proves the public **source package is present in P01**. It does not establish anonymous GitHub Pages HTTP reachability when the external HTTP client cannot complete the request.

## C.A.O boundary

C.A.O is a real tested private-source project and is now part of the canonical P01 index.

- current main: `991a5b7c93e17c6e2769732b59a81e9765aff61f`;
- kernel: v0.1;
- current closed checkpoint: CP-07 Mission Execution;
- proof run `35479200779`: SUCCESS;
- full suite: 95/95 PASS;
- public source: **NO**;
- reproducible status: **NOT CLAIMED**;
- production execution / live inter-agent messaging / arbitrary tools / marketplace: **NOT IMPLEMENTED**.

P01 exposes only bounded status and evidence metadata; it does not publish C.A.O private source.

## P01 pre-resync baseline

The correction branch starts from public `main@f42ea82913920285f443548d8f962cf07e5b2fbd`.

Latest successful runs before this resynchronization branch:

- Portfolio CI `35468351208` — SUCCESS;
- Deploy to GitHub Pages `35468351198` — SUCCESS;
- Pages build/deployment `35468391017` — SUCCESS.

These runs remain baseline evidence only. The final correction evidence must come from newer post-merge runs.

## Repository metadata gaps

At correction start, GitHub metadata reports:

- description: `null`;
- topics: `[]`;
- homepage: `https://emeraude-kiangana.github.io/open-technologies-portfolio/`;
- Pages enabled: `true`.

The connected GitHub tool does not expose repository-description/topic mutation. Those metadata fields require a manual `gh repo edit` action.

## P01-CP-SUPPORT-01 — Evidence-Grounded Portfolio Assistant

**Status: OPEN / IMPLEMENTATION CANDIDATE**

Implemented on the support branch:

- deterministic support knowledge schema and validation;
- bounded knowledge snapshot for the eight current portfolio entries;
- deterministic retrieval;
- deterministic grounded-answer fallback;
- evidence-ID allow-list validation;
- Gemini provider adapter;
- Groq fallback provider adapter;
- provider router;
- `/support/` chat UI;
- server-side HTTP adapter;
- support tests;
- tracked-file secret scan.

Closure is **not** claimed until:

- a secure serverless endpoint is deployed;
- at least one real provider call succeeds through that endpoint;
- fallback is exercised with real provider unavailability or an equivalent controlled live test;
- final CI/build/deploy evidence is recorded.

The GitHub Pages frontend must never receive provider API keys.

## Next checkpoint

**NOT FORMALLY DEFINED**

This resynchronization creates no new P01 checkpoint.

## Project rule

**CURRENT P01 CLAIM ≤ CURRENT SOURCE PROJECT EVIDENCE**

P01 publishes proofs; it does not create proofs for other projects.
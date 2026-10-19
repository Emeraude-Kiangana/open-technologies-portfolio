# P01 — Open Technologies Portfolio — Project Status

Status date: **2026-10-15**

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
| Portfolio CI workflow | TESTED | CP07 post-merge run `36175726957` = SUCCESS |
| GitHub Pages deploy workflow | TESTED | CP07 post-merge deploy `36175726911` = SUCCESS |
| Freelance Tool-First Service Layer | IMPLEMENTED / PUBLIC | 8 canonical services in `src/data/services.ts` |
| Freelance Service Proof Packs | TESTED / PUBLIC | Dedicated workflow `36167307880` = SUCCESS |
| Freelance Offer Packaging | TESTED / PUBLIC | 24 bounded packages in `src/data/offers.json`; validator included in Portfolio CI |
| Freelance Case Studies | TESTED / PUBLIC | 4 evidence-backed internal/reference cases; validator included in Portfolio CI |
| Freelance Conversion Layer | TESTED / DEPLOYED | Data-derived trust signals, canonical intake CTA and conversion validator; anonymous HTTP reachability not independently re-verified |
| Freelance SEO + Discoverability | TESTED / DEPLOYED | Canonicals, route metadata, sitemap, index policy, JSON-LD and SEO validator |
| Anonymous HTTP reachability | UNKNOWN | External clients could not complete GitHub Pages DNS/HTTP verification in this execution environment |

## Master Control Center registry

The expanded account-level registry is tracked in [`MCC-PROJECT-REGISTRY.md`](MCC-PROJECT-REGISTRY.md).

`MCC-NORM-01` establishes governance identifiers and source boundaries only. It does not change project maturity claims or force every tracked project into the public P01 project index.

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

### P01-CP-FREELANCE-04 — Case Studies

**Status: CLOSED / TESTED / PUBLIC / DEPLOYED**

- implementation merge `8c75583cbd8f9ba8bc0df998356d0180a88ffba6`;
- four canonical evidence-backed reference narratives;
- NovaForge media pipeline;
- KIF V0.2 provider/fallback;
- eCDF deterministic lifecycle;
- P01 Service Proof Packs;
- case-study validator included in Portfolio CI;
- post-merge Portfolio CI `36169741154` = SUCCESS;
- proof-pack regression run `36169741119` = SUCCESS;
- GitHub Pages deploy `36169741088` = SUCCESS.

Boundary: all four are internal projects or technical proofs. No paying customer, testimonial or commercial adoption is claimed.

### P01-CP-FREELANCE-05 — Client Intake

**Status: CLOSED / TESTED / PUBLIC / DEPLOYED**

- implementation merge `31d8859a52050a0cbd2f7f3d7ec4c0a9dadd8454`;
- Tool-first provider: Tally;
- published form ID `PdK4ex`;
- P01 static route `/intake/`;
- service/package attribution via hidden fields;
- no file upload;
- explicit secret-data rejection;
- custom backend not required;
- external intake cost classified at #0$ for the core flow;
- post-merge Portfolio CI `36172078729` = SUCCESS;
- proof-pack regression `36172078618` = SUCCESS;
- GitHub Pages deploy `36172078488` = SUCCESS.

Boundary: intake submission is not a contract, not authorization for paid work, and does not relax the external-cost or secret-handling rules.

### P01-CP-FREELANCE-06 — Conversion Layer

**Status: CLOSED / TESTED / DEPLOYED**

- implementation merge `b907577c84eebc80d4c9b648abe9c224eae6fd1c`;
- one canonical primary CTA: `Start a project`;
- homepage, services and case studies route to structured intake;
- trust signals are computed from canonical service/offer/case-study data;
- three bounded fast-start routes are exposed without ranking claims;
- no stale commercial `mailto:` CTA remains on primary conversion surfaces;
- conversion validator included in Portfolio CI;
- post-merge Portfolio CI `36173060057` = SUCCESS;
- proof-pack regression `36173060012` = SUCCESS;
- GitHub Pages deploy `36173059974` = SUCCESS.

Boundary: CP06 does not claim a measured conversion-rate improvement, customer demand or paid-client history. External anonymous HTTP verification remains UNKNOWN in this execution environment.

### P01-CP-FREELANCE-07 — SEO + Discoverability

**Status: CLOSED / TESTED / DEPLOYED**

- implementation merge `ff134606116fba5061ddc23e142735c3dbd35122`;
- route-specific metadata and canonical URLs;
- Open Graph / Twitter metadata on core surfaces;
- sitemap for intended indexable pages;
- `noindex, follow` on intake/support;
- bounded Person + WebSite schema.org JSON-LD;
- SEO validator included in Portfolio CI;
- post-merge Portfolio CI `36175726957` = SUCCESS;
- proof-pack regression `36175726934` = SUCCESS;
- GitHub Pages deploy `36175726911` = SUCCESS.

Boundary: CP07 does not claim search-engine indexing, ranking, organic traffic, backlinks, CTR improvement or Search Console ownership.

## Current source synchronization

| Project | Canonical source state | Current interpretation |
|---|---|---|
| CPCN | private `main@f98056fd5db26377545e0dc6549bfe47fd9d91af` | Global `DOCUMENTED`; G0-01 frozen field collection; G0-02 `DOCUMENTED / IMPLEMENTED / TESTED`; partial public evidence; external validation not claimed |
| eCDF | public `main@6ba26e8dd0f6d5648f2b49a71c8611396bd4f8be`; current-main CI `36019846765` SUCCESS | `TESTED · PUBLIC`; 29/29 tests + deterministic local demo; CP03-C / CP03-D are documentation-only Stellar feasibility/boundary checkpoints; no live Stellar settlement adapter |
| KIANGANA 2.0 | public `main@0f9829e54436ae860977c3d2b3349d74482258da`; normalization PR #8 CI `35465436732` SUCCESS | `DOCUMENTED / IMPLEMENTED / TESTED / PUBLIC`; product-normalization documentation is now canonical main |
| KIF V0.2 CP-01 | proof `69d3c9a1fdfc9616700572011a466b549be0c867`; freeze `57c4bfc2664398383a784128a9fa03dc3e41c0e4`; live run `35286354669`; freeze run `35287044624` | Historical `REPRODUCIBLE`, CLOSED / FROZEN checkpoint; `kif/` is not present on current main |
| NovaForge | private `main@74aa0bbbd7a9b4dceb0b987b27d2c670cac40903`; main CI `35464627769` SUCCESS | `REPRODUCIBLE`; v0.1.0-alpha; 100/100 regression + 1/1 E2E on reference release CI; public P01 proof assets exist; anonymous HTTP status UNKNOWN |
| RegenTwin | public `main@fadf386ed5c62dcd45a66008e8b2989b6402b63f`; CI `35324672286` SUCCESS | `TESTED` Gate 0; 4 tests; no release version claimed; no license file detected |
| RWA Red-Team Lab | public `main@922291ca7076ed871f70d6c70623c7b61541297e`; CI `35327731335` SUCCESS | `TESTED` deterministic Gate 0 verifier; 4 tests; no release version claimed; no license file detected |
| C.A.O — Chief Agent Officer | private `main@839b0ea0f4d79e5abbb52d1d440732fda20135ea`; CP-08 proof run `35480285634` SUCCESS; main CP-08 workflow `35480372127` SUCCESS | CP-01 → CP-08 CLOSED / TESTED — CI-BACKED; 113/113 full suite; verified Marketplace engagement → CP-07 execution handoff; payment/settlement not implemented; reproducibility/public source not claimed |
| P01 | public `main@8f0d3e986311f56a62ef27799a0abe67c8e52d75`; Portfolio CI `36175997148`, deploy `36175996914`, Pages `36176051392` SUCCESS | Public evidence hub with Freelance CP01→CP07 closed; Normalization Delta Pass v2 is resynchronizing eCDF/C.A.O evidence without changing project maturity claims |

Normalization note: eCDF current GitHub `main@6ba26e8…` and workflow `36019846765` are newer than the verified-main anchors still written inside eCDF's own `docs/PROJECT-STATUS.md`. P01 therefore cites the current GitHub commit/workflow while preserving the boundary that CP03-C / CP03-D are documentation/feasibility evidence only and do not implement a Stellar adapter.

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

C.A.O is a real tested private-source project and is part of the canonical P01 index.

- current main: `839b0ea0f4d79e5abbb52d1d440732fda20135ea`;
- kernel: v0.1;
- current closed checkpoint: CP-08 Marketplace;
- CP-08 proof run `35480285634`: SUCCESS;
- current-main CP-08 workflow `35480372127`: SUCCESS;
- full suite: 113/113 PASS;
- active verified listings: 4;
- canonical bounded quote: 0.21 USD / mission;
- payment state: **NOT_IMPLEMENTED**;
- public source: **NO**;
- reproducible status: **NOT CLAIMED**;
- public production marketplace / payment processing / escrow / settlement / live inter-agent messaging: **NOT IMPLEMENTED**.

P01 exposes bounded status and evidence metadata only; it does not publish C.A.O private source or promote marketplace engagement into financial settlement.

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
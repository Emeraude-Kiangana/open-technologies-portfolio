# MCC-NORM-01 — Open Technologies Full Project Registry

**Owner:** Emeraude Kiangana  
**System:** Open Technologies — Master Control Center  
**Registry version:** v1  
**Last source audit:** 2026-10-19

## Purpose

This file is the canonical governance registry for the current Open Technologies project ecosystem.

It is intentionally broader than the public project index rendered by P01.

A registry entry means that a project or support surface is tracked by the Master Control Center. It does **not** automatically imply production readiness, public source, external validation, market validation or commercial adoption.

Operating rule:

`ACCOUNT → MCC → PROJECT → CANONICAL SOURCE → CHECKPOINT → TEST → EVIDENCE → PUBLIC PRESENTATION`

## Governance rule

The historical P01–P05 sequence remains valid, but P05 is no longer a ceiling.

- Registered project count: **not capped**.
- Active projects: **multiple allowed**.
- Current execution focus: **1 PRIMARY + 1 SECONDARY + explicitly authorized support work**.
- New project IDs do not upgrade maturity by themselves.

## Account layer

| ID | Surface | Canonical repository | Visibility | Role | Current state |
|---|---|---|---|---|---|
| A01 | GitHub Profile | `Emeraude-Kiangana/Emeraude-Kiangana` | PUBLIC | Account entrypoint | IMPLEMENTED / PUBLIC |

A01 is an account surface, not a product project.

## Canonical project registry

| ID | Project | Canonical repository | Visibility | Class | Current interpretation |
|---|---|---|---|---|---|
| P01 | Open Technologies Portfolio | `Emeraude-Kiangana/open-technologies-portfolio` | PUBLIC | Foundation / public evidence | ACTIVE |
| P02 | NovaForge / NOVA Studio | `Emeraude-Kiangana/novaforge` | PRIVATE | Core product / media infrastructure | REPRODUCIBLE baseline; advanced R&D remains outside main |
| P03 | eCDF | `Emeraude-Kiangana/ecdf` | PUBLIC | Core research prototype | TESTED / PUBLIC; security synchronization pending |
| P04 | NEXUS | **UNKNOWN** | UNKNOWN | Core architecture project | PROVENANCE BLOCKED — canonical GitHub repository not identified |
| P05 | KIANGANA 2.0 / KIF | `Emeraude-Kiangana/kiangana-2.0` | PUBLIC | Core human–AI system | ACTIVE; current main, historical KIF and open development branches remain distinct |
| P06 | CPCN — Congo Programmable Capital Network | `Emeraude-Kiangana/congo-programmable-capital-network` | PRIVATE | Flagship / field research | ACTIVE; stacked CP04 development exists outside canonical main |
| P07 | C.A.O — Chief Agent Officer | `Emeraude-Kiangana/chief-agent-officer` | PRIVATE | Agentic infrastructure | CP-01 → CP-08 documented CLOSED / TESTED — CI-backed |
| P08 | #0$ BUSINESS OS | `Emeraude-Kiangana/business-os` | PUBLIC | Business infrastructure | ACTIVE; repository implementation is ahead of README normalization |
| P09 | Web3 Security Intelligence Layer | `Emeraude-Kiangana/web3-security-intelligence-layer-` | PRIVATE | Security / revenue intelligence | ACTIVE DEVELOPMENT; legacy alias S03 remains valid |
| P10 | OSS² Engine | `Emeraude-Kiangana/oss--engine` | PUBLIC | Open-source contribution infrastructure | EXPERIMENTAL / TESTED FOUNDATION |

## Research registry

| ID | Project | Canonical repository | Visibility | Current interpretation |
|---|---|---|---|---|
| R01 | RegenTwin | `Emeraude-Kiangana/regen-twin` | PUBLIC | TESTED Gate 0 provenance prototype |
| R02 | RWA Red-Team Lab | `Emeraude-Kiangana/rwa-red-team-lab` | PUBLIC | TESTED deterministic Gate 0 verifier |

Research IDs remain first-class tracked work but do not enter weekly execution focus automatically.

## Governance / doctrine registry

| ID | Surface | Canonical repository | Visibility | Current interpretation |
|---|---|---|---|---|
| G01 | #0$ Protocole | `Emeraude-Kiangana/-0--protocole-` | PUBLIC | INCOMPLETE / NORMALIZATION REQUIRED |

At the 2026-10-19 audit, G01 existed with an initial commit but no root `README.md`. It must not be presented as a mature product until normalized.

## Current source boundaries

### P01 — Open Technologies Portfolio

P01 remains the public evidence hub and client-facing portfolio layer.

Its public project index is **not required to mirror this entire MCC registry**. A project should appear publicly only when its bounded public presentation is deliberate and evidence-supported.

### P02 — NovaForge

Canonical main remains the reproducible `v0.1.0-alpha` baseline.

Open development observed during the audit includes:

- PR #1 — Colab AI video generation;
- PR #5 — CP02 multi-provider video foundation;
- PR #6 — CP03 NOVA Cinematic Intelligence.

These branches must not be collapsed into canonical-main claims before their own gates are closed.

### P03 — eCDF

Canonical main remains `TESTED · PUBLIC` with an explicit `LOCAL_DOMAIN_ONLY` boundary.

PR #8 contains a dependency-security patch and remains outside canonical main until merged or otherwise closed.

### P04 — NEXUS

No canonical GitHub repository was identified in the connected account during the audit.

Therefore repository head, CI and current evidence remain `UNKNOWN` at the account level.

### P05 — KIANGANA 2.0 / KIF

Keep four surfaces distinct:

1. current KIANGANA 2.0 main;
2. historical KIF V0.2 CP-01 checkpoint;
3. Universal Inference Fabric / FreeLLMAPI development;
4. Binance read-only adapter development.

No module-level proof should be generalized to the entire system.

### P06 — CPCN

The audit observed stacked CP04 pull requests for architecture, Evidence + Agro, eCDF adapter, Binance read-only gate and Grand Prix evidence preparation.

The top of that stack is not equivalent to canonical `main`.

### P07 — C.A.O

The canonical README records CP-01 through CP-08 as closed and CI-backed, including a 113/113 full-suite result at CP-08.

Payment processing, escrow/settlement and a public production marketplace remain explicitly unimplemented.

### P08 — Business OS

Git history contains work beyond the README's BOS-CP01-A headline, including lead-ingestion, Tally/Supabase gateway work, tests, CI, guarded deployment and predeploy hardening.

Required normalization: align the README and status documentation with the implementation without upgrading unsupported production or revenue claims.

### P09 — Web3 Security Intelligence Layer

Canonical main establishes the S03-CP01-A domain foundation.

Open development adds a #0$ Revenue Opportunity Engine. Keep S03 as a historical alias while P09 is the MCC registry ID.

### P10 — OSS² Engine

Current scope is a deterministic offline issue classifier with tests, CI, architecture and evidence policy.

GitHub discovery, AI patch generation, PR automation and KIANGANA 2.0 integration are not current implemented capabilities unless separately proven later.

## Current normalization debt

Priority synchronization items:

1. resolve P04 / NEXUS canonical-source status;
2. resolve P03 security PR #8 lifecycle;
3. normalize P08 Business OS documentation to actual repository state;
4. reconcile P06 CPCN stacked PRs with canonical main;
5. triage P02 NovaForge PR #1 / #5 / #6;
6. resolve P05 PR #9 / #11 lifecycle;
7. synchronize P01 account/project documentation after the expanded registry;
8. normalize or explicitly park G01 #0$ Protocole.

## Required fields for future project syncs

Every tracked project sync should report:

`ID · NAME · CLASS · CANONICAL REPOSITORY · VISIBILITY · CURRENT MAIN · CURRENT CHECKPOINT · MATURITY · LATEST VERIFIED TEST · LATEST EVIDENCE · OPEN PRs · BLOCKERS · NEXT ACTION · LAST SYNC`

## Evidence rule

`PROFILE CLAIM ≤ P01 CLAIM ≤ SOURCE PROJECT EVIDENCE`

and:

`DOCUMENTED ≠ IMPLEMENTED ≠ TESTED ≠ REPRODUCIBLE ≠ PUBLIC ≠ EXTERNALLY VALIDATED ≠ PRODUCTION`

## MCC-NORM-01 status

**REGISTRY BASELINE ESTABLISHED**

This checkpoint changes governance structure only. It does not alter application behavior, public project-card maturity, source visibility or project evidence.

Next checkpoint:

**MCC-NORM-02 — Canonical State & Evidence Synchronization**

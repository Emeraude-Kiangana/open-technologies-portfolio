# P01-CP-FREELANCE-03 — Offer Packaging

Status: **CLOSED · TESTED · PUBLIC · DEPLOYED**

## Mission

Convert the eight publicly evidenced freelance capabilities into bounded offers that can be quoted consistently.

```text
PUBLIC PROOF
    ↓
SERVICE
    ↓
PACKAGE
    ↓
FIXED BOUNDARY
    ↓
PRICE
    ↓
ACCEPTANCE GATE
    ↓
DELIVERY
```

## Pricing doctrine

- Currency: USD.
- Prices are launch prices for bounded missions, not hourly-rate claims.
- A package is accepted only after the client confirms the written scope.
- Third-party API usage, cloud bills, domains, paid licenses, paid runners, infrastructure and other external costs are excluded unless explicitly quoted.
- A client request outside the package boundary becomes a new quote, not silent scope expansion.
- Delivery targets are planning targets, not uptime/SLA guarantees.
- No package implies production certification, legal/compliance advice or security certification.

## Packages

Every service has exactly three tiers:

- **STARTER** — smallest independently useful deliverable;
- **STANDARD** — normal bounded client workflow;
- **ADVANCED** — larger but still explicitly bounded delivery.

Canonical data: `src/data/offers.json`.

Automated validation:

```bash
npm run validate:offers
```

The validator enforces:

- all 8 canonical service slugs;
- exactly 3 packages per service;
- ordered STARTER → STANDARD → ADVANCED tiers;
- positive ascending USD prices;
- non-empty scope, deliverables, exclusions and acceptance gates.

## Commercial boundary

The published price covers only the package scope.

A mission is not accepted until these are known:

1. input/access supplied by the client;
2. expected output;
3. package selected;
4. exclusions acknowledged;
5. external costs identified;
6. acceptance test agreed.

## Change control

```text
REQUEST
  ↓
IN PACKAGE?
  ├── YES → EXECUTE
  └── NO  → STOP → RE-SCOPE → NEW QUOTE
```

This protects both the client and the freelancer from accidental scope creep.


## Closure evidence

Checkpoint implementation commit on `main`:

`49a9ede7e679a2f5fa4ded9e4a9d3194e11b02fc`

Post-merge verification:

- Portfolio CI `36167308078` — **SUCCESS**;
- Freelance Service Proof Packs `36167307880` — **SUCCESS**;
- Deploy to GitHub Pages `36167307873` — **SUCCESS**.

Portfolio CI verified, on the same canonical commit:

- dependency installation;
- lint;
- support tests;
- freelance proof tests;
- `npm run validate:offers`;
- tracked-file secret scan;
- static export build.

Closure interpretation:

- 8 canonical services;
- 3 packages per service;
- 24 total bounded packages;
- USD launch pricing;
- explicit scope;
- explicit deliverables;
- explicit exclusions;
- explicit acceptance criteria;
- direct quote CTA on the public services surface.

This closure does **not** claim that the launch prices are market benchmarks or that a package has already been purchased by a paying client.

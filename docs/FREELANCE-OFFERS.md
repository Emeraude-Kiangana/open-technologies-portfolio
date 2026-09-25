# P01-CP-FREELANCE-03 — Offer Packaging

Status: **CANDIDATE — CI GATED**

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

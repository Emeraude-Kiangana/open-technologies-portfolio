# P01-CP-FREELANCE-06 — Conversion Layer

Status: **CANDIDATE — CI GATED**

## Mission

Reduce the distance between technical evidence and a qualified project intake without weakening the evidence boundary.

```text
VISITOR
  ↓
CLEAR OUTCOME
  ↓
TRUST SIGNALS
  ↓
SERVICE / FAST START
  ↓
PROOF / CASE STUDY
  ↓
START A PROJECT
  ↓
CLIENT INTAKE
```

## Conversion principles

1. One canonical primary action: `Start a project`.
2. Trust signals must be computed from canonical data, never manually inflated.
3. Proof remains one click away from commercial claims.
4. Launch pricing remains bounded and explicitly non-benchmark.
5. No paid-client history or testimonial is implied.
6. Intake remains non-contractual until scope, external costs and acceptance criteria are confirmed.

## Dynamic trust signals

The public UI computes:

- services with `PUBLIC PROOF`;
- total bounded packages;
- total canonical case studies;
- minimum launch price.

Sources:

- `src/data/services.ts`;
- `src/data/offers.json`;
- `src/data/case-studies.ts`.

Shared component:

`src/components/FreelanceConversion.tsx`.

## Fast-start routes

The services page surfaces three low-friction entry points:

- GitHub Setup;
- API Automation;
- FFmpeg Automation.

These are navigation shortcuts, not rankings or claims that they are universally best.

## Conversion boundary

CP06 does not claim:

- conversion-rate improvement without analytics evidence;
- market-leading pricing;
- client demand;
- paid-client history;
- testimonial evidence;
- guaranteed response or delivery times.

## Closure gate

CP06 closes only if:

- primary commercial CTAs route to intake;
- no stale commercial `mailto:` CTA remains on the homepage/services/case-studies surfaces;
- trust metrics are data-derived;
- fast-start offers resolve to real canonical services/packages;
- `npm run validate:conversion` passes;
- lint/tests/secret scan/static export pass;
- post-merge GitHub Pages deploy passes.

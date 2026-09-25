# P01-CP-FREELANCE-04 — Case Studies

Status: **CANDIDATE — CI GATED**

## Mission

Convert verified Open Technologies work into commercial reference narratives without inventing customer history.

```text
VERIFIED PROJECT / PROOF
        ↓
PROBLEM
        ↓
CONSTRAINTS
        ↓
BUILD / APPROACH
        ↓
VERIFIED RESULT
        ↓
EVIDENCE
        ↓
RELATED SERVICE
```

## Canonical case studies

1. NovaForge — reproducible FFmpeg media pipeline.
2. KIANGANA 2.0 / KIF V0.2 — dual-provider API routing with fallback.
3. eCDF — deterministic lifecycle with CI-backed evidence.
4. P01 Service Proof Packs — API Automation + Backend + Docker public proofs.

## Truth boundary

Every case study must be labelled either:

- `INTERNAL PROJECT`; or
- `TECHNICAL PROOF`.

No case study may imply:

- a paying customer;
- a client testimonial;
- commercial adoption;
- production scale;
- SLA compliance;
- certification;
- results beyond linked evidence.

## Validation

```bash
npm run validate:case-studies
```

The validator requires the four canonical cases, allowed reference types, core narrative fields and an explicit non-client boundary.

## Public surface

`/case-studies/`

The page links evidence directly and maps each case to relevant freelance services.

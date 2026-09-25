# P01-CP-FREELANCE-02 — Service Proof Packs

Status: **CANDIDATE — CI GATED**

This directory contains bounded, public, reproducible proof packs for freelance capabilities exposed by P01.

## Proof contract

A service proof pack must include:

```text
SCOPE
+
IMPLEMENTATION
+
AUTOMATED TEST
+
FAILURE PATH
+
REPRODUCTION STEPS
+
PUBLIC CI
```

No pack proves production experience, client adoption, scale, security certification, or performance beyond its documented scope.

## Packs

| Pack | Purpose | Runtime | External API / secret |
| --- | --- | --- | --- |
| `api-automation/` | transfer and transform records between two HTTP services | Node.js | none |
| `backend-prototype/` | small HTTP JSON API with health, OpenAPI and CRUD-like task flow | Node.js | none |
| `dockerization/` | containerize a small HTTP service with Compose and health check | Docker | none |

## Canonical verification

Node proofs:

```bash
npm run test:freelance-proofs
```

Docker proof:

```bash
docker compose -f proofs/freelance/dockerization/compose.yaml up -d --build
curl --fail http://127.0.0.1:18080/health
docker compose -f proofs/freelance/dockerization/compose.yaml down -v
```

GitHub Actions workflow:

`.github/workflows/freelance-service-proofs.yml`

## Boundary

These packs prove bounded technical execution only.

They do **not** prove:

- paid client delivery;
- production traffic;
- cloud deployment;
- security certification;
- scalability;
- SLA compliance;
- third-party API compatibility beyond documented test contracts.

# API Automation Proof Pack

## Claim

This pack demonstrates a bounded API automation flow:

```text
SOURCE HTTP API
      ↓ GET /items
TRANSFORM
      ↓
DESTINATION HTTP API
      ↓ POST /records
VERIFIED RESULT
```

The test starts two disposable local HTTP services, transfers two records, validates the exact transformed payload, and verifies a destination failure path.

## Tool-first route

1. HTTP contract first.
2. Native `fetch` before adding SDK dependencies.
3. Explicit success/failure checks.
4. No secret or external provider.
5. Automated reproduction with `node:test`.

## Verify

From repository root:

```bash
node --test proofs/freelance/api-automation/adapter.test.mjs
```

## Proven

- HTTP GET ingestion;
- deterministic field transformation;
- HTTP POST delivery;
- response validation;
- fail-closed behavior on destination HTTP error.

## Not proven

- OAuth;
- rate-limit handling;
- retries/backoff;
- a specific third-party API;
- production throughput;
- paid client delivery.

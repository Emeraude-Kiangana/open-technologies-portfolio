# Backend Prototype Proof Pack

## Claim

This pack demonstrates a small dependency-free HTTP JSON backend with:

- `GET /health`;
- `GET /openapi.json`;
- `POST /tasks`;
- `GET /tasks/{id}`;
- validation;
- 404 behavior;
- deterministic in-memory identifiers.

## Tool-first route

The proof uses Node.js built-ins only. No framework is added because the bounded requirements do not require one.

The OpenAPI document remains available as a machine-readable contract.

## Verify

```bash
node --test proofs/freelance/backend-prototype/server.test.mjs
```

Manual run:

```bash
PORT=8080 node proofs/freelance/backend-prototype/server.mjs
curl --fail http://127.0.0.1:8080/health
curl --fail http://127.0.0.1:8080/openapi.json
```

## Proven

- HTTP JSON API;
- health endpoint;
- OpenAPI contract endpoint;
- input validation;
- create/read flow;
- explicit 400 and 404 responses;
- automated tests.

## Not proven

- authentication;
- persistent database;
- concurrency guarantees;
- production deployment;
- performance or scale;
- paid client delivery.

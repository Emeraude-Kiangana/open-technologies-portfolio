# P01-CP-FREELANCE-05 — Client Intake

Status: **CLOSED · TESTED · PUBLIC · DEPLOYED**

## Mission

Convert a visitor or offer click into a structured, scope-aware lead without building a custom backend.

```text
VISITOR / OFFER
      ↓
TALLY INTAKE
      ↓
SCOPE DATA
      ↓
COST / SECRET GUARDS
      ↓
REVIEW
      ↓
QUOTE
      ↓
ACCEPTANCE GATE
```

## Tool-first decision

Primary intake provider: **Tally**.

Reason:

- no custom backend required;
- published external form;
- CAPTCHA;
- hidden attribution fields;
- no API secret required in P01;
- compatible with static GitHub Pages;
- #0$ path available.

Form ID: `PdK4ex`.

Public Tally URL: `https://tally.so/r/PdK4ex`.

P01 route: `/intake/`.

## Collected fields

- name;
- email;
- company/organization — optional;
- requested service;
- preferred package;
- problem statement;
- expected result;
- stack/environment — optional;
- public project/repository link — optional;
- deadline — optional;
- budget range;
- confirmation of external-cost boundary;
- confirmation that no secrets were submitted.

Attribution hidden fields:

- `source`;
- `service`;
- `package`;
- `campaign`.

## Security boundary

The form explicitly rejects:

- passwords;
- API keys;
- private keys;
- credentials;
- regulated personal data;
- confidential source files.

No file upload is enabled.

Intake submission does not create a contract and does not authorize paid work.

## Free-plan boundary

The core form is published on the #0$ path. Tally Pro-only owner-email customization, social metadata and advanced published styling are not required for CP05 and are not part of the closure gate.

## Closure gate

CP05 closes only when:

- intake route builds;
- canonical form is published;
- service/package attribution URLs are generated;
- static validation passes;
- secret scan passes;
- post-merge Portfolio CI passes;
- GitHub Pages deploy passes.


## Closure evidence

Implementation merge on `main`:

`31d8859a52050a0cbd2f7f3d7ec4c0a9dadd8454`

Post-merge verification on that exact commit:

- Portfolio CI `36172078729` — **SUCCESS**;
- Freelance Service Proof Packs `36172078618` — **SUCCESS**;
- GitHub Pages deploy `36172078488` — **SUCCESS**.

Closure interpretation:

- Tally form `PdK4ex` is published;
- P01 exposes `/intake/`;
- package CTAs pass source/service/package/campaign attribution;
- no custom backend is required;
- intake validation is part of Portfolio CI;
- core intake path remains classified at external cost `$0`.

Tally Pro-only owner-email customization, metadata and advanced published styling remain outside CP05 and are not required for closure.

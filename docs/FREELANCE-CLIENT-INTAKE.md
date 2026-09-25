# P01-CP-FREELANCE-05 — Client Intake

Status: **CANDIDATE — CI GATED**

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

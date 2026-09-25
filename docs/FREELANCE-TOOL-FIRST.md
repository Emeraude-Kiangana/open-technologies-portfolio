# P01 — Freelance Tool-First Service Layer

## Mission

Transformer les compétences déjà démontrées par Open Technologies en offres freelance bornées, testables et vérifiables sans affaiblir le contrat de preuve de P01.

```text
CLIENT PROBLEM
    ↓
NATIVE / EXISTING TOOL
    ↓
MINIMAL SCRIPT IF NEEDED
    ↓
TEST
    ↓
DOCUMENT
    ↓
PROOF
    ↓
DELIVERY
```

## Doctrine

1. **Tool-first** — utiliser l'outil le plus direct avant de produire du code spécifique.
2. **API-first** — préférer un contrat HTTP/API stable quand une intégration est nécessaire.
3. **Evidence-first** — aucune compétence n'est présentée comme publiquement démontrée sans lien de preuve.
4. **Cost-guarded** — coût inconnu = non classé #0$.
5. **Scope-bounded** — une preuve sur un checkpoint ne devient pas une preuve globale.

## Capability matrix

| Service | Primary tools | Verification | Public proof state |
| --- | --- | --- | --- |
| API Automation | curl · OpenAPI · Node.js fetch | smoke test + error path | PARTIAL |
| GitHub Setup | git · GitHub · gh CLI | clean install / commands | PUBLIC |
| GitHub Actions CI | GitHub Actions | green CI run | PUBLIC |
| FFmpeg Automation | ffmpeg · ffprobe | decode/probe + checksum when useful | PUBLIC |
| Dockerisation | Docker · Compose | build/start/health | PARTIAL |
| Backend Prototype | FastAPI/OpenAPI or Node.js | endpoint smoke tests | PARTIAL |
| Technical Audit | git · gh · native linters/tests | reproducible findings | PUBLIC |
| Technical Documentation | Markdown · Mermaid · GitHub | commands and links checked | PUBLIC |

## Standard delivery package

```text
CLIENT-DELIVERY/
├── src/                # when code is required
├── README.md
├── SETUP.md
├── .env.example        # when configuration is required
├── tests/              # when appropriate
└── evidence/
    └── verification.md
```

The exact package is adapted to the mission. Empty ceremony is avoided.

## Acceptance contract

Every mission should define before implementation:

- expected input;
- expected output;
- supported environment;
- success test;
- failure behavior;
- external cost or account dependency;
- evidence that can be delivered without leaking client secrets.

## P01 boundary

P01 is the public presentation and evidence layer. Client-confidential source code, credentials, datasets and private business information must not be copied into P01.

A commercial claim must remain weaker than or equal to the evidence available for that claim.

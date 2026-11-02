# NN2026 Demo Mode — Open Technologies 🇨🇩

**Purpose:** a five-minute, evidence-first walkthrough of P01 and Open Technologies Support.

**Demo status:** documentation/preparation branch. This file does not claim a new UI feature, live LLM endpoint, deployment, hackathon selection, or independent validation.

## Core message

> An AI assistant should help people inspect what a project actually demonstrates—not merely repeat what its author claims.

P01 is the public presentation layer. Source repositories remain the technical sources of truth.

## Five-minute run of show

| Time | Action | Evidence / expected outcome |
|---|---|---|
| 00:00–00:40 | Introduce the problem and the evidence-first principle | Explain `Build → Test → Prove → Publish`. |
| 00:40–01:25 | Open the public portfolio and project index | Show project maturity separately from public evidence availability. |
| 01:25–02:00 | Open eCDF's source repository and its documented test/CI evidence | Explain the prototype boundary; do not imply live financial settlement. |
| 02:00–03:30 | Open `/support/` and ask the prepared questions | Show deterministic retrieval and the evidence/limitation response. |
| 03:30–04:20 | Follow one evidence link to its originating repository or workflow | The visitor can inspect the source rather than trust the assistant. |
| 04:20–05:00 | State current limits and the next engineering step | Clearly distinguish implemented deterministic support from a deployed LLM endpoint. |

## Prepared questions

1. **“Quels projets possèdent des tests automatisés ?”**  
   Expected: identify only projects for which the bounded knowledge snapshot contains test evidence. Open the linked source to verify.

2. **“Est-ce que eCDF réalise réellement des transactions sur Stellar ?”**  
   Expected: do not claim live Stellar settlement. Explain the documented prototype scope and its explicit non-claims.

3. **“Quelles preuves démontrent les capacités de KIANGANA 2.0 ?”**  
   Expected: return only evidence identifiers present in the retrieved record. If evidence is private or unavailable, say so.

4. **“Est-ce que CPCN est une plateforme financière opérationnelle ?”**  
   Expected: do not present CPCN as an operational financial platform. State the documented maturity and validation boundary.

If the assistant's actual answer differs from these expectations, do not improvise or conceal it. Record the result and inspect the knowledge snapshot and source evidence.

## Technical architecture (current documented design)

```text
Visitor
  ↓
Static P01 support UI
  ↓
Deterministic retrieval over curated public knowledge
  ↓
Grounded deterministic draft
  ↓
Optional separately hosted server-side provider router
  ├─ Gemini
  └─ Groq fallback
  ↓
Evidence-ID allow-list validation
  ↓
Answer + evidence + limitations
```

The GitHub Pages static export cannot host a private API route. Provider credentials must never be exposed in browser code or `NEXT_PUBLIC_*` variables. The LLM path is optional and must only be described as live after secure deployment and real provider/fallback evidence exist.

## Pre-demo verification checklist

- [ ] Open the live portfolio from a logged-out/incognito browser.
- [ ] Open `/open-technologies-portfolio/support/` and confirm the page loads.
- [ ] Run `npm ci`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Run `npm run test:support`.
- [ ] Run `npm run scan:secrets`.
- [ ] Run all four prepared questions; record actual outputs.
- [ ] Follow at least one evidence link to its source repository or workflow.
- [ ] Prepare screenshots or a short screen recording as an offline fallback.
- [ ] Verify that the knowledge snapshot and project evidence are current.
- [ ] Do not expose private repositories, credentials, personal data, or confidential participant information.

## Truthful claims boundary

Safe to say when demonstrated:
- P01 is a public evidence index for the listed projects.
- The support UI has a deterministic local retrieval mode over a curated knowledge snapshot.
- The support contract is **NO EVIDENCE → NO CLAIM**.
- The LLM provider route is optional and requires a separately hosted secure endpoint.

Do not claim without fresh proof:
- A deployed/live Gemini or Groq integration.
- Autonomous agents that execute actions on external systems.
- Production readiness, independent reproducibility, client revenue, or field validation.
- Live eCDF settlement or an operational CPCN financial network.
- Hackathon selection or acceptance; form receipt is not selection.

## 45-second closing

“Open Technologies is an initiative to make digital projects more transparent and verifiable. P01 connects project descriptions to source repositories, tests, workflows and bounded evidence. Open Technologies Support lets visitors ask questions and retrieve explanations from that evidence. Its most important feature is not that it always answers: it is that it must recognize when the evidence is insufficient. Our principle is simple: Build, Test, Prove.”

## References

- Portfolio: https://emeraude-kiangana.github.io/open-technologies-portfolio/
- Support route: https://emeraude-kiangana.github.io/open-technologies-portfolio/support/
- Source repository: https://github.com/Emeraude-Kiangana/open-technologies-portfolio
- Support architecture: [docs/SUPPORT-ARCHITECTURE.md](SUPPORT-ARCHITECTURE.md)

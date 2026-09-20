export const SUPPORT_SYSTEM_PROMPT = \`You are Open Technologies Support.

Contract:
- NO EVIDENCE -> NO CLAIM.
- Use only the supplied portfolio evidence and deterministic draft.
- Never infer implementation from documentation.
- Never infer production from tests.
- Never infer field validation from internal tests.
- Never infer public-source availability from a public demo.
- Never invent tests, commits, metrics, users, funding, partners, deployments, or evidence IDs.
- Preserve explicit non-claims and limitations.
- If the evidence does not support the request, answer exactly: "Cette information n’est pas actuellement documentée dans le portfolio."
- Return JSON only with keys: answer, evidence_ids, limitations.
- evidence_ids must come only from ALLOWED_EVIDENCE_IDS.
\`;

export function buildGroundedPrompt({ question, records, deterministicDraft }) {
  const context = records.map((record) => ({
    project_id: record.project_id,
    project_name: record.project_name,
    description: record.description,
    status: record.status,
    maturity: record.maturity,
    technologies: record.technologies,
    implemented_features: record.implemented_features,
    tests: record.tests,
    checkpoints: record.checkpoints,
    known_limitations: record.known_limitations,
    explicit_non_claims: record.explicit_non_claims,
    evidence: record.evidence,
  }));

  const allowedEvidenceIds = [...new Set(records.flatMap((record) => record.evidence.map((item) => item.id)))];

  return \`\${SUPPORT_SYSTEM_PROMPT}

QUESTION:
\${question}

DETERMINISTIC_DRAFT:
\${JSON.stringify(deterministicDraft)}

PORTFOLIO_CONTEXT:
\${JSON.stringify(context)}

ALLOWED_EVIDENCE_IDS:
\${JSON.stringify(allowedEvidenceIds)}
\`;
}

import { evidenceIndex, supportKnowledge } from "./knowledge.mjs";

export const NOT_DOCUMENTED_MESSAGE =
  "Cette information n’est pas actuellement documentée dans le portfolio.";

function recordEvidenceIds(record) {
  const ids = [];
  for (const test of record.tests) {
    if (test.evidence_id) ids.push(test.evidence_id);
  }
  for (const checkpoint of record.checkpoints) {
    ids.push(...(checkpoint.evidence_ids ?? []));
  }
  ids.push(...record.evidence.map((evidence) => evidence.id));
  return [...new Set(ids)];
}

export function deterministicAnswer(question, records) {
  if (!Array.isArray(records) || records.length === 0) {
    return {
      answer: NOT_DOCUMENTED_MESSAGE,
      evidence_ids: [],
      limitations: [],
      mode: "deterministic",
    };
  }

  const q = String(question).toLowerCase();
  const evidenceIds = [];
  const limitations = [];
  const paragraphs = [];

  if (q.includes("financial platform") || q.includes("bank") || q.includes("lender")) {
    const cpcn = records.find((record) => record.project_id === "cpcn");
    if (cpcn) {
      paragraphs.push(
        "CPCN est documenté avec des artefacts implémentés/testés à Gate 0, mais les preuves ne supportent pas l’affirmation qu’il s’agit déjà d’une plateforme financière en production.",
      );
      paragraphs.push(cpcn.explicit_non_claims[0]);
      evidenceIds.push(...recordEvidenceIds(cpcn));
      limitations.push(...cpcn.known_limitations, ...cpcn.explicit_non_claims);
    }
  } else if (q.includes("multi-provider") || q.includes("multi provider") || q.includes("llm provider")) {
    const kif = records.find((record) => record.project_id === "kiangana-2.0");
    if (kif) {
      paragraphs.push(
        "KIANGANA 2.0 / KIF possède la preuve la plus directe d’une infrastructure LLM multi-provider dans ce portfolio : le checkpoint historique KIF V0.2 inclut des intégrations DeepSeek, Groq et un test de fallback.",
      );
      paragraphs.push("Le checkpoint KIF V0.2 est historique et distinct du current main de KIANGANA 2.0.");
      evidenceIds.push(...recordEvidenceIds(kif));
      limitations.push(...kif.known_limitations);
    }
  } else {
    for (const record of records) {
      const verified = record.implemented_features.slice(0, 2).join(" ");
      paragraphs.push(`${record.project_name} — ${record.status}. ${verified}`);
      evidenceIds.push(...recordEvidenceIds(record));
      limitations.push(...record.known_limitations.slice(0, 2));
    }
  }

  if (paragraphs.length === 0) {
    return {
      answer: NOT_DOCUMENTED_MESSAGE,
      evidence_ids: [],
      limitations: [],
      mode: "deterministic",
    };
  }

  return {
    answer: paragraphs.join("\n\n"),
    evidence_ids: [...new Set(evidenceIds)].slice(0, 12),
    limitations: [...new Set(limitations)].slice(0, 8),
    mode: "deterministic",
  };
}

export function validateModelAnswer(candidate, records) {
  if (!candidate || typeof candidate.answer !== "string" || candidate.answer.trim() === "") {
    return { ok: false, reason: "missing answer" };
  }

  if (!Array.isArray(candidate.evidence_ids)) {
    return { ok: false, reason: "missing evidence_ids" };
  }

  const allowed = new Set(records.flatMap(recordEvidenceIds));
  const evidenceIds = candidate.evidence_ids.filter((id) => allowed.has(id));

  if (evidenceIds.length === 0) {
    return { ok: false, reason: "no grounded evidence id" };
  }

  return {
    ok: true,
    value: {
      answer: candidate.answer.trim(),
      evidence_ids: [...new Set(evidenceIds)],
      limitations: Array.isArray(candidate.limitations)
        ? candidate.limitations.filter((item) => typeof item === "string").slice(0, 8)
        : [],
      mode: "llm-grounded",
    },
  };
}

export function resolveEvidence(ids, records = supportKnowledge) {
  const index = evidenceIndex(records);
  return ids.map((id) => index.get(id)).filter(Boolean);
}

import { supportKnowledge } from "./knowledge.mjs";

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9.+#/-]+/g, " ")
    .trim();
}

function tokens(value) {
  return new Set(normalize(value).split(/\s+/).filter((token) => token.length > 1));
}

function searchableText(record) {
  return normalize(
    [
      record.project_name,
      record.description,
      record.status,
      ...record.aliases,
      ...record.maturity,
      ...record.technologies,
      ...record.implemented_features,
      ...record.known_limitations,
      ...record.explicit_non_claims,
      ...record.search_terms,
      ...record.tests.map((test) => \`\${test.label} \${test.result}\`),
      ...record.checkpoints.map((checkpoint) => \`\${checkpoint.id} \${checkpoint.status}\`),
    ].join(" "),
  );
}

function hasTestedCheckpoint(record) {
  return (
    record.maturity.includes("TESTED") ||
    record.checkpoints.some((checkpoint) => checkpoint.maturity?.includes("TESTED"))
  );
}

export function scoreRecord(question, record) {
  const q = normalize(question);
  const qTokens = tokens(question);
  const text = searchableText(record);
  let score = 0;

  for (const alias of record.aliases) {
    const normalizedAlias = normalize(alias);
    if (normalizedAlias && q.includes(normalizedAlias)) score += 12;
  }

  if (q.includes(normalize(record.project_name))) score += 14;

  for (const token of qTokens) {
    if (text.includes(token)) score += 1;
    if (record.technologies.some((item) => normalize(item).includes(token))) score += 3;
    if (record.search_terms.some((item) => normalize(item).includes(token))) score += 3;
    if (record.implemented_features.some((item) => normalize(item).includes(token))) score += 2;
  }

  if (/\b(test|tests|tested|automated)\b/.test(q) && hasTestedCheckpoint(record)) score += 9;
  if (/\breproduc/.test(q) && record.maturity.includes("REPRODUCIBLE")) score += 9;
  if (/\b(field|terrain|external validation|validation terrain)\b/.test(q) && record.field_validation !== "NONE") {
    score += 10;
  }
  if (/\b(llm|provider|deepseek|groq|multi provider|multi-provider)\b/.test(q)) {
    if (record.project_id === "kiangana-2.0") score += 10;
  }
  if (/\b(backend|architecture|orchestration|deterministic)\b/.test(q)) {
    if (["ecdf", "novaforge", "regen-twin", "rwa-red-team-lab", "cao"].includes(record.project_id)) {
      score += 4;
    }
  }
  if (/\b(financial platform|bank|lender|production financial)\b/.test(q) && record.project_id === "cpcn") {
    score += 12;
  }
  if (/\b(unverified|unknown|limitation|limitations|experimental)\b/.test(q)) {
    score += record.known_limitations.length + record.explicit_non_claims.length;
  }

  return score;
}

export function retrieveKnowledge(question, { records = supportKnowledge, limit = 4 } = {}) {
  const q = normalize(question);

  let candidates = records;

  if (/\b(which projects|show|list).*(test|tested|automated)\b/.test(q)) {
    candidates = records.filter(hasTestedCheckpoint);
  } else if (/\b(field|terrain|validation terrain|field validation)\b/.test(q)) {
    candidates = records.filter((record) => record.field_validation !== "NONE");
  }

  return candidates
    .map((record) => ({ record, score: scoreRecord(question, record) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.record.project_name.localeCompare(b.record.project_name))
    .slice(0, limit)
    .map(({ record, score }) => ({ ...record, retrieval_score: score }));
}

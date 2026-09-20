export const SUPPORT_MATURITY = Object.freeze([
  "DOCUMENTED",
  "IMPLEMENTED",
  "TESTED",
  "REPRODUCIBLE",
  "FIELD-VALIDATED",
  "PRODUCTION",
]);

const requiredStringFields = [
  "project_id",
  "project_name",
  "description",
  "status",
  "source_visibility",
];

const requiredArrayFields = [
  "aliases",
  "maturity",
  "technologies",
  "implemented_features",
  "tests",
  "evidence",
  "repositories",
  "checkpoints",
  "known_limitations",
  "explicit_non_claims",
  "search_terms",
];

export function validateKnowledgeRecord(record) {
  const errors = [];

  for (const field of requiredStringFields) {
    if (typeof record?.[field] !== "string" || record[field].trim() === "") {
      errors.push(`${field} must be a non-empty string`);
    }
  }

  for (const field of requiredArrayFields) {
    if (!Array.isArray(record?.[field])) {
      errors.push(`${field} must be an array`);
    }
  }

  if (
    Array.isArray(record?.maturity) &&
    record.maturity.some((status) => !SUPPORT_MATURITY.includes(status))
  ) {
    errors.push("maturity contains an unsupported status");
  }

  if (!["NONE", "PARTIAL", "FIELD-VALIDATED", "UNKNOWN"].includes(record?.field_validation)) {
    errors.push("field_validation must be NONE, PARTIAL, FIELD-VALIDATED, or UNKNOWN");
  }

  if (typeof record?.production !== "boolean") {
    errors.push("production must be boolean");
  }

  for (const evidence of record?.evidence ?? []) {
    if (!evidence?.id || !evidence?.label || !evidence?.kind || !evidence?.access) {
      errors.push("each evidence item requires id, label, kind, and access");
    }
  }

  return errors;
}

export function validateKnowledgeBase(records) {
  const errors = [];
  const projectIds = new Set();
  const evidenceIds = new Set();

  for (const record of records) {
    const recordErrors = validateKnowledgeRecord(record);
    errors.push(...recordErrors.map((error) => `${record.project_id ?? "unknown"}: ${error}`));

    if (projectIds.has(record.project_id)) {
      errors.push(`duplicate project_id: ${record.project_id}`);
    }
    projectIds.add(record.project_id);

    for (const evidence of record.evidence ?? []) {
      if (evidenceIds.has(evidence.id)) {
        errors.push(`duplicate evidence id: ${evidence.id}`);
      }
      evidenceIds.add(evidence.id);
    }
  }

  return errors;
}

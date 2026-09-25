import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/data/case-studies.ts", import.meta.url), "utf8");

const expectedSlugs = [
  "novaforge-media-pipeline",
  "kif-provider-fallback",
  "ecdf-deterministic-lifecycle",
  "p01-service-proof-packs",
];

const errors = [];

for (const slug of expectedSlugs) {
  if (!source.includes(`slug: "${slug}"`)) errors.push(`missing case study: ${slug}`);
}

const entries = source.split("slug: ").slice(1);
if (entries.length !== expectedSlugs.length) {
  errors.push(`expected ${expectedSlugs.length} case studies, found ${entries.length}`);
}

for (const entry of entries) {
  if (!entry.includes('referenceType: "INTERNAL PROJECT"') && !entry.includes('referenceType: "TECHNICAL PROOF"')) {
    errors.push("case study must have an allowed referenceType");
  }
  if (!entry.includes("Ce cas n'est pas un projet client." ) && !entry.includes("Ce cas est un proof pack interne, pas une livraison client.")) {
    errors.push("case study must explicitly reject paid-client interpretation");
  }
  for (const field of ["problem:", "constraints:", "approach:", "tools:", "results:", "services:", "evidence:", "limitations:", "verifiedAt:"]) {
    if (!entry.includes(field)) errors.push(`case study missing field ${field}`);
  }
}

const forbidden = [
  "client testimonial",
  "paid client",
  "customer success",
  "client paid",
];

for (const phrase of forbidden) {
  if (source.toLowerCase().includes(phrase)) {
    errors.push(`forbidden commercial claim: ${phrase}`);
  }
}

if (errors.length) {
  console.error("CASE_STUDY_VALIDATION=FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`CASE_STUDY_VALIDATION=PASS studies=${expectedSlugs.length}`);

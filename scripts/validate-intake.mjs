import { readFileSync } from "node:fs";

const config = readFileSync(new URL("../src/data/intake.ts", import.meta.url), "utf8");
const page = readFileSync(new URL("../src/app/intake/page.tsx", import.meta.url), "utf8");
const services = readFileSync(new URL("../src/app/services/page.tsx", import.meta.url), "utf8");

const errors = [];
const required = [
  'formId: "PdK4ex"',
  'formUrl: "https://tally.so/r/PdK4ex"',
  '"source"',
  '"service"',
  '"package"',
  '"campaign"',
  'externalCost: 0',
];

for (const token of required) {
  if (!config.includes(token)) errors.push(`missing intake config token: ${token}`);
}

for (const phrase of ["passwords", "API keys", "private keys", "credentials"]) {
  if (!config.includes(phrase)) errors.push(`missing secret guard: ${phrase}`);
}

if (!page.includes("Ouvrir le formulaire sécurisé")) {
  errors.push("intake page CTA is missing");
}

if (!services.includes('campaign: "service-package"')) {
  errors.push("service package attribution is missing");
}

if (errors.length) {
  console.error("INTAKE_VALIDATION=FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("INTAKE_VALIDATION=PASS provider=Tally form=PdK4ex");

import { readFileSync } from "node:fs";

const expectedServices = [
  "api-automation",
  "github-setup",
  "github-actions-ci",
  "ffmpeg-automation",
  "dockerisation",
  "backend-prototype",
  "technical-audit",
  "technical-documentation",
];

const expectedTiers = ["STARTER", "STANDARD", "ADVANCED"];
const offerPath = new URL("../src/data/offers.json", import.meta.url);
const data = JSON.parse(readFileSync(offerPath, "utf8"));

const errors = [];

if (data.currency !== "USD") errors.push("currency must be USD");
if (!String(data.pricingNote || "").trim()) errors.push("pricingNote is required");

const services = Array.isArray(data.services) ? data.services : [];
const slugs = services.map((service) => service.slug);

for (const slug of expectedServices) {
  if (!slugs.includes(slug)) errors.push(`missing service: ${slug}`);
}
for (const slug of slugs) {
  if (!expectedServices.includes(slug)) errors.push(`unknown service: ${slug}`);
}
if (new Set(slugs).size !== slugs.length) errors.push("duplicate service slug");

for (const service of services) {
  if (!Array.isArray(service.packages) || service.packages.length !== 3) {
    errors.push(`${service.slug}: exactly 3 packages are required`);
    continue;
  }

  const tiers = service.packages.map((pkg) => pkg.tier);
  if (JSON.stringify(tiers) !== JSON.stringify(expectedTiers)) {
    errors.push(`${service.slug}: tiers must be STARTER, STANDARD, ADVANCED in order`);
  }

  const prices = service.packages.map((pkg) => pkg.priceUsd);
  if (!prices.every((price) => Number.isInteger(price) && price > 0)) {
    errors.push(`${service.slug}: all prices must be positive integer USD values`);
  }
  if (!(prices[0] < prices[1] && prices[1] < prices[2])) {
    errors.push(`${service.slug}: prices must increase by tier`);
  }

  for (const pkg of service.packages) {
    for (const field of ["name", "deliveryTarget"]) {
      if (!String(pkg[field] || "").trim()) {
        errors.push(`${service.slug}/${pkg.tier}: ${field} is required`);
      }
    }

    if (!Number.isInteger(pkg.revisions) || pkg.revisions < 0) {
      errors.push(`${service.slug}/${pkg.tier}: revisions must be a non-negative integer`);
    }

    for (const field of ["scope", "deliverables", "exclusions", "acceptance"]) {
      if (!Array.isArray(pkg[field]) || pkg[field].length === 0) {
        errors.push(`${service.slug}/${pkg.tier}: ${field} must be non-empty`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error("OFFER_VALIDATION=FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`OFFER_VALIDATION=PASS services=${services.length} packages=${services.length * 3}`);

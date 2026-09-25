import { readFileSync } from "node:fs";

const home = readFileSync(new URL("../src/app/page.tsx", import.meta.url), "utf8");
const servicesPage = readFileSync(new URL("../src/app/services/page.tsx", import.meta.url), "utf8");
const casesPage = readFileSync(new URL("../src/app/case-studies/page.tsx", import.meta.url), "utf8");
const intakePage = readFileSync(new URL("../src/app/intake/page.tsx", import.meta.url), "utf8");
const trust = readFileSync(new URL("../src/components/FreelanceConversion.tsx", import.meta.url), "utf8");
const servicesData = readFileSync(new URL("../src/data/services.ts", import.meta.url), "utf8");
const offers = JSON.parse(
  readFileSync(new URL("../src/data/offers.json", import.meta.url), "utf8"),
);

const errors = [];
const commercialSurfaces = [
  ["home", home],
  ["services", servicesPage],
  ["case studies", casesPage],
];

for (const [name, source] of commercialSurfaces) {
  if (source.includes("mailto:")) {
    errors.push(`${name} contains stale commercial mailto CTA`);
  }
}

if (!home.includes("FreelanceTrustStrip") || !home.includes("ConversionCTA")) {
  errors.push("homepage must expose dynamic trust signals and canonical conversion CTA");
}

if (!servicesPage.includes("FreelanceTrustStrip")) {
  errors.push("services page must expose dynamic trust signals");
}

for (const slug of ["github-setup", "api-automation", "ffmpeg-automation"]) {
  if (!servicesData.includes(`slug: "${slug}"`)) {
    errors.push(`unknown fast-start service: ${slug}`);
  }
  const offer = offers.services.find((entry) => entry.slug === slug);
  if (!offer || !offer.packages?.length) {
    errors.push(`fast-start service has no canonical package: ${slug}`);
  }
}

for (const token of [
  "freelanceServices.filter",
  "offersData.services.reduce",
  "caseStudies.length",
  "Math.min",
]) {
  if (!trust.includes(token)) errors.push(`trust metric is not data-derived: ${token}`);
}

if (!intakePage.includes("Ouvrir le formulaire sécurisé")) {
  errors.push("intake primary CTA is missing");
}

if (errors.length) {
  console.error("CONVERSION_VALIDATION=FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("CONVERSION_VALIDATION=PASS");

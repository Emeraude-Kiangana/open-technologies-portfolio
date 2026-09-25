import { readFileSync } from "node:fs";

const files = {
  root: readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8"),
  sitemap: readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8"),
  structured: readFileSync(new URL("../src/components/SiteStructuredData.tsx", import.meta.url), "utf8"),
  services: readFileSync(new URL("../src/app/services/layout.tsx", import.meta.url), "utf8"),
  cases: readFileSync(new URL("../src/app/case-studies/layout.tsx", import.meta.url), "utf8"),
  intake: readFileSync(new URL("../src/app/intake/layout.tsx", import.meta.url), "utf8"),
  support: readFileSync(new URL("../src/app/support/layout.tsx", import.meta.url), "utf8"),
};

const errors = [];

for (const token of ["metadataBase", "alternates", "openGraph", "robots", "SiteStructuredData"]) {
  if (!files.root.includes(token)) errors.push(`root SEO token missing: ${token}`);
}

for (const path of ["/services", "/case-studies", "/projects/ecdf", "/projects/novaforge", "/projects/cao"]) {
  if (!files.sitemap.includes(`path: "${path}"`)) errors.push(`sitemap route missing: ${path}`);
}

for (const forbidden of ["/intake", "/support"]) {
  if (files.sitemap.includes(`path: "${forbidden}"`)) errors.push(`noindex route present in sitemap: ${forbidden}`);
}

for (const name of ["intake", "support"]) {
  if (!files[name].includes("index: false") || !files[name].includes("follow: true")) {
    errors.push(`${name} must be noindex, follow`);
  }
}

for (const name of ["services", "cases"]) {
  if (!files[name].includes("canonical") || !files[name].includes("description")) {
    errors.push(`${name} metadata incomplete`);
  }
}

for (const token of ['"@type": "Person"', '"@type": "WebSite"', "schema.org"]) {
  if (!files.structured.includes(token)) errors.push(`structured data token missing: ${token}`);
}

if (errors.length) {
  console.error("SEO_VALIDATION=FAILED");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("SEO_VALIDATION=PASS");

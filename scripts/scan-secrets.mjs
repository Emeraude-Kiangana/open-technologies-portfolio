import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import { pathToFileURL } from "node:url";

const patterns = [
  { name: "Google API key", regex: new RegExp("AI" + "za[A-Za-z0-9_-]{30,}") },
  { name: "Groq API key", regex: new RegExp("gsk" + "_[A-Za-z0-9_-]{20,}") },
  { name: "OpenAI-style secret", regex: new RegExp("sk" + "-[A-Za-z0-9_-]{24,}") },
  { name: "Private key block", regex: new RegExp("BEGIN " + "(RSA |EC |OPENSSH )?PRIVATE KEY") },
];

export function scanTrackedFiles({ cwd = process.cwd() } = {}) {
  const tracked = execFileSync("git", ["ls-files", "-z"], { cwd })
    .toString("utf8")
    .split("\0")
    .filter(Boolean);

  const findings = [];

  for (const path of tracked) {
    let stat;
    try {
      stat = statSync(\`\${cwd}/\${path}\`);
    } catch {
      continue;
    }

    if (!stat.isFile() || stat.size > 1_000_000) continue;

    const buffer = readFileSync(\`\${cwd}/\${path}\`);
    if (buffer.includes(0)) continue;

    const content = buffer.toString("utf8");
    for (const pattern of patterns) {
      if (pattern.regex.test(content)) {
        findings.push({ path, pattern: pattern.name });
      }
    }
  }

  return findings;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const findings = scanTrackedFiles();

  if (findings.length > 0) {
    console.error("SECRET_SCAN=FAILED");
    for (const finding of findings) {
      console.error(\`\${finding.path}: \${finding.pattern}\`);
    }
    process.exit(1);
  }

  console.log("SECRET_SCAN=CLEAN");
}

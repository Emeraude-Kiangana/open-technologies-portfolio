export const intakeConfig = {
  provider: "Tally",
  formId: "PdK4ex",
  formUrl: "https://tally.so/r/PdK4ex",
  publicRoute: "/open-technologies-portfolio/intake/",
  status: "PUBLISHED",
  externalCost: 0,
  trackedFields: ["source", "service", "package", "campaign"],
  forbiddenSensitiveInputs: [
    "passwords",
    "API keys",
    "private keys",
    "credentials",
    "regulated personal data",
    "confidential source files",
  ],
} as const;

export function buildIntakeUrl({
  source = "p01",
  service,
  packageTier,
  campaign = "freelance",
}: {
  source?: string;
  service?: string;
  packageTier?: string;
  campaign?: string;
}) {
  const url = new URL(intakeConfig.formUrl);
  url.searchParams.set("source", source);
  url.searchParams.set("campaign", campaign);
  if (service) url.searchParams.set("service", service);
  if (packageTier) url.searchParams.set("package", packageTier);
  return url.toString();
}

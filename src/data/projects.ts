export type MaturityStatus =
  | "DOCUMENTED"
  | "IMPLEMENTED"
  | "TESTED"
  | "REPRODUCIBLE"
  | "PUBLIC"
  | "EXTERNALLY VALIDATED";

export type EvidenceAvailability =
  | "AVAILABLE"
  | "PARTIAL"
  | "PRIVATE SOURCE"
  | "UNKNOWN"
  | "BLOCKED";

export type EvidenceLink = {
  label: string;
  href: string;
};

export type StatusBreakdown = {
  label: string;
  statuses: MaturityStatus[];
  note?: string;
};

export type ProjectEvidence = {
  name: string;
  description: string;
  projectStatus: MaturityStatus[];
  statusBreakdown?: StatusBreakdown[];
  publicEvidenceStatus: EvidenceAvailability[];
  sourceVisibility: "PUBLIC" | "PRIVATE";
  version: string;
  demo: string;
  license: string;
  source: string;
  sourceHref?: string;
  verifiedScope: string[];
  evidence: EvidenceLink[];
  evidenceNote?: string;
  limitations: string[];
  lastVerified: string;
};

export const projects: ProjectEvidence[] = [
  {
    name: "CPCN",
    description:
      "Research prototypes for testing evidence and permission workflows around SME financing in the Democratic Republic of the Congo.",
    projectStatus: ["DOCUMENTED"],
    statusBreakdown: [
      {
        label: "CPCN global",
        statuses: ["DOCUMENTED"],
        note: "Gate 0 research and canonical project index.",
      },
      {
        label: "CPCN-CP-G0-02 v0.1",
        statuses: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
        note: "Bounded simulator artifact; not a project-wide TESTED claim.",
      },
    ],
    publicEvidenceStatus: ["PARTIAL", "PRIVATE SOURCE"],
    sourceVisibility: "PRIVATE",
    version: "Gate 0 · G0-01/G0-02 v0.1",
    demo: "CONTROLLED FIELD PORTAL / LOCAL DEMO",
    license: "No license currently granted",
    source: "PRIVATE — Emeraude-Kiangana/congo-programmable-capital-network",
    verifiedScope: [
      "G0-01 is frozen for continued Gate 0 field collection.",
      "One founder SELF_TEST and one bounded external SME pilot are recorded for G0-01.",
      "G0-02 Evidence Passport Simulator is documented, implemented and locally browser-tested.",
      "CPCN-UD-002 and CPCN-UD-003 remain pending.",
    ],
    evidence: [],
    evidenceNote:
      "Private source verified at main f98056fd5db26377545e0dc6549bfe47fd9d91af. G0-01 freeze: edc54ffea73ef156595e00a0709a36b63154a55e. G0-02 implementation: 84489a12aea02595e30dc0345c63d9602c799398. Local test-proof: a54349910134bd0a8262d7b93701822211e7abf0.",
    limitations: [
      "Not a bank, lender, credit bureau, credit-scoring service or payment institution.",
      "No KYC, tokenization, regulatory approval or institutional partnership is claimed.",
      "One bounded external SME pilot is not market validation or project-wide external validation.",
      "Source inspection is limited because the canonical repository is private.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "eCDF",
    description:
      "TypeScript research prototype for deterministic digital-value transfer experiments with a tested local transfer lifecycle.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE"],
    sourceVisibility: "PUBLIC",
    version: "0.1.0-alpha.0",
    demo: "LOCAL DETERMINISTIC CLI DEMO",
    license: "Apache-2.0",
    source: "Emeraude-Kiangana/ecdf",
    sourceHref: "https://github.com/Emeraude-Kiangana/ecdf",
    verifiedScope: [
      "Local transfer-domain model with explicit states, role rules, invariants, bigint amounts and duplicate-event rejection.",
      "Current main 8ef8002ac538caae69e5e9aa6f093bc826af3f87 includes the bounded LOCAL_DOMAIN_ONLY lifecycle demo.",
      "Post-merge CI run 35508188094 completed successfully: 29 / 29 tests passed and the deterministic demo step succeeded.",
      "The demo executes DRAFT → AUTHORIZED → SUBMITTED → SETTLED locally and explicitly records networkSettlement=false.",
      "Foundation evidence remains anchored at commit 34814b06ae28fe5e3a62b9866cb9781332312b7b.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/ecdf",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/ecdf/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "Current main",
        href: "https://github.com/Emeraude-Kiangana/ecdf/commit/8ef8002ac538caae69e5e9aa6f093bc826af3f87",
      },
      {
        label: "CI + demo run 35508188094",
        href: "https://github.com/Emeraude-Kiangana/ecdf/actions/runs/35508188094",
      },
      {
        label: "Demo source",
        href: "https://github.com/Emeraude-Kiangana/ecdf/blob/main/src/demo.ts",
      },
      {
        label: "Foundation commit",
        href: "https://github.com/Emeraude-Kiangana/ecdf/commit/34814b06ae28fe5e3a62b9866cb9781332312b7b",
      },
      {
        label: "P01 evidence page",
        href: "/open-technologies-portfolio/projects/ecdf/",
      },
    ],
    limitations: [
      "The current demo is a local CLI scenario, not a browser-hosted public application.",
      "No live Stellar settlement adapter, RPC/Testnet transaction flow or Mainnet.",
      "No custody, official CDF backing, CBDC/bank claim, production KYC or regulatory approval.",
      "No independent clean reproduction or external validation is recorded.",
    ],
    lastVerified: "2026-09-20",
  },
  {
    name: "KIANGANA 2.0 / KIF",
    description:
      "Human–AI operating system with governed mission execution; KIF V0.2 is tracked as a distinct historical checkpoint.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    statusBreakdown: [
      {
        label: "KIANGANA 2.0 current main",
        statuses: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
        note: "Canonical main is 0f9829e54436ae860977c3d2b3349d74482258da.",
      },
      {
        label: "KIF V0.2 CP-01",
        statuses: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "REPRODUCIBLE"],
        note: "Historical CLOSED / FROZEN checkpoint; kif/ is not present on current main.",
      },
    ],
    publicEvidenceStatus: ["AVAILABLE"],
    sourceVisibility: "PUBLIC",
    version: "Global: no canonical release · KIF V0.2 CP-01",
    demo: "NO PUBLIC DEMO",
    license: "No license currently granted",
    source: "Emeraude-Kiangana/kiangana-2.0",
    sourceHref: "https://github.com/Emeraude-Kiangana/kiangana-2.0",
    verifiedScope: [
      "Current canonical main remains 0f9829e54436ae860977c3d2b3349d74482258da.",
      "Normalization PR #8 CI run 35465436732 completed successfully before merge; normalized documentation is now on main.",
      "KIF V0.2 CP-01 is a REPRODUCIBLE historical checkpoint: proof 69d3c9a1fdfc9616700572011a466b549be0c867 → freeze 57c4bfc2664398383a784128a9fa03dc3e41c0e4 with one commit and zero file changes.",
      "KIF proof run 35286354669 passed 41 unit tests and 3 integration tests, including real DeepSeek, real Groq and fallback integration test files.",
      "KIF freeze run 35287044624 passed 41 unit tests and secret hygiene reported CLEAN.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0",
      },
      {
        label: "Current main status",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "Current-main CI 35465319172",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35465319172",
      },
      {
        label: "KIF proof commit",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/commit/69d3c9a1fdfc9616700572011a466b549be0c867",
      },
      {
        label: "KIF live proof run 35286354669",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35286354669",
      },
      {
        label: "KIF freeze commit",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/commit/57c4bfc2664398383a784128a9fa03dc3e41c0e4",
      },
      {
        label: "KIF freeze run 35287044624",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35287044624",
      },
    ],
    evidenceNote:
      "Normalization PR #8 was merged as main 0f9829e54436ae860977c3d2b3349d74482258da. KIF V0.2 remains a distinct historical checkpoint and should not be assumed to be present in a fresh checkout of current main.",
    limitations: [
      "KIF V0.2 reproducibility applies to that checkpoint, not to every KIANGANA 2.0 subsystem.",
      "Historical root Gate Zero run 35287044647 failed at the KIF freeze head; later current-main Gate Zero runs are green.",
      "KIF V0.2 remains historical and distinct from the current-main governance foundation.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "NovaForge",
    description:
      "Reproducible media-production control plane for job orchestration, HTTP workers and FFmpeg-backed MP4 pipelines.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "REPRODUCIBLE"],
    statusBreakdown: [
      {
        label: "NovaForge v0.1.0-alpha",
        statuses: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "REPRODUCIBLE"],
        note: "Functional reproducibility; not bit-for-bit media determinism.",
      },
    ],
    publicEvidenceStatus: ["PARTIAL", "PRIVATE SOURCE", "UNKNOWN"],
    sourceVisibility: "PRIVATE",
    version: "v0.1.0-alpha",
    demo: "PUBLIC PROOF PACKAGE · HTTP STATUS UNKNOWN",
    license: "No license currently granted",
    source: "PRIVATE — Emeraude-Kiangana/novaforge",
    verifiedScope: [
      "Job lifecycle, FIFO queueing, scheduling, HTTP worker dispatch, persistence and crash recovery.",
      "Real FFmpeg MP4 generation with ffprobe validation and SHA-256 provenance.",
      "Normalized main 74aa0bbbd7a9b4dceb0b987b27d2c670cac40903.",
      "Normalized main CI run 35464627769 is SUCCESS; reference release run 35241302604 records 100 regression tests and 1 real FFmpeg E2E test.",
      "Clean-clone functional reproduction is documented at fd4c7adc09a7178cd0babc630a4d6ae872d39395.",
    ],
    evidence: [
      {
        label: "Public proof page",
        href: "/open-technologies-portfolio/projects/novaforge/",
      },
      {
        label: "Published MP4",
        href: "/open-technologies-portfolio/novaforge/NovaForge-v0.1.0-alpha-demo.mp4",
      },
      {
        label: "Published checksum",
        href: "/open-technologies-portfolio/novaforge/SHA256SUMS.txt",
      },
      {
        label: "P01 publication commit",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/commit/4cc3db78ff85873ffb6dcf92056a0ea18e35801d",
      },
    ],
    evidenceNote:
      "Canonical source is private. The MP4 and SHA256SUMS proof package is present in the public P01 repository. Anonymous GitHub Pages HTTP reachability is UNKNOWN because the available external clients could not complete DNS/HTTP verification.",
    limitations: [
      "No GPU inference, CogVideoX, RunPod, cloud video generation or production AI-video pipeline is demonstrated.",
      "Private source is not the same as public-source reproducibility.",
      "No open-source license is granted and external independent validation is not claimed.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "RegenTwin",
    description:
      "Git-native provenance prototype for deterministic state chains representing regenerative agricultural assets.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE"],
    sourceVisibility: "PUBLIC",
    version: "Gate 0 · no release version claimed",
    demo: "LOCAL DEMO",
    license: "No license file detected",
    source: "Emeraude-Kiangana/regen-twin",
    sourceHref: "https://github.com/Emeraude-Kiangana/regen-twin",
    verifiedScope: [
      "Deterministic hash-linked state-chain verifier and sample twin CD-PLOT-001.",
      "Current main fadf386ed5c62dcd45a66008e8b2989b6402b63f.",
      "Run 35324672286 completed successfully and verified CD-PLOT-001 with three states.",
      "Gate 0 test suite covers valid chain, broken link, retroactive state change and sequence gap.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/regen-twin",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/regen-twin/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "Gate 0 commit",
        href: "https://github.com/Emeraude-Kiangana/regen-twin/commit/dd7120f2abc7935c59afe7a9586acb56a4017d06",
      },
      {
        label: "CI run 35324672286",
        href: "https://github.com/Emeraude-Kiangana/regen-twin/actions/runs/35324672286",
      },
    ],
    limitations: [
      "Gate 0 does not prove legal ownership, land-title validity, carbon-credit validity or RWA issuance.",
      "Post-quantum security and external validation are not established.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "RWA Red-Team Lab",
    description:
      "Adversarial verification lab for deterministic integrity checks against sample RWA evidence bundles.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE"],
    sourceVisibility: "PUBLIC",
    version: "Gate 0 · no release version claimed",
    demo: "LOCAL DEMO",
    license: "No license file detected",
    source: "Emeraude-Kiangana/rwa-red-team-lab",
    sourceHref: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab",
    verifiedScope: [
      "Deterministic verifier and adversarial cases for measurement mutation, duplicate evidence identifiers and timestamp conflicts.",
      "Current main 922291ca7076ed871f70d6c70623c7b61541297e.",
      "Run 35327731335 completed successfully, returned VERIFIED and passed 4 / 4 tests.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        label: "CI repair commit",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/commit/da870f0af4f0cc13c0bb8ccf65db4fab748979b4",
      },
      {
        label: "CI run 35327731335",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/actions/runs/35327731335",
      },
    ],
    limitations: [
      "No legal title, identity verification, blockchain anchoring, RWA issuance or regulatory compliance is proven.",
      "AI red-team automation and external validation remain outside the verified Gate 0 scope.",
    ],
    lastVerified: "2026-09-19",
  },
  {
    name: "C.A.O — Chief Agent Officer",
    description:
      "Professional infrastructure prototype for verified AI talent, deterministic team assembly, bounded mission execution and marketplace engagement.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
    statusBreakdown: [
      {
        label: "C.A.O Kernel v0.1 · CP-08",
        statuses: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
        note: "CP-01 through CP-08 are CLOSED / TESTED — CI-BACKED; reproducibility is not claimed.",
      },
    ],
    publicEvidenceStatus: ["PARTIAL", "PRIVATE SOURCE"],
    sourceVisibility: "PRIVATE",
    version: "Kernel v0.1 · CP-08",
    demo: "DETERMINISTIC MARKETPLACE → EXECUTION SANDBOX · NO PUBLIC LIVE SERVICE",
    license: "No license currently granted",
    source: "PRIVATE — Emeraude-Kiangana/chief-agent-officer",
    verifiedScope: [
      "CP-01 through CP-08 are closed checkpoints: Professional Contracts, Verified Registry, deterministic matching, Mission Requirements, Talent Graph, Discovery Boundary, Agent Team Assembly, Mission Execution and Marketplace.",
      "Current main 839b0ea0f4d79e5abbb52d1d440732fda20135ea closes the CP-08 Marketplace Gate.",
      "CP-08 proof run 35480285634 completed successfully; the full suite reports 113 / 113 PASS.",
      "Observed marketplace state includes four active verified listings: three Agent Listings and one Team Listing.",
      "The bounded demo records a 0.21 USD quote, ENGAGED engagement state, payment_state=NOT_IMPLEMENTED and a verified CLOSED Mission Record after CP-07 execution handoff.",
    ],
    evidence: [
      {
        label: "Public CP-08 evidence page",
        href: "/open-technologies-portfolio/projects/cao/",
      },
    ],
    evidenceNote:
      "Canonical source is private. Verified source anchors: main 839b0ea0f4d79e5abbb52d1d440732fda20135ea; CP-08 proof run 35480285634. P01 publishes bounded evidence only and does not expose private source contents.",
    limitations: [
      "No payment processing, escrow or financial settlement is implemented.",
      "Quote does not mean payment; engagement does not mean settlement.",
      "No public production marketplace, live inter-agent messaging or unrestricted arbitrary tool execution is demonstrated.",
      "Private source limits anonymous inspection; TESTED does not imply REPRODUCIBLE or PUBLIC.",
    ],
    lastVerified: "2026-09-20",
  },
  {
    name: "P01 — Open Technologies Portfolio",
    description:
      "Public evidence index for technical projects built, tested and documented by Emeraude Kiangana.",
    projectStatus: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "PUBLIC"],
    publicEvidenceStatus: ["AVAILABLE"],
    sourceVisibility: "PUBLIC",
    version: "0.1.0",
    demo: "PUBLIC PORTFOLIO · HTTP STATUS UNKNOWN",
    license: "No license currently granted",
    source: "Emeraude-Kiangana/open-technologies-portfolio",
    sourceHref: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio",
    verifiedScope: [
      "Next.js static export is configured for GitHub Pages at /open-technologies-portfolio.",
      "P01-CP-HUB-02 remains historical proof at merge 1b7274847d61a097155dc98e2377d58afd5e5c13.",
      "Pre-resync main f42ea82913920285f443548d8f962cf07e5b2fbd has Portfolio CI 35468351208, Deploy 35468351198 and Pages build 35468391017 all SUCCESS.",
      "Final resynchronization evidence is defined by the newer post-merge Actions history; no pre-merge run is treated as the final correction proof.",
      "The unified evidence index presents eight authorized project entries, including C.A.O.",
    ],
    evidence: [
      {
        label: "Repository",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio",
      },
      {
        label: "Live portfolio",
        href: "https://emeraude-kiangana.github.io/open-technologies-portfolio/",
      },
      {
        label: "Portfolio CI workflow",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/actions/workflows/portfolio-ci.yml",
      },
      {
        label: "Deploy workflow",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/actions/workflows/deploy.yml",
      },
      {
        label: "GitHub Actions",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/actions",
      },
      {
        label: "Project status",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/blob/main/docs/PROJECT-STATUS.md",
      },
    ],
    limitations: [
      "P01 presents evidence; it does not create proof for another project.",
      "No independent clean reproduction is recorded, so P01 is not classified REPRODUCIBLE.",
      "Repository visibility does not imply an open-source license.",
      "Anonymous GitHub Pages HTTP reachability is UNKNOWN in the current execution environment; deployment success is tracked separately.",
    ],
    lastVerified: "2026-09-20",
  },
];

export const maturityLegend: Array<[MaturityStatus, string]> = [
  ["DOCUMENTED", "Scope or decisions are recorded in inspectable documentation."],
  ["IMPLEMENTED", "Code or an artifact exists; implementation alone is not test evidence."],
  ["TESTED", "A relevant verification completed successfully."],
  ["REPRODUCIBLE", "A documented reproduction path has been successfully demonstrated."],
  ["PUBLIC", "A relevant project surface is publicly accessible; this does not mean production-ready or open source."],
  ["EXTERNALLY VALIDATED", "Independent external evidence supports the stated claim."],
];

export const evidenceLegend: Array<[EvidenceAvailability, string]> = [
  ["AVAILABLE", "Relevant evidence is publicly inspectable."],
  ["PARTIAL", "Only part of the supporting evidence is publicly inspectable."],
  ["PRIVATE SOURCE", "The canonical source repository requires authorization."],
  ["UNKNOWN", "Current evidence availability has not been established."],
  ["BLOCKED", "A concrete prerequisite prevents evidence publication or inspection."],
];
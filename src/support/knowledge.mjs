export const supportKnowledge = [
  {
    project_id: "cpcn",
    project_name: "CPCN",
    aliases: ["congo programmable capital network", "cpcn"],
    description:
      "Gate 0 research prototypes for evidence and permission workflows around SME financing in the Democratic Republic of the Congo.",
    status: "DOCUMENTED globally; bounded implemented/tested artifacts exist",
    maturity: ["DOCUMENTED"],
    field_validation: "PARTIAL",
    production: false,
    source_visibility: "PRIVATE",
    technologies: ["browser prototype", "structured evidence records"],
    implemented_features: [
      "G0-02 Evidence Passport Simulator is implemented.",
      "G0-01 records one founder self-test and one bounded external SME pilot.",
    ],
    tests: [
      {
        label: "G0-02 local browser test",
        result: "PASS",
        evidence_id: "cpcn-g0-02-test",
      },
    ],
    evidence: [
      {
        id: "cpcn-status",
        label: "P01 CPCN normalized status",
        kind: "portfolio-status",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/blob/main/docs/PROJECT-STATUS.md",
      },
      {
        id: "cpcn-g0-02-implementation",
        label: "G0-02 implementation commit 84489a12…",
        kind: "commit",
        access: "PRIVATE",
      },
      {
        id: "cpcn-g0-02-test",
        label: "G0-02 local test proof a5434991…",
        kind: "test-proof",
        access: "PRIVATE",
      },
    ],
    repositories: [
      {
        name: "Emeraude-Kiangana/congo-programmable-capital-network",
        visibility: "PRIVATE",
      },
    ],
    checkpoints: [
      {
        id: "G0-01",
        status: "FROZEN — continued Gate 0 field collection",
        maturity: ["DOCUMENTED"],
        evidence_ids: ["cpcn-status"],
      },
      {
        id: "G0-02",
        status: "DOCUMENTED / IMPLEMENTED / TESTED",
        maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
        evidence_ids: ["cpcn-g0-02-implementation", "cpcn-g0-02-test"],
      },
    ],
    known_limitations: [
      "Public evidence is partial because the canonical source repository is private.",
      "UD-002 and UD-003 remain pending.",
    ],
    explicit_non_claims: [
      "CPCN is not a bank, lender, credit bureau, credit-scoring service, or payment institution.",
      "The bounded SME pilot is not market validation.",
      "No production financial platform, regulatory approval, KYC, or institutional partnership is claimed.",
    ],
    search_terms: [
      "field validation",
      "terrain",
      "sme",
      "finance",
      "evidence passport",
      "prototype",
      "financial platform",
    ],
  },
  {
    project_id: "ecdf",
    project_name: "eCDF",
    aliases: ["ecdf", "digital value transfer"],
    description:
      "TypeScript research prototype for deterministic digital-value transfer experiments with a tested local lifecycle.",
    status: "TESTED / PUBLIC",
    maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
    field_validation: "NONE",
    production: false,
    source_visibility: "PUBLIC",
    technologies: ["TypeScript", "Node.js", "bigint", "GitHub Actions"],
    implemented_features: [
      "Deterministic transfer lifecycle with explicit states, roles, invariants, and duplicate-event rejection.",
      "Local CLI demo executes DRAFT → AUTHORIZED → SUBMITTED → SETTLED with networkSettlement=false.",
    ],
    tests: [
      {
        label: "Current main CI and demo",
        result: "29 / 29 PASS",
        evidence_id: "ecdf-ci-35508188094",
      },
    ],
    evidence: [
      {
        id: "ecdf-repository",
        label: "eCDF repository",
        kind: "repository",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/ecdf",
      },
      {
        id: "ecdf-main",
        label: "Current main 8ef8002a…",
        kind: "commit",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/ecdf/commit/8ef8002ac538caae69e5e9aa6f093bc826af3f87",
      },
      {
        id: "ecdf-ci-35508188094",
        label: "CI + demo run 35508188094",
        kind: "ci-run",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/ecdf/actions/runs/35508188094",
      },
      {
        id: "ecdf-foundation",
        label: "Foundation commit 34814b06…",
        kind: "commit",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/ecdf/commit/34814b06ae28fe5e3a62b9866cb9781332312b7b",
      },
    ],
    repositories: [
      {
        name: "Emeraude-Kiangana/ecdf",
        visibility: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/ecdf",
      },
    ],
    checkpoints: [
      {
        id: "tested-foundation",
        status: "TESTED",
        maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
        evidence_ids: ["ecdf-foundation", "ecdf-ci-35508188094"],
      },
    ],
    known_limitations: [
      "The demo is local and deterministic, not a browser-hosted financial application.",
      "No independent clean reproduction or external validation is recorded.",
    ],
    explicit_non_claims: [
      "No live Stellar settlement adapter, Testnet transaction flow, or Mainnet.",
      "No custody, CBDC claim, bank claim, regulatory approval, or market validation.",
      "A local SETTLED state is not network settlement.",
    ],
    search_terms: [
      "backend",
      "domain model",
      "deterministic architecture",
      "state machine",
      "transfer",
      "typescript",
      "automated tests",
    ],
  },
  {
    project_id: "kiangana-2.0",
    project_name: "KIANGANA 2.0 / KIF",
    aliases: ["kiangana 2.0", "kif", "kiangana intelligence fabric"],
    description:
      "Human–AI operating system with governed mission execution; KIF V0.2 is a distinct historical AI execution checkpoint.",
    status: "KIANGANA 2.0 current main TESTED/PUBLIC; KIF V0.2 historical REPRODUCIBLE checkpoint",
    maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
    field_validation: "NONE",
    production: false,
    source_visibility: "PUBLIC",
    technologies: ["DeepSeek API", "Groq API", "LLM provider fallback", "GitHub Actions"],
    implemented_features: [
      "Current-main governance validation and mission-control foundation.",
      "Historical KIF V0.2 provider integrations include DeepSeek, Groq, and fallback integration tests.",
    ],
    tests: [
      {
        label: "Current-main Gate Zero",
        result: "5 / 5 PASS",
        evidence_id: "k2-gate-zero",
      },
      {
        label: "KIF live proof",
        result: "41 unit + 3 integration PASS",
        evidence_id: "kif-live-proof",
      },
      {
        label: "KIF freeze proof",
        result: "41 unit PASS + SECRET_SCAN=CLEAN",
        evidence_id: "kif-freeze-proof",
      },
    ],
    evidence: [
      {
        id: "k2-repository",
        label: "KIANGANA 2.0 repository",
        kind: "repository",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0",
      },
      {
        id: "k2-gate-zero",
        label: "Current-main Gate Zero run 35465319172",
        kind: "ci-run",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35465319172",
      },
      {
        id: "kif-proof-commit",
        label: "KIF proof commit 69d3c9a1…",
        kind: "commit",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/commit/69d3c9a1fdfc9616700572011a466b549be0c867",
      },
      {
        id: "kif-live-proof",
        label: "KIF live proof run 35286354669",
        kind: "ci-run",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35286354669",
      },
      {
        id: "kif-freeze-proof",
        label: "KIF freeze run 35287044624",
        kind: "ci-run",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35287044624",
      },
    ],
    repositories: [
      {
        name: "Emeraude-Kiangana/kiangana-2.0",
        visibility: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0",
      },
    ],
    checkpoints: [
      {
        id: "KIF-V0.2-CP-01",
        status: "CLOSED / FROZEN / REPRODUCIBLE",
        maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "REPRODUCIBLE"],
        evidence_ids: ["kif-proof-commit", "kif-live-proof", "kif-freeze-proof"],
      },
    ],
    known_limitations: [
      "KIF V0.2 is historical and is not the same thing as the current KIANGANA 2.0 main tree.",
      "KIF reproducibility does not prove every KIANGANA 2.0 subsystem.",
    ],
    explicit_non_claims: [
      "KIANGANA 2.0 is not claimed as a production autonomous agent network.",
      "The historical KIF checkpoint must not be generalized into whole-system validation.",
    ],
    search_terms: [
      "ai",
      "llm",
      "multi provider",
      "multi-provider",
      "deepseek",
      "groq",
      "fallback",
      "architecture",
      "agent",
    ],
  },
  {
    project_id: "novaforge",
    project_name: "NovaForge",
    aliases: ["novaforge", "nova forge"],
    description:
      "Reproducible media-production control plane for job orchestration, HTTP workers, and FFmpeg-backed MP4 pipelines.",
    status: "REPRODUCIBLE",
    maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "REPRODUCIBLE"],
    field_validation: "NONE",
    production: false,
    source_visibility: "PRIVATE",
    technologies: ["FFmpeg", "ffprobe", "HTTP workers", "SHA-256", "GitHub Actions"],
    implemented_features: [
      "Job lifecycle, FIFO queueing, scheduling, HTTP worker dispatch, persistence, and crash recovery.",
      "Real FFmpeg MP4 generation with ffprobe validation and SHA-256 provenance.",
    ],
    tests: [
      {
        label: "Full regression",
        result: "100 / 100 PASS",
        evidence_id: "novaforge-public-proof",
      },
      {
        label: "Real FFmpeg E2E",
        result: "1 / 1 PASS",
        evidence_id: "novaforge-public-proof",
      },
    ],
    evidence: [
      {
        id: "novaforge-public-proof",
        label: "NovaForge public P01 proof page",
        kind: "public-proof",
        access: "PUBLIC",
        href: "/open-technologies-portfolio/projects/novaforge/",
      },
      {
        id: "novaforge-checksum",
        label: "Published SHA256SUMS",
        kind: "checksum",
        access: "PUBLIC",
        href: "/open-technologies-portfolio/novaforge/SHA256SUMS.txt",
      },
      {
        id: "novaforge-demo",
        label: "Published MP4 artifact",
        kind: "artifact",
        access: "PUBLIC",
        href: "/open-technologies-portfolio/novaforge/NovaForge-v0.1.0-alpha-demo.mp4",
      },
    ],
    repositories: [
      {
        name: "Emeraude-Kiangana/novaforge",
        visibility: "PRIVATE",
      },
    ],
    checkpoints: [
      {
        id: "v0.1.0-alpha",
        status: "REPRODUCIBLE",
        maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED", "REPRODUCIBLE"],
        evidence_ids: ["novaforge-public-proof", "novaforge-checksum", "novaforge-demo"],
      },
    ],
    known_limitations: [
      "Private source is not the same as public-source reproducibility.",
      "Anonymous HTTP reachability of the public package has previously been recorded as UNKNOWN.",
    ],
    explicit_non_claims: [
      "No GPU inference, CogVideoX, RunPod, cloud video generation, or production AI-video pipeline is demonstrated.",
      "External independent validation is not claimed.",
    ],
    search_terms: [
      "backend",
      "orchestration",
      "scheduler",
      "http",
      "media pipeline",
      "ffmpeg",
      "architecture",
      "reproducible",
    ],
  },
  {
    project_id: "regen-twin",
    project_name: "RegenTwin",
    aliases: ["regentwin", "regen twin", "regen-twin"],
    description:
      "Git-native provenance prototype for deterministic state chains representing regenerative agricultural assets.",
    status: "TESTED / PUBLIC",
    maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
    field_validation: "NONE",
    production: false,
    source_visibility: "PUBLIC",
    technologies: ["Git", "SHA-256", "deterministic state chains", "GitHub Actions"],
    implemented_features: [
      "Deterministic hash-linked state-chain verifier.",
      "Sample twin CD-PLOT-001 with three verified states.",
    ],
    tests: [
      {
        label: "Gate 0 state-chain suite",
        result: "4 / 4 PASS",
        evidence_id: "regentwin-ci",
      },
    ],
    evidence: [
      {
        id: "regentwin-repository",
        label: "RegenTwin repository",
        kind: "repository",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/regen-twin",
      },
      {
        id: "regentwin-ci",
        label: "Gate 0 CI run 35324672286",
        kind: "ci-run",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/regen-twin/actions/runs/35324672286",
      },
    ],
    repositories: [
      {
        name: "Emeraude-Kiangana/regen-twin",
        visibility: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/regen-twin",
      },
    ],
    checkpoints: [
      {
        id: "Gate-0",
        status: "TESTED",
        maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
        evidence_ids: ["regentwin-ci"],
      },
    ],
    known_limitations: [
      "Post-quantum security and external validation are not established.",
    ],
    explicit_non_claims: [
      "Gate 0 does not prove legal ownership, land-title validity, carbon-credit validity, or RWA issuance.",
    ],
    search_terms: ["deterministic architecture", "provenance", "agriculture", "state chain", "hash"],
  },
  {
    project_id: "rwa-red-team-lab",
    project_name: "RWA Red-Team Lab",
    aliases: ["rwa red team lab", "rwa lab"],
    description:
      "Adversarial verification lab for deterministic integrity checks against sample RWA evidence bundles.",
    status: "TESTED / PUBLIC",
    maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
    field_validation: "NONE",
    production: false,
    source_visibility: "PUBLIC",
    technologies: ["deterministic verification", "evidence integrity", "GitHub Actions"],
    implemented_features: [
      "Deterministic verifier for sample RWA evidence bundles.",
      "Adversarial cases for measurement mutation, duplicate evidence IDs, and timestamp conflicts.",
    ],
    tests: [
      {
        label: "Gate 0 suite",
        result: "4 / 4 PASS",
        evidence_id: "rwa-ci",
      },
    ],
    evidence: [
      {
        id: "rwa-repository",
        label: "RWA Red-Team Lab repository",
        kind: "repository",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab",
      },
      {
        id: "rwa-ci",
        label: "Gate 0 CI run 35327731335",
        kind: "ci-run",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab/actions/runs/35327731335",
      },
    ],
    repositories: [
      {
        name: "Emeraude-Kiangana/rwa-red-team-lab",
        visibility: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/rwa-red-team-lab",
      },
    ],
    checkpoints: [
      {
        id: "Gate-0",
        status: "TESTED",
        maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
        evidence_ids: ["rwa-ci"],
      },
    ],
    known_limitations: [
      "AI red-team automation and external validation remain outside the verified Gate 0 scope.",
    ],
    explicit_non_claims: [
      "No legal title, identity verification, blockchain anchoring, RWA issuance, or regulatory compliance is proven.",
    ],
    search_terms: ["deterministic architecture", "red team", "rwa", "evidence", "integrity", "security"],
  },
  {
    project_id: "cao",
    project_name: "C.A.O — Chief Agent Officer",
    aliases: ["cao", "chief agent officer", "c.a.o"],
    description:
      "Professional infrastructure prototype for verified AI talent, deterministic team assembly, bounded mission execution, and marketplace engagement.",
    status: "CP-01 through CP-08 TESTED / CI-BACKED",
    maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
    field_validation: "NONE",
    production: false,
    source_visibility: "PRIVATE",
    technologies: ["deterministic matching", "mission execution sandbox", "SHA-256", "GitHub Actions"],
    implemented_features: [
      "Verified registry, deterministic matching, mission requirements, talent graph, team assembly, bounded execution, and marketplace engagement.",
      "CP-08 marketplace handoff records deterministic engagement without payment settlement.",
    ],
    tests: [
      {
        label: "CP-08 full suite",
        result: "113 / 113 PASS",
        evidence_id: "cao-public-proof",
      },
    ],
    evidence: [
      {
        id: "cao-public-proof",
        label: "C.A.O CP-08 public evidence page",
        kind: "public-proof",
        access: "PUBLIC",
        href: "/open-technologies-portfolio/projects/cao/",
      },
    ],
    repositories: [
      {
        name: "Emeraude-Kiangana/chief-agent-officer",
        visibility: "PRIVATE",
      },
    ],
    checkpoints: [
      {
        id: "CP-08",
        status: "CLOSED / TESTED — CI-BACKED",
        maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
        evidence_ids: ["cao-public-proof"],
      },
    ],
    known_limitations: [
      "Private source limits anonymous inspection.",
      "Reproducibility and public-source status are not claimed.",
    ],
    explicit_non_claims: [
      "No payment processing, escrow, or financial settlement is implemented.",
      "No public production marketplace, unrestricted tool execution, or live inter-agent messaging is demonstrated.",
    ],
    search_terms: ["backend", "architecture", "agents", "talent graph", "marketplace", "mission execution"],
  },
  {
    project_id: "p01",
    project_name: "P01 — Open Technologies Portfolio",
    aliases: ["p01", "open technologies portfolio", "portfolio"],
    description:
      "Public evidence index for technical projects built, tested, and documented by Emeraude Kiangana.",
    status: "TESTED / PUBLIC",
    maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
    field_validation: "NONE",
    production: false,
    source_visibility: "PUBLIC",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub Pages", "GitHub Actions"],
    implemented_features: [
      "Static public evidence index with per-project evidence and limitation rendering.",
      "GitHub Pages static export and CI-backed deployment.",
    ],
    tests: [
      {
        label: "Portfolio CI",
        result: "SUCCESS",
        evidence_id: "p01-actions",
      },
    ],
    evidence: [
      {
        id: "p01-repository",
        label: "P01 repository",
        kind: "repository",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio",
      },
      {
        id: "p01-actions",
        label: "P01 GitHub Actions",
        kind: "ci",
        access: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/actions",
      },
      {
        id: "p01-live",
        label: "Live portfolio",
        kind: "public-page",
        access: "PUBLIC",
        href: "https://emeraude-kiangana.github.io/open-technologies-portfolio/",
      },
    ],
    repositories: [
      {
        name: "Emeraude-Kiangana/open-technologies-portfolio",
        visibility: "PUBLIC",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio",
      },
    ],
    checkpoints: [
      {
        id: "P01-CP-HUB-02",
        status: "PASS / CLOSED",
        maturity: ["DOCUMENTED", "IMPLEMENTED", "TESTED"],
        evidence_ids: ["p01-repository", "p01-actions"],
      },
    ],
    known_limitations: [
      "P01 presents evidence; it does not create proof for another project.",
      "No independent clean reproduction is recorded for P01 itself.",
    ],
    explicit_non_claims: [
      "Repository visibility does not imply an open-source license.",
      "P01 is not a production backend service.",
    ],
    search_terms: ["portfolio", "evidence", "frontend", "nextjs", "typescript", "github pages"],
  },
];

export function evidenceIndex(records = supportKnowledge) {
  return new Map(
    records.flatMap((record) =>
      record.evidence.map((evidence) => [
        evidence.id,
        { ...evidence, project_id: record.project_id, project_name: record.project_name },
      ]),
    ),
  );
}

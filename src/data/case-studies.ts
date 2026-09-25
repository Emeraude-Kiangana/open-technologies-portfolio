export type CaseStudyEvidence = {
  label: string;
  href: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  referenceType: "INTERNAL PROJECT" | "TECHNICAL PROOF";
  project: string;
  summary: string;
  problem: string;
  constraints: string[];
  approach: string[];
  tools: string[];
  results: string[];
  services: string[];
  evidence: CaseStudyEvidence[];
  limitations: string[];
  verifiedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "novaforge-media-pipeline",
    title: "Reproducible FFmpeg media pipeline",
    referenceType: "INTERNAL PROJECT",
    project: "NovaForge v0.1.0-alpha",
    summary:
      "Transformer un pipeline média local en workflow reproductible avec génération MP4 réelle, validation ffprobe et provenance SHA-256.",
    problem:
      "Un traitement média n'est commercialement crédible que si la sortie peut être reproduite, inspectée et reliée à une preuve de test.",
    constraints: [
      "source canonique privée",
      "preuve publique limitée aux artefacts publiables",
      "pas de GPU inference ni de génération vidéo IA revendiquée",
      "reproductibilité fonctionnelle, pas déterminisme bit-for-bit",
    ],
    approach: [
      "orchestrer un job média borné",
      "exécuter FFmpeg pour produire un MP4 réel",
      "valider la sortie avec ffprobe",
      "capturer une provenance SHA-256",
      "publier un paquet de preuve public sans exposer le dépôt privé",
    ],
    tools: ["FFmpeg", "ffprobe", "SHA-256", "GitHub Actions", "GitHub Pages"],
    results: [
      "100 tests de régression enregistrés sur le run de référence",
      "1 test E2E FFmpeg réel enregistré sur le run de référence",
      "MP4 public de démonstration publié",
      "checksum public publié",
      "clean-clone functional reproduction documentée",
    ],
    services: ["FFmpeg Automation", "CI/CD GitHub Actions", "Technical Documentation"],
    evidence: [
      {
        label: "Public NovaForge proof page",
        href: "/open-technologies-portfolio/projects/novaforge/",
      },
      {
        label: "Published demo MP4",
        href: "/open-technologies-portfolio/novaforge/NovaForge-v0.1.0-alpha-demo.mp4",
      },
      {
        label: "Published SHA256SUMS",
        href: "/open-technologies-portfolio/novaforge/SHA256SUMS.txt",
      },
    ],
    limitations: [
      "Ce cas n'est pas un projet client.",
      "Le code source NovaForge reste privé.",
      "Aucune production cloud, GPU inference ou SLA n'est démontrée.",
    ],
    verifiedAt: "2026-09-25",
  },
  {
    slug: "kif-provider-fallback",
    title: "Dual-provider API routing with fallback",
    referenceType: "INTERNAL PROJECT",
    project: "KIANGANA 2.0 — KIF V0.2 CP-01",
    summary:
      "Construire et figer un checkpoint d'intégration de deux fournisseurs avec fallback contrôlé, tests unitaires, intégrations réelles et hygiène des secrets.",
    problem:
      "Une intégration API multi-fournisseur doit continuer à se comporter de manière prévisible lorsqu'un fournisseur n'est pas disponible, sans exposer les secrets.",
    constraints: [
      "checkpoint historique distinct du current main",
      "les preuves de reproductibilité s'appliquent à KIF V0.2 CP-01, pas à tout KIANGANA 2.0",
      "aucune garantie SLA fournisseur",
    ],
    approach: [
      "définir deux routes fournisseur interchangeables",
      "implémenter un fallback explicite",
      "tester les providers et le fallback",
      "scanner l'hygiène des secrets",
      "comparer proof commit et freeze commit",
    ],
    tools: ["API providers", "Node/Python test tooling", "GitHub Actions", "Git", "secret scanning"],
    results: [
      "41 tests unitaires PASS sur le checkpoint",
      "3 tests d'intégration PASS incluant DeepSeek réel, Groq réel et fallback",
      "freeze run PASS avec secret hygiene CLEAN",
      "proof → freeze documenté comme checkpoint reproductible",
    ],
    services: ["API Automation", "CI/CD GitHub Actions", "Technical Audit", "Technical Documentation"],
    evidence: [
      {
        label: "KIF proof commit",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/commit/69d3c9a1fdfc9616700572011a466b549be0c867",
      },
      {
        label: "KIF live proof run",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35286354669",
      },
      {
        label: "KIF freeze run",
        href: "https://github.com/Emeraude-Kiangana/kiangana-2.0/actions/runs/35287044624",
      },
    ],
    limitations: [
      "Ce cas n'est pas un projet client.",
      "KIF V0.2 est un checkpoint historique.",
      "Les tests réels de fournisseurs ne constituent pas une garantie de disponibilité future.",
    ],
    verifiedAt: "2026-09-25",
  },
  {
    slug: "ecdf-deterministic-lifecycle",
    title: "Deterministic lifecycle with CI-backed evidence",
    referenceType: "INTERNAL PROJECT",
    project: "eCDF 0.1.0-alpha.0",
    summary:
      "Transformer une idée de transfert numérique en prototype TypeScript borné avec machine d'état, invariants, erreurs explicites et démonstration locale testée.",
    problem:
      "Un prototype de transfert de valeur peut facilement sur-promettre. Il fallait séparer strictement le comportement local démontré de tout règlement réseau ou financier non implémenté.",
    constraints: [
      "aucun fonds réel",
      "aucun règlement Stellar live dans le scope vérifié",
      "aucune custody, banque, CBDC ou validation réglementaire revendiquée",
      "démo locale CLI uniquement",
    ],
    approach: [
      "modéliser explicitement les états et transitions",
      "rejeter transitions invalides et événements dupliqués",
      "utiliser bigint pour les montants",
      "produire une démo déterministe locale",
      "lier README, statut, tests, commit et CI",
    ],
    tools: ["TypeScript", "Node.js", "GitHub Actions", "GitHub", "deterministic tests"],
    results: [
      "29 / 29 tests PASS sur le run de démo référencé",
      "cycle local DRAFT → AUTHORIZED → SUBMITTED → SETTLED démontré",
      "networkSettlement=false explicitement documenté",
      "repository public avec Apache-2.0",
    ],
    services: ["GitHub Setup", "CI/CD GitHub Actions", "Technical Audit", "Technical Documentation"],
    evidence: [
      {
        label: "eCDF repository",
        href: "https://github.com/Emeraude-Kiangana/ecdf",
      },
      {
        label: "CI + demo run",
        href: "https://github.com/Emeraude-Kiangana/ecdf/actions/runs/35508188094",
      },
      {
        label: "P01 eCDF proof page",
        href: "/open-technologies-portfolio/projects/ecdf/",
      },
    ],
    limitations: [
      "Ce cas n'est pas un projet client.",
      "Il ne démontre pas un backend HTTP de production.",
      "Il ne démontre pas de règlement Stellar Testnet/Mainnet ou de conformité financière.",
    ],
    verifiedAt: "2026-09-25",
  },
  {
    slug: "p01-service-proof-packs",
    title: "Three freelance capabilities converted into public proof packs",
    referenceType: "TECHNICAL PROOF",
    project: "P01-CP-FREELANCE-02",
    summary:
      "Fermer trois gaps de crédibilité commerciale en construisant des preuves publiques dédiées pour API Automation, Backend Prototype et Dockerisation.",
    problem:
      "Une liste de compétences n'est pas une preuve. Trois services de P01 étaient commercialement décrits mais ne disposaient pas encore de démonstrations publiques dédiées.",
    constraints: [
      "coût externe = 0 USD pour les preuves",
      "aucune clé API réelle nécessaire",
      "aucun secret",
      "tests exécutables sur GitHub-hosted runners",
      "preuves bornées sans prétention production",
    ],
    approach: [
      "créer deux API HTTP locales factices pour la preuve d'automatisation",
      "construire un backend JSON minimal avec health, OpenAPI et validation",
      "construire une image Docker non-root avec healthcheck",
      "exécuter trois jobs CI indépendants",
      "lier les résultats aux services publics P01",
    ],
    tools: ["Node.js", "HTTP", "Docker", "Docker Compose", "GitHub Actions", "curl"],
    results: [
      "API Automation proof PASS",
      "Backend Prototype proof PASS",
      "Docker build/start/health/smoke/teardown PASS",
      "3 services promus de PARTIAL PROOF à PUBLIC PROOF",
      "workflow dédié reproductible sur main",
    ],
    services: ["API Automation", "Dockerisation", "Backend Prototype", "CI/CD GitHub Actions"],
    evidence: [
      {
        label: "API automation proof pack",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/tree/main/proofs/freelance/api-automation",
      },
      {
        label: "Backend proof pack",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/tree/main/proofs/freelance/backend-prototype",
      },
      {
        label: "Docker proof pack",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/tree/main/proofs/freelance/dockerization",
      },
      {
        label: "Post-merge proof workflow",
        href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/actions/runs/36166734206",
      },
    ],
    limitations: [
      "Ce cas est un proof pack interne, pas une livraison client.",
      "Les API de test sont locales et fictives.",
      "Aucune charge production, authentification complexe ou infrastructure cloud n'est démontrée.",
    ],
    verifiedAt: "2026-09-25",
  },
];

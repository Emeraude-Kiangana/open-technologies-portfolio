export type ProofState = "PUBLIC PROOF" | "PARTIAL PROOF" | "PROOF TO BUILD";

export type ServiceProof = {
  label: string;
  href: string;
};

export type FreelanceService = {
  slug: string;
  title: string;
  outcome: string;
  toolFirstRoute: string[];
  primaryTools: string[];
  fallbackTools: string[];
  deliverables: string[];
  acceptance: string[];
  proofState: ProofState;
  proofs: ServiceProof[];
  limitations?: string[];
};

export const freelanceServices: FreelanceService[] = [
  {
    slug: "api-automation",
    title: "API Automation",
    outcome: "Relier deux services ou supprimer une tâche répétitive via API, webhook ou script.",
    toolFirstRoute: [
      "Lire le contrat API / OpenAPI et identifier l'authentification.",
      "Prouver le flux avec curl avant d'écrire du code.",
      "Utiliser Node.js fetch ou la bibliothèque standard Python pour le plus petit script possible.",
      "Ajouter timeouts, erreurs explicites et configuration par variables d'environnement.",
      "Capturer une exécution de test reproductible sans secrets.",
    ],
    primaryTools: ["curl", "OpenAPI/Swagger quand disponible", "Node.js fetch", "GitHub"],
    fallbackTools: ["Python standard library", "Docker pour isoler l'exécution"],
    deliverables: ["script ou petit adaptateur API", ".env.example", "README d'installation", "test/smoke check", "preuve d'exécution"],
    acceptance: ["aucun secret commité", "flux nominal reproductible", "erreurs réseau gérées", "entrées/sorties documentées"],
    proofState: "PARTIAL PROOF",
    proofs: [
      { label: "KIF provider/fallback evidence", href: "https://github.com/Emeraude-Kiangana/kiangana-2.0" },
      { label: "P01 support adapter", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/tree/main/support-api" },
    ],
    limitations: ["Une intégration client spécifique n'est revendiquée qu'après test sur son API réelle."],
  },
  {
    slug: "github-setup",
    title: "GitHub Setup",
    outcome: "Transformer un dépôt difficile à comprendre en dépôt installable, lisible et vérifiable.",
    toolFirstRoute: [
      "Auditer l'arbre Git avec git et gh.",
      "Normaliser README, .gitignore, scripts et structure avant d'ajouter des outils.",
      "Utiliser les fonctions natives GitHub pour issues, pull requests et Actions.",
      "Valider le dépôt depuis une procédure d'installation propre.",
    ],
    primaryTools: ["git", "GitHub", "gh CLI"],
    fallbackTools: ["Markdown", "scripts npm/Python"],
    deliverables: ["README", ".gitignore", "structure normalisée", "scripts de vérification", "instructions GitHub"],
    acceptance: ["installation documentée", "commandes de vérification explicites", "liens de preuve stables"],
    proofState: "PUBLIC PROOF",
    proofs: [
      { label: "P01 repository", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio" },
      { label: "eCDF repository", href: "https://github.com/Emeraude-Kiangana/ecdf" },
    ],
  },
  {
    slug: "github-actions-ci",
    title: "CI/CD GitHub Actions",
    outcome: "Exécuter automatiquement lint, tests et build à chaque changement important.",
    toolFirstRoute: [
      "Réutiliser les scripts locaux existants comme contrat de CI.",
      "Créer le workflow GitHub Actions minimal.",
      "Utiliser un runner standard et éviter les services externes inutiles.",
      "Faire échouer le workflow si lint, test ou build échoue.",
      "Publier le run comme preuve.",
    ],
    primaryTools: ["GitHub Actions", "npm scripts", "pytest / node:test selon le projet"],
    fallbackTools: ["runner auto-hébergé si une dépendance locale l'exige"],
    deliverables: ["workflow YAML", "pipeline lint/test/build", "badge optionnel", "run de preuve"],
    acceptance: ["workflow vert sur la branche cible", "échec correct sur test invalide", "aucun secret exposé"],
    proofState: "PUBLIC PROOF",
    proofs: [
      { label: "P01 CI workflows", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/tree/main/.github/workflows" },
      { label: "Skill 001 CI proof", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/blob/main/.github/workflows/skill-001-ci.yml" },
    ],
  },
  {
    slug: "ffmpeg-automation",
    title: "FFmpeg Automation",
    outcome: "Automatiser conversion, compression, concaténation, audio, sous-titres ou traitements batch.",
    toolFirstRoute: [
      "Inspecter chaque média avec ffprobe.",
      "Construire une commande FFmpeg minimale et déterministe.",
      "Automatiser seulement après validation manuelle.",
      "Revalider le média de sortie avec ffprobe.",
      "Capturer checksum et paramètres utiles quand la provenance compte.",
    ],
    primaryTools: ["FFmpeg", "ffprobe"],
    fallbackTools: ["shell", "Python/Node.js comme orchestrateur"],
    deliverables: ["commande ou script", "profil de traitement", "fichier de sortie de test", "validation ffprobe", "README"],
    acceptance: ["sortie décodable", "format attendu", "commande reproductible", "erreurs explicites"],
    proofState: "PUBLIC PROOF",
    proofs: [
      { label: "NovaForge public proof", href: "/open-technologies-portfolio/projects/novaforge/" },
      { label: "NovaForge demo MP4", href: "/open-technologies-portfolio/novaforge/NovaForge-v0.1.0-alpha-demo.mp4" },
      { label: "NovaForge SHA256SUMS", href: "/open-technologies-portfolio/novaforge/SHA256SUMS.txt" },
    ],
  },
  {
    slug: "dockerisation",
    title: "Dockerisation",
    outcome: "Rendre une application plus reproductible avec une image et un démarrage documenté.",
    toolFirstRoute: [
      "Identifier d'abord le runtime et la commande locale qui fonctionnent.",
      "Écrire le Dockerfile minimal.",
      "Ajouter Compose uniquement si plusieurs services sont réellement nécessaires.",
      "Tester build, start, health check et arrêt propre.",
      "Documenter volumes, ports et variables d'environnement.",
    ],
    primaryTools: ["Docker", "Docker Compose"],
    fallbackTools: ["GitHub Actions pour valider le build"],
    deliverables: ["Dockerfile", "compose.yaml si nécessaire", ".dockerignore", ".env.example", "instructions run/stop"],
    acceptance: ["image construite", "conteneur démarre", "port/health check vérifié", "aucun secret intégré à l'image"],
    proofState: "PARTIAL PROOF",
    proofs: [
      { label: "Portfolio public evidence hub", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio" },
    ],
    limitations: ["Une preuve Docker publique dédiée reste à publier dans P01."],
  },
  {
    slug: "backend-prototype",
    title: "Backend Prototype",
    outcome: "Livrer une petite API HTTP avec contrat clair, validation et procédure de test.",
    toolFirstRoute: [
      "Définir d'abord les endpoints et exemples de requêtes/réponses.",
      "Choisir FastAPI quand OpenAPI interactif apporte de la valeur.",
      "Utiliser Node.js quand il réduit les dépendances dans un projet JavaScript existant.",
      "Tester les endpoints avant toute infrastructure supplémentaire.",
      "Dockeriser seulement si cela améliore réellement la livraison.",
    ],
    primaryTools: ["FastAPI + OpenAPI", "Node.js"],
    fallbackTools: ["Docker", "curl pour smoke tests"],
    deliverables: ["API minimale", "endpoints documentés", "validation d'entrée", "smoke tests", "README"],
    acceptance: ["endpoints répondent comme documenté", "erreurs 4xx/5xx contrôlées", "configuration externe", "test reproductible"],
    proofState: "PARTIAL PROOF",
    proofs: [
      { label: "P01 support API adapter", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/tree/main/support-api" },
      { label: "eCDF technical repository", href: "https://github.com/Emeraude-Kiangana/ecdf" },
    ],
    limitations: ["P01 ne revendique pas encore un backend client déployé en production."],
  },
  {
    slug: "technical-audit",
    title: "Technical Audit",
    outcome: "Trouver rapidement les problèmes d'installation, structure, tests, CI, dépendances et documentation.",
    toolFirstRoute: [
      "Lire README, package manifest et workflows avant toute modification.",
      "Exécuter les vérifications natives du projet.",
      "Inspecter git diff, historique pertinent et état CI avec git/gh.",
      "Classer les constats par bloquant, risque et amélioration.",
      "Proposer des correctifs reproductibles et vérifiables.",
    ],
    primaryTools: ["git", "gh CLI", "ESLint", "npm audit / tests natifs"],
    fallbackTools: ["scripts de secret scan", "Docker pour reproduire un environnement"],
    deliverables: ["rapport d'audit", "liste priorisée", "correctifs optionnels", "commandes de reproduction", "preuves avant/après"],
    acceptance: ["chaque constat cite un fichier/commande", "séparation faits / recommandations", "aucun faux positif présenté comme certitude"],
    proofState: "PUBLIC PROOF",
    proofs: [
      { label: "P01 evidence model", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/blob/main/README.md" },
      { label: "Project status normalization", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/blob/main/docs/PROJECT-STATUS.md" },
    ],
  },
  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    outcome: "Rendre un projet compréhensible, installable et transmissible sans dépendre de son auteur.",
    toolFirstRoute: [
      "Extraire les faits depuis le code, les scripts et la CI.",
      "Documenter installation, exécution, architecture et limites.",
      "Utiliser Markdown comme format canonique portable.",
      "Ajouter Mermaid uniquement quand un diagramme clarifie réellement le système.",
      "Vérifier chaque commande documentée.",
    ],
    primaryTools: ["Markdown", "Mermaid", "GitHub"],
    fallbackTools: ["GitHub Pages / documentation statique"],
    deliverables: ["README", "SETUP.md", "architecture", "runbook", "limitations et preuves"],
    acceptance: ["commandes testables", "architecture cohérente avec le code", "limitations explicites", "liens valides"],
    proofState: "PUBLIC PROOF",
    proofs: [
      { label: "P01 README", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/blob/main/README.md" },
      { label: "P01 support architecture", href: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio/blob/main/docs/SUPPORT-ARCHITECTURE.md" },
    ],
  },
];

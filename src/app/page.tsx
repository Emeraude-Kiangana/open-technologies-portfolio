import { ConversionCTA, FreelanceTrustStrip } from "@/components/FreelanceConversion";
import {
  evidenceLegend,
  maturityLegend,
  projects,
} from "@/data/projects";

const featuredOrder = ["eCDF", "RegenTwin", "RWA Red-Team Lab", "KIANGANA 2.0 / KIF", "P01 — Open Technologies Portfolio", "NovaForge", "CPCN", "C.A.O — Chief Agent Officer"];
const clientSummaries: Record<string, string> = {
  "eCDF": "Moteur de transactions simulées avec règles métier testées automatiquement.",
  "RegenTwin": "Historique vérifiable de données agricoles et contrôles d’intégrité.",
  "RWA Red-Team Lab": "Tests adversariaux pour repérer des incohérences dans des dossiers de preuves.",
  "KIANGANA 2.0 / KIF": "Routage API entre fournisseurs IA avec mécanismes de repli testés.",
  "P01 — Open Technologies Portfolio": "Site web déployé avec automatisation de publication et preuves techniques.",
  "NovaForge": "Pipeline automatisé de production vidéo MP4 via FFmpeg ; code privé.",
  "CPCN": "Recherche et simulateur de dossiers de preuves pour le financement des PME ; code privé.",
  "C.A.O — Chief Agent Officer": "Prototype de coordination et d’exécution de missions d’agents IA ; code privé.",
};
const clientFirstProjects = [...projects].sort((a, b) => featuredOrder.indexOf(a.name) - featuredOrder.indexOf(b.name));

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100 sm:px-10 sm:py-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <section className="relative isolate overflow-hidden rounded-3xl border border-border-default bg-surface px-5 py-16 text-center shadow-2xl shadow-black/20 sm:px-10 sm:py-20 lg:py-24" aria-labelledby="hero-title">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,232,213,0.13),transparent_60%)]" />
          <p className="mx-auto inline-flex items-center rounded-full border border-accent-primary/40 bg-accent-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
            Open Technologies · RDC / International
          </p>
          <h1 id="hero-title" className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Des automatisations techniques construites, testées et documentées.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
            Je suis Emeraude Kiangana. Je développe des solutions API, CI/CD et des pipelines FFmpeg, avec des livrables vérifiables et un périmètre clairement défini.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="/open-technologies-portfolio/intake/?source=homepage-hero" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent-primary px-6 py-3 font-semibold text-background transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary">
              Discuter d’un projet <span aria-hidden="true" className="ml-2">↗</span>
            </a>
            <a href="/open-technologies-portfolio/case-studies/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border-default bg-surface-elevated px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent-primary hover:text-accent-primary">
              Examiner les réalisations
            </a>
          </div>
          <nav className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text-muted" aria-label="Accès rapides">
            <a className="underline-offset-4 hover:text-accent-primary hover:underline" href="/open-technologies-portfolio/services/">Services</a>
            <a className="underline-offset-4 hover:text-accent-primary hover:underline" href="#project-index">Projets et preuves</a>
            <a className="underline-offset-4 hover:text-accent-primary hover:underline" href="/open-technologies-portfolio/support/">Support</a>
            <a className="underline-offset-4 hover:text-accent-primary hover:underline" href="https://github.com/Emeraude-Kiangana" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </nav>
          <p className="mx-auto mt-10 max-w-2xl border-t border-border-default pt-6 font-mono text-xs tracking-wide text-text-muted">
            BUILD → TEST → PROVE → PUBLISH · CLAIM ≤ EVIDENCE
          </p>
        </section>

        <div className="pb-10">
          <FreelanceTrustStrip />
        </div>

        <section className="border-t border-zinc-800 py-10" aria-labelledby="philosophy-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Evidence philosophy
          </p>
          <h2 id="philosophy-title" className="mt-2 text-3xl font-bold">
            Claim ≤ Evidence
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-zinc-300">
            P01 présente les preuves, mais ne les crée pas. Un README n’est pas un test, un commit
            n’est pas un run CI, un dépôt public n’est pas automatiquement licencié, et une source
            privée n’implique pas qu’un projet soit bloqué.
          </p>
        </section>

        <section className="border-t border-zinc-800 py-10" aria-labelledby="freelance-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Freelance capabilities
          </p>
          <h2 id="freelance-title" className="mt-2 text-3xl font-bold">
            Tool-first. Scope-bounded. Evidence-backed.
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-zinc-300">
            API automation, GitHub setup, CI/CD, FFmpeg, Docker, backend prototypes,
            technical audits and documentation. Chaque service expose ses outils primaires,
            son test d&apos;acceptation et son niveau de preuve publique.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/open-technologies-portfolio/services/"
              className="rounded-lg bg-zinc-100 px-4 py-2 font-medium text-zinc-950 hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Voir les 8 services
            </a>
            <a
              href="/open-technologies-portfolio/case-studies/"
              className="rounded-lg border border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Voir les références
            </a>
            <a
              href="/open-technologies-portfolio/intake/?source=homepage-freelance"
              className="rounded-lg border border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Start a project
            </a>
          </div>
        </section>

        <div className="border-t border-zinc-800 py-12">
          <ConversionCTA source="homepage-before-projects" />
        </div>

        <section
          id="project-index"
          className="border-t border-zinc-800 py-12"
          aria-labelledby="index-title"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Unified Public Evidence Index
            </p>
            <h2 id="index-title" className="mt-2 text-3xl font-bold">
              État vérifié des projets
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
              Huit projets autorisés. Chaque carte sépare le statut du projet de la disponibilité
              publique des preuves, et indique la date de dernière vérification.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {clientFirstProjects.map((project) => ( 
              <article
                key={project.name}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm shadow-black/20 sm:p-8"
              >
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
                  <p className="mt-3 text-base font-medium leading-7 text-zinc-100">{clientSummaries[project.name] ?? project.description}</p>\n                  <p className="mt-2 text-sm leading-6 text-zinc-400">{project.description}</p>
                </div>

                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Statut projet
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.projectStatus.map((status) => (
                        <span
                          key={status}
                          className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold"
                        >
                          {status}
                        </span>
                      ))}
                    </dd>
                    {project.statusBreakdown ? (
                      <div className="mt-3 space-y-2 text-xs leading-5 text-zinc-400">
                        {project.statusBreakdown.map((item) => (
                          <p key={item.label}>
                            <span className="font-semibold text-zinc-200">{item.label}:</span>{" "}
                            {item.statuses.join(" · ")}
                            {item.note ? ` — ${item.note}` : ""}
                          </p>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Preuves publiques
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.publicEvidenceStatus.map((status) => (
                        <span
                          key={status}
                          className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-semibold"
                        >
                          {status}
                        </span>
                      ))}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Version
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-zinc-300">{project.version}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Demo
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-zinc-300">{project.demo}</dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Visibilité source
                    </dt>
                    <dd className="mt-2 text-sm font-semibold leading-6 text-zinc-300">
                      {project.sourceVisibility}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Source
                    </dt>
                    <dd className="mt-2 break-words text-sm leading-6 text-zinc-300">
                      {project.sourceHref ? (
                        <a
                          href={project.sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
                        >
                          {project.source}
                        </a>
                      ) : (
                        project.source
                      )}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                      Licence
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-zinc-300">{project.license}</dd>
                  </div>
                </dl>

                <div className="mt-7">
                  <h4 className="font-semibold">Verified Scope</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                    {project.verifiedScope.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <h4 className="font-semibold">Preuves</h4>
                  {project.evidence.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.evidence.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="rounded-lg border border-zinc-700 px-3 py-2 text-sm font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      Aucun lien privé n’est exposé comme preuve publique.
                    </p>
                  )}
                  {project.evidenceNote ? (
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{project.evidenceNote}</p>
                  ) : null}
                </div>

                <div className="mt-7">
                  <h4 className="font-semibold">Limitations</h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                    {project.limitations.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-t border-zinc-800 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    Last verified
                  </p>
                  <p className="mt-2 font-mono text-sm text-zinc-300">{project.lastVerified}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-12" aria-labelledby="legend-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Status legend
          </p>
          <h2 id="legend-title" className="mt-2 text-3xl font-bold">
            Maturité et disponibilité des preuves
          </h2>

          <h3 className="mt-8 text-xl font-bold">Maturité</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {maturityLegend.map(([status, meaning]) => (
              <div key={status} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <dt className="font-mono text-sm font-semibold">{status}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{meaning}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-8 text-xl font-bold">Disponibilité publique</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {evidenceLegend.map(([status, meaning]) => (
              <div key={status} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
                <dt className="font-mono text-sm font-semibold">{status}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{meaning}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-zinc-800 py-12" aria-labelledby="proof-links-title">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Public proof links
          </p>
          <h2 id="proof-links-title" className="mt-2 text-3xl font-bold">
            Vérifier à la source
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/Emeraude-Kiangana/open-technologies-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-zinc-100 px-4 py-2 font-medium text-zinc-950 hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Repository P01
            </a>
            <a
              href="https://emeraude-kiangana.github.io/open-technologies-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Portfolio public
            </a>
            <a
              href="/open-technologies-portfolio/projects/ecdf/"
              className="rounded-lg border border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Preuve eCDF
            </a>
            <a
              href="/open-technologies-portfolio/projects/novaforge/"
              className="rounded-lg border border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Preuve NovaForge
            </a>
          </div>
        </section>

        <footer className="border-t border-zinc-800 py-8 text-sm text-zinc-400">
          <p>© EMERAUDE KIANGANA — Open Technologies 🇨🇩</p>
        </footer>
      </div>
    </main>
  );
}

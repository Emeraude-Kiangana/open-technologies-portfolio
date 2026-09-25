import { freelanceServices } from "@/data/services";

function proofClasses(state: string) {
  if (state === "PUBLIC PROOF") return "border-emerald-800/60 bg-emerald-950/30 text-emerald-200";
  if (state === "PARTIAL PROOF") return "border-amber-800/60 bg-amber-950/30 text-amber-200";
  return "border-zinc-700 bg-zinc-900 text-zinc-300";
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100 sm:px-10 sm:py-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <a
          href="/open-technologies-portfolio/"
          className="text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-100"
        >
          ← Retour au portfolio
        </a>

        <section className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Freelance · Tool-first · Evidence-first
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Des micro-services techniques livrés avec code, test, documentation et preuve.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Chaque offre commence par l&apos;outil le plus direct déjà disponible. Le code personnalisé
            n&apos;arrive qu&apos;après validation du besoin. Les preuves publiques sont séparées des
            compétences encore partiellement démontrées.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:Emeraude-Kiangana@proton.me?subject=Mission%20freelance%20Open%20Technologies"
              className="rounded-lg bg-zinc-100 px-4 py-2 font-medium text-zinc-950 hover:bg-white"
            >
              Proposer une mission
            </a>
            <a
              href="https://github.com/Emeraude-Kiangana"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-900"
            >
              Vérifier sur GitHub
            </a>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Contrat de livraison</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["CODE", "TEST", "DOCUMENTATION", "PROOF"].map((item) => (
              <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                <p className="font-mono text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-12">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Service catalog
            </p>
            <h2 className="mt-2 text-3xl font-bold">8 compétences, 8 chaînes Tool-first</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {freelanceServices.map((service) => (
              <article
                id={service.slug}
                key={service.slug}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${proofClasses(service.proofState)}`}>
                    {service.proofState}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-zinc-300">{service.outcome}</p>

                <h4 className="mt-7 font-semibold">Tool-first route</h4>
                <ol className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                  {service.toolFirstRoute.map((step, index) => (
                    <li key={step}>
                      <span className="mr-2 font-mono text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold">Outils primaires</h4>
                    <ul className="mt-3 space-y-1 text-sm leading-6 text-zinc-300">
                      {service.primaryTools.map((tool) => <li key={tool}>• {tool}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Fallback</h4>
                    <ul className="mt-3 space-y-1 text-sm leading-6 text-zinc-300">
                      {service.fallbackTools.map((tool) => <li key={tool}>• {tool}</li>)}
                    </ul>
                  </div>
                </div>

                <h4 className="mt-7 font-semibold">Livrables</h4>
                <ul className="mt-3 space-y-1 text-sm leading-6 text-zinc-300">
                  {service.deliverables.map((item) => <li key={item}>• {item}</li>)}
                </ul>

                <h4 className="mt-7 font-semibold">Acceptance gate</h4>
                <ul className="mt-3 space-y-1 text-sm leading-6 text-zinc-300">
                  {service.acceptance.map((item) => <li key={item}>• {item}</li>)}
                </ul>

                <h4 className="mt-7 font-semibold">Preuves publiques</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.proofs.map((proof) => (
                    <a
                      key={proof.label}
                      href={proof.href}
                      target={proof.href.startsWith("http") ? "_blank" : undefined}
                      rel={proof.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="rounded-lg border border-zinc-700 px-3 py-2 text-sm font-medium hover:bg-zinc-900"
                    >
                      {proof.label}
                    </a>
                  ))}
                </div>

                {service.limitations?.length ? (
                  <>
                    <h4 className="mt-7 font-semibold">Limites</h4>
                    <ul className="mt-3 space-y-1 text-sm leading-6 text-zinc-400">
                      {service.limitations.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-12">
          <h2 className="text-3xl font-bold">Règle commerciale</h2>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            Une mission n&apos;est acceptée que si son résultat, son périmètre et son test d&apos;acceptation
            peuvent être écrits avant l&apos;exécution. Les outils payants ou les coûts d&apos;infrastructure
            ne sont jamais supposés gratuits.
          </p>
        </section>
      </div>
    </main>
  );
}

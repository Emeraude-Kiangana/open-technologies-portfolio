import { ConversionCTA } from "@/components/FreelanceConversion";
import { caseStudies } from "@/data/case-studies";

function typeClasses(type: string) {
  return type === "TECHNICAL PROOF"
    ? "border-sky-800/60 bg-sky-950/30 text-sky-200"
    : "border-violet-800/60 bg-violet-950/30 text-violet-200";
}

export default function CaseStudiesPage() {
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
            Case studies · Evidence-backed
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Références techniques vérifiables, sans faux témoignages clients.
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-300">
            Ces études de cas décrivent des projets internes et des proof packs réellement construits.
            Elles montrent la méthode, les contraintes, les résultats et les preuves publiques.
          </p>
          <div className="mt-6 rounded-xl border border-amber-900/60 bg-amber-950/20 p-5 text-sm leading-6 text-amber-100">
            Aucune étude ci-dessous ne représente un client payant, un témoignage client ou une adoption
            commerciale. Les résultats sont limités aux preuves citées.
          </div>
        </section>

        <section className="border-t border-zinc-800 py-12">
          <div className="grid gap-7">
            {caseStudies.map((study) => (
              <article
                id={study.slug}
                key={study.slug}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-zinc-400">{study.project}</p>
                    <h2 className="mt-2 text-3xl font-bold">{study.title}</h2>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${typeClasses(study.referenceType)}`}>
                    {study.referenceType}
                  </span>
                </div>

                <p className="mt-5 max-w-4xl leading-7 text-zinc-300">{study.summary}</p>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
                    <h3 className="font-semibold">Problem</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-300">{study.problem}</p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
                    <h3 className="font-semibold">Constraints</h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                      {study.constraints.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Build / Approach</h3>
                    <ol className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                      {study.approach.map((item, index) => (
                        <li key={item}>
                          <span className="mr-2 font-mono text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold">Verified results</h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                      {study.results.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Tools</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <span key={tool} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Related freelance services</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {study.services.map((service) => (
                        <span key={service} className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold">Evidence</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {study.evidence.map((proof) => (
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
                </div>

                <div className="mt-8 border-t border-zinc-800 pt-6">
                  <h3 className="font-semibold">Claim boundary</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
                    {study.limitations.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                  <p className="mt-4 font-mono text-xs text-zinc-500">VERIFIED {study.verifiedAt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="border-t border-zinc-800 py-12">
          <ConversionCTA
            source="case-studies-bottom"
            title="Une référence ressemble à ton problème ?"
            body="Utilise l’intake pour décrire ton environnement réel. La référence sert de preuve de méthode, pas de promesse que deux projets sont identiques."
          />
        </div>
      </div>
    </main>
  );
}

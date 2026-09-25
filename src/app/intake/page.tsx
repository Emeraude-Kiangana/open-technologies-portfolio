import { buildIntakeUrl, intakeConfig } from "@/data/intake";

const intakeUrl = buildIntakeUrl({ source: "p01-intake", campaign: "client-intake" });

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100 sm:px-10 sm:py-16 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <a
          href="/open-technologies-portfolio/services/"
          className="text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-100"
        >
          ← Retour aux services
        </a>

        <section className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Client intake · Tool-first · #0$
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Décrire une mission avant devis.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            L&apos;intake collecte seulement les informations nécessaires pour qualifier une mission :
            service, package, problème, résultat attendu, environnement, délai et budget.
          </p>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["$0", "frais pour soumettre l’intake"],
              ["0", "paiement demandé à cette étape"],
              ["0", "secret ou fichier confidentiel à envoyer"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                <p className="text-2xl font-bold">{value}</p>
                <p className="mt-1 text-sm leading-5 text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Ce formulaire ne crée pas encore de contrat</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="font-semibold">Collected</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Contact, service, package, problème, résultat attendu, stack, lien public éventuel,
                deadline et budget.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <h3 className="font-semibold">Never submit</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Passwords, API keys, private keys, credentials, regulated personal data or confidential source files.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Qualification flow</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["INTAKE", "SCOPE REVIEW", "QUOTE", "ACCEPTANCE GATE"].map((item, index) => (
              <div key={item} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                <p className="font-mono text-xs text-zinc-500">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
            <p className="text-sm text-zinc-400">
              Provider: {intakeConfig.provider} · External cost: ${intakeConfig.externalCost}
            </p>
            <h2 className="mt-2 text-3xl font-bold">Submit project intake</h2>
            <p className="mt-4 leading-7 text-zinc-300">
              Les coûts d&apos;API, cloud, domaines, licences, runners payants ou infrastructure client restent exclus tant qu&apos;ils ne sont pas explicitement devisés.
            </p>
            <a
              href={intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-zinc-100 px-5 py-3 font-semibold text-zinc-950 hover:bg-white"
            >
              Ouvrir le formulaire sécurisé
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

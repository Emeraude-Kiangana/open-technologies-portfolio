const repoUrl = "https://github.com/Emeraude-Kiangana/ecdf";
const currentMain = "8ef8002ac538caae69e5e9aa6f093bc826af3f87";
const foundationSha = "34814b06ae28fe5e3a62b9866cb9781332312b7b";
const currentCi = "35508188094";

export default function ECDFProjectPage() {
  const statusUrl = repoUrl + "/blob/main/docs/PROJECT-STATUS.md";
  const currentMainUrl = repoUrl + "/commit/" + currentMain;
  const foundationUrl = repoUrl + "/commit/" + foundationSha;
  const ciUrl = repoUrl + "/actions/runs/" + currentCi;
  const demoSourceUrl = repoUrl + "/blob/main/src/demo.ts";

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100 sm:px-10 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <a
          href="/open-technologies-portfolio/"
          className="text-sm underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          ← Retour au portfolio
        </a>

        <header className="mt-10 border-b border-zinc-800 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            P03 → preuve publique P01
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">eCDF</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Prototype TypeScript de recherche pour expérimenter un cycle local de transfert de
            valeur explicite, déterministe et testable avant toute intégration de règlement réseau.
          </p>
        </header>

        <section className="grid gap-4 py-10 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Statut</p>
            <p className="mt-2 text-xl font-semibold">TESTED · PUBLIC</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Version</p>
            <p className="mt-2 text-xl font-semibold">0.1.0-alpha.0</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Tests</p>
            <p className="mt-2 text-xl font-semibold">29 / 29 PASS</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Demo</p>
            <p className="mt-2 text-xl font-semibold">LOCAL CLI · CI-BACKED</p>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Démo déterministe</h2>
          <p className="mt-5 overflow-x-auto rounded-xl bg-gray-950 p-5 font-mono text-sm text-white">
            DRAFT → AUTHORIZED → SUBMITTED → SETTLED
          </p>
          <ul className="mt-6 space-y-3 text-zinc-300">
            <li>• Commande locale : <code>npm run demo</code>.</li>
            <li>• Boundary explicite : <code>LOCAL_DOMAIN_ONLY</code>.</li>
            <li>• <code>networkSettlement=false</code> dans la sortie de démonstration.</li>
            <li>• Les snapshots JSON et l’historique des transitions sont déterministes.</li>
            <li>• Le step CI « Run deterministic local demo » est au vert sur le run {currentCi}.</li>
          </ul>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Ce qui est réellement démontré</h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>• Fondation TypeScript/npm exécutable et publiquement inspectable.</li>
            <li>• Modèle local de transfert avec états explicites, rôles et invariants.</li>
            <li>• Montants exacts en bigint, rejet d’événements dupliqués et snapshots déterministes.</li>
            <li>• 29 tests sur 29 au vert sur le run post-merge {currentCi}.</li>
            <li>• Main courant : {currentMain}.</li>
          </ul>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Preuves vérifiables</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-zinc-100 px-5 py-3 text-center font-medium text-zinc-950 hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Repository
            </a>
            <a href={demoSourceUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Demo source
            </a>
            <a href={statusUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Project Status
            </a>
            <a href={currentMainUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Current main
            </a>
            <a href={ciUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              CI + demo {currentCi}
            </a>
            <a href={foundationUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-700 px-5 py-3 text-center font-medium hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-zinc-950">
              Foundation commit
            </a>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Limites</h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>• La démo actuelle est locale et CLI ; ce n’est pas encore une application navigateur hébergée.</li>
            <li>• Aucun adaptateur de règlement Stellar live ni flux RPC/Testnet implémenté.</li>
            <li>• Aucun Mainnet, fonds réels, custody, KYC de production ou intégration mobile money.</li>
            <li>• Aucun backing CDF, statut de CBDC, banque ou monnaie officielle.</li>
            <li>• Aucun clean reproduction indépendant n’est encore enregistré ; REPRODUCIBLE n’est pas revendiqué.</li>
          </ul>
        </section>

        <footer className="border-t border-zinc-800 py-8 text-sm text-zinc-400">
          Last verified: 2026-09-20 · License: Apache-2.0
        </footer>
      </div>
    </main>
  );
}

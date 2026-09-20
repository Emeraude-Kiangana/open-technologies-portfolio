export default function CAOProjectPage() {
  const currentMain = "839b0ea0f4d79e5abbb52d1d440732fda20135ea";
  const proofRun = "35480285634";

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
            C.A.O → bounded public evidence
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight">Chief Agent Officer</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Infrastructure prototype for verified AI talent, deterministic team assembly,
            bounded mission execution and marketplace engagement. Canonical source remains private.
          </p>
        </header>

        <section className="grid gap-4 py-10 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Checkpoint</p>
            <p className="mt-2 text-xl font-semibold">CP-08 CLOSED</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Tests</p>
            <p className="mt-2 text-xl font-semibold">113 / 113 PASS</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Proof run</p>
            <p className="mt-2 text-xl font-semibold">{proofRun}</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <p className="text-sm text-zinc-400">Source</p>
            <p className="mt-2 text-xl font-semibold">PRIVATE</p>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Verified product path</h2>
          <p className="mt-5 overflow-x-auto rounded-xl bg-gray-950 p-5 font-mono text-sm text-white">
            DISCOVER → VERIFY → LIST → RECRUIT → ENGAGE → EXECUTE → PROVE
          </p>
          <ul className="mt-6 space-y-3 text-zinc-300">
            <li>• CP-01 Professional Contracts — CLOSED.</li>
            <li>• CP-02 Verified Registry + Deterministic Matching — CLOSED.</li>
            <li>• CP-03 Mission Requirements Compiler — CLOSED.</li>
            <li>• CP-04 Talent Graph — CLOSED.</li>
            <li>• CP-05 Network Discovery Boundary — CLOSED.</li>
            <li>• CP-06 Agent Team Assembly — CLOSED.</li>
            <li>• CP-07 Mission Execution / Team Coordination — CLOSED.</li>
            <li>• CP-08 Marketplace — CLOSED.</li>
          </ul>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">CP-08 observed result</h2>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2 text-zinc-300">
            <div>
              <dt className="font-semibold text-zinc-100">Active verified listings</dt>
              <dd className="mt-1">4 — 3 Agent Listings + 1 Team Listing</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-100">Quote</dt>
              <dd className="mt-1">0.21 USD / mission in the deterministic demo</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-100">Engagement</dt>
              <dd className="mt-1">ENGAGED</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-100">Payment state</dt>
              <dd className="mt-1">NOT_IMPLEMENTED</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-100">Mission record</dt>
              <dd className="mt-1">CLOSED after verified CP-07 execution handoff</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-100">Current main</dt>
              <dd className="mt-1 break-all font-mono text-sm">{currentMain}</dd>
            </div>
          </dl>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Core invariants</h2>
          <ul className="mt-5 grid gap-3 text-zinc-300 sm:grid-cols-2">
            <li>• Agent ≠ Model</li>
            <li>• Claim ≠ Skill</li>
            <li>• Capability ≠ Authority</li>
            <li>• Graph ≠ Evidence Source</li>
            <li>• Best Agent ≠ Best Team</li>
            <li>• Executor ≠ Verifier</li>
            <li>• Quote ≠ Payment</li>
            <li>• Engagement ≠ Settlement</li>
          </ul>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Evidence boundary</h2>
          <p className="mt-5 leading-7 text-zinc-300">
            The canonical repository and CI logs are private. P01 publishes only bounded,
            non-sensitive checkpoint facts verified against the canonical repository. This page
            is evidence presentation, not a substitute for the private source of truth.
          </p>
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-2xl font-bold">Explicit limitations</h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>• No payment processing, escrow or financial settlement is implemented.</li>
            <li>• A quote is not a payment and an engagement is not settlement.</li>
            <li>• No public production marketplace is claimed.</li>
            <li>• No live unrestricted inter-agent messaging or arbitrary external tool execution is demonstrated.</li>
            <li>• TESTED does not imply REPRODUCIBLE, PUBLIC source or production readiness.</li>
          </ul>
        </section>

        <footer className="border-t border-zinc-800 py-8 text-sm text-zinc-400">
          Last verified: 2026-09-20 · Canonical source: PRIVATE · CP-08 proof run: {proofRun}
        </footer>
      </div>
    </main>
  );
}

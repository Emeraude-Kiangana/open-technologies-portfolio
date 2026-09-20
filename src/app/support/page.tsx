import SupportChat from "@/components/support/SupportChat";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-zinc-100 sm:px-10 sm:py-16 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <a
          href="/open-technologies-portfolio/"
          className="text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
        >
          ← Retour au portfolio
        </a>

        <header className="py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            P01-CP-SUPPORT-01
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Open Technologies Support
          </h1>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-300">
            Pose une question sur les projets, tests, checkpoints, technologies ou limitations.
            Les réponses sont construites à partir d’un corpus borné de preuves du portfolio.
          </p>
        </header>

        <SupportChat />

        <section className="mt-10 rounded-2xl border border-zinc-800 p-6 text-sm leading-6 text-zinc-400">
          <h2 className="font-semibold text-zinc-200">Grounding contract</h2>
          <p className="mt-3">
            Le mode déterministe fonctionne directement sur GitHub Pages. Un provider LLM n’est
            utilisé que lorsqu’un endpoint serveur sécurisé est configuré. Sans preuve, le support
            refuse l’affirmation au lieu de compléter par supposition.
          </p>
        </section>
      </div>
    </main>
  );
}

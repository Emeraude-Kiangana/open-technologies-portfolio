import offersData from "@/data/offers.json";
import { caseStudies } from "@/data/case-studies";
import { freelanceServices } from "@/data/services";

const publicProofServices = freelanceServices.filter(
  (service) => service.proofState === "PUBLIC PROOF",
).length;

const packageCount = offersData.services.reduce(
  (total, service) => total + service.packages.length,
  0,
);

const startingPrice = Math.min(
  ...offersData.services.flatMap((service) =>
    service.packages.map((offer) => offer.priceUsd),
  ),
);

const signals = [
  { value: `${publicProofServices}/${freelanceServices.length}`, label: "services avec preuve publique" },
  { value: String(packageCount), label: "packages bornés" },
  { value: String(caseStudies.length), label: "case studies vérifiables" },
  { value: `$${startingPrice}`, label: "prix de lancement minimum" },
];

export function FreelanceTrustStrip() {
  return (
    <section
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      aria-label="Freelance trust signals"
    >
      {signals.map((signal) => (
        <div
          key={signal.label}
          className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
        >
          <p className="text-2xl font-bold">{signal.value}</p>
          <p className="mt-1 text-sm leading-5 text-zinc-400">{signal.label}</p>
        </div>
      ))}
    </section>
  );
}

export function ConversionCTA({
  source = "p01",
  title = "Un problème technique précis à résoudre ?",
  body = "Décris le résultat attendu, le budget et le délai. Le scope, les coûts externes et le test d’acceptation sont confirmés avant tout travail.",
}: {
  source?: string;
  title?: string;
  body?: string;
}) {
  const intakeHref = `/open-technologies-portfolio/intake/?source=${encodeURIComponent(source)}`;

  return (
    <section className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
        Start with scope
      </p>
      <h2 className="mt-2 text-3xl font-bold">{title}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-zinc-300">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={intakeHref}
          className="rounded-lg bg-zinc-100 px-5 py-3 font-semibold text-zinc-950 hover:bg-white"
        >
          Start a project
        </a>
        <a
          href="/open-technologies-portfolio/case-studies/"
          className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold hover:bg-zinc-900"
        >
          Vérifier les références
        </a>
      </div>
      <p className="mt-4 text-xs leading-5 text-zinc-500">
        Soumettre l’intake ne crée ni contrat, ni obligation de paiement, ni autorisation de commencer le travail.
      </p>
    </section>
  );
}

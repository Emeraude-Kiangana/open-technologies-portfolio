import type { Metadata } from "next";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "eCDF — Deterministic Transfer Lifecycle Prototype",
  description: "Evidence-backed TypeScript research prototype with explicit state transitions, invariants, tests and documented non-claims.",
  alternates: { canonical: absoluteUrl("/projects/ecdf") },
  openGraph: {
    type: "article",
    url: absoluteUrl("/projects/ecdf"),
    title: "eCDF — Deterministic Transfer Lifecycle Prototype",
    description: "Evidence-backed TypeScript research prototype with explicit state transitions, invariants, tests and documented non-claims.",
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}

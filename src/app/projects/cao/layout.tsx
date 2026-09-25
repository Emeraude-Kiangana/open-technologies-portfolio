import type { Metadata } from "next";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "C.A.O — Chief Agent Officer Technical Evidence",
  description: "Bounded public evidence for the C.A.O agent-management project while preserving private-source and maturity boundaries.",
  alternates: { canonical: absoluteUrl("/projects/cao") },
  openGraph: {
    type: "article",
    url: absoluteUrl("/projects/cao"),
    title: "C.A.O — Chief Agent Officer Technical Evidence",
    description: "Bounded public evidence for the C.A.O agent-management project while preserving private-source and maturity boundaries.",
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}

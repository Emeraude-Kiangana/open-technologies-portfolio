import type { Metadata } from "next";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Project Intake",
  description: "Structured project intake for bounded technical freelance missions.",
  alternates: { canonical: absoluteUrl("/intake") },
  robots: { index: false, follow: true },
};

export default function IntakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

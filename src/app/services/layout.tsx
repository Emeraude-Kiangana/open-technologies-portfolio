import type { Metadata } from "next";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Freelance Services — API, GitHub, CI/CD, FFmpeg, Docker",
  description:
    "Evidence-backed freelance services for API automation, GitHub setup, CI/CD, FFmpeg automation, Dockerisation, backend prototypes, audits and technical documentation.",
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/services"),
    title: "Tool-First Freelance Services — Open Technologies",
    description:
      "8 bounded technical services, 24 launch packages, public proof and explicit acceptance criteria.",
  },
  twitter: {
    card: "summary",
    title: "Tool-First Freelance Services — Open Technologies",
    description: "Evidence-backed API, GitHub, CI/CD, FFmpeg, Docker and backend services.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

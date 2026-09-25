import type { Metadata } from "next";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Technical Case Studies — Evidence-Backed Reference Projects",
  description:
    "Verified technical case studies covering FFmpeg pipelines, API provider fallback, deterministic TypeScript lifecycle design, Docker and backend proof packs.",
  alternates: { canonical: absoluteUrl("/case-studies") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/case-studies"),
    title: "Technical Case Studies — Open Technologies",
    description: "Reference projects with problem, constraints, implementation, verified results and public evidence.",
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "NovaForge — Reproducible FFmpeg Media Pipeline",
  description: "Public proof page for a reproducible FFmpeg media pipeline with MP4 artifact, ffprobe validation and SHA-256 provenance.",
  alternates: { canonical: absoluteUrl("/projects/novaforge") },
  openGraph: {
    type: "article",
    url: absoluteUrl("/projects/novaforge"),
    title: "NovaForge — Reproducible FFmpeg Media Pipeline",
    description: "Public proof page for a reproducible FFmpeg media pipeline with MP4 artifact, ffprobe validation and SHA-256 provenance.",
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = {
  title: "Portfolio Support",
  description: "Evidence-grounded support interface for the Open Technologies portfolio.",
  alternates: { canonical: absoluteUrl("/support") },
  robots: { index: false, follow: true },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}

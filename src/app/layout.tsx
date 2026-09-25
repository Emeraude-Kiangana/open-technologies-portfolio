import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteStructuredData } from "@/components/SiteStructuredData";
import { absoluteUrl, siteConfig } from "@/data/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.baseUrl}/`),
  title: {
    default: "Open Technologies Portfolio — Emeraude Kiangana",
    template: "%s | Open Technologies",
  },
  description:
    "Evidence-backed technical portfolio and tool-first freelance services for API automation, GitHub, CI/CD, FFmpeg, Docker, backend prototypes, audits and documentation.",
  authors: [{ name: siteConfig.owner, url: siteConfig.githubUrl }],
  creator: siteConfig.owner,
  keywords: [
    "Emeraude Kiangana",
    "Open Technologies",
    "API automation",
    "GitHub Actions",
    "CI/CD",
    "FFmpeg automation",
    "Docker",
    "backend prototype",
    "technical documentation",
    "Democratic Republic of the Congo",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: "Open Technologies Portfolio — Emeraude Kiangana",
    description:
      "Verified technical projects, public evidence and bounded tool-first freelance services.",
  },
  twitter: {
    card: "summary",
    title: "Open Technologies Portfolio — Emeraude Kiangana",
    description: "Evidence-backed technical projects and tool-first freelance services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteStructuredData />
        {children}
      </body>
    </html>
  );
}

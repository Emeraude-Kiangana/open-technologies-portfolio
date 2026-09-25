import { siteConfig } from "@/data/seo";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.baseUrl}/#person`,
      name: siteConfig.owner,
      url: siteConfig.baseUrl,
      sameAs: [siteConfig.githubUrl],
      jobTitle: "Builder",
      knowsAbout: [
        "API automation",
        "GitHub",
        "CI/CD",
        "FFmpeg",
        "Docker",
        "Backend prototypes",
        "Technical documentation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.baseUrl}/#website`,
      url: `${siteConfig.baseUrl}/`,
      name: siteConfig.name,
      inLanguage: "fr",
      author: { "@id": `${siteConfig.baseUrl}/#person` },
      description:
        "Evidence-backed technical portfolio and tool-first freelance services by Emeraude Kiangana.",
    },
  ],
};

export function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

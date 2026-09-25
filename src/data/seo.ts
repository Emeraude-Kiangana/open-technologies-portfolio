export const siteConfig = {
  name: "Open Technologies Portfolio",
  owner: "Emeraude Kiangana",
  baseUrl: "https://emeraude-kiangana.github.io/open-technologies-portfolio",
  githubUrl: "https://github.com/Emeraude-Kiangana",
  repositoryUrl: "https://github.com/Emeraude-Kiangana/open-technologies-portfolio",
  locale: "fr_CD",
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${siteConfig.baseUrl}${normalized}/`;
}

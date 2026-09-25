import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/projects/ecdf", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/projects/novaforge", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/projects/cao", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date("2026-09-25"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://altair-live.vercel.app";
  // In production with real data, filter !is_demo and published only.
  // Demo articles are excluded from indexing by design.
  const staticRoutes = [
    "",
    "/about",
    "/editorial-policy",
    "/privacy",
    "/contacts",
    "/vtoroy-vopros",
    "/poschital",
    "/world",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return staticRoutes;
}

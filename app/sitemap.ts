import type { MetadataRoute } from "next";

const base = "https://adventnurutech.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/portfolio",
    "/updates",
    "/blog",
    "/testimonials",
    "/booking",
    "/contact",
    "/faq",
    "/donate",
    "/policy",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}

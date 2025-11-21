import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barcode-generator-hmv.vercel.app"

  const routes = ["", "/generators/ean-13", "/generators/upc-a", "/generators/code-128", "/generators/qr-code"]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}

import { NextResponse } from "next/server"

export const dynamic = "force-static"

export async function GET() {
  const baseUrl = "https://barcode-generator-hmv.vercel.app"

  const urls = [
    "",
    "generators/ean-13",
    "generators/upc-a",
    "generators/code-128",
    "generators/qr-code",
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `
  <url>
    <loc>${baseUrl}/${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  })
}

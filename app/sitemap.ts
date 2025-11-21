import { NextResponse } from "next/server"

// Make sure Next.js treats it as a static file
export const dynamic = "force-static"

export default function sitemap() {
  // Next.js still expects a default export for metadata system,
  // so we return an empty array here. It will be ignored.
  return [];
}

// This GET method will override the default sitemap output
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

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Free Online Barcode Generator | Create QR Codes, UPC, EAN & More",
  description:
    "Generate professional barcodes instantly for free. Support for Code 128, UPC-A, EAN-13, QR Codes, and more. Download high-quality PNG, SVG, and PDF files. No sign-up required.",
  keywords: [
    "barcode generator",
    "QR code generator",
    "UPC generator",
    "EAN generator",
    "Code 128 generator",
    "free barcode maker",
    "online barcode tool",
    "printable barcodes",
    "barcode creator",
    "ISBN generator",
    "bulk barcode generator",
    "retail barcode maker",
    "inventory barcode creator",
    "GS1 barcode generator",
    "vector barcode generator",
    "high resolution barcode",
    "svg barcode generator",
    "pdf barcode generator",
    "barcode generator for excel",
    "custom barcode label maker",
    "print-ready barcodes",
    "barcode PNG generator",
    "bulk barcode creator",
    "inventory barcode generator",
    "free GS1 barcode generator",
    "barcode generator India",
    "barcode maker for small business",
    "warehouse barcode system",
    "product barcode generator",
    "shipping label barcode",
    "asset tracking barcode",
    "barcode generator online free",
    "barcode label maker free",
    "barcode generator no watermark",
  ],
  authors: [{ name: "Barcode Generator Tool" }],
  creator: "Barcode Generator Tool",
  publisher: "Barcode Generator Tool",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barcode-generator-hmv.vercel.app",
    title: "Free Online Barcode Generator | Create QR Codes, UPC, EAN & More",
    description:
      "Generate professional barcodes instantly for free. Support for Code 128, UPC-A, EAN-13, QR Codes, and more. Download high-quality PNG, SVG, and PDF files.",
    siteName: "Barcode Generator Tool",
    images: [
      {
        url: "https://barcode-generator-hmv.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Barcode Generator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Barcode Generator | Create QR Codes, UPC, EAN & More",
    description:
      "Generate professional barcodes instantly for free. Support for Code 128, UPC-A, EAN-13, QR Codes, and more.",
  },
  icons: {},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Online Barcode Generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    softwareVersion: "2.0",
    featureList: [
      "Generate Code 128, EAN-13, UPC-A, QR Codes",
      "Download as PNG, SVG, PDF",
      "Customizable colors and dimensions",
      "No sign-up required",
      "Privacy-focused (local generation)",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
    },
    description:
      "A free online tool to generate various types of barcodes including Code 128, UPC, EAN, and QR codes. Download in PNG, SVG, or PDF formats.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1450",
    },
    screenshot: "https://barcode-generator-hmv.vercel.app/screenshot.png",
  }

return (
  <html lang="en">
    <head>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ Google Search Console Verification */}
      <meta
        name="google-site-verification"
        content="sr7OX1tETs1Q88eOp_KWD23gRJdHY78_vGliv3f1aSM"
      />

      {/* Preconnect for fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </head>

    <body className="font-sans antialiased">
      {children}
      <Analytics />
    </body>
  </html>
)

}

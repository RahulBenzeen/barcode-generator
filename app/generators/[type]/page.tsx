import { BarcodeGenerator } from "@/components/barcode-generator"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

// Map of supported types to their SEO data
const BARCODE_TYPES: Record<
  string,
  {
    name: string
    title: string
    description: string
    longDescription: string
    usage: string
    faq: { question: string; answer: string }[]
  }
> = {
  "ean-13": {
    name: "EAN-13",
    title: "Free EAN-13 Barcode Generator | Print-Ready Retail Barcodes",
    description:
      "Generate official EAN-13 barcodes for retail products. Instant, free, and high-resolution PNG & SVG downloads for product packaging and inventory systems.",
    longDescription:
      "The EAN-13 (European Article Number) is the standard barcode format for retail products worldwide (except North America). It encodes 13 numeric digits and is essential for selling products in global marketplaces. Our free EAN-13 barcode generator creates GS1-compliant, print-ready barcodes in vector SVG and high-resolution PNG formats.",
    usage: "Retail products, books, magazines, and consumer goods sold globally.",
    faq: [
      {
        question: "Do I need an EAN-13 barcode?",
        answer:
          "If you plan to sell products in retail stores outside of North America, you likely need an EAN-13 barcode.",
      },
      {
        question: "What is the difference between EAN-13 and UPC-A?",
        answer:
          "EAN-13 has 13 digits and is used globally, while UPC-A has 12 digits and is primarily used in the US and Canada. EAN-13 scanners can usually read UPC-A codes.",
      },
      {
        question: "Can I print this EAN-13 barcode on product packaging?",
        answer:
          "Yes, our generator creates print-ready, high-resolution barcodes. Download the SVG format for best printing quality at any size.",
      },
    ],
  },
  "upc-a": {
    name: "UPC-A",
    title: "Free UPC-A Barcode Generator | US Retail Product Barcodes",
    description:
      "Create print-ready UPC-A barcodes for products sold in the USA and Canada. Free online generator with vector SVG and PDF export for inventory and retail.",
    longDescription:
      "The UPC-A (Universal Product Code) is the standard retail barcode used in the United States and Canada. It consists of 12 numeric digits and is required for most products sold in North American retail stores. Our free UPC-A barcode generator creates GS1-compliant, scannable barcodes perfect for product packaging, inventory management, and point-of-sale systems.",
    usage: "Retail products sold in the United States and Canada.",
    faq: [
      {
        question: "How do I get a UPC code for my product?",
        answer:
          "To get an official UPC code that is unique to your company, you must register with GS1 US. Our tool generates the barcode image once you have your number.",
      },
      {
        question: "Can I print this UPC barcode on my packaging?",
        answer:
          "Yes, you can download the high-resolution SVG or PDF file and include it directly in your product packaging design.",
      },
      {
        question: "Is this UPC barcode generator free for commercial use?",
        answer:
          "Yes, our UPC-A barcode generator is 100% free for both personal and commercial use with no watermarks or restrictions.",
      },
    ],
  },
  "code-128": {
    name: "Code 128",
    title: "Free Code 128 Barcode Generator | Shipping & Inventory Barcodes",
    description:
      "Generate versatile Code 128 barcodes for shipping labels, warehouse inventory, and asset tracking. Supports full ASCII character set. Download print-ready PNG, SVG, or PDF.",
    longDescription:
      "Code 128 is a high-density linear barcode capable of encoding all 128 ASCII characters. It is widely used in logistics, shipping labels (like FedEx and UPS), warehouse inventory systems, and internal asset tracking due to its compactness and versatility. Our free Code 128 barcode generator creates scannable, print-ready barcodes perfect for bulk generation and inventory management.",
    usage: "Shipping labels, ID cards, asset tracking, warehouse inventory systems, and logistics.",
    faq: [
      {
        question: "What characters can Code 128 encode?",
        answer: "Code 128 can encode all 128 ASCII characters, including letters, numbers, and symbols.",
      },
      {
        question: "Why is Code 128 better than Code 39?",
        answer:
          "Code 128 is much more compact (high-density) than Code 39, meaning it takes up less space to encode the same amount of data.",
      },
      {
        question: "Can I use Code 128 for inventory barcode systems?",
        answer:
          "Yes, Code 128 is ideal for inventory management and warehouse systems due to its high data density and ability to encode alphanumeric data.",
      },
    ],
  },
  "qr-code": {
    name: "QR Code",
    title: "Free QR Code Generator | Create Custom QR Codes for Links, WiFi & Text",
    description:
      "Create custom QR codes for websites, WiFi passwords, and text. Download print-ready vector SVG or high-resolution PNG. Free QR code maker with no sign-up required.",
    longDescription:
      "A QR Code (Quick Response Code) is a two-dimensional matrix barcode that can store a significant amount of data. It is easily scannable by smartphones and is perfect for marketing campaigns, digital menus, contactless payments, and WiFi sharing. Our free QR code generator creates customizable, print-ready QR codes with color options and vector export for professional use.",
    usage:
      "Website links, digital business cards, restaurant menus, WiFi access, marketing materials, and event tickets.",
    faq: [
      {
        question: "Do QR codes expire?",
        answer:
          "Static QR codes (like the ones generated here) never expire because the data is encoded directly into the image.",
      },
      {
        question: "Can I customize the color of my QR code?",
        answer: "Yes, our generator allows you to change the foreground and background colors to match your brand.",
      },
      {
        question: "Can I download QR codes as vector files for printing?",
        answer:
          "Yes, you can download your QR code as a vector SVG file, which ensures perfect print quality at any size.",
      },
    ],
  },
}

// Map URL slug to internal component type value
const TYPE_MAPPING: Record<string, string> = {
  "ean-13": "ean13",
  "upc-a": "upca",
  "code-128": "code128",
  "qr-code": "qrcode",
}

type Props = {
  params: Promise<{ type: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params
  const data = BARCODE_TYPES[type]

  if (!data) return {}

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(BARCODE_TYPES).map((type) => ({
    type,
  }))
}

export default async function GeneratorPage({ params }: Props) {
  const { type } = await params
  const data = BARCODE_TYPES[type]
  const internalType = TYPE_MAPPING[type]

  if (!data || !internalType) {
    notFound()
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://barcode-generator-hmv.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: data.name,
        item: `https://barcode-generator-hmv.vercel.app/generators/${type}`,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <nav className="flex items-center text-sm text-muted-foreground mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{data.name} Generator</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">{data.title}</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">{data.description}</p>
        </div>

        <BarcodeGenerator initialType={internalType} />

        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About {data.name}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{data.longDescription}</p>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-2">Common Uses</h3>
            <p className="text-muted-foreground">{data.usage}</p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {data.faq.map((item, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

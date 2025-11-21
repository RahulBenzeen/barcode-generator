import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const GUIDES: Record<
  string,
  {
    title: string
    description: string
    content: {
      heading: string
      body: string
    }[]
    faq: { question: string; answer: string }[]
    relatedLinks: { text: string; href: string }[]
  }
> = {
  "how-to-generate-barcodes": {
    title: "How to Generate Barcodes: Complete Step-by-Step Guide (2025)",
    description:
      "Learn how to generate professional barcodes for retail, inventory, and logistics. Step-by-step tutorial covering UPC, EAN, Code 128, and QR codes with free tools.",
    content: [
      {
        heading: "What is a Barcode and Why Do You Need One?",
        body: "A barcode is a machine-readable representation of data in a visual format. Barcodes are essential for retail product identification, inventory management, shipping logistics, and asset tracking. They enable fast, accurate scanning at point-of-sale systems and warehouses, reducing human error and improving operational efficiency.",
      },
      {
        heading: "Step 1: Choose the Right Barcode Type",
        body: "The first step in generating a barcode is selecting the correct format for your use case. UPC-A is required for retail products in the US and Canada. EAN-13 is the global standard for retail outside North America. Code 128 is ideal for shipping labels and inventory systems due to its high data density. QR codes are perfect for marketing, digital menus, and contactless information sharing.",
      },
      {
        heading: "Step 2: Obtain Your Barcode Number",
        body: "For retail barcodes (UPC/EAN), you must register with GS1 to obtain an official, globally unique company prefix and product numbers. This ensures your barcodes are recognized worldwide. For internal use (inventory, asset tracking), you can create your own numbering system using Code 128 or Code 39 formats.",
      },
      {
        heading: "Step 3: Generate Your Barcode Image",
        body: "Use a free online barcode generator to create your barcode image. Enter your barcode number, select the format (UPC-A, EAN-13, Code 128, etc.), and customize the size and colors if needed. Download the barcode in a print-ready format like SVG (vector) or high-resolution PNG for best quality.",
      },
      {
        heading: "Step 4: Test Your Barcode",
        body: "Before printing thousands of labels, always test your barcode with a standard barcode scanner or smartphone app. Ensure the barcode scans correctly and returns the expected data. Check that the print quality is sharp and the contrast is sufficient (dark bars on light background).",
      },
      {
        heading: "Step 5: Print and Apply Your Barcodes",
        body: "Print your barcodes on high-quality label stock or directly on packaging. Use a resolution of at least 300 DPI for clear, scannable results. Ensure proper sizing: UPC/EAN barcodes should be printed at 100% scale (about 1.5 inches wide) for retail compliance. Apply labels to flat, clean surfaces for best scanning performance.",
      },
      {
        heading: "Best Practices for Barcode Generation",
        body: "Always use vector formats (SVG) when possible for scalability. Maintain high contrast between bars and background (black on white is ideal). Leave adequate quiet zones (blank space) on both sides of the barcode. Verify GS1 compliance for retail barcodes. Keep a database of your barcode assignments for inventory tracking.",
      },
    ],
    faq: [
      {
        question: "Can I generate barcodes for free?",
        answer:
          "Yes, you can use free online barcode generators to create barcode images. However, for retail UPC/EAN codes, you must purchase a company prefix from GS1.",
      },
      {
        question: "What format should I download my barcode in?",
        answer:
          "For professional printing, download SVG (vector) format for infinite scalability. For quick use, high-resolution PNG (300+ DPI) works well.",
      },
      {
        question: "How do I know if my barcode will scan correctly?",
        answer:
          "Test your printed barcode with multiple scanners and smartphone apps. Ensure high contrast, proper sizing, and clean printing.",
      },
    ],
    relatedLinks: [
      { text: "Generate an EAN-13 barcode", href: "/generators/ean-13" },
      { text: "Create a UPC-A barcode", href: "/generators/upc-a" },
      { text: "Generate Code 128 barcodes", href: "/generators/code-128" },
    ],
  },
  "gs1-barcode-guide": {
    title: "Complete GS1 Barcode Guide: UPC, EAN & GTIN Explained (2025)",
    description:
      "Everything you need to know about GS1 barcodes, UPC codes, EAN numbers, and GTINs. Learn how to get official GS1 numbers and generate compliant retail barcodes.",
    content: [
      {
        heading: "What is GS1 and Why Does It Matter?",
        body: "GS1 is the global organization that manages barcode standards for retail and supply chain. They assign unique company prefixes that ensure your product barcodes are globally unique and recognized by retailers worldwide. Without a GS1 company prefix, major retailers like Walmart, Amazon, and Target will not accept your products.",
      },
      {
        heading: "Understanding GTIN (Global Trade Item Number)",
        body: "GTIN is the umbrella term for all GS1-managed product identifiers. It includes UPC-A (12 digits, North America), EAN-13 (13 digits, global), and other formats. Every product sold in retail needs a unique GTIN to be tracked through the supply chain and scanned at checkout.",
      },
      {
        heading: "How to Get a GS1 Company Prefix",
        body: "Visit the GS1 website for your country (e.g., gs1us.org for the United States). Purchase a company prefix based on how many products you plan to sell. The cost varies by country and the number of GTINs you need. Once registered, you can assign unique product numbers under your prefix.",
      },
      {
        heading: "UPC-A vs EAN-13: Which Do You Need?",
        body: "UPC-A is the standard for products sold in the United States and Canada. It consists of 12 digits. EAN-13 is used everywhere else in the world and has 13 digits. Most modern scanners can read both formats. If you plan to sell globally, EAN-13 is recommended as it is more widely accepted.",
      },
      {
        heading: "Generating GS1-Compliant Barcodes",
        body: "Once you have your GTIN from GS1, use a barcode generator to create the visual barcode image. Ensure the generator supports GS1 standards and includes the check digit calculation. Download in vector format (SVG) for professional printing. Always verify the barcode scans correctly before mass production.",
      },
      {
        heading: "Common GS1 Barcode Mistakes to Avoid",
        body: "Never use fake or random UPC/EAN numbers - retailers will reject them. Do not resize barcodes disproportionately (maintain aspect ratio). Avoid low-resolution images that cause scanning errors. Do not print barcodes on reflective or textured surfaces. Always leave adequate quiet zones (white space) around the barcode.",
      },
      {
        heading: "GS1 Barcode Costs and Alternatives",
        body: "GS1 company prefixes cost between $250-$10,000+ depending on your country and the number of products. Annual renewal fees apply. For small businesses, consider starting with a smaller prefix allocation. For internal inventory (not retail), you can use Code 128 or Code 39 without GS1 registration.",
      },
    ],
    faq: [
      {
        question: "Do I need a GS1 barcode to sell on Amazon?",
        answer:
          "Amazon requires GS1 GTINs for most product categories. Some sellers use exemptions, but having official GS1 barcodes is the safest approach.",
      },
      {
        question: "Can I buy UPC codes from resellers?",
        answer:
          "GS1 discourages buying from resellers as it can cause ownership issues. It's best to get your own company prefix directly from GS1.",
      },
      {
        question: "How long does it take to get a GS1 barcode?",
        answer:
          "Once you register with GS1, you receive your company prefix immediately. You can then generate barcodes right away using our free tool.",
      },
    ],
    relatedLinks: [
      { text: "Generate a UPC-A barcode", href: "/generators/upc-a" },
      { text: "Create an EAN-13 barcode", href: "/generators/ean-13" },
      { text: "How to Generate Barcodes Guide", href: "/guides/how-to-generate-barcodes" },
    ],
  },
  "how-to-print-barcodes-correctly": {
    title: "How to Print Barcodes Correctly: Professional Printing Guide (2025)",
    description:
      "Master barcode printing with our complete guide. Learn about DPI, sizing, materials, and testing to ensure your barcodes scan perfectly every time.",
    content: [
      {
        heading: "Why Barcode Print Quality Matters",
        body: "Poor barcode print quality leads to scanning failures, checkout delays, and inventory errors. Professional barcode printing requires attention to resolution, contrast, sizing, and material selection. A barcode that looks fine to the human eye may be unreadable to scanners due to insufficient contrast or incorrect dimensions.",
      },
      {
        heading: "Minimum Print Resolution (DPI) Requirements",
        body: "For professional barcode printing, use a minimum of 300 DPI (dots per inch). Higher resolutions like 600 DPI are recommended for small barcodes or high-density formats like Code 128. Laser printers generally produce sharper barcodes than inkjet printers. Thermal transfer printers are ideal for high-volume label printing.",
      },
      {
        heading: "Correct Barcode Sizing and Scaling",
        body: "UPC-A and EAN-13 barcodes have standard sizes: 100% scale is approximately 1.5 inches (37.29mm) wide. You can scale between 80% and 200% while maintaining scannability. Never distort the aspect ratio - always scale proportionally. Code 128 barcodes are more flexible in sizing but should maintain a minimum height of 0.5 inches.",
      },
      {
        heading: "Choosing the Right Barcode Format for Printing",
        body: "Vector formats (SVG, EPS, PDF) are best for professional printing as they scale infinitely without quality loss. PNG images should be at least 300 DPI at the final print size. Avoid JPEG format as compression artifacts can interfere with scanning. Always use black bars on white background for maximum contrast.",
      },
      {
        heading: "Label Material and Surface Considerations",
        body: "Use matte finish labels for best scanning results - glossy surfaces can cause glare. Ensure labels are applied to flat, clean surfaces without wrinkles or bubbles. For outdoor use, choose weather-resistant materials. Thermal labels are cost-effective for shipping but may fade over time. Polyester labels offer durability for asset tracking.",
      },
      {
        heading: "Quiet Zones: The Most Overlooked Requirement",
        body: "Quiet zones are the blank spaces on either side of a barcode. They are mandatory for proper scanning. UPC/EAN barcodes require a quiet zone of at least 9 times the width of the narrowest bar (about 0.25 inches). Code 128 requires 10 times the X-dimension. Never place text, graphics, or borders within the quiet zone.",
      },
      {
        heading: "Testing Your Printed Barcodes",
        body: "Always test printed barcodes before mass production. Use multiple scanner types: handheld laser scanners, smartphone apps, and retail POS scanners. Test at different angles and distances. Verify the correct data is decoded. Check for consistent scanning across the entire print batch. Keep test samples for quality control.",
      },
      {
        heading: "Common Printing Problems and Solutions",
        body: "Blurry barcodes: Increase print resolution or use vector format. Scanning failures: Check contrast ratio and quiet zones. Inconsistent scanning: Verify printer calibration and label material. Fading barcodes: Use thermal transfer instead of direct thermal. Smudging: Allow ink to dry fully or use laser printing.",
      },
    ],
    faq: [
      {
        question: "Can I print barcodes on a regular inkjet printer?",
        answer:
          "Yes, but ensure you use high-quality settings (300+ DPI) and matte label stock. Laser printers produce sharper results.",
      },
      {
        question: "What is the best file format for printing barcodes?",
        answer:
          "SVG (vector) is best for professional printing as it scales without quality loss. High-resolution PNG (300+ DPI) also works well.",
      },
      {
        question: "How do I know if my barcode is the right size?",
        answer:
          "UPC/EAN barcodes should be printed at 100% scale (about 1.5 inches wide). You can verify sizing with a ruler or by testing with a scanner.",
      },
    ],
    relatedLinks: [
      { text: "Download print-ready PNG barcodes", href: "/" },
      { text: "Generate vector SVG barcodes", href: "/" },
      { text: "How to Generate Barcodes Guide", href: "/guides/how-to-generate-barcodes" },
    ],
  },
  "inventory-barcode-system-setup": {
    title: "How to Setup an Inventory Barcode System: Complete Guide (2025)",
    description:
      "Learn how to implement a barcode-based inventory management system for your warehouse or business. Step-by-step guide covering barcode selection, scanners, and software.",
    content: [
      {
        heading: "Why Use Barcodes for Inventory Management?",
        body: "Barcode-based inventory systems reduce manual data entry errors by up to 99%, speed up stock counts by 10x, and provide real-time inventory visibility. They enable accurate tracking of stock levels, locations, and movements. Small businesses to large warehouses benefit from the efficiency and cost savings of barcode inventory systems.",
      },
      {
        heading: "Step 1: Choose Your Barcode Format",
        body: "For internal inventory systems, Code 128 is the most popular choice due to its high data density and ability to encode alphanumeric data. Code 39 is simpler but less compact. QR codes can store more information like product details, batch numbers, and expiration dates. Avoid UPC/EAN for internal use unless you need retail compatibility.",
      },
      {
        heading: "Step 2: Design Your Barcode Numbering System",
        body: "Create a logical numbering scheme that includes product category, location, or other relevant data. For example: CAT-LOC-ITEM (e.g., ELC-A12-0045 for Electronics, Aisle A12, Item 45). Keep numbers consistent in length for easier database management. Document your numbering system for future reference and training.",
      },
      {
        heading: "Step 3: Generate and Print Your Barcodes",
        body: "Use a free barcode generator to create barcode images for your inventory items. Download in high-resolution PNG or vector SVG format. Print labels using a thermal label printer for durability and cost-effectiveness. Standard label sizes are 2x1 inch or 4x2 inch depending on your needs. Include human-readable text below the barcode.",
      },
      {
        heading: "Step 4: Select Barcode Scanners",
        body: "Handheld laser scanners are reliable and affordable for most warehouses. 2D imagers can read QR codes and damaged barcodes. Wireless scanners offer mobility for large facilities. Smartphone apps with camera scanning work for small operations. Consider rugged scanners for harsh environments. Budget $50-$500 per scanner depending on features.",
      },
      {
        heading: "Step 5: Choose Inventory Management Software",
        body: "Select software that supports barcode scanning and integrates with your existing systems. Options range from free spreadsheet-based solutions to enterprise warehouse management systems (WMS). Key features: real-time inventory updates, location tracking, low stock alerts, and reporting. Cloud-based solutions offer accessibility from anywhere.",
      },
      {
        heading: "Step 6: Label Your Inventory and Locations",
        body: "Apply barcode labels to all inventory items, shelves, bins, and storage locations. Use durable labels that withstand your environment (moisture, temperature, handling). Create a master database linking barcodes to product information. Label storage locations to enable location-based tracking and picking.",
      },
      {
        heading: "Step 7: Train Your Team and Go Live",
        body: "Train staff on scanning procedures, software usage, and troubleshooting. Start with a pilot area before rolling out warehouse-wide. Establish standard operating procedures for receiving, picking, and cycle counting. Monitor accuracy and adjust processes as needed. Regular audits ensure system integrity.",
      },
      {
        heading: "Best Practices for Inventory Barcode Systems",
        body: "Perform regular cycle counts to verify accuracy. Use location barcodes for efficient picking. Implement barcode scanning at every inventory touchpoint (receiving, putaway, picking, shipping). Keep backup labels and scanners. Maintain a clean database with no duplicate barcodes. Integrate with accounting and sales systems for complete visibility.",
      },
    ],
    faq: [
      {
        question: "How much does it cost to setup a barcode inventory system?",
        answer:
          "Basic systems start at $500-$1000 (scanner, printer, labels, software). Enterprise solutions can cost $10,000+. Free barcode generators and open-source software reduce costs.",
      },
      {
        question: "Can I use my smartphone as a barcode scanner?",
        answer:
          "Yes, many inventory apps support smartphone camera scanning. This works well for small operations but dedicated scanners are faster and more reliable for high-volume use.",
      },
      {
        question: "What barcode format is best for warehouse inventory?",
        answer:
          "Code 128 is the most popular for warehouse inventory due to its compact size and ability to encode letters and numbers. QR codes work well if you need to store more data.",
      },
    ],
    relatedLinks: [
      { text: "Generate Code 128 barcodes for inventory", href: "/generators/code-128" },
      { text: "Create QR codes for asset tracking", href: "/generators/qr-code" },
      { text: "How to Print Barcodes Correctly", href: "/guides/how-to-print-barcodes-correctly" },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = GUIDES[slug]

  if (!guide) return {}

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({
    slug,
  }))
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = GUIDES[slug]

  if (!guide) {
    notFound()
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    author: {
      "@type": "Organization",
      name: "Barcode Generator Tool",
    },
    publisher: {
      "@type": "Organization",
      name: "Barcode Generator Tool",
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
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
        name: "Guides",
        item: "https://barcode-generator-hmv.vercel.app/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `https://barcode-generator-hmv.vercel.app/guides/${slug}`,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-4xl mx-auto">
        <nav className="flex items-center text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-primary transition-colors">
            Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Guide</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            {guide.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{guide.description}</p>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          {guide.content.map((section, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-16 bg-card border rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {guide.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Related Tools & Guides</h3>
          <div className="flex flex-wrap gap-3">
            {guide.relatedLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}

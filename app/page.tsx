import { BarcodeGenerator } from "@/components/barcode-generator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Free Online Barcode Generator - Create Print-Ready Barcodes Instantly
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create professional, print-ready barcodes for retail, inventory management, and logistics. Generate bulk
            barcodes in PNG, vector SVG, or PDF format. Support for UPC, EAN, Code 128, QR Codes, and more. Free
            GS1-compliant barcode generator with no sign-up required.
          </p>
        </div>

        <BarcodeGenerator />

        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Perfect For Every Industry</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <UseCaseCard
              title="Retail & E-Commerce"
              description="Generate EAN-13 and UPC-A barcodes for product packaging, point-of-sale scanning, and online marketplace listings."
              icon="🛍️"
              links={[
                { text: "Generate an EAN-13 barcode", href: "/generators/ean-13" },
                { text: "Create a UPC-A barcode", href: "/generators/upc-a" },
              ]}
            />
            <UseCaseCard
              title="Inventory & Logistics"
              description="Create Code 128 and ITF-14 barcodes for shipping labels, warehouse management, and asset tracking."
              icon="📦"
              links={[
                { text: "Generate Code 128 barcodes", href: "/generators/code-128" },
                { text: "Setup inventory barcode system", href: "/guides/inventory-barcode-system-setup" },
              ]}
            />
            <UseCaseCard
              title="Healthcare & Pharmacy"
              description="Produce precise Pharmacode and Datamatrix codes for medication tracking, patient wristbands, and lab samples."
              icon="⚕️"
              links={[{ text: "Learn about barcode types", href: "/blog/barcode-types-explained" }]}
            />
            <UseCaseCard
              title="Events & Marketing"
              description="Design custom QR codes for event tickets, digital menus, promotional campaigns, and social media links."
              icon="🎫"
              links={[{ text: "Create a QR code", href: "/generators/qr-code" }]}
            />
            <UseCaseCard
              title="Libraries & Books"
              description="Generate ISBN barcodes for books, magazines, and library cataloging systems."
              icon="📚"
              links={[{ text: "How to generate barcodes", href: "/guides/how-to-generate-barcodes" }]}
            />
            <UseCaseCard
              title="Office & Administration"
              description="Organize documents, files, and equipment with Code 39 or Code 128 asset tags."
              icon="🏢"
              links={[{ text: "Generate Code 128 barcodes", href: "/generators/code-128" }]}
            />
          </div>
        </section>

        <section className="mt-16 max-w-4xl mx-auto bg-card rounded-xl border p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Free Tool?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-4 font-semibold">Feature</th>
                  <th className="py-4 px-4 font-bold text-primary">Our Free Generator</th>
                  <th className="py-4 px-4 text-muted-foreground">Paid Software</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Cost</td>
                  <td className="py-4 px-4 text-green-600 font-bold">100% Free</td>
                  <td className="py-4 px-4 text-muted-foreground">$20 - $100+ / month</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Vector Downloads (SVG)</td>
                  <td className="py-4 px-4 text-green-600 font-bold">Included</td>
                  <td className="py-4 px-4 text-muted-foreground">Often Premium Only</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Privacy</td>
                  <td className="py-4 px-4 text-green-600 font-bold">Local (In-Browser)</td>
                  <td className="py-4 px-4 text-muted-foreground">Cloud (Data Uploaded)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4 font-medium">Registration</td>
                  <td className="py-4 px-4 text-green-600 font-bold">No Sign-up</td>
                  <td className="py-4 px-4 text-muted-foreground">Account Required</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Formats</td>
                  <td className="py-4 px-4 text-green-600 font-bold">All Major Types</td>
                  <td className="py-4 px-4 text-muted-foreground">Varies by Plan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this barcode generator free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, our barcode generator is 100% free to use for both personal and commercial purposes. You can
                generate unlimited barcodes without any hidden fees or watermarks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What barcode formats do you support?</AccordionTrigger>
              <AccordionContent>
                We support all major barcode formats including Code 128 (standard), EAN-13 (retail), UPC-A (US retail),
                Code 39, ITF-14, MSI, Pharmacode, and QR Codes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I download the barcodes for printing?</AccordionTrigger>
              <AccordionContent>
                Absolutely. You can download your generated barcodes in high-quality PNG, SVG (vector), and PDF formats,
                making them perfect for printing on labels, packaging, or documents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do I need to sign up to save my barcodes?</AccordionTrigger>
              <AccordionContent>
                No sign-up is required. We provide a local history feature that automatically saves your recently
                generated barcodes in your browser so you can easily access them again.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Are the generated barcodes scannable?</AccordionTrigger>
              <AccordionContent>
                Yes, our tool generates standard-compliant barcodes that are fully scannable by any standard barcode
                scanner or smartphone app. We recommend testing your printed barcodes to ensure readability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-16 mb-8">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Why Use Our Free Barcode Maker & QR Code Generator?</h2>
            <p className="text-muted-foreground mb-4">
              Whether you're a small business owner managing inventory with a barcode system, a retailer needing UPC
              codes for products, or setting up an inventory barcode system for your warehouse, our tool provides a
              simple, reliable solution. Unlike other tools, we offer vector (SVG) downloads for crisp printing at any
              size, bulk barcode generation capabilities, and support for the full range of industry-standard barcode
              types including GS1-compliant formats.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Instant Generation</h3>
                <p className="text-sm text-muted-foreground">
                  See your barcode update in real-time as you type. No waiting or page reloads required.
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">High Resolution & Print-Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Download vector files (SVG) and high-resolution PNG barcodes that stay sharp at any size, perfect for
                  professional printing on labels and packaging.
                </p>
              </div>
              <div className="p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Privacy Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Your data stays in your browser. We don't store your barcode data on our servers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 mb-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Learn More About Barcodes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/guides/how-to-generate-barcodes"
              className="group p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                How to Generate Barcodes
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete step-by-step guide covering UPC, EAN, Code 128, and QR codes with free tools.
              </p>
              <span className="text-primary font-medium">Read Guide →</span>
            </Link>
            <Link
              href="/guides/gs1-barcode-guide"
              className="group p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Complete GS1 Barcode Guide
              </h3>
              <p className="text-muted-foreground mb-4">
                Everything you need to know about GS1 barcodes, UPC codes, EAN numbers, and GTINs.
              </p>
              <span className="text-primary font-medium">Read Guide →</span>
            </Link>
            <Link
              href="/guides/how-to-print-barcodes-correctly"
              className="group p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                How to Print Barcodes Correctly
              </h3>
              <p className="text-muted-foreground mb-4">
                Master barcode printing with our guide on DPI, sizing, materials, and testing.
              </p>
              <span className="text-primary font-medium">Read Guide →</span>
            </Link>
            <Link
              href="/blog/why-barcodes-matter-small-business-2025"
              className="group p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Why Barcodes Matter for Small Businesses
              </h3>
              <p className="text-muted-foreground mb-4">
                Discover how barcodes can transform your small business operations and boost efficiency.
              </p>
              <span className="text-primary font-medium">Read Article →</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function UseCaseCard({
  title,
  description,
  icon,
  links,
}: {
  title: string
  description: string
  icon: string
  links?: { text: string; href: string }[]
}) {
  return (
    <div className="p-6 bg-card rounded-lg border hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      {links && links.length > 0 && (
        <div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm text-primary hover:underline font-medium">
              {link.text} →
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

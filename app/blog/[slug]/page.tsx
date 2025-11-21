import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

const BLOG_POSTS: Record<
  string,
  {
    title: string
    description: string
    publishedDate: string
    author: string
    readTime: string
    tableOfContents: { id: string; title: string }[]
    content: {
      id: string
      heading: string
      body: string
    }[]
    relatedPosts: { title: string; href: string }[]
  }
> = {
  "barcode-types-explained": {
    title: "Barcode Types Explained: EAN, UPC, QR, Code 128 & More (2025 Guide)",
    description:
      "Complete guide to barcode types including UPC-A, EAN-13, Code 128, Code 39, QR codes, and more. Learn which barcode format is right for your business needs.",
    publishedDate: "2025-01-15",
    author: "Barcode Generator Team",
    readTime: "8 min read",
    tableOfContents: [
      { id: "introduction", title: "Introduction to Barcode Types" },
      { id: "upc-a", title: "UPC-A: North American Retail Standard" },
      { id: "ean-13", title: "EAN-13: Global Retail Standard" },
      { id: "code-128", title: "Code 128: Logistics & Inventory" },
      { id: "code-39", title: "Code 39: Simple Alphanumeric" },
      { id: "qr-codes", title: "QR Codes: 2D Matrix Barcodes" },
      { id: "choosing", title: "How to Choose the Right Barcode" },
    ],
    content: [
      {
        id: "introduction",
        heading: "Introduction to Barcode Types",
        body: "Barcodes come in many formats, each designed for specific use cases. Understanding the differences between barcode types is crucial for selecting the right format for your business. This guide covers the most common barcode formats used in retail, logistics, inventory management, and marketing. Whether you need a UPC code for retail products, a Code 128 barcode for shipping labels, or a QR code for marketing campaigns, this comprehensive guide will help you make the right choice.",
      },
      {
        id: "upc-a",
        heading: "UPC-A: North American Retail Standard",
        body: "UPC-A (Universal Product Code) is the standard barcode format for retail products in the United States and Canada. It consists of 12 numeric digits and is required by most major retailers including Walmart, Target, and grocery stores. UPC-A barcodes are managed by GS1 and require a company prefix for official use. The barcode encodes the manufacturer identification number and product number, with a check digit for error detection. UPC-A is ideal for consumer packaged goods, books, and any products sold through traditional retail channels in North America.",
      },
      {
        id: "ean-13",
        heading: "EAN-13: Global Retail Standard",
        body: "EAN-13 (European Article Number) is the international standard for retail product identification. It consists of 13 numeric digits and is used worldwide except in North America (where UPC-A dominates). EAN-13 is compatible with UPC-A - most scanners can read both formats. Like UPC-A, EAN-13 requires a GS1 company prefix for official retail use. The extra digit in EAN-13 allows for country code identification. EAN-13 is essential for products sold in European, Asian, and other international markets. If you plan to sell globally, EAN-13 is the recommended choice.",
      },
      {
        id: "code-128",
        heading: "Code 128: Logistics & Inventory",
        body: "Code 128 is a high-density linear barcode capable of encoding all 128 ASCII characters including letters, numbers, and symbols. It is the most popular barcode format for logistics, shipping labels, and internal inventory systems. Major shipping carriers like FedEx, UPS, and DHL use Code 128 for tracking numbers. Unlike UPC/EAN, Code 128 does not require GS1 registration, making it perfect for internal use. Its compact size allows more data to be encoded in less space compared to Code 39. Code 128 is ideal for warehouse management, asset tracking, and supply chain applications.",
      },
      {
        id: "code-39",
        heading: "Code 39: Simple Alphanumeric",
        body: "Code 39 is one of the oldest and simplest barcode formats. It can encode uppercase letters, numbers, and a few special characters. While less efficient than Code 128 (it takes more space to encode the same data), Code 39 is still widely used in industries like automotive, healthcare, and government due to its simplicity and reliability. Code 39 does not require a check digit, making it easy to generate and implement. It is commonly used for ID badges, inventory labels, and asset tags where alphanumeric encoding is needed but space is not a critical constraint.",
      },
      {
        id: "qr-codes",
        heading: "QR Codes: 2D Matrix Barcodes",
        body: "QR Codes (Quick Response Codes) are two-dimensional matrix barcodes that can store significantly more data than traditional linear barcodes. They can encode URLs, text, contact information, WiFi credentials, and more. QR codes are easily scanned by smartphones, making them perfect for marketing campaigns, digital menus, contactless payments, and event tickets. Unlike linear barcodes, QR codes have built-in error correction, allowing them to be scanned even if partially damaged. QR codes can be customized with colors and logos while maintaining scannability. They are the go-to choice for bridging physical and digital experiences.",
      },
      {
        id: "choosing",
        heading: "How to Choose the Right Barcode Type",
        body: "Selecting the right barcode format depends on your specific use case. For retail products sold in stores, use UPC-A (North America) or EAN-13 (international). For shipping labels and logistics, Code 128 is the industry standard. For internal inventory and asset tracking, Code 128 or Code 39 work well. For marketing, digital content, and smartphone scanning, QR codes are ideal. Consider factors like data capacity, scanning environment, industry standards, and whether you need GS1 registration. When in doubt, Code 128 offers the best balance of versatility and efficiency for most business applications.",
      },
    ],
    relatedPosts: [
      { title: "How to Generate Barcodes", href: "/guides/how-to-generate-barcodes" },
      { title: "Complete GS1 Barcode Guide", href: "/guides/gs1-barcode-guide" },
    ],
  },
  "why-barcodes-matter-small-business-2025": {
    title: "Why Barcodes Matter for Small Businesses in 2025",
    description:
      "Discover how barcodes can transform your small business operations. Learn about inventory management, cost savings, and efficiency gains from implementing a barcode system.",
    publishedDate: "2025-01-15",
    author: "Barcode Generator Team",
    readTime: "7 min read",
    tableOfContents: [
      { id: "introduction", title: "The Barcode Advantage" },
      { id: "inventory", title: "Streamlined Inventory Management" },
      { id: "accuracy", title: "Eliminating Human Error" },
      { id: "cost", title: "Cost Savings & ROI" },
      { id: "scaling", title: "Scaling Your Business" },
      { id: "getting-started", title: "Getting Started with Barcodes" },
    ],
    content: [
      {
        id: "introduction",
        heading: "The Barcode Advantage for Small Businesses",
        body: "In 2025, barcodes are no longer just for large corporations. Small businesses are discovering that barcode systems provide a competitive edge through improved efficiency, accuracy, and customer satisfaction. Whether you run a retail shop, e-commerce store, warehouse, or service business, implementing barcodes can transform your operations. This article explores why barcodes matter for small businesses and how you can leverage this technology to grow your business without breaking the bank.",
      },
      {
        id: "inventory",
        heading: "Streamlined Inventory Management",
        body: "Manual inventory tracking is time-consuming and error-prone. Barcodes enable real-time inventory visibility, allowing you to know exactly what you have in stock at any moment. Scanning items during receiving, storage, and sales automatically updates your inventory database. This eliminates the need for manual stock counts and spreadsheet updates. You can quickly identify low-stock items, prevent stockouts, and optimize reorder points. For small businesses, this means spending less time on inventory management and more time serving customers and growing the business.",
      },
      {
        id: "accuracy",
        heading: "Eliminating Human Error",
        body: "Studies show that manual data entry has an error rate of 1 in 300 characters, while barcode scanning reduces errors to 1 in 3 million. For small businesses, even a few inventory errors can lead to lost sales, customer dissatisfaction, and financial losses. Barcodes ensure accurate product identification at every step: receiving, storage, picking, and checkout. This accuracy extends to pricing - no more manual price lookups or typos at the register. Accurate inventory data also improves financial reporting and helps you make better business decisions based on reliable data.",
      },
      {
        id: "cost",
        heading: "Cost Savings & ROI",
        body: "Implementing a barcode system is more affordable than ever. Free barcode generators, low-cost label printers (starting at $100), and affordable scanners (from $50) make the technology accessible to small businesses. The return on investment is typically realized within months through labor savings, reduced errors, and improved inventory turnover. You will spend less time on manual data entry, stock counts, and error correction. Faster checkout times improve customer experience and allow you to serve more customers with the same staff. Reduced inventory shrinkage and better stock management directly impact your bottom line.",
      },
      {
        id: "scaling",
        heading: "Scaling Your Business with Barcodes",
        body: "As your small business grows, barcodes provide the infrastructure to scale efficiently. Adding new products, locations, or sales channels becomes manageable with a barcode system. You can easily track inventory across multiple locations, integrate with e-commerce platforms, and expand your product catalog without proportionally increasing administrative overhead. Barcodes also facilitate partnerships with larger retailers and distributors who require barcode compliance. Many online marketplaces like Amazon require product barcodes for listing. Implementing barcodes early positions your business for growth and opens doors to new opportunities.",
      },
      {
        id: "getting-started",
        heading: "Getting Started with Barcodes",
        body: "Starting with barcodes is simpler than you might think. First, decide which barcode format suits your needs: UPC/EAN for retail products, Code 128 for internal inventory, or QR codes for marketing. Use a free online barcode generator to create barcode images. Invest in a basic thermal label printer and handheld scanner. Choose inventory management software that supports barcode scanning - many affordable options exist for small businesses. Label your products and storage locations. Train your team on scanning procedures. Start with a small pilot area and expand as you gain confidence. The initial investment is minimal, and the benefits are immediate and long-lasting.",
      },
    ],
    relatedPosts: [
      { title: "How to Setup an Inventory Barcode System", href: "/guides/inventory-barcode-system-setup" },
      { title: "Barcode Types Explained", href: "/blog/barcode-types-explained" },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS[slug]

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedDate,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS[slug]

  if (!post) {
    notFound()
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Barcode Generator Tool",
    },
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
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
        name: "Blog",
        item: "https://barcode-generator-hmv.vercel.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://barcode-generator-hmv.vercel.app/blog/${slug}`,
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
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Post</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedDate}>
              {new Date(post.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">{post.description}</p>
        </header>

        <aside className="mb-12 bg-card border rounded-xl p-6">
          <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
          <nav>
            <ul className="space-y-2">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="prose dark:prose-invert max-w-none">
          {post.content.map((section) => (
            <section key={section.id} id={section.id} className="mb-10 scroll-mt-8">
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Related Articles</h3>
          <div className="space-y-3">
            {post.relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                href={relatedPost.href}
                className="block p-4 bg-card border rounded-lg hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-foreground hover:text-primary transition-colors">
                  {relatedPost.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}

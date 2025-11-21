import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Barcode Blog | Guides, Tips & Industry Insights",
  description:
    "Learn about barcode technology, inventory management, retail best practices, and more. Expert guides and tips for small businesses and enterprises.",
}

const BLOG_POSTS = [
  {
    slug: "barcode-types-explained",
    title: "Barcode Types Explained: EAN, UPC, QR, Code 128 & More",
    description:
      "Complete guide to barcode types including UPC-A, EAN-13, Code 128, Code 39, QR codes, and more. Learn which barcode format is right for your business needs.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Education",
  },
  {
    slug: "why-barcodes-matter-small-business-2025",
    title: "Why Barcodes Matter for Small Businesses in 2025",
    description:
      "Discover how barcodes can transform your small business operations. Learn about inventory management, cost savings, and efficiency gains.",
    date: "2025-01-15",
    readTime: "7 min read",
    category: "Business",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <nav className="flex items-center text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Blog</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Barcode Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Expert guides, industry insights, and practical tips for implementing barcode systems in your business.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{post.description}</p>
              <time className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

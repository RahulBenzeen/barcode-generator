export function BarcodeInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Supported Barcode Types Guide</h2>
        <p className="text-muted-foreground mb-6">
          Choosing the right barcode format is crucial for your specific use case. Here is a detailed guide to the most
          common barcode standards we support.
        </p>
        <div className="space-y-6">
          <InfoSection
            title="Code 128 (Standard)"
            description="The most versatile and high-density linear barcode. It can encode all 128 ASCII characters (letters, numbers, and symbols). Ideal for logistics, shipping labels, and inventory management."
            usage="Shipping, Inventory, ID Cards, Supply Chain"
          />
          <InfoSection
            title="EAN-13 (International Retail)"
            description="The standard barcode for retail products worldwide (except North America). It encodes 13 numeric digits and is required for selling products in global marketplaces."
            usage="Retail Products (Global), Books (ISBN), Magazines"
          />
          <InfoSection
            title="UPC-A (North American Retail)"
            description="The standard retail barcode used in the United States and Canada. It encodes 12 numeric digits and is universally recognized by point-of-sale systems in North America."
            usage="Retail Products (USA & Canada), Groceries"
          />
          <InfoSection
            title="QR Code (2D Barcode)"
            description="A two-dimensional matrix barcode that can store significant amounts of data including URLs, contact info (vCard), Wi-Fi credentials, and text. Scannable by all smartphones."
            usage="Marketing, Website Links, Digital Menus, Payments"
          />
          <InfoSection
            title="Code 39"
            description="An older alphanumeric standard that is still widely used in non-retail environments. It supports uppercase letters, numbers, and a few special characters."
            usage="Automotive, Defense, Internal Inventory, Badges"
          />
          <InfoSection
            title="ITF-14 (Interleaved 2 of 5)"
            description="A high-density numeric-only barcode primarily used on corrugated cardboard packaging and shipping boxes. It is designed to be printed directly on lower-quality materials."
            usage="Warehouse, Logistics, Shipping Cartons"
          />
        </div>
      </div>

      <div className="pt-8 border-t border-border">
        <h3 className="text-2xl font-bold mb-4">How to Create a Barcode</h3>
        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
          <li>
            <strong className="text-foreground">Select Format:</strong> Choose the appropriate barcode type (e.g.,
            EAN-13 for retail, Code 128 for internal use).
          </li>
          <li>
            <strong className="text-foreground">Enter Data:</strong> Type your alphanumeric code or text. The preview
            will update instantly.
          </li>
          <li>
            <strong className="text-foreground">Customize:</strong> Adjust the height, width, and colors to match your
            design requirements.
          </li>
          <li>
            <strong className="text-foreground">Download:</strong> Save your barcode as a high-quality PNG, SVG, or PDF
            file for printing.
          </li>
        </ol>
      </div>

      <div className="pt-6 border-t border-border">
        <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              <strong className="text-foreground">Use high contrast:</strong> Black on white is ideal for maximum
              readability
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              <strong className="text-foreground">Avoid very small sizes:</strong> Ensure the barcode is large enough
              for scanners to read (minimum 1 inch width)
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              <strong className="text-foreground">Add margin space:</strong> Leave white space around barcodes for
              reliable scanning
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              <strong className="text-foreground">Test before printing:</strong> Always test your barcodes with a
              scanner before mass production
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              <strong className="text-foreground">Use appropriate format:</strong> Choose the right barcode type for
              your industry and use case
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function InfoSection({
  title,
  description,
  usage,
}: {
  title: string
  description: string
  usage: string
}) {
  return (
    <div className="border-l-2 border-primary pl-4">
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground mb-1">{description}</p>
      <p className="text-sm">
        <span className="font-medium">Usage:</span> {usage}
      </p>
    </div>
  )
}

export function BarcodeInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Barcode Types & Usage</h2>
        <div className="space-y-4">
          <InfoSection
            title="Code 128"
            description="General-purpose barcode that can encode the full ASCII character set. Widely used in shipping, packaging, and supply chain management."
            usage="Any alphanumeric data"
          />
          <InfoSection
            title="Code 39"
            description="Older standard that encodes uppercase letters, numbers, and a few special characters. Still used in automotive and defense industries."
            usage="A-Z, 0-9, and -. $/+%"
          />
          <InfoSection
            title="EAN-13"
            description="International standard for retail products. Used worldwide for point-of-sale scanning."
            usage="12-13 digits (the 13th is a check digit)"
          />
          <InfoSection
            title="EAN-8"
            description="Compact version of EAN-13 for small packages where space is limited."
            usage="7-8 digits"
          />
          <InfoSection
            title="UPC-A"
            description="Standard barcode for retail products in North America."
            usage="11-12 digits"
          />
          <InfoSection
            title="UPC-E"
            description="Compressed version of UPC-A for smaller packages."
            usage="6-8 digits"
          />
          <InfoSection
            title="QR Code"
            description="2D barcode that can store much more information including URLs, contact information, and text."
            usage="Any text, URLs, up to several thousand characters"
          />
          <InfoSection
            title="ITF (Interleaved 2 of 5)"
            description="Used for packaging and distribution, especially in the logistics industry."
            usage="Even number of digits only"
          />
        </div>
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

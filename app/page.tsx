import { BarcodeGenerator } from "@/components/barcode-generator"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">
            <span className="text-primary">HMV</span> — generate your bar code
          </h1>

          <p className="text-muted-foreground text-lg">
            Create professional barcodes with ease
          </p>
        </div>

        <BarcodeGenerator />
      </div>
    </main>
  )
}

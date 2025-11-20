"use client"

import { useState } from "react"
import { BarcodeGeneratorForm } from "./barcode-generator-form"
import { BarcodePreview } from "./barcode-preview"
import { BarcodeInfo } from "./barcode-info"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface BarcodeOptions {
  value: string
  type: string
  width: number
  height: number
  margin: number
  displayValue: boolean
  foregroundColor: string
  backgroundColor: string
}

export interface GeneratedBarcode extends BarcodeOptions {
  timestamp: number
}

export function BarcodeGenerator() {
  const [options, setOptions] = useState<BarcodeOptions>({
    value: "123456789012",
    type: "code128",
    width: 2,
    height: 100,
    margin: 10,
    displayValue: true,
    foregroundColor: "#000000",
    backgroundColor: "#ffffff",
  })

  const [generatedBarcode, setGeneratedBarcode] = useState<BarcodeOptions | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [history, setHistory] = useState<GeneratedBarcode[]>([])

  const handleGenerate = () => {
    setError(null)

    // Validate the barcode value based on type
    const validation = validateBarcodeValue(options.value, options.type)
    if (!validation.valid) {
      setError(validation.error || "Invalid barcode value")
      return
    }

    setGeneratedBarcode(options)

    // Add to history
    const newEntry: GeneratedBarcode = {
      ...options,
      timestamp: Date.now(),
    }
    setHistory((prev) => [newEntry, ...prev.slice(0, 9)]) // Keep last 10
  }

  const handleLoadFromHistory = (historyItem: GeneratedBarcode) => {
    setOptions(historyItem)
    setGeneratedBarcode(historyItem)
    setError(null)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="generator">Generator</TabsTrigger>
          <TabsTrigger value="info">Info & Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="generator" className="space-y-6">
          <Card className="p-6">
            <BarcodeGeneratorForm options={options} setOptions={setOptions} onGenerate={handleGenerate} error={error} />
          </Card>

          {generatedBarcode && (
            <Card className="p-6">
              <BarcodePreview options={generatedBarcode} />
            </Card>
          )}

          {history.length > 0 && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Barcodes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {history.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleLoadFromHistory(item)}
                    className="text-left p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                  >
                    <div className="text-sm font-medium truncate">{item.value}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.type.toUpperCase()} • {new Date(item.timestamp).toLocaleTimeString()}
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="info">
          <Card className="p-6">
            <BarcodeInfo />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function validateBarcodeValue(value: string, type: string): { valid: boolean; error?: string } {
  if (!value || value.trim() === "") {
    return { valid: false, error: "Please enter a value" }
  }

  switch (type) {
    case "ean13":
      if (!/^\d{12,13}$/.test(value)) {
        return { valid: false, error: "EAN-13 requires 12-13 digits" }
      }
      break
    case "ean8":
      if (!/^\d{7,8}$/.test(value)) {
        return { valid: false, error: "EAN-8 requires 7-8 digits" }
      }
      break
    case "upca":
      if (!/^\d{11,12}$/.test(value)) {
        return { valid: false, error: "UPC-A requires 11-12 digits" }
      }
      break
    case "upce":
      if (!/^\d{6,8}$/.test(value)) {
        return { valid: false, error: "UPC-E requires 6-8 digits" }
      }
      break
    case "code39":
      if (!/^[A-Z0-9\-. $/+%]+$/.test(value)) {
        return { valid: false, error: "Code 39 supports A-Z, 0-9, and -. $/+%" }
      }
      break
    case "itf":
      if (!/^\d+$/.test(value) || value.length % 2 !== 0) {
        return { valid: false, error: "ITF requires an even number of digits" }
      }
      break
  }

  return { valid: true }
}

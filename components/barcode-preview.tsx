"use client"

import { useEffect, useRef, useState } from "react"
import JsBarcode from "jsbarcode"
import QRCode from "qrcode"
import { DownloadButtons } from "./download-buttons"
import type { BarcodeOptions } from "./barcode-generator"

interface BarcodePreviewProps {
  options: BarcodeOptions
}

export function BarcodePreview({ options }: BarcodePreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setError(null)

    try {
      if (options.type === "qrcode") {
        generateQRCode()
      } else {
        generateJsBarcode()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate barcode")
      console.error("[v0] Barcode generation error:", err)
    }
  }, [options])

  const generateQRCode = async () => {
    if (!canvasRef.current) return

    try {
      await QRCode.toCanvas(canvasRef.current, options.value, {
        width: 300,
        margin: options.margin / 10,
        color: {
          dark: options.foregroundColor,
          light: options.backgroundColor,
        },
      })

      // Also generate SVG version
      if (svgRef.current) {
        const svgString = await QRCode.toString(options.value, {
          type: "svg",
          width: 300,
          margin: options.margin / 10,
          color: {
            dark: options.foregroundColor,
            light: options.backgroundColor,
          },
        })
        svgRef.current.innerHTML = svgString
      }
    } catch (err) {
      throw new Error("Failed to generate QR code")
    }
  }

  const generateJsBarcode = () => {
    if (!svgRef.current || !canvasRef.current) return

    const barcodeOptions = {
      format: options.type.toUpperCase(),
      width: options.width,
      height: options.height,
      displayValue: options.displayValue,
      margin: options.margin,
      lineColor: options.foregroundColor,
      background: options.backgroundColor,
    }

    // Generate SVG
    JsBarcode(svgRef.current, options.value, barcodeOptions)

    // Generate Canvas (for PNG download)
    JsBarcode(canvasRef.current, options.value, barcodeOptions)
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center p-8 bg-muted/30 rounded-lg min-h-[200px]">
        <canvas ref={canvasRef} className="max-w-full" style={{ display: "none" }} />
        <svg ref={svgRef} className="max-w-full" />
      </div>

      <DownloadButtons canvasRef={canvasRef} svgRef={svgRef} options={options} />
    </div>
  )
}

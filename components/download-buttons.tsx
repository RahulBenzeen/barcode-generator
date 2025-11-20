"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import type { RefObject } from "react"
import type { BarcodeOptions } from "./barcode-generator"

interface DownloadButtonsProps {
  canvasRef: RefObject<HTMLCanvasElement>
  svgRef: RefObject<SVGSVGElement>
  options: BarcodeOptions
}

export function DownloadButtons({ canvasRef, svgRef, options }: DownloadButtonsProps) {
  const getFilename = (extension: string) => {
    const cleanValue = options.value.replace(/[^a-zA-Z0-9]/g, "_")
    return `${options.type}_${cleanValue}.${extension}`
  }

  const downloadPNG = () => {
    if (!canvasRef.current) return

    // For better print quality, create a high-resolution version
    const scale = 3
    const tempCanvas = document.createElement("canvas")
    const ctx = tempCanvas.getContext("2d")
    if (!ctx) return

    tempCanvas.width = canvasRef.current.width * scale
    tempCanvas.height = canvasRef.current.height * scale
    ctx.scale(scale, scale)
    ctx.drawImage(canvasRef.current, 0, 0)

    tempCanvas.toBlob((blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = getFilename("png")
      link.click()
      URL.revokeObjectURL(url)
    })
  }

  const downloadSVG = () => {
    if (!svgRef.current) return

    const svgData = new XMLSerializer().serializeToString(svgRef.current)
    const blob = new Blob([svgData], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = getFilename("svg")
    link.click()
    URL.revokeObjectURL(url)
  }

  const downloadPDF = async () => {
    if (!canvasRef.current) return

    try {
      // Create a simple PDF with jsPDF
      const { jsPDF } = await import("jspdf")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgData = canvasRef.current.toDataURL("image/png", 1.0)
      const imgWidth = canvasRef.current.width
      const imgHeight = canvasRef.current.height

      // Calculate dimensions to fit nicely on page
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const ratio = Math.min((pageWidth - 40) / imgWidth, (pageHeight - 40) / imgHeight)

      const width = imgWidth * ratio
      const height = imgHeight * ratio
      const x = (pageWidth - width) / 2
      const y = (pageHeight - height) / 2

      pdf.addImage(imgData, "PNG", x, y, width, height)
      pdf.save(getFilename("pdf"))
    } catch (err) {
      console.error("[v0] PDF generation error:", err)
      alert("Failed to generate PDF. Please try PNG or SVG instead.")
    }
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button onClick={downloadPNG} variant="default" size="lg" className="min-w-[140px]">
        <Download className="mr-2 h-4 w-4" />
        Download PNG
      </Button>
      <Button onClick={downloadSVG} variant="outline" size="lg" className="min-w-[140px] bg-transparent">
        <Download className="mr-2 h-4 w-4" />
        Download SVG
      </Button>
      <Button onClick={downloadPDF} variant="outline" size="lg" className="min-w-[140px] bg-transparent">
        <Download className="mr-2 h-4 w-4" />
        Download PDF
      </Button>
    </div>
  )
}

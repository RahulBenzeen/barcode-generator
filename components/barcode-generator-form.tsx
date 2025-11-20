"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import type { BarcodeOptions } from "./barcode-generator"

interface BarcodeGeneratorFormProps {
  options: BarcodeOptions
  setOptions: (options: BarcodeOptions) => void
  onGenerate: () => void
  error: string | null
}

const BARCODE_TYPES = [
  { value: "code128", label: "Code 128" },
  { value: "code39", label: "Code 39" },
  { value: "ean13", label: "EAN-13" },
  { value: "ean8", label: "EAN-8" },
  { value: "upca", label: "UPC-A" },
  { value: "upce", label: "UPC-E" },
  { value: "qrcode", label: "QR Code" },
  { value: "itf", label: "ITF (Interleaved 2 of 5)" },
]

export function BarcodeGeneratorForm({ options, setOptions, onGenerate, error }: BarcodeGeneratorFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="value">Barcode Value *</Label>
          <Input
            id="value"
            value={options.value}
            onChange={(e) => setOptions({ ...options, value: e.target.value })}
            placeholder="Enter barcode data"
            className="font-mono"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Barcode Type *</Label>
          <Select value={options.type} onValueChange={(value) => setOptions({ ...options, type: value })}>
            <SelectTrigger id="type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {BARCODE_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width">Width: {options.width}</Label>
            <Input
              id="width"
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={options.width}
              onChange={(e) => setOptions({ ...options, width: Number.parseFloat(e.target.value) })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height: {options.height}px</Label>
            <Input
              id="height"
              type="range"
              min="30"
              max="200"
              step="10"
              value={options.height}
              onChange={(e) => setOptions({ ...options, height: Number.parseInt(e.target.value) })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="margin">Margin: {options.margin}px</Label>
          <Input
            id="margin"
            type="range"
            min="0"
            max="30"
            step="5"
            value={options.margin}
            onChange={(e) => setOptions({ ...options, margin: Number.parseInt(e.target.value) })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="foregroundColor">Foreground Color</Label>
            <div className="flex gap-2">
              <Input
                id="foregroundColor"
                type="color"
                value={options.foregroundColor}
                onChange={(e) => setOptions({ ...options, foregroundColor: e.target.value })}
                className="w-16 h-10 p-1"
              />
              <Input
                type="text"
                value={options.foregroundColor}
                onChange={(e) => setOptions({ ...options, foregroundColor: e.target.value })}
                className="flex-1 font-mono"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="backgroundColor">Background Color</Label>
            <div className="flex gap-2">
              <Input
                id="backgroundColor"
                type="color"
                value={options.backgroundColor}
                onChange={(e) => setOptions({ ...options, backgroundColor: e.target.value })}
                className="w-16 h-10 p-1"
              />
              <Input
                type="text"
                value={options.backgroundColor}
                onChange={(e) => setOptions({ ...options, backgroundColor: e.target.value })}
                className="flex-1 font-mono"
              />
            </div>
          </div>
        </div>

        {options.type !== "qrcode" && (
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="displayValue">Show Human-Readable Text</Label>
              <p className="text-sm text-muted-foreground">Display the value below the barcode</p>
            </div>
            <Switch
              id="displayValue"
              checked={options.displayValue}
              onCheckedChange={(checked) => setOptions({ ...options, displayValue: checked })}
            />
          </div>
        )}
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button onClick={onGenerate} className="w-full" size="lg">
        Generate Barcode
      </Button>
    </div>
  )
}

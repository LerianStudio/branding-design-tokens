"use client"

// import Image from "next/image" - not needed, using regular img tags
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Download, ExternalLink, Copy, Eye, Palette, FileImage, Zap, Heart } from "lucide-react"

const logoAssets = [
  {
    name: "Primary Logo",
    file: "lerian-logo.svg",
    format: "SVG",
    description: "Main Lerian logo for general use",
    usage: "Headers, business cards, official documents",
    background: "Light backgrounds",
    size: "Scalable vector"
  },
  {
    name: "Negative Logo",
    file: "lerian-logo-negative.svg", 
    format: "SVG",
    description: "Logo variant for dark backgrounds",
    usage: "Dark themes, overlays, high contrast displays",
    background: "Dark backgrounds",
    size: "Scalable vector"
  }
]

const brandGraphics = [
  {
    name: "Grafismo 3",
    file: "lerian-graphic-3.png", 
    format: "PNG",
    description: "Interconnected network visualization",
    usage: "Technology presentations, connection themes",
    dimensions: "1200x800px"
  },
  {
    name: "Grafismo 4",
    file: "lerian-graphic-4.png",
    format: "PNG", 
    description: "Dynamic wave pattern with energy feel",
    usage: "Motion graphics, active/progress states",
    dimensions: "1200x800px"
  }
]

const mascotAssets = [
  {
    name: "Sindarian Default",
    file: "sindarian-avatar.png",
    format: "PNG",
    description: "Default friendly Lerian mascot for general use",
    usage: "Profile avatars, general mascot representation",
    personality: "Helpful, friendly, approachable",
    dimensions: "512x512px"
  },
  {
    name: "Sindarian Happy",
    file: "sindarian-happy.png",
    format: "PNG",
    description: "Celebratory pose for positive interactions",
    usage: "Success messages, achievements, positive feedback",
    personality: "Joyful, enthusiastic, encouraging",
    dimensions: "512x512px"
  },
  {
    name: "Sindarian Thinking",
    file: "sindarian-thinking.png",
    format: "PNG",
    description: "Contemplative pose for problem-solving contexts",
    usage: "Loading states, processing, help documentation",
    personality: "Thoughtful, analytical, patient",
    dimensions: "512x512px"
  },
  {
    name: "Sindarian Celebrating",
    file: "sindarian-celebrating.png",
    format: "PNG",
    description: "Victory pose for milestone achievements",
    usage: "Completion screens, goal achievements, promotions",
    personality: "Triumphant, motivating, energetic",
    dimensions: "512x512px"
  },
  {
    name: "Sindarian Working",
    file: "sindarian-working.png",
    format: "PNG",
    description: "Focused work pose for productivity contexts",
    usage: "Dashboard widgets, progress indicators, workflows",
    personality: "Diligent, focused, professional",
    dimensions: "512x512px"
  },
  {
    name: "Sindarian Waving",
    file: "sindarian-waving.png",
    format: "PNG",
    description: "Welcoming gesture for greetings and onboarding",
    usage: "Welcome screens, introductions, tutorial starts",
    personality: "Welcoming, warm, inviting",
    dimensions: "512x512px"
  }
]

const colorPalette = [
  { name: "Lerian Yellow", hex: "#FEBD02", usage: "Primary brand color, CTAs, highlights" },
  { name: "Lerian Green", hex: "#50F769", usage: "Success states, positive actions" },
  { name: "Lerian Red", hex: "#FF6760", usage: "Errors, alerts, destructive actions" },
  { name: "Lerian Blue", hex: "#2ED8FE", usage: "Information, links, secondary actions" },
  { name: "Lerian Black", hex: "#191A1B", usage: "Primary text, headers, borders" },
  { name: "Gray Dark", hex: "#3E3C37", usage: "Secondary text, inactive states" },
  { name: "Gray Medium", hex: "#8B877C", usage: "Muted text, placeholders" },
  { name: "Gray Light", hex: "#F2F2F2", usage: "Backgrounds, dividers, subtle borders" }
]

const usageGuidelines = [
  {
    category: "Logo Usage",
    icon: FileImage,
    rules: [
      "Maintain minimum clear space equal to the height of the 'L'",
      "Never stretch, skew, or modify the logo proportions",
      "Use only approved color variations",
      "Ensure sufficient contrast with background"
    ]
  },
  {
    category: "Color Usage", 
    icon: Palette,
    rules: [
      "Yellow is the primary brand color - use prominently",
      "Use green for positive/success states",
      "Red only for errors and warnings",
      "Blue for informational content"
    ]
  },
  {
    category: "Brand Graphics",
    icon: Zap,
    rules: [
      "Use as subtle background elements, not focal points",
      "Maintain low opacity (10-20%) for text readability",
      "Don't crop or modify the graphics",
      "Combine multiple graphics thoughtfully"
    ]
  },
  {
    category: "Mascot Usage",
    icon: Heart,
    rules: [
      "Choose pose based on emotional context and user action",
      "Use 'Happy' for success states and positive feedback",
      "Use 'Thinking' for loading or processing states",
      "Use 'Waving' for welcome and onboarding experiences",
      "Maintain consistent size and placement across platform"
    ]
  }
]

export default function AssetsPage() {
  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex)
  }

  const handleDownload = (filename: string) => {
    const link = document.createElement('a')
    link.href = `/branding-design-tokens/${filename}`
    link.download = filename
    link.click()
  }

  const handleDownloadAll = () => {
    // Download all assets
    const allAssets = [
      ...logoAssets.map(asset => asset.file),
      ...brandGraphics.map(graphic => graphic.file),
      ...mascotAssets.map(mascot => mascot.file)
    ]
    
    allAssets.forEach((filename, index) => {
      setTimeout(() => handleDownload(filename), index * 100) // Stagger downloads
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/brand">Brand</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Assets</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium">
            Brand Assets
          </Badge>
          <Heading level={1} className="mb-4">
            Lerian Brand Assets Library
          </Heading>
          <Text variant="lead" className="max-w-2xl">
            Official logos, graphics, and visual assets for consistent brand 
            representation across all Lerian applications and materials.
          </Text>
        </div>

        <div className="space-y-8">
          {/* Logo Assets */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Logo Assets</CardTitle>
              <CardDescription className="font-body">
                Official Lerian logos in various formats and configurations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {logoAssets.map((logo) => (
                  <div key={logo.name} className="border rounded-lg p-6 space-y-4">
                    <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                      <img
                        src={`/branding-design-tokens/${logo.file}`}
                        alt={logo.name}
                        width={120}
                        height={80}
                        className="max-h-20 w-auto object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Heading level={4}>{logo.name}</Heading>
                        <Badge variant="outline">{logo.format}</Badge>
                      </div>
                      <Text variant="small" className="text-muted-foreground">
                        {logo.description}
                      </Text>
                      <div className="text-xs space-y-1">
                        <div><strong>Usage:</strong> {logo.usage}</div>
                        <div><strong>Background:</strong> {logo.background}</div>
                        <div><strong>Size:</strong> {logo.size}</div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" onClick={() => handleDownload(logo.file)}>
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-3 w-3 mr-1" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Brand Graphics */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Brand Graphics (Grafismos)</CardTitle>
              <CardDescription className="font-body">
                Decorative graphics and patterns for visual enhancement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {brandGraphics.map((graphic) => (
                  <div key={graphic.name} className="border rounded-lg p-4 space-y-3">
                    <div className="h-24 bg-gray-50 rounded-lg overflow-hidden relative">
                      <img
                        src={`/branding-design-tokens/${graphic.file}`}
                        alt={graphic.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Text variant="small" className="font-medium">{graphic.name}</Text>
                        <Badge variant="secondary">{graphic.format}</Badge>
                      </div>
                      <Text variant="caption" className="text-muted-foreground">
                        {graphic.description}
                      </Text>
                      <div className="text-xs">
                        <div><strong>Usage:</strong> {graphic.usage}</div>
                        <div><strong>Size:</strong> {graphic.dimensions}</div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full" onClick={() => handleDownload(graphic.file)}>
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Mascot Assets */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Mascot Assets</CardTitle>
              <CardDescription className="font-body">
                Sindarian mascot collection with different poses for various interaction contexts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mascotAssets.map((mascot) => (
                  <div key={mascot.name} className="border rounded-lg p-4 space-y-3">
                    <div className="h-32 bg-gradient-to-br from-lerian-yellow/10 to-lerian-green/10 rounded-lg flex items-center justify-center">
                      <img
                        src={`/branding-design-tokens/${mascot.file}`}
                        alt={mascot.name}
                        width={100}
                        height={100}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Heading level={4}>{mascot.name}</Heading>
                        <Badge variant="outline">{mascot.format}</Badge>
                      </div>
                      <Text variant="small" className="text-muted-foreground">
                        {mascot.description}
                      </Text>
                      <div className="text-xs space-y-1">
                        <div><strong>Usage:</strong> {mascot.usage}</div>
                        <div><strong>Personality:</strong> {mascot.personality}</div>
                        <div><strong>Dimensions:</strong> {mascot.dimensions}</div>
                      </div>
                      <div className="pt-2">
                        <Button size="sm" variant="outline" className="w-full" onClick={() => handleDownload(mascot.file)}>
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Color Palette */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Color Palette</CardTitle>
              <CardDescription className="font-body">
                Official Lerian color palette with hex codes and usage guidelines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {colorPalette.map((color) => (
                  <div key={color.name} className="space-y-3">
                    <div
                      className="h-20 rounded-lg border cursor-pointer hover:scale-105 transition-transform"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyColor(color.hex)}
                    />
                    <div className="space-y-1">
                      <Text variant="small" className="font-medium">{color.name}</Text>
                      <div className="flex items-center gap-2">
                        <Text variant="caption" className="font-mono">{color.hex}</Text>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-auto p-1"
                          onClick={() => copyColor(color.hex)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <Text variant="caption" className="text-muted-foreground">
                        {color.usage}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Usage Guidelines</CardTitle>
              <CardDescription className="font-body">
                Best practices for implementing Lerian brand assets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {usageGuidelines.map((guideline) => {
                  const Icon = guideline.icon
                  return (
                    <div key={guideline.category} className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-lerian-yellow" />
                        <Heading level={4}>{guideline.category}</Heading>
                      </div>
                      <ul className="space-y-2">
                        {guideline.rules.map((rule, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <span className="w-1 h-1 bg-lerian-yellow rounded-full mt-2 flex-shrink-0" />
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Download All Section */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Download Complete Brand Kit</CardTitle>
              <CardDescription className="font-body">
                Get all Lerian brand assets in a single download
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-6 bg-gradient-to-r from-lerian-yellow/10 to-lerian-green/10 rounded-lg">
                <div>
                  <Text className="font-medium mb-1">Complete Brand Asset Package</Text>
                  <Text variant="small" className="text-muted-foreground">
                    Includes all logos, graphics, color swatches, and usage guidelines
                  </Text>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleDownloadAll}>
                    <Download className="h-4 w-4 mr-2" />
                    Download All Assets
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/brand/guidelines">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Brand Guidelines
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { CheckCircle, XCircle, Info, Download, ExternalLink, Shield, Palette, Type, Layout, Users } from "lucide-react"
import Link from "next/link"

const brandValues = [
  {
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to create better financial solutions.",
    icon: Shield
  },
  {
    title: "Accessibility",
    description: "Our design ensures everyone can access and use Lerian's financial tools effectively.",
    icon: Users
  },
  {
    title: "Transparency",
    description: "We believe in clear, honest communication and transparent financial operations.",
    icon: Info
  },
  {
    title: "Reliability",
    description: "Our systems and design provide consistent, dependable experiences users can trust.",
    icon: CheckCircle
  }
]

const logoGuidelines = [
  {
    rule: "Maintain minimum clear space equal to the height of the 'L'",
    type: "do",
    description: "This ensures the logo has breathing room and maintains visual impact."
  },
  {
    rule: "Never stretch, skew, or modify the logo proportions", 
    type: "dont",
    description: "Alterations compromise brand recognition and professional appearance."
  },
  {
    rule: "Use only approved color variations",
    type: "do", 
    description: "Stick to primary logo and negative versions for consistency."
  },
  {
    rule: "Don't place logo on busy backgrounds without proper contrast",
    type: "dont",
    description: "Low contrast reduces legibility and brand impact."
  }
]

const colorGuidelines = [
  {
    rule: "Yellow is the primary brand color - use prominently in CTAs",
    type: "do",
    description: "Yellow represents energy, optimism, and forward momentum."
  },
  {
    rule: "Use green for positive states and success messages",
    type: "do",
    description: "Green creates positive associations with growth and achievement."
  },
  {
    rule: "Never use more than 3 brand colors in a single design",
    type: "dont", 
    description: "Too many colors create visual chaos and dilute brand impact."
  },
  {
    rule: "Don't modify or create custom color variations",
    type: "dont",
    description: "Off-brand colors confuse users and weaken brand recognition."
  }
]

const typographyGuidelines = [
  {
    rule: "Use IBM Plex Serif for all headings and titles",
    type: "do",
    description: "Creates sophisticated, professional hierarchy in content."
  },
  {
    rule: "Use Inter for body text and UI elements", 
    type: "do",
    description: "Ensures excellent readability across all devices and sizes."
  },
  {
    rule: "Don't use more than 2 font families in any design",
    type: "dont",
    description: "Additional fonts create inconsistency and reduce readability."
  },
  {
    rule: "Never use decorative or script fonts for interface text",
    type: "dont",
    description: "Decorative fonts compromise accessibility and professionalism."
  }
]

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-lerian-blue text-white font-medium">
            Brand Guidelines
          </Badge>
          <Heading level={1} className="mb-4">
            Lerian Brand Guidelines
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Comprehensive guidelines for implementing Lerian's brand identity 
            consistently across all Midaz plugin development and partner integrations.
          </Text>
        </div>

        <div className="space-y-12">
          {/* Brand Values */}
          <section>
            <div className="text-center mb-8">
              <Heading level={2} className="mb-4">Brand Values</Heading>
              <Text variant="lead" className="max-w-2xl mx-auto text-muted-foreground">
                Our core values guide every design decision and user interaction.
              </Text>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandValues.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-lerian-yellow/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-lerian-yellow" />
                      </div>
                      <CardTitle className="font-heading">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Text variant="small" className="text-muted-foreground">
                        {value.description}
                      </Text>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Logo Guidelines */}
          <section>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Layout className="h-5 w-5 text-lerian-blue" />
                  <CardTitle className="font-heading">Logo Usage Guidelines</CardTitle>
                </div>
                <CardDescription>
                  Proper implementation and usage of Lerian logo assets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {logoGuidelines.map((guideline, index) => (
                    <div key={index} className="flex gap-3">
                      {guideline.type === 'do' ? (
                        <CheckCircle className="h-5 w-5 text-lerian-green mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-lerian-red mt-0.5 flex-shrink-0" />
                      )}
                      <div className="space-y-1">
                        <Text variant="small" className="font-medium">
                          {guideline.rule}
                        </Text>
                        <Text variant="caption" className="text-muted-foreground">
                          {guideline.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Color Guidelines */}
          <section>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="h-5 w-5 text-lerian-blue" />
                  <CardTitle className="font-heading">Color Usage Guidelines</CardTitle>
                </div>
                <CardDescription>
                  Strategic application of Lerian's brand color palette.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {colorGuidelines.map((guideline, index) => (
                    <div key={index} className="flex gap-3">
                      {guideline.type === 'do' ? (
                        <CheckCircle className="h-5 w-5 text-lerian-green mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-lerian-red mt-0.5 flex-shrink-0" />
                      )}
                      <div className="space-y-1">
                        <Text variant="small" className="font-medium">
                          {guideline.rule}
                        </Text>
                        <Text variant="caption" className="text-muted-foreground">
                          {guideline.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Typography Guidelines */}
          <section>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Type className="h-5 w-5 text-lerian-blue" />
                  <CardTitle className="font-heading">Typography Guidelines</CardTitle>
                </div>
                <CardDescription>
                  Font selection and hierarchy for consistent communication.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {typographyGuidelines.map((guideline, index) => (
                    <div key={index} className="flex gap-3">
                      {guideline.type === 'do' ? (
                        <CheckCircle className="h-5 w-5 text-lerian-green mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-lerian-red mt-0.5 flex-shrink-0" />
                      )}
                      <div className="space-y-1">
                        <Text variant="small" className="font-medium">
                          {guideline.rule}
                        </Text>
                        <Text variant="caption" className="text-muted-foreground">
                          {guideline.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Guidelines */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Implementation for Midaz Plugins</CardTitle>
                <CardDescription>
                  Specific guidelines for partner developers building Midaz integrations.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Heading level={4} className="mb-4 text-lerian-green">Required Elements</Heading>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-lerian-green mt-0.5 flex-shrink-0" />
                        <Text variant="small">Use Lerian primary logo in plugin headers</Text>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-lerian-green mt-0.5 flex-shrink-0" />
                        <Text variant="small">Implement Lerian color palette for UI elements</Text>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-lerian-green mt-0.5 flex-shrink-0" />
                        <Text variant="small">Use designated typography for all text content</Text>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-lerian-green mt-0.5 flex-shrink-0" />
                        <Text variant="small">Include proper attribution and version info</Text>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <Heading level={4} className="mb-4 text-lerian-red">Prohibited Actions</Heading>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-lerian-red mt-0.5 flex-shrink-0" />
                        <Text variant="small">Modifying or recreating Lerian logo designs</Text>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-lerian-red mt-0.5 flex-shrink-0" />
                        <Text variant="small">Using non-approved color variations</Text>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-lerian-red mt-0.5 flex-shrink-0" />
                        <Text variant="small">Combining Lerian branding with competitor logos</Text>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-lerian-red mt-0.5 flex-shrink-0" />
                        <Text variant="small">Creating derivative works without approval</Text>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Resources */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Additional Resources</CardTitle>
                <CardDescription>
                  Download assets and access additional brand materials.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button asChild className="w-full">
                    <Link href="/brand/assets">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brand Assets
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/components">
                      <Layout className="h-4 w-4 mr-2" />
                      View Component Library
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <Text variant="small" className="text-muted-foreground">
                    <strong>Questions about brand usage?</strong> Contact the Lerian brand team 
                    for approval on custom implementations or special use cases.
                  </Text>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
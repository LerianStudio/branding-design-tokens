'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Palette, Type, Move, Square, Zap } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Heading, Text } from "@/components/ui/typography"
import { 
  tokens,
  getColor, 
  getSpacing, 
  getTextStyle
} from "@/tokens"

// Simple styled text component
function StyledText({ style, children, ...props }: { style: string; children: React.ReactNode; [key: string]: any }) {
  const textStyle = getTextStyle(style as any)
  return (
    <span style={textStyle} {...props}>
      {children}
    </span>
  )
}

// Simple financial amount component
function FinancialAmount({ amount, colorScheme = 'auto', showSign = false }: { 
  amount: number; 
  colorScheme?: 'auto' | 'positive' | 'negative' | 'neutral'; 
  showSign?: boolean 
}) {
  const textStyle = getTextStyle('financial-amount' as any)
  let color = ''
  
  if (colorScheme === 'auto') {
    color = amount >= 0 ? tokens.colors.financial.credit.value : tokens.colors.financial.debit.value
  } else if (colorScheme === 'positive') {
    color = tokens.colors.financial.credit.value
  } else if (colorScheme === 'negative') {
    color = tokens.colors.financial.debit.value
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    signDisplay: showSign ? 'always' : 'auto'
  })

  return (
    <span style={{ ...textStyle, color }}>
      {formatter.format(amount)}
    </span>
  )
}

function ColorPalette() {
  const colors = tokens.colors
  
  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
  }

  return (
    <div className="space-y-6">
      <div>
        <Heading level={3} className="mb-4">Primary Brand Colors</Heading>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(colors.lerian).map(([name, token]) => (
            <Card key={name} className="overflow-hidden">
              <div 
                className="h-20 w-full cursor-pointer"
                style={{ backgroundColor: token.value }}
                onClick={() => copyToClipboard(token.value)}
              />
              <CardContent className="p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium capitalize">{name}</p>
                    <p className="text-sm text-gray-500">{token.value}</p>
                  </div>
                  <Copy className="h-4 w-4 text-gray-400 cursor-pointer" onClick={() => copyToClipboard(token.value)} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Gray Scale</h3>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {Object.entries(colors.gray).map(([shade, token]) => (
            <Card key={shade} className="overflow-hidden">
              <div 
                className="h-16 w-full cursor-pointer"
                style={{ backgroundColor: token.value }}
                onClick={() => copyToClipboard(token.value)}
              />
              <CardContent className="p-2 text-center">
                <p className="text-xs font-medium">{shade}</p>
                <p className="text-xs text-gray-500">{token.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Financial Context</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(colors.financial).map(([name, value]) => {
            if (name === 'account') return null // Skip nested object for now
            const token = value as { value: string; description: string }
            return (
              <Card key={name} className="overflow-hidden">
                <div 
                  className="h-20 w-full cursor-pointer"
                  style={{ backgroundColor: token.value }}
                  onClick={() => copyToClipboard(token.value)}
                />
                <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium capitalize">{name}</p>
                      <p className="text-sm text-gray-500">{token.value}</p>
                    </div>
                    <Copy className="h-4 w-4 text-gray-400 cursor-pointer" onClick={() => copyToClipboard(token.value)} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function TypographyShowcase() {
  const typography = tokens.typography
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Font Families</h3>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div style={{ fontFamily: typography.fontFamily.heading.value }}>
                <h4 className="text-xl font-bold mb-2">IBM Plex Serif - Heading Font</h4>
                <p className="text-gray-600">Used for headings, titles, and display text</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div style={{ fontFamily: typography.fontFamily.body.value }}>
                <h4 className="text-xl font-bold mb-2">Inter - Body Font</h4>
                <p className="text-gray-600">Used for body text, UI elements, and general content</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div style={{ fontFamily: typography.fontFamily.mono.value }}>
                <h4 className="text-xl font-bold mb-2">JetBrains Mono - Monospace Font</h4>
                <p className="text-gray-600">Used for account numbers, transaction IDs, and code</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Text Styles</h3>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <StyledText style="heading-1">Heading 1 - Main page titles</StyledText>
              <StyledText style="heading-2">Heading 2 - Section headings</StyledText>
              <StyledText style="heading-3">Heading 3 - Subsection headings</StyledText>
              <StyledText style="heading-4">Heading 4 - Card titles</StyledText>
              <StyledText style="body-large">Body Large - Lead paragraphs and emphasis</StyledText>
              <StyledText style="body-base">Body Base - Standard body text for most content</StyledText>
              <StyledText style="body-small">Body Small - Secondary information and descriptions</StyledText>
              <StyledText style="caption">Caption - Helper text and fine print</StyledText>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Financial Text Styles</h3>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Financial Amount Style:</p>
                <FinancialAmount amount={1234.56} />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Account Number Style:</p>
                <StyledText style="account-number">4532-1234-5678-9012</StyledText>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Different Amount Types:</p>
                <div className="space-y-2">
                  <FinancialAmount amount={1500.00} colorScheme="positive" showSign />
                  <FinancialAmount amount={-450.00} colorScheme="negative" showSign />
                  <FinancialAmount amount={2300.50} colorScheme="neutral" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function SpacingShowcase() {
  const spacing = tokens.spacing
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Base Spacing Scale</h3>
        <div className="space-y-4">
          {Object.entries(spacing.base).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{key}</Badge>
                  <div 
                    className="bg-blue-200 border-2 border-blue-400"
                    style={{ 
                      width: token.value, 
                      height: '20px',
                      minWidth: '4px' 
                    }}
                  />
                  <span className="text-sm font-mono">{token.value}</span>
                  <span className="text-sm text-gray-600">{token.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Semantic Spacing</h3>
        <Tabs defaultValue="component" className="w-full">
          <TabsList>
            <TabsTrigger value="component">Component</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
          </TabsList>
          <TabsContent value="component" className="space-y-2">
            {Object.entries(spacing.semantic.component).map(([key, value]) => (
              <Card key={key}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{key}</Badge>
                    <div className="bg-green-200 border-2 border-green-400" style={{ width: value, height: '20px' }} />
                    <span className="text-sm font-mono">{value}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="layout" className="space-y-2">
            {Object.entries(spacing.semantic.layout).map(([key, value]) => (
              <Card key={key}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{key}</Badge>
                    <div className="bg-purple-200 border-2 border-purple-400" style={{ width: value, height: '20px' }} />
                    <span className="text-sm font-mono">{value}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="financial" className="space-y-2">
            {Object.entries(spacing.semantic.financial).map(([key, value]) => (
              <Card key={key}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{key}</Badge>
                    <div className="bg-yellow-200 border-2 border-yellow-400" style={{ width: value, height: '20px' }} />
                    <span className="text-sm font-mono">{value}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Border Radius</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(spacing.borderRadius).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="p-4 text-center">
                <div 
                  className="w-16 h-16 bg-blue-500 mx-auto mb-2"
                  style={{ borderRadius: token.value }}
                />
                <Badge variant="outline">{key}</Badge>
                <p className="text-sm font-mono mt-1">{token.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShadowShowcase() {
  const shadows = tokens.shadows
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Base Shadows</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(shadows.base).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="p-6 text-center">
                <div 
                  className="w-16 h-16 bg-white border border-gray-200 mx-auto mb-4"
                  style={{ boxShadow: token.value }}
                />
                <Badge variant="outline">{key}</Badge>
                <p className="text-xs text-gray-600 mt-2">{token.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Colored Shadows</h3>
        <div className="space-y-4">
          {Object.entries(shadows.colored).map(([colorName, colorShadows]) => (
            <Card key={colorName}>
              <CardHeader>
                <CardTitle className="text-base capitalize">{colorName.replace('-', ' ')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  {Object.entries(colorShadows).filter(([key]) => key !== 'description').map(([intensity, shadowValue]) => (
                    <div key={intensity} className="text-center">
                      <div 
                        className="w-16 h-16 bg-white border border-gray-200 mb-2"
                        style={{ boxShadow: shadowValue }}
                      />
                      <Badge variant="outline" className="text-xs">{intensity}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function AnimationShowcase() {
  const animations = tokens.animations
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Timing Scale</h3>
        <div className="space-y-2">
          {Object.entries(animations.timing).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{key}</Badge>
                    <span className="text-sm font-mono">{token.value}</span>
                    <span className="text-sm text-gray-600">{token.description}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    style={{ 
                      transition: `all ${token.value} ease-in-out` 
                    }}
                    className="hover:scale-105 hover:bg-lerian-yellow hover:text-lerian-black"
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget
                      btn.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget
                      btn.style.transform = 'scale(1)'
                    }}
                  >
                    Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Easing Functions</h3>
        <div className="space-y-2">
          {Object.entries(animations.easing).map(([key, token]) => (
            <Card key={key}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{key}</Badge>
                    <span className="text-sm font-mono">{token.value}</span>
                    <span className="text-sm text-gray-600">{token.description}</span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    style={{ 
                      transition: `transform 300ms ${token.value}` 
                    }}
                    className="hover:scale-110 hover:bg-lerian-blue hover:text-white"
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget
                      btn.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget
                      btn.style.transform = 'scale(1)'
                    }}
                  >
                    Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Financial Animations</h3>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Balance Change Animations</CardTitle>
              <CardDescription>Hover over amounts to see animations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Positive Change</p>
                  <div 
                    className="cursor-pointer hover:animate-pulse"
                    style={{ 
                      animation: 'lerian-balance-increment 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)' 
                    }}
                  >
                    <FinancialAmount amount={1500.00} colorScheme="positive" showSign />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Negative Change</p>
                  <div 
                    className="cursor-pointer hover:animate-pulse"
                    style={{ 
                      animation: 'lerian-balance-decrement 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)' 
                    }}
                  >
                    <FinancialAmount amount={-750.00} colorScheme="negative" showSign />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function DesignTokensPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium">
              Design System v1.0.0
            </Badge>
            <Heading level={1} className="mb-4">
              Lerian Design Tokens
            </Heading>
            <Text variant="lead" className="mb-6 max-w-2xl mx-auto">
              Atomic design values for consistent Midaz plugin development. 
              These tokens provide the foundation for building financial applications with the Lerian Design System.
            </Text>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Colors
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Type className="h-4 w-4" />
                Typography
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Move className="h-4 w-4" />
                Spacing
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Square className="h-4 w-4" />
                Shadows
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Animations
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="colors" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="spacing">Spacing</TabsTrigger>
              <TabsTrigger value="shadows">Shadows</TabsTrigger>
              <TabsTrigger value="animations">Animations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="colors" className="mt-6">
              <ColorPalette />
            </TabsContent>
            
            <TabsContent value="typography" className="mt-6">
              <TypographyShowcase />
            </TabsContent>
            
            <TabsContent value="spacing" className="mt-6">
              <SpacingShowcase />
            </TabsContent>
            
            <TabsContent value="shadows" className="mt-6">
              <ShadowShowcase />
            </TabsContent>
            
            <TabsContent value="animations" className="mt-6">
              <AnimationShowcase />
            </TabsContent>
          </Tabs>

          <div className="mt-12 p-6 bg-white rounded-lg border">
            <Heading level={2} className="mb-4">Usage in React</Heading>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Import tokens:</h3>
                <code className="block bg-gray-100 p-3 rounded font-mono">
                  {`import { tokens, useColors, useTypography } from '@/tokens/react'`}
                </code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Use in components:</h3>
                <code className="block bg-gray-100 p-3 rounded font-mono">
                  {`const { primary, getColor } = useColors()
const primaryYellow = getColor('lerian.yellow') // '#F4C430'`}
                </code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Styled components:</h3>
                <code className="block bg-gray-100 p-3 rounded font-mono">
                  {`<StyledText style="heading-1" color="lerian.yellow">
  Title Text
</StyledText>

<FinancialAmount amount={1500.00} colorScheme="positive" />`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
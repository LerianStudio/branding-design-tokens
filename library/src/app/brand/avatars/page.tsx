"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Copy, Download, User, Building } from "lucide-react"

const avatarSizes = [
  { name: "Small", size: "h-8 w-8", pixels: "32px", use: "Navigation, compact lists" },
  { name: "Medium", size: "h-10 w-10", pixels: "40px", use: "Comments, notifications" },
  { name: "Large", size: "h-12 w-12", pixels: "48px", use: "User profiles, cards" },
  { name: "Extra Large", size: "h-16 w-16", pixels: "64px", use: "Profile headers, settings" },
]

const avatarVariants = [
  {
    title: "User Initials",
    description: "Standard user avatars with initials fallback",
    examples: [
      { name: "John Doe", initials: "JD", color: "bg-lerian-yellow text-lerian-black", icon: false, business: false },
      { name: "Sarah Wilson", initials: "SW", color: "bg-lerian-green text-lerian-black", icon: false, business: false },
      { name: "Mike Johnson", initials: "MJ", color: "bg-lerian-blue text-lerian-black", icon: false, business: false },
      { name: "Emily Brown", initials: "EB", color: "bg-lerian-red text-white", icon: false, business: false },
    ]
  },
  {
    title: "System Avatars",
    description: "Special avatars for system users and bots",
    examples: [
      { name: "Lerian Bot", initials: "LB", color: "bg-lerian-black text-lerian-yellow", icon: true, business: false },
      { name: "Support", initials: "SU", color: "bg-lerian-gray text-lerian-black", icon: true, business: false },
      { name: "Admin", initials: "AD", color: "bg-lerian-red text-white", icon: true, business: false },
      { name: "System", initials: "SY", color: "bg-lerian-grayDark text-white", icon: true, business: false },
    ]
  },
  {
    title: "Business Accounts",
    description: "Company and organization avatars",
    examples: [
      { name: "TechCorp Ltd", initials: "TC", color: "bg-lerian-blue text-white", icon: false, business: true },
      { name: "StartupXYZ", initials: "SX", color: "bg-lerian-green text-lerian-black", icon: false, business: true },
      { name: "Enterprise Co", initials: "EC", color: "bg-lerian-yellow text-lerian-black", icon: false, business: true },
      { name: "Global Bank", initials: "GB", color: "bg-lerian-black text-lerian-yellow", icon: false, business: true },
    ]
  }
]

const brandAssets = [
  {
    name: "Sindarian Avatar",
    file: "sindarian-avatar.png",
    description: "Official Lerian mascot for friendly interactions",
    usage: "Customer support, onboarding, help sections",
    size: "Available in multiple sizes"
  },
  {
    name: "Sindarian Celebrating",
    file: "sindarian-celebrating.png", 
    description: "Celebratory Sindarian for success states",
    usage: "Transaction completed, goal achieved, positive outcomes",
    size: "Available in multiple sizes"
  },
  {
    name: "Sindarian Happy", 
    file: "sindarian-happy.png",
    description: "Happy Sindarian for positive experiences",
    usage: "Welcome messages, positive feedback, achievements",
    size: "Available in multiple sizes"
  },
  {
    name: "Sindarian Thinking",
    file: "sindarian-thinking.png",
    description: "Thoughtful Sindarian for processing states",
    usage: "Loading states, decision points, analysis",
    size: "Available in multiple sizes"
  },
  {
    name: "Sindarian Waving",
    file: "sindarian-waving.png", 
    description: "Friendly Sindarian for greetings",
    usage: "Welcome screens, introductions, tutorials",
    size: "Available in multiple sizes"
  },
  {
    name: "Sindarian Working",
    file: "sindarian-working.png",
    description: "Industrious Sindarian for work states", 
    usage: "Processing transactions, background tasks, productivity",
    size: "Available in multiple sizes"
  },
  {
    name: "Lerian Logo Avatar",
    file: "lerian-logo.svg",
    description: "Company logo in avatar format",
    usage: "System messages, admin accounts, brand representation",
    size: "Vector format (SVG)"
  }
]

export default function AvatarsPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
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
                <BreadcrumbPage>Avatars</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium">
            Brand Assets
          </Badge>
          <Heading level={1} className="mb-4">
            Avatar Usage Guide
          </Heading>
          <Text variant="lead" className="max-w-2xl">
            Comprehensive guide for using avatars in Lerian applications with 
            brand consistency and accessibility guidelines.
          </Text>
        </div>

        {/* Sindarian Hero Showcase */}
        <Card className="mb-8 bg-gradient-to-br from-lerian-yellow/5 via-transparent to-lerian-yellow/10 border-lerian-yellow/20">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-2xl">Meet the Sindarian Family</CardTitle>
            <CardDescription className="font-body text-lg">
              Six unique expressions for every user experience moment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-8">
              {brandAssets.filter(asset => asset.file.includes('sindarian')).map((asset, index) => (
                <div key={asset.name} className="text-center space-y-3 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-lerian-yellow/20 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <Avatar className="h-24 w-24 mx-auto relative z-10 ring-4 ring-white shadow-lg group-hover:scale-105 transition-transform">
                      <AvatarImage src={`/branding-design-tokens/${asset.file}`} alt={asset.name} />
                      <AvatarFallback className="bg-lerian-yellow text-lerian-black text-lg">
                        S{index + 1}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-1">
                    <Text variant="small" className="font-semibold text-center">
                      {asset.name.replace('Sindarian ', '')}
                    </Text>
                    <Text variant="caption" className="text-muted-foreground block text-center leading-tight">
                      {asset.description.replace('Sindarian for ', '').replace('Sindarian ', '')}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <Text variant="caption" className="text-muted-foreground">
                Click on any avatar below to download or see usage examples
              </Text>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Avatar Sizes */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Avatar Sizes</CardTitle>
              <CardDescription className="font-body">
                Standard avatar sizes with recommended use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {avatarSizes.map((size) => (
                  <div key={size.name} className="text-center space-y-4">
                    <Avatar className={size.size + " mx-auto"}>
                      <AvatarFallback className="bg-lerian-yellow text-lerian-black font-medium">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Text variant="small" className="font-medium">{size.name}</Text>
                      <Text variant="caption" className="text-muted-foreground block">
                        {size.pixels} • {size.use}
                      </Text>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2"
                        onClick={() => copyToClipboard(`<Avatar className="${size.size}">...</Avatar>`)}
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy Code
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Avatar Variants */}
          {avatarVariants.map((variant) => (
            <Card key={variant.title}>
              <CardHeader>
                <CardTitle className="font-heading">{variant.title}</CardTitle>
                <CardDescription className="font-body">
                  {variant.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {variant.examples.map((example) => (
                    <div key={example.name} className="text-center space-y-3">
                      <Avatar className="h-12 w-12 mx-auto">
                        <AvatarFallback className={example.color + " font-medium"}>
                          {example.icon && <User className="h-4 w-4" />}
                          {example.business && <Building className="h-4 w-4" />}
                          {!example.icon && !example.business && example.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <Text variant="small" className="font-medium">
                          {example.name}
                        </Text>
                        <Text variant="caption" className="text-muted-foreground block">
                          {example.initials}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Brand Avatar Assets */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Brand Avatar Assets</CardTitle>
              <CardDescription className="font-body">
                Official Lerian brand assets for avatar usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {brandAssets.map((asset) => (
                  <div key={asset.name} className="flex items-start gap-4 p-6 border rounded-lg">
                    <div className="flex-shrink-0">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={`/branding-design-tokens/${asset.file}`} alt={asset.name} />
                        <AvatarFallback className="bg-lerian-yellow text-lerian-black">
                          L
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1 space-y-2">
                      <Heading level={4}>{asset.name}</Heading>
                      <Text variant="small" className="text-muted-foreground">
                        {asset.description}
                      </Text>
                      <div className="space-y-1">
                        <Text variant="caption" className="font-medium">Usage:</Text>
                        <Text variant="caption">{asset.usage}</Text>
                      </div>
                      <div className="space-y-1">
                        <Text variant="caption" className="font-medium">Size:</Text>
                        <Text variant="caption">{asset.size}</Text>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2" onClick={() => {
                        const link = document.createElement('a')
                        link.href = `/branding-design-tokens/${asset.file}`
                        link.download = asset.file
                        link.click()
                      }}>
                        <Download className="h-3 w-3 mr-1" />
                        Download Asset
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sindarian Expression Showcase */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Sindarian Expression Gallery</CardTitle>
              <CardDescription className="font-body">
                Complete collection of Sindarian mascot expressions for different contexts and user experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {brandAssets.filter(asset => asset.file.includes('sindarian')).map((asset) => (
                  <div key={asset.name} className="text-center space-y-3">
                    <div className="relative group">
                      <Avatar className="h-20 w-20 mx-auto ring-2 ring-lerian-yellow/20 group-hover:ring-lerian-yellow/60 transition-all">
                        <AvatarImage src={`/branding-design-tokens/${asset.file}`} alt={asset.name} />
                        <AvatarFallback className="bg-lerian-yellow text-lerian-black">
                          S
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-lerian-yellow/0 group-hover:bg-lerian-yellow/10 rounded-full transition-colors"></div>
                    </div>
                    <div className="space-y-1">
                      <Text variant="small" className="font-medium">{asset.name}</Text>
                      <Text variant="caption" className="text-muted-foreground block text-center leading-tight">
                        {asset.description}
                      </Text>
                      <div className="pt-2">
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          {asset.usage.split(',')[0]}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => {
                        const link = document.createElement('a')
                        link.href = `/branding-design-tokens/${asset.file}`
                        link.download = asset.file
                        link.click()
                      }}
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-lerian-yellow/10 rounded-lg border border-lerian-yellow/20">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/branding-design-tokens/sindarian-happy.png" alt="Sindarian Happy" />
                      <AvatarFallback className="bg-lerian-yellow text-lerian-black text-xs">S</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-2">
                    <Text variant="small" className="font-medium">Usage Guidelines</Text>
                    <Text variant="caption" className="text-muted-foreground">
                      Each Sindarian expression is designed for specific user experience contexts. Use celebrating for success states, 
                      thinking for loading/processing, working for background tasks, waving for greetings, and happy for positive interactions. 
                      The base avatar works well for general support contexts.
                    </Text>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Implementation Examples</CardTitle>
              <CardDescription className="font-body">
                Code examples for common avatar implementations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Heading level={4}>Basic User Avatar</Heading>
                <div className="p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-lerian-yellow text-lerian-black font-medium">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Text variant="small" className="font-medium">John Doe</Text>
                      <Text variant="caption" className="text-muted-foreground">john@example.com</Text>
                    </div>
                  </div>
                  <pre className="text-xs overflow-x-auto">
{`<Avatar>
  <AvatarFallback className="bg-lerian-yellow text-lerian-black font-medium">
    JD
  </AvatarFallback>
</Avatar>`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <Heading level={4}>Avatar with Image Fallback</Heading>
                <div className="p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src="/branding-design-tokens/sindarian-avatar.png" alt="Sindarian" />
                      <AvatarFallback className="bg-lerian-yellow text-lerian-black font-medium">
                        SI
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Text variant="small" className="font-medium">Sindarian Assistant</Text>
                      <Text variant="caption" className="text-muted-foreground">Lerian Support Bot</Text>
                    </div>
                  </div>
                  <pre className="text-xs overflow-x-auto">
{`<Avatar>
  <AvatarImage src="/sindarian-avatar.png" alt="Sindarian" />
  <AvatarFallback className="bg-lerian-yellow text-lerian-black font-medium">
    SI
  </AvatarFallback>
</Avatar>`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <Heading level={4}>Business Account Avatar</Heading>
                <div className="p-4 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-lerian-black text-lerian-yellow font-medium">
                        <Building className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Text variant="small" className="font-medium">Enterprise Corp</Text>
                      <Text variant="caption" className="text-muted-foreground">Business Account</Text>
                    </div>
                  </div>
                  <pre className="text-xs overflow-x-auto">
{`<Avatar>
  <AvatarFallback className="bg-lerian-black text-lerian-yellow font-medium">
    <Building className="h-4 w-4" />
  </AvatarFallback>
</Avatar>`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Accessibility Guidelines</CardTitle>
              <CardDescription className="font-body">
                Best practices for accessible avatar implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Heading level={4} className="text-lerian-green">Do</Heading>
                  <ul className="space-y-2 text-sm">
                    <li>• Always provide meaningful alt text for avatar images</li>
                    <li>• Ensure sufficient color contrast (WCAG AA compliant)</li>
                    <li>• Use semantic HTML with proper ARIA labels</li>
                    <li>• Provide fallbacks for when images fail to load</li>
                    <li>• Make avatars keyboard navigable when clickable</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <Heading level={4} className="text-lerian-red">Don't</Heading>
                  <ul className="space-y-2 text-sm">
                    <li>• Use decorative images without alt text</li>
                    <li>• Rely solely on color to convey information</li>
                    <li>• Make avatars too small to be easily identifiable</li>
                    <li>• Use low contrast color combinations</li>
                    <li>• Forget to test with screen readers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
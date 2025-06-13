import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { 
  ArrowRight, 
  Shield, 
  Code, 
  Zap, 
  Users, 
  Heart, 
  Palette,
  BarChart3,
  CreditCard,
  Layout,
  Mail,
  FileText
} from "lucide-react"

const blockCategories = [
  {
    title: "Authentication",
    description: "Complete authentication flows including login, registration, and password reset forms",
    icon: Shield,
    href: "/blocks/auth",
    blocks: ["Login Form", "Register Form", "Password Reset", "Two-Factor Auth"],
    status: "Ready",
    preview: "/api/og/auth"
  },
  {
    title: "Dashboard",
    description: "Dashboard layouts with navigation, statistics, and data visualization components",
    icon: BarChart3,
    href: "/blocks/dashboard",
    blocks: ["Analytics Dashboard", "User Management", "Settings Panel", "Quick Actions"],
    status: "Ready",
    preview: "/api/og/dashboard"
  },
  {
    title: "Marketing",
    description: "Landing pages, hero sections, and marketing components for product websites",
    icon: Zap,
    href: "/blocks/marketing",
    blocks: ["Hero Section", "Feature Grid", "Testimonials", "Pricing Tables", "Newsletter"],
    status: "Ready",
    preview: "/api/og/marketing"
  },
  {
    title: "Forms",
    description: "Comprehensive form examples with validation, file uploads, and multi-step flows",
    icon: FileText,
    href: "/blocks/forms",
    blocks: ["Contact Form", "Payment Form", "Profile Form", "Survey Form"],
    status: "Ready",
    preview: "/api/og/forms"
  },
  {
    title: "Data Tables",
    description: "Advanced data tables with sorting, filtering, pagination, and bulk actions",
    icon: Users,
    href: "/blocks/tables",
    blocks: ["User Table", "Transaction Table", "Product Table", "Analytics Table"],
    status: "Ready",
    preview: "/api/og/tables"
  },
  {
    title: "Charts & Analytics", 
    description: "Beautiful data visualizations using Lerian's color palette and design principles",
    icon: Palette,
    href: "/blocks/charts",
    blocks: ["Line Charts", "Bar Charts", "Pie Charts", "Doughnut Charts", "KPI Cards"],
    status: "Ready",
    preview: "/api/og/charts"
  },
  {
    title: "E-commerce",
    description: "Banking product catalog and shopping experience components",
    icon: CreditCard,
    href: "/blocks/ecommerce",
    blocks: ["Product Grid", "Shopping Cart", "Checkout", "Order Tracking"],
    status: "Ready", 
    preview: "/api/og/ecommerce"
  },
  {
    title: "Communication",
    description: "Chat interfaces, messaging, notifications, and communication components",
    icon: Mail,
    href: "/blocks/communication",
    blocks: ["Chat Interface", "Message Center", "Notifications", "Comment System"],
    status: "Ready",
    preview: "/api/og/communication"
  }
]

const features = [
  {
    title: "Production Ready",
    description: "All blocks are tested in real applications and ready for production use.",
    icon: Code,
  },
  {
    title: "Fully Responsive",
    description: "Every component works perfectly on desktop, tablet, and mobile devices.",
    icon: Layout,
  },
  {
    title: "Accessible by Default",
    description: "Built with WCAG AA compliance and proper keyboard navigation support.",
    icon: Heart,
  },
  {
    title: "Easy to Customize",
    description: "Clean code structure makes it simple to adapt blocks to your specific needs.",
    icon: Zap,
  }
]

export default function BlocksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16 space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Block Library
          </Badge>
          
          <Heading level={1} className="mb-4">
            Component Blocks
          </Heading>
          
          <Text variant="lead" className="max-w-3xl mx-auto">
            Production-ready component blocks built with Lerian's design system for Midaz plugin development. 
            Copy, paste, and customize these examples for consistent partner integrations.
          </Text>
        </div>

        {/* Block Categories Grid */}
        <section className="space-y-8">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Browse by Category
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Each category contains multiple block examples with complete code, 
              usage guidelines, and implementation notes.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blockCategories.map((category) => {
              const Icon = category.icon
              const isReady = category.status === "Ready"
              
              return (
                <Card 
                  key={category.title} 
                  className={`group hover:shadow-lg transition-all ${isReady ? 'cursor-pointer' : 'opacity-75'}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="h-8 w-8 text-primary" />
                      <Badge 
                        variant={isReady ? "default" : "secondary"}
                        className={isReady ? "bg-lerian-green text-lerian-black" : ""}
                      >
                        {category.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className="font-heading">
                      {category.title}
                    </CardTitle>
                    
                    <CardDescription className="font-body">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Text variant="small" className="font-medium text-muted-foreground">
                        Includes:
                      </Text>
                      <div className="flex flex-wrap gap-1">
                        {category.blocks.slice(0, 3).map((block, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {block}
                          </Badge>
                        ))}
                        {category.blocks.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.blocks.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild={isReady}
                      disabled={!isReady}
                    >
                      {isReady ? (
                        <Link href={category.href}>
                          View Examples
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      ) : (
                        <>
                          Coming Soon
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-8 border-t pt-16">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Why Use Lerian Blocks?
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Every block is designed with best practices in mind and follows 
              Lerian's design principles.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <Heading level={4}>
                    {feature.title}
                  </Heading>
                  <Text variant="small" className="text-muted-foreground">
                    {feature.description}
                  </Text>
                </div>
              )
            })}
          </div>
        </section>

        {/* Plugin Integration Section */}
        <section className="space-y-8 border-t pt-16">
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Plugin Integration Guide
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Follow these steps to integrate Lerian components into your Midaz plugin.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <span className="text-primary-foreground font-heading font-semibold">1</span>
                </div>
                <CardTitle className="font-heading">Setup Design System</CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="small" className="text-muted-foreground">
                  Import the Lerian design tokens and configure shadcn/ui components 
                  with our brand-specific styling and color palette.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <span className="text-primary-foreground font-heading font-semibold">2</span>
                </div>
                <CardTitle className="font-heading">Copy Components</CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="small" className="text-muted-foreground">
                  Browse our component blocks, copy the implementation code, 
                  and integrate into your Midaz plugin architecture.
                </Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <span className="text-primary-foreground font-heading font-semibold">3</span>
                </div>
                <CardTitle className="font-heading">Plugin Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <Text variant="small" className="text-muted-foreground">
                  Adapt components for your plugin's specific requirements while maintaining 
                  brand consistency across the Midaz ecosystem.
                </Text>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 border-t pt-16">
          <Heading level={2}>
            Start Your Plugin Development
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Explore our block library to build consistent, 
            branded interfaces for your Midaz plugin integrations.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/blocks/dashboard">
                View Dashboard Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/components">
                Component Library
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
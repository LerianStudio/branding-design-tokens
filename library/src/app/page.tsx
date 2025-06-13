import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading, Text, Mission, BrandTagline } from "@/components/ui/typography";
import { Header } from "@/components/layout/header";
import { ArrowRight, Palette, Code, Users, Zap, Shield, Heart, MessageSquare, ShoppingCart } from "lucide-react";

const blocks = [
  {
    title: "Authentication",
    description: "Login, register, and password reset forms with Lerian branding",
    href: "/blocks/auth",
    badge: "Ready",
    icon: Shield,
  },
  {
    title: "Dashboard",
    description: "Complete dashboard layouts with navigation and data visualization",
    href: "/blocks/dashboard",
    badge: "Ready",
    icon: Code,
  },
  {
    title: "Marketing",
    description: "Landing pages, hero sections, and marketing components",
    href: "/blocks/marketing",
    badge: "Ready",
    icon: Zap,
  },
  {
    title: "Data Tables",
    description: "Complex data tables with sorting, filtering, and pagination",
    href: "/blocks/tables",
    badge: "Ready",
    icon: Users,
  },
  {
    title: "Forms",
    description: "Comprehensive form examples with validation and accessibility",
    href: "/blocks/forms",
    badge: "Ready",
    icon: Heart,
  },
  {
    title: "Charts",
    description: "Beautiful data visualizations using Lerian color palette",
    href: "/blocks/charts",
    badge: "Ready",
    icon: Palette,
  },
  {
    title: "Communication",
    description: "Chat interfaces, notifications, and support components",
    href: "/blocks/communication",
    badge: "Ready",
    icon: MessageSquare,
  },
  {
    title: "E-commerce",
    description: "Banking product catalog and shopping experience components",
    href: "/blocks/ecommerce",
    badge: "Ready",
    icon: ShoppingCart,
  },
];

const features = [
  {
    title: "Brand Consistency",
    description: "Every component follows Lerian's design guidelines with proper typography and colors."
  },
  {
    title: "Accessibility First",
    description: "WCAG AA compliant components with proper contrast ratios and keyboard navigation."
  },
  {
    title: "Developer Experience",
    description: "Well-documented components with TypeScript support and clear implementation examples."
  },
  {
    title: "Production Ready",
    description: "Battle-tested components used across Lerian's products and partner implementations."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container py-24 space-y-8 relative overflow-hidden">
        <div className="relative text-center space-y-6 max-w-4xl mx-auto">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-lerian-yellow/10 via-transparent to-lerian-yellow/5 rounded-3xl -m-8"></div>
          
          {/* Brand graphics */}
          <div className="absolute -top-20 -right-20 opacity-10 pointer-events-none">
            <Image 
              src="/lerian-graphic-3.png" 
              alt="" 
              width={200} 
              height={200}
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="absolute -bottom-20 -left-20 opacity-10 pointer-events-none">
            <Image 
              src="/lerian-graphic-4.png" 
              alt="" 
              width={200} 
              height={200}
              className="w-48 h-48 object-contain"
            />
          </div>
          
          <div className="relative z-10 py-8">
            <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium hover:bg-lerian-yellow/90">
              Design System v1.0.0
            </Badge>
            
            <Mission>
              Coding together to give everyone the freedom to write your own future
            </Mission>
            
            <BrandTagline>
              The official Lerian design system for Midaz plugin developers, featuring components 
              and blocks that follow our branding guidelines for consistent partner integrations.
            </BrandTagline>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90 font-medium" asChild>
                <Link href="/design-tokens">
                  Explore Design Tokens
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-lerian-black text-lerian-black hover:bg-lerian-black hover:text-white" asChild>
                <Link href="/blocks">
                  View Blocks
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-lerian-black text-lerian-black hover:bg-lerian-black hover:text-white" asChild>
                <Link href="/components">
                  View Components
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blocks Grid */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <Heading level={2} className="mb-4">
            Block Library
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Production-ready component blocks for Midaz plugin development 
            with consistent Lerian branding for partner implementations.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <Card key={block.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge 
                      variant={block.badge === "Ready" ? "default" : "secondary"}
                      className={block.badge === "Ready" ? "bg-lerian-green text-lerian-black" : ""}
                    >
                      {block.badge}
                    </Badge>
                  </div>
                  <CardTitle className="font-heading">{block.title}</CardTitle>
                  <CardDescription className="font-body">
                    {block.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                    disabled={block.badge === "Coming Soon"}
                  >
                    <Link href={block.href}>
                      View Examples
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 border-t">
        <div className="text-center mb-12">
          <Heading level={2} className="mb-4">
            Plugin Development Standards
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Designed to help Midaz partners and community developers build consistent, 
            accessible integrations that follow Lerian's design principles.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-l-4 border-l-lerian-yellow hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <Heading level={4} className="text-lerian-black">
                  {feature.title}
                </Heading>
                <Text className="text-muted-foreground">
                  {feature.description}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 border-t">
        <div className="relative text-center space-y-6 max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-lerian-black/5 rounded-2xl -m-6"></div>
          <div className="relative z-10 py-6">
            <Heading level={2} className="mb-4">
              Start Building Your Plugin
            </Heading>
            <Text variant="lead" className="mb-6">
              Use these components in your Midaz plugin development. All examples include 
              copy-paste code and implementation notes for seamless integration.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90 font-medium" asChild>
                <Link href="/blocks/dashboard">
                  View Dashboard Examples
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-lerian-black text-lerian-black hover:bg-lerian-black hover:text-white" asChild>
                <Link href="https://github.com/lerianstudio/midaz" target="_blank">
                  Midaz Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container text-center">
          <Text variant="small" className="text-muted-foreground">
            Built with ❤️ by Lerian Studio for the Midaz community and partners.
          </Text>
        </div>
      </footer>
    </div>
  );
}

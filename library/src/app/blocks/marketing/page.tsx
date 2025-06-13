"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Heading, Text, Mission, BrandTagline } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { 
  ArrowRight, 
  Check, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  Code,
  Heart,
  Github,
  Twitter,
  Linkedin
} from "lucide-react"

const features = [
  {
    title: "Open Source Banking",
    description: "Complete core banking solutions built with transparency and community collaboration.",
    icon: Code,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with audit trails, compliance features, and data protection.",
    icon: Shield,
  },
  {
    title: "Lightning Fast",
    description: "High-performance infrastructure designed to handle millions of transactions.",
    icon: Zap,
  },
  {
    title: "Developer First",
    description: "Well-documented APIs, SDKs, and tools that developers love to work with.",
    icon: Heart,
  }
]

const testimonials = [
  {
    quote: "Lerian transformed how we think about financial infrastructure. The open-source approach gives us confidence and control.",
    author: "Sarah Chen",
    role: "CTO, FinTech Startup",
    company: "PayFlow",
    rating: 5
  },
  {
    quote: "The developer experience is outstanding. We integrated Lerian in days, not months.",
    author: "Marcus Rodriguez", 
    role: "Lead Developer",
    company: "BankTech Solutions",
    rating: 5
  },
  {
    quote: "Finally, a banking platform that understands the needs of modern businesses. Game changer.",
    author: "Lisa Thompson",
    role: "Founder",
    company: "Digital Payments Co",
    rating: 5
  }
]

const pricingPlans = [
  {
    name: "Community",
    price: "Free",
    description: "Perfect for startups and individual developers",
    features: [
      "Up to 1,000 transactions/month",
      "Basic API access",
      "Community support",
      "Open source components"
    ],
    featured: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For growing businesses and teams",
    features: [
      "Up to 100,000 transactions/month",
      "Advanced API features",
      "Priority support",
      "Custom integrations",
      "Analytics dashboard"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited transactions",
      "Dedicated infrastructure",
      "24/7 premium support",
      "Custom development",
      "SLA guarantees",
      "Compliance assistance"
    ],
    featured: false
  }
]

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Open Source Banking Platform
            </Badge>
            
            <Mission>
              Coding together to give everyone the freedom to write your own future
            </Mission>
            
            <BrandTagline>
              The first truly open-source core banking platform. Built by developers, 
              for developers, with enterprise-grade security and scalability.
            </BrandTagline>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90 font-medium">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-lerian-black text-lerian-black hover:bg-lerian-black hover:text-white">
                View Documentation
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-body">10,000+ developers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className="text-sm font-body">4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="text-sm font-body">100% open source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t">
        <div className="container">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Why Choose Lerian?
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              We're building the future of financial infrastructure with transparency, 
              security, and developer experience at the core.
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 border-t bg-muted/20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Loved by Developers Worldwide
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Join thousands of developers and companies who trust Lerian 
              for their financial infrastructure.
            </Text>
          </div>
          
          {/* Sindarian Avatar */}
          <div className="absolute top-8 right-8 opacity-20 pointer-events-none hidden lg:block">
            <Image 
              src="/sindarian-celebrating.png" 
              alt="Sindarian Mascot" 
              width={120} 
              height={120}
              className="w-24 h-24 object-contain"
            />
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="pt-6 flex flex-col h-full">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-lerian-yellow text-lerian-yellow" />
                          ))}
                        </div>
                        <Text className="mb-4 italic flex-1">
                          "{testimonial.quote}"
                        </Text>
                        <div>
                          <Text variant="small" className="font-medium">
                            {testimonial.author}
                          </Text>
                          <Text variant="caption" className="text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </Text>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 border-t">
        <div className="container">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Simple, Transparent Pricing
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, 
              no vendor lock-in.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={plan.featured ? "border-primary shadow-lg scale-105" : ""}>
                {plan.featured && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-body font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-heading font-semibold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground font-body">{plan.period}</span>
                      )}
                    </div>
                    <CardDescription className="font-body">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-lerian-green" />
                        <Text variant="small">{feature}</Text>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.featured ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 border-t bg-muted/20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Heading level={2}>
              Stay Updated
            </Heading>
            <Text variant="lead">
              Get the latest updates on new features, releases, and community events.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="font-body"
              />
              <Button className="bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90" onClick={() => alert('Newsletter subscription functionality would be implemented here in a real application.')}>
                Subscribe
              </Button>
            </div>
            <Text variant="small" className="text-muted-foreground">
              No spam, unsubscribe at any time. We respect your privacy.
            </Text>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t">
        <div className="container">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <Heading level={2}>
              Ready to Build the Future?
            </Heading>
            <Text variant="lead">
              Join the open-source revolution in financial technology. 
              Start building with Lerian today.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90 font-medium" onClick={() => alert('Start building functionality would be implemented here in a real application.')}>
                Start Building Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-lerian-black text-lerian-black hover:bg-lerian-black hover:text-white" onClick={() => alert('Talk to sales functionality would be implemented here in a real application.')}>
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="font-heading text-lg font-semibold">
                Lerian
              </div>
              <Text variant="small" className="text-muted-foreground">
                The open-source core banking platform for the next generation 
                of financial applications.
              </Text>
              <div className="flex gap-4">
                <Link href="https://github.com/lerianstudio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/lerianstudio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com/company/lerianstudio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <Heading level={6}>Product</Heading>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Features
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  API Reference
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <Heading level={6}>Company</Heading>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <Heading level={6}>Legal</Heading>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Security
                </Link>
                <Link href="#" className="block text-sm text-muted-foreground hover:text-foreground">
                  Compliance
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <Text variant="small" className="text-muted-foreground">
              © 2025 Lerian Studio. All rights reserved. Built with ❤️ and open source.
            </Text>
          </div>
        </div>
      </footer>
    </div>
  )
}
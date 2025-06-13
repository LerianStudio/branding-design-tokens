"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  ShoppingCart,
  Shield,
  Zap,
  Users,
  Check,
  Star,
  ArrowRight,
  Plus,
  Minus,
  Filter,
  Search,
  Smartphone
} from "lucide-react"

const bankingProducts = [
  {
    id: "checking-basic",
    name: "Basic Checking",
    category: "Checking Accounts",
    price: "Free",
    monthlyFee: 0,
    description: "Perfect for everyday banking with no minimum balance",
    features: [
      "No monthly maintenance fee",
      "Free online & mobile banking",
      "ATM fee reimbursement up to $10/month",
      "Mobile check deposit",
      "24/7 customer support"
    ],
    popular: false,
    rating: 4.5,
    reviews: 1234
  },
  {
    id: "checking-premium",
    name: "Premium Checking",
    category: "Checking Accounts", 
    price: "$15/month",
    monthlyFee: 15,
    description: "Enhanced features for active banking customers",
    features: [
      "Unlimited ATM fee reimbursement",
      "Priority customer support",
      "Free wire transfers",
      "Interest earning balance",
      "Identity theft protection",
      "Free cashier's checks"
    ],
    popular: true,
    rating: 4.8,
    reviews: 892
  },
  {
    id: "savings-high-yield",
    name: "High-Yield Savings", 
    category: "Savings Accounts",
    price: "2.5% APY",
    monthlyFee: 0,
    description: "Competitive interest rates for your savings goals",
    features: [
      "2.5% Annual Percentage Yield",
      "No minimum balance requirement",
      "FDIC insured up to $250,000",
      "Online account management",
      "Automatic savings plans"
    ],
    popular: false,
    rating: 4.7,
    reviews: 567
  },
  {
    id: "business-checking",
    name: "Business Checking",
    category: "Business Accounts",
    price: "$25/month",
    monthlyFee: 25,
    description: "Comprehensive banking solution for businesses",
    features: [
      "500 free transactions per month",
      "Business debit card",
      "Cash management tools",
      "ACH origination",
      "Remote deposit capture",
      "Dedicated business support"
    ],
    popular: false,
    rating: 4.6,
    reviews: 234
  },
  {
    id: "credit-card-rewards",
    name: "Rewards Credit Card",
    category: "Credit Cards",
    price: "0% APR*",
    monthlyFee: 0,
    description: "Earn rewards on every purchase with no annual fee",
    features: [
      "3% cash back on purchases",
      "0% intro APR for 12 months",
      "No annual fee",
      "Fraud protection",
      "Mobile app integration",
      "Contactless payments"
    ],
    popular: true,
    rating: 4.9,
    reviews: 2156
  },
  {
    id: "investment-account",
    name: "Investment Account",
    category: "Investment Services",
    price: "0.5% fee",
    monthlyFee: 0,
    description: "Professional investment management made simple",
    features: [
      "Automated portfolio management",
      "Low-cost ETF investments",
      "Tax-loss harvesting",
      "Financial advisor access",
      "Retirement planning tools",
      "Goal-based investing"
    ],
    popular: false,
    rating: 4.4,
    reviews: 445
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    avatar: "SJ",
    rating: 5,
    comment: "The business checking account has everything I need to manage my finances efficiently. Great support team too!",
    product: "Business Checking"
  },
  {
    name: "Mike Chen", 
    role: "Software Engineer",
    avatar: "MC",
    rating: 5,
    comment: "Love the high-yield savings rate and the mobile app is incredibly user-friendly. Highly recommend!",
    product: "High-Yield Savings"
  },
  {
    name: "Lisa Rodriguez",
    role: "Marketing Manager", 
    avatar: "LR",
    rating: 4,
    comment: "The rewards credit card has saved me hundreds in cash back. The fraud protection is excellent.",
    product: "Rewards Credit Card"
  }
]

const pricingFeatures = [
  {
    feature: "Mobile Banking",
    basic: true,
    premium: true,
    business: true
  },
  {
    feature: "ATM Fee Reimbursement",
    basic: "Up to $10/month",
    premium: "Unlimited",
    business: "Unlimited"
  },
  {
    feature: "Wire Transfers",
    basic: "$25 fee",
    premium: "Free",
    business: "Free domestic"
  },
  {
    feature: "Customer Support",
    basic: "Standard",
    premium: "Priority",
    business: "Dedicated"
  },
  {
    feature: "Account Minimum",
    basic: "$0",
    premium: "$500",
    business: "$1,000"
  }
]

export default function EcommercePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cart, setCart] = useState<string[]>([])

  const categories = ["all", "Checking Accounts", "Savings Accounts", "Business Accounts", "Credit Cards", "Investment Services"]

  const filteredProducts = selectedCategory === "all" 
    ? bankingProducts 
    : bankingProducts.filter(product => product.category === selectedCategory)

  const addToCart = (productId: string) => {
    setCart(prev => [...prev, productId])
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(id => id !== productId))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium">
            Banking Products
          </Badge>
          <Heading level={1} className="mb-4">
            Banking E-commerce
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Comprehensive e-commerce components for banking products and services
            with modern shopping experiences.
          </Text>
        </div>

        <div className="space-y-8">
          {/* Product Catalog */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="font-heading">Banking Products</CardTitle>
                  <CardDescription className="font-body">
                    Explore our range of banking products and services
                  </CardDescription>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-8 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category === "all" ? "All Products" : category}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="relative">
                    {product.popular && (
                      <Badge className="absolute -top-2 left-4 bg-lerian-yellow text-lerian-black">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{product.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-lerian-yellow text-lerian-yellow" />
                          <Text variant="caption">{product.rating}</Text>
                          <Text variant="caption" className="text-muted-foreground">
                            ({product.reviews})
                          </Text>
                        </div>
                      </div>
                      <CardTitle className="font-heading">{product.name}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                          <Text className="text-2xl font-heading font-semibold text-lerian-yellow">
                            {product.price}
                          </Text>
                          {product.monthlyFee > 0 && (
                            <Text variant="small" className="text-muted-foreground">
                              monthly
                            </Text>
                          )}
                        </div>
                        <Text variant="small" className="text-muted-foreground">
                          {product.description}
                        </Text>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <Check className="h-3 w-3 text-lerian-green" />
                            {feature}
                          </li>
                        ))}
                        {product.features.length > 4 && (
                          <li className="text-sm text-muted-foreground">
                            +{product.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                      
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1"
                          onClick={() => addToCart(product.id)}
                          disabled={cart.includes(product.id)}
                        >
                          {cart.includes(product.id) ? (
                            <>
                              <Check className="h-4 w-4 mr-2" />
                              Added
                            </>
                          ) : (
                            <>
                              <Plus className="h-4 w-4 mr-2" />
                              Apply Now
                            </>
                          )}
                        </Button>
                        <Button variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Shopping Cart */}
          {cart.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-lerian-yellow" />
                  Selected Products ({cart.length})
                </CardTitle>
                <CardDescription className="font-body">
                  Review your selected banking products before proceeding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cart.map((productId) => {
                    const product = bankingProducts.find(p => p.id === productId)
                    if (!product) return null
                    
                    return (
                      <div key={productId} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <Text variant="small" className="font-medium">{product.name}</Text>
                          <Text variant="caption" className="text-muted-foreground">
                            {product.category}
                          </Text>
                        </div>
                        <div className="flex items-center gap-4">
                          <Text variant="small" className="font-medium">
                            {product.price}
                          </Text>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(productId)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <Text className="font-medium">Ready to proceed?</Text>
                      <Text variant="small" className="text-muted-foreground">
                        Complete your applications in minutes
                      </Text>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        Save for Later
                      </Button>
                      <Button>
                        Continue Application
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Pricing Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Account Comparison</CardTitle>
              <CardDescription className="font-body">
                Compare features across different account types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Features</th>
                      <th className="text-center p-4 font-medium">Basic Checking</th>
                      <th className="text-center p-4 font-medium">Premium Checking</th>
                      <th className="text-center p-4 font-medium">Business Checking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingFeatures.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          {typeof row.basic === 'boolean' ? (
                            row.basic ? <Check className="h-4 w-4 text-lerian-green mx-auto" /> : <Minus className="h-4 w-4 text-muted-foreground mx-auto" />
                          ) : (
                            <Text variant="small">{row.basic}</Text>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof row.premium === 'boolean' ? (
                            row.premium ? <Check className="h-4 w-4 text-lerian-green mx-auto" /> : <Minus className="h-4 w-4 text-muted-foreground mx-auto" />
                          ) : (
                            <Text variant="small">{row.premium}</Text>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof row.business === 'boolean' ? (
                            row.business ? <Check className="h-4 w-4 text-lerian-green mx-auto" /> : <Minus className="h-4 w-4 text-muted-foreground mx-auto" />
                          ) : (
                            <Text variant="small">{row.business}</Text>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Customer Testimonials */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Customer Reviews</CardTitle>
              <CardDescription className="font-body">
                What our customers say about our banking products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-6 border rounded-lg space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-lerian-yellow text-lerian-black">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <Text variant="small" className="font-medium">
                          {testimonial.name}
                        </Text>
                        <Text variant="caption" className="text-muted-foreground">
                          {testimonial.role}
                        </Text>
                      </div>
                    </div>
                    
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-lerian-yellow text-lerian-yellow" />
                      ))}
                    </div>
                    
                    <Text variant="small" className="italic">
                      "{testimonial.comment}"
                    </Text>
                    
                    <Badge variant="outline" className="text-xs">
                      {testimonial.product}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feature Highlights */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Why Choose Lerian Banking?</CardTitle>
              <CardDescription className="font-body">
                Key features that make our banking products stand out
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-lerian-green/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-lerian-green" />
                  </div>
                  <Heading level={4}>Bank-Grade Security</Heading>
                  <Text variant="small" className="text-muted-foreground">
                    FDIC insured with advanced fraud protection
                  </Text>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-lerian-blue/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-lerian-blue" />
                  </div>
                  <Heading level={4}>Mobile First</Heading>
                  <Text variant="small" className="text-muted-foreground">
                    Award-winning mobile app for banking on the go
                  </Text>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-lerian-yellow/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-lerian-yellow" />
                  </div>
                  <Heading level={4}>Instant Everything</Heading>
                  <Text variant="small" className="text-muted-foreground">
                    Real-time transactions and instant notifications
                  </Text>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-lerian-red/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-lerian-red" />
                  </div>
                  <Heading level={4}>24/7 Support</Heading>
                  <Text variant="small" className="text-muted-foreground">
                    Always available when you need assistance
                  </Text>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
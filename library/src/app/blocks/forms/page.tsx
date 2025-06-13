"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { Upload, Phone, Mail, User, Building, CreditCard, Calendar, MapPin, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Shield } from "lucide-react"
import { useState } from "react"

export default function FormsPage() {
  const [activeForm, setActiveForm] = useState<'contact' | 'payment' | 'profile' | 'components' | 'overview'>('overview')
  const [sliderValue, setSliderValue] = useState([50])
  const [otpValue, setOtpValue] = useState("")

  const handleFormSubmit = (formType: string, event: React.FormEvent) => {
    event.preventDefault()
    alert(`${formType} form submitted successfully! In a real application, this would process the form data.`)
  }

  if (activeForm === 'overview') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container py-16">
          <div className="text-center mb-12">
            <Heading level={1} className="mb-4">
              Form Components
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Production-ready form examples with validation, accessibility, 
              and consistent Lerian branding.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveForm('contact')}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Mail className="h-8 w-8 text-primary" />
                  <Badge>Ready</Badge>
                </div>
                <CardTitle className="font-heading">Contact Form</CardTitle>
                <CardDescription className="font-body">
                  Multi-step contact form with validation and file uploads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-4 space-y-3">
                  <div className="h-3 bg-muted rounded w-1/3"></div>
                  <div className="h-8 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-1/4"></div>
                  <div className="h-8 bg-muted rounded"></div>
                  <div className="h-8 bg-primary/20 rounded"></div>
                </div>
                <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  View Example
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveForm('payment')}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <Badge>Ready</Badge>
                </div>
                <CardTitle className="font-heading">Payment Form</CardTitle>
                <CardDescription className="font-body">
                  Secure payment form with card validation and billing details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-muted rounded"></div>
                    <div className="h-8 bg-muted rounded"></div>
                  </div>
                  <div className="h-8 bg-muted rounded"></div>
                  <div className="h-8 bg-accent/20 rounded"></div>
                </div>
                <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  View Example
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveForm('profile')}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <User className="h-8 w-8 text-primary" />
                  <Badge>Ready</Badge>
                </div>
                <CardTitle className="font-heading">Profile Form</CardTitle>
                <CardDescription className="font-body">
                  Comprehensive user profile form with image upload
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-12 bg-muted rounded-full"></div>
                    <div className="flex-1 h-8 bg-muted rounded"></div>
                  </div>
                  <div className="h-8 bg-muted rounded"></div>
                  <div className="h-8 bg-lerian-green/20 rounded"></div>
                </div>
                <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  View Example
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveForm('components')}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Building className="h-8 w-8 text-primary" />
                  <Badge className="bg-lerian-yellow text-lerian-black">New</Badge>
                </div>
                <CardTitle className="font-heading">Form Components</CardTitle>
                <CardDescription className="font-body">
                  Checkbox, radio, switch, slider and other form inputs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-8 bg-lerian-blue/20 rounded"></div>
                </div>
                <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  View Components
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => setActiveForm('overview')}
        >
          ← Back to Form Examples
        </Button>

        <div className="max-w-2xl mx-auto">
          {activeForm === 'contact' && <ContactForm />}
          {activeForm === 'payment' && <PaymentForm />}
          {activeForm === 'profile' && <ProfileForm />}
          {activeForm === 'components' && <FormComponentsDemo />}
        </div>
      </div>
    </div>
  )

  function ContactForm() {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Get in Touch</CardTitle>
          <CardDescription className="font-body">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" placeholder="John" className="font-body" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" placeholder="Doe" className="font-body" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="john@example.com" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="font-body pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="company" placeholder="Your Company" className="font-body pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Select>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="sales">Sales Question</SelectItem>
                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us more about your inquiry..."
              className="font-body min-h-[120px]"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Attachments (Optional)</Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors cursor-pointer">
                <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <Text variant="small" className="text-muted-foreground">
                  Click to upload or drag and drop
                </Text>
                <Text variant="caption" className="text-muted-foreground">
                  PNG, JPG, PDF up to 10MB
                </Text>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="newsletter" className="rounded border-border" />
              <Label htmlFor="newsletter" className="text-sm font-body cursor-pointer">
                Subscribe to our newsletter for updates and announcements
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="privacy" className="rounded border-border" />
              <Label htmlFor="privacy" className="text-sm font-body cursor-pointer">
                I agree to the Privacy Policy and Terms of Service *
              </Label>
            </div>
          </div>

          <Button 
            className="w-full font-body bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90"
            onClick={(e) => handleFormSubmit('Contact', e)}
          >
            Send Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  function PaymentForm() {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Payment Information</CardTitle>
          <CardDescription className="font-body">
            Enter your payment details to complete your purchase.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input 
              id="cardNumber" 
              placeholder="1234 5678 9012 3456" 
              className="font-body"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date *</Label>
              <Input id="expiry" placeholder="MM/YY" className="font-body" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC *</Label>
              <Input id="cvc" placeholder="123" className="font-body" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardholderName">Cardholder Name *</Label>
            <Input id="cardholderName" placeholder="John Doe" className="font-body" />
          </div>

          <div className="border-t pt-6">
            <Heading level={4} className="mb-4">
              Billing Address
            </Heading>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address *</Label>
                <Input id="address" placeholder="123 Main Street" className="font-body" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="New York" className="font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select>
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code *</Label>
                  <Input id="zip" placeholder="10001" className="font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select>
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <Text variant="small">Subtotal</Text>
              <Text variant="small">$99.00</Text>
            </div>
            <div className="flex justify-between items-center mb-2">
              <Text variant="small">Tax</Text>
              <Text variant="small">$8.91</Text>
            </div>
            <div className="border-t pt-2 flex justify-between items-center">
              <Text className="font-medium">Total</Text>
              <Text className="font-medium">$107.91</Text>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="saveCard" className="rounded border-border" />
            <Label htmlFor="saveCard" className="text-sm font-body cursor-pointer">
              Save this card for future purchases
            </Label>
          </div>

          <Button 
            className="w-full font-body bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90"
            onClick={(e) => handleFormSubmit('Payment', e)}
          >
            Complete Payment
          </Button>

          <Text variant="caption" className="text-center text-muted-foreground">
            Your payment information is secure and encrypted
          </Text>
        </CardContent>
      </Card>
    )
  }

  function ProfileForm() {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Profile Settings</CardTitle>
          <CardDescription className="font-body">
            Update your profile information and preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Upload Photo
              </Button>
              <Text variant="caption" className="text-muted-foreground">
                JPG or PNG, max 2MB
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" defaultValue="John" className="font-body" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" defaultValue="Doe" className="font-body" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" defaultValue="john@example.com" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea 
              id="bio" 
              placeholder="Tell us about yourself..."
              className="font-body min-h-[100px]"
              defaultValue="Software developer with a passion for building financial applications."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="est">
              <SelectTrigger className="font-body">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="est">Eastern Standard Time</SelectItem>
                <SelectItem value="cst">Central Standard Time</SelectItem>
                <SelectItem value="mst">Mountain Standard Time</SelectItem>
                <SelectItem value="pst">Pacific Standard Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger className="font-body">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="pt">Portuguese</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border-t pt-6">
            <Heading level={4} className="mb-4">
              Notification Preferences
            </Heading>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Text variant="small" className="font-medium">Email Notifications</Text>
                  <Text variant="caption" className="text-muted-foreground">
                    Receive email updates about your account
                  </Text>
                </div>
                <input type="checkbox" defaultChecked className="rounded border-border" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Text variant="small" className="font-medium">Marketing Communications</Text>
                  <Text variant="caption" className="text-muted-foreground">
                    Receive promotional emails and newsletters
                  </Text>
                </div>
                <input type="checkbox" className="rounded border-border" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Text variant="small" className="font-medium">Security Alerts</Text>
                  <Text variant="caption" className="text-muted-foreground">
                    Get notified about security events
                  </Text>
                </div>
                <input type="checkbox" defaultChecked className="rounded border-border" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              className="flex-1 font-body bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90"
              onClick={(e) => handleFormSubmit('Profile', e)}
            >
              Save Changes
            </Button>
            <Button 
              variant="outline" 
              className="font-body"
              onClick={() => alert('Form cancelled')}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  function FormComponentsDemo() {
    return (
      <div className="space-y-8">
        {/* Checkbox Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Checkbox</CardTitle>
            <CardDescription className="font-body">
              Checkbox component for boolean inputs and multi-selection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="font-body">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" defaultChecked />
                <Label htmlFor="marketing" className="font-body">Subscribe to marketing emails</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" className="font-body text-muted-foreground">Disabled option</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Radio Group Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Radio Group</CardTitle>
            <CardDescription className="font-body">
              Radio group component for single selection from multiple options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label className="font-body font-medium">Account Type</Label>
              <RadioGroup defaultValue="personal" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal" className="font-body">Personal Account</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" />
                  <Label htmlFor="business" className="font-body">Business Account</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enterprise" id="enterprise" />
                  <Label htmlFor="enterprise" className="font-body">Enterprise Account</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="font-body font-medium">Payment Method</Label>
              <RadioGroup defaultValue="card" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="font-body">Credit/Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="font-body">Bank Transfer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="crypto" id="crypto" />
                  <Label htmlFor="crypto" className="font-body">Cryptocurrency</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Switch Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Switch</CardTitle>
            <CardDescription className="font-body">
              Switch component for toggling settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="font-body font-medium">Email Notifications</Label>
                  <Text variant="small" className="text-muted-foreground">
                    Receive email updates about your account activity
                  </Text>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="font-body font-medium">Two-Factor Authentication</Label>
                  <Text variant="small" className="text-muted-foreground">
                    Add an extra layer of security to your account
                  </Text>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="font-body font-medium">Marketing Communications</Label>
                  <Text variant="small" className="text-muted-foreground">
                    Receive promotional content and product updates
                  </Text>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="font-body font-medium text-muted-foreground">Disabled Setting</Label>
                  <Text variant="small" className="text-muted-foreground">
                    This setting cannot be changed
                  </Text>
                </div>
                <Switch disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Slider Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Slider</CardTitle>
            <CardDescription className="font-body">
              Slider component for selecting numeric values within a range
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <Label className="font-body font-medium">Transaction Limit</Label>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100000}
                  min={1000}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$1,000</span>
                  <span className="font-medium">Current: ${sliderValue[0].toLocaleString()}</span>
                  <span>$100,000</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-body font-medium">Risk Tolerance</Label>
                <Slider
                  defaultValue={[30]}
                  max={100}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Conservative</span>
                  <span>Moderate</span>
                  <span>Aggressive</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-body font-medium">Interest Rate Range</Label>
                <Slider
                  defaultValue={[2, 8]}
                  max={15}
                  min={0}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0%</span>
                  <span>Range: 2% - 8%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Components */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Toggle & Toggle Group</CardTitle>
            <CardDescription className="font-body">
              Toggle buttons for binary states and grouped toggle selections
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label className="font-body font-medium">Text Formatting</Label>
              <div className="flex items-center gap-2">
                <Toggle aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </Toggle>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="font-body font-medium">Text Alignment</Label>
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left" aria-label="Align left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-4">
              <Label className="font-body font-medium">Account Features</Label>
              <ToggleGroup type="multiple" className="justify-start">
                <ToggleGroupItem value="notifications">
                  Notifications
                </ToggleGroupItem>
                <ToggleGroupItem value="analytics">
                  Analytics
                </ToggleGroupItem>
                <ToggleGroupItem value="reports">
                  Reports
                </ToggleGroupItem>
                <ToggleGroupItem value="api">
                  API Access
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardContent>
        </Card>

        {/* Input OTP Component */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Input OTP</CardTitle>
            <CardDescription className="font-body">
              One-time password input for two-factor authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-3">
                <Label className="font-body font-medium flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  6-Digit Verification Code
                </Label>
                <InputOTP
                  maxLength={6}
                  value={otpValue}
                  onChange={(value) => setOtpValue(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <Text variant="small" className="text-muted-foreground">
                  Enter the 6-digit code sent to your mobile device
                </Text>
              </div>

              <div className="space-y-3">
                <Label className="font-body font-medium">4-Digit PIN</Label>
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <Text variant="small" className="text-muted-foreground">
                  Enter your 4-digit security PIN
                </Text>
              </div>

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setOtpValue("")}
                  className="font-body"
                >
                  Clear
                </Button>
                <Button 
                  className="bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90 font-body"
                  disabled={otpValue.length !== 6}
                  onClick={() => alert(`OTP verification: ${otpValue}`)}
                >
                  Verify Code
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}
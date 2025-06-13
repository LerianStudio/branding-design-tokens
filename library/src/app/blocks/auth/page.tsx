"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Heading, Text, BrandTagline } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { Eye, EyeOff, Github, Mail, ArrowLeft, Trash2 } from "lucide-react"
import { useState } from "react"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [currentView, setCurrentView] = useState<'overview' | 'login' | 'register' | 'forgot'>('overview')

  const handleSocialAuth = (provider: string) => {
    // Placeholder for social authentication
    alert(`${provider} authentication would be implemented here in a real application.`)
  }

  if (currentView === 'overview') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container py-16">
          <div className="text-center mb-12">
            <Heading level={1} className="mb-4">
              Authentication Blocks
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Complete authentication flows built with Lerian branding guidelines. 
              Copy and customize these forms for your applications.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentView('login')}>
              <CardHeader>
                <CardTitle className="font-heading">Login Form</CardTitle>
                <CardDescription className="font-body">
                  Clean login form with email/password and social options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-16"></div>
                    <div className="h-8 bg-muted rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-20"></div>
                    <div className="h-8 bg-muted rounded"></div>
                  </div>
                  <div className="h-8 bg-primary/20 rounded"></div>
                </div>
                <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  View Example
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentView('register')}>
              <CardHeader>
                <CardTitle className="font-heading">Register Form</CardTitle>
                <CardDescription className="font-body">
                  User registration with validation and terms acceptance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded w-12"></div>
                      <div className="h-8 bg-muted rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded w-12"></div>
                      <div className="h-8 bg-muted rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-16"></div>
                    <div className="h-8 bg-muted rounded"></div>
                  </div>
                  <div className="h-8 bg-accent/20 rounded"></div>
                </div>
                <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  View Example
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setCurrentView('forgot')}>
              <CardHeader>
                <CardTitle className="font-heading">Password Reset</CardTitle>
                <CardDescription className="font-body">
                  Forgot password flow with email verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/20 rounded-lg p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-24"></div>
                    <div className="h-8 bg-muted rounded"></div>
                  </div>
                  <div className="h-8 bg-destructive/20 rounded"></div>
                  <div className="h-4 bg-muted/50 rounded w-3/4"></div>
                </div>
                <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  View Example
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
          onClick={() => setCurrentView('overview')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Auth Examples
        </Button>

        <div className="max-w-md mx-auto">
          {currentView === 'login' && <LoginForm />}
          {currentView === 'register' && <RegisterForm />}
          {currentView === 'forgot' && <ForgotPasswordForm />}
        </div>
      </div>
    </div>
  )

  function LoginForm() {
    return (
      <Card>
        <CardHeader className="text-center">
          <div className="font-heading text-2xl font-semibold text-foreground mb-2">
            Welcome Back
          </div>
          <BrandTagline>
            Sign in to your Lerian account
          </BrandTagline>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com"
                className="font-body"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="font-body pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-sm font-body">Remember me</span>
              </Label>
              <Link 
                href="#" 
                className="text-sm font-body text-primary hover:underline"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentView('forgot')
                }}
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <Button className="w-full font-body" onClick={(e) => {
              e.preventDefault()
              alert('Sign in functionality would be implemented here in a real application.')
            }}>
              Sign In
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground font-body">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="font-body" onClick={() => handleSocialAuth('GitHub')}>
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="font-body" onClick={() => handleSocialAuth('Google')}>
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Text variant="small" className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link 
                href="#" 
                className="text-primary hover:underline font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentView('register')
                }}
              >
                Sign up
              </Link>
            </Text>
          </div>
        </CardContent>
      </Card>
    )
  }

  function RegisterForm() {
    return (
      <Card>
        <CardHeader className="text-center">
          <div className="font-heading text-2xl font-semibold text-foreground mb-2">
            Create Account
          </div>
          <BrandTagline>
            Join the Lerian community
          </BrandTagline>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  placeholder="John"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  placeholder="Doe"
                  className="font-body"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com"
                className="font-body"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="font-body pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-sm font-body">
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </Label>
            </div>
          </div>

          <div className="space-y-4">
            <Button className="w-full font-body" onClick={(e) => {
              e.preventDefault()
              alert('Account creation functionality would be implemented here in a real application.')
            }}>
              Create Account
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground font-body">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="font-body" onClick={() => handleSocialAuth('GitHub')}>
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="font-body" onClick={() => handleSocialAuth('Google')}>
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Text variant="small" className="text-muted-foreground">
              Already have an account?{" "}
              <Link 
                href="#" 
                className="text-primary hover:underline font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentView('login')
                }}
              >
                Sign in
              </Link>
            </Text>
          </div>
        </CardContent>
      </Card>
    )
  }

  function ForgotPasswordForm() {
    return (
      <Card>
        <CardHeader className="text-center">
          <div className="font-heading text-2xl font-semibold text-foreground mb-2">
            Reset Password
          </div>
          <BrandTagline>
            We'll send you a link to reset your password
          </BrandTagline>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com"
                className="font-body"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Button className="w-full font-body" onClick={(e) => {
              e.preventDefault()
              alert('Password reset functionality would be implemented here in a real application.')
            }}>
              Send Reset Link
            </Button>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full font-body mt-4">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-heading">Delete Account</AlertDialogTitle>
                  <AlertDialogDescription className="font-body">
                    This action cannot be undone. This will permanently delete your account
                    and remove all your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="font-body">Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-body"
                    onClick={() => alert('Account deletion functionality would be implemented here in a real application.')}
                  >
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="text-center">
            <Text variant="small" className="text-muted-foreground">
              Remember your password?{" "}
              <Link 
                href="#" 
                className="text-primary hover:underline font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentView('login')
                }}
              >
                Back to sign in
              </Link>
            </Text>
          </div>
        </CardContent>
      </Card>
    )
  }
}
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Design Tokens", href: "/design-tokens" },
  { name: "Components", href: "/components" },
  { name: "Blocks", href: "/blocks" },
  { name: "Dashboard", href: "/blocks/dashboard" },
  { name: "Charts", href: "/blocks/charts" },
  { name: "Layout", href: "/blocks/layout" },
  { name: "Authentication", href: "/blocks/auth" },
  { name: "Marketing", href: "/blocks/marketing" },
  { name: "Brand Assets", href: "/brand/assets" },
  { name: "Avatars", href: "/brand/avatars" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/branding-design-tokens/lerian-logo.svg" 
              alt="Lerian Logo" 
              width={48} 
              height={48}
              className="h-12 w-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-body transition-colors hover:text-primary text-muted-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
            <Link href="https://github.com/lerianstudio/branding-design-tokens" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Button>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <div className="font-heading text-lg font-semibold">
                  Navigation
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-body text-sm transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
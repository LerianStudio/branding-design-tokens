import React from 'react'
import { Header } from "@/components/layout/header"
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Heading, Text } from "@/components/ui/typography"
import { Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  badge?: string
  breadcrumbs?: BreadcrumbItem[]
  centered?: boolean
  className?: string
}

export function PageLayout({
  children,
  title,
  description,
  badge,
  breadcrumbs,
  centered = true,
  className = ""
}: PageLayoutProps) {
  const showBreadcrumbs = breadcrumbs && breadcrumbs.length > 0

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className={`container py-16 ${className}`}>
        {showBreadcrumbs && (
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center gap-1">
                    <Home className="h-3 w-3" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}

        <div className={`space-y-8 ${centered && !showBreadcrumbs ? 'text-center' : ''} ${showBreadcrumbs ? 'max-w-6xl mx-auto' : ''}`}>
          {/* Page Header */}
          <div className={`space-y-6 ${centered && !showBreadcrumbs ? 'max-w-4xl mx-auto' : ''}`}>
            {badge && (
              <Badge variant="secondary" className="mb-4">
                {badge}
              </Badge>
            )}
            
            <Heading level={1} className="mb-4">
              {title}
            </Heading>
            
            {description && (
              <Text variant="lead" className={`${centered && !showBreadcrumbs ? 'max-w-2xl mx-auto' : ''} text-muted-foreground`}>
                {description}
              </Text>
            )}
          </div>

          {/* Page Content */}
          <div className={showBreadcrumbs ? 'max-w-6xl mx-auto' : ''}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// Specialized layouts for different page types
export function HeroPageLayout({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className={className}>
        {children}
      </div>
    </div>
  )
}
import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: "body" | "lead" | "small" | "large" | "caption"
  as?: React.ElementType
}

// Heading Component with IBM Plex Serif font
export function Heading({ 
  children, 
  level = 1, 
  className, 
  as,
  ...props 
}: TypographyProps) {
  const Component = as || `h${level}`
  
  return (
    <Component
      className={cn(
        "font-heading tracking-tight text-foreground",
        level === 1 && "text-4xl lg:text-5xl font-semibold",
        level === 2 && "text-3xl lg:text-4xl font-semibold",
        level === 3 && "text-2xl lg:text-3xl font-semibold",
        level === 4 && "text-xl lg:text-2xl font-semibold",
        level === 5 && "text-lg lg:text-xl font-semibold",
        level === 6 && "text-base lg:text-lg font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// Text Component with Inter
export function Text({ 
  children, 
  variant = "body", 
  className, 
  as = "p",
  ...props 
}: TypographyProps) {
  const Component = as
  
  return (
    <Component
      className={cn(
        "font-body text-foreground",
        variant === "body" && "text-base font-normal leading-relaxed",
        variant === "lead" && "text-lg font-medium leading-relaxed",
        variant === "large" && "text-xl font-medium leading-relaxed",
        variant === "small" && "text-sm font-light leading-normal",
        variant === "caption" && "text-xs font-light leading-normal text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// Brand tagline component
export function BrandTagline({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Text
      variant="lead"
      className={cn("text-muted-foreground italic", className)}
      {...props}
    >
      {children}
    </Text>
  )
}

// Mission statement component  
export function Mission({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Heading
      level={2}
      className={cn("text-center max-w-4xl mx-auto", className)}
      {...props}
    >
      {children}
    </Heading>
  )
}

// Code text component
export function CodeText({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}
/**
 * Lerian Design Tokens - Main Export
 * 
 * Central access point for all design tokens in the Lerian Design System.
 * Import from this file to access colors, typography, spacing, shadows, and animations.
 */

// Individual token exports
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './shadows'
export * from './animations'

// Re-export with organized structure
import { colors, cssVariables } from './colors'
import { typography, textStyles } from './typography'
import { spacing, semanticSpacing, containers, borderRadius, zIndex } from './spacing'
import { shadows, coloredShadows, innerShadows, financialShadows } from './shadows'
import { timing, easing, transitions, componentTransitions, keyframes } from './animations'

/**
 * Complete design token system organized by category
 */
export const tokens = {
  colors: {
    ...colors,
    css: cssVariables
  },
  typography: {
    ...typography,
    styles: textStyles
  },
  spacing: {
    base: spacing,
    semantic: semanticSpacing,
    containers,
    borderRadius,
    zIndex
  },
  shadows: {
    base: shadows,
    colored: coloredShadows,
    inner: innerShadows,
    financial: financialShadows
  },
  animations: {
    timing,
    easing,
    transitions,
    components: componentTransitions,
    keyframes
  }
} as const

/**
 * Utility functions for programmatic token access
 */

/**
 * Get color token value by path
 * @example getColor('lerian.yellow') // '#F4C430'
 * @example getColor('gray.500') // '#6B7280'
 */
export function getColor(path: string): string {
  const keys = path.split('.')
  let current: any = colors
  
  for (const key of keys) {
    current = current?.[key]
  }
  
  return current?.value || current || '#000000'
}

/**
 * Get spacing token value by key
 * @example getSpacing(4) // '1rem'
 * @example getSpacing('md') // '0.375rem' (border radius)
 */
export function getSpacing(key: string | number): string {
  if (typeof key === 'number') {
    return spacing[key as keyof typeof spacing]?.value || '0px'
  }
  
  // Check semantic spacing, border radius, etc.
  return (semanticSpacing as any)[key] || 
         (borderRadius as any)[key]?.value || 
         '0px'
}

/**
 * Get typography token value by path
 * @example getTypography('fontSize.lg.value') // '1.125rem'
 * @example getTypography('fontFamily.heading.value') // 'var(--font-heading)...'
 */
export function getTypography(path: string): string {
  const keys = path.split('.')
  let current: any = typography
  
  for (const key of keys) {
    current = current?.[key]
  }
  
  return current || ''
}

/**
 * Get text style object by name
 * @example getTextStyle('heading-1') // { fontFamily: '...', fontSize: '...', ... }
 */
export function getTextStyle(name: keyof typeof textStyles) {
  return textStyles[name] || {}
}

/**
 * Get shadow token value by key
 * @example getShadow('md') // '0 10px 15px -3px rgb(0 0 0 / 0.1)...'
 */
export function getShadow(key: string): string {
  return (shadows as any)[key]?.value || 
         (financialShadows as any)[key]?.value || 
         'none'
}

/**
 * Get transition token value by key
 * @example getTransition('fade') // 'opacity 200ms ease-in-out'
 */
export function getTransition(key: string): string {
  return (transitions as any)[key]?.value || 
         (componentTransitions as any)[key]?.value || 
         'none'
}

/**
 * Generate CSS custom properties from all tokens
 * Useful for injecting into CSS or CSS-in-JS solutions
 */
export function generateCSSVariables(): Record<string, string> {
  const variables: Record<string, string> = {
    // Colors
    ...cssVariables,
    
    // Typography
    '--font-heading': typography.fontFamily.heading.value,
    '--font-body': typography.fontFamily.body.value,
    '--font-mono': typography.fontFamily.mono.value,
    
    // Spacing (base scale)
    '--spacing-0': spacing[0].value,
    '--spacing-1': spacing[1].value,
    '--spacing-2': spacing[2].value,
    '--spacing-3': spacing[3].value,
    '--spacing-4': spacing[4].value,
    '--spacing-5': spacing[5].value,
    '--spacing-6': spacing[6].value,
    '--spacing-8': spacing[8].value,
    '--spacing-10': spacing[10].value,
    '--spacing-12': spacing[12].value,
    '--spacing-16': spacing[16].value,
    '--spacing-20': spacing[20].value,
    '--spacing-24': spacing[24].value,
    '--spacing-32': spacing[32].value,
    
    // Border radius
    '--radius-none': borderRadius.none.value,
    '--radius-sm': borderRadius.sm.value,
    '--radius-base': borderRadius.base.value,
    '--radius-md': borderRadius.md.value,
    '--radius-lg': borderRadius.lg.value,
    '--radius-xl': borderRadius.xl.value,
    '--radius-2xl': borderRadius['2xl'].value,
    '--radius-3xl': borderRadius['3xl'].value,
    '--radius-full': borderRadius.full.value,
    
    // Shadows
    '--shadow-xs': shadows.xs.value,
    '--shadow-sm': shadows.sm.value,
    '--shadow-base': shadows.base.value,
    '--shadow-md': shadows.md.value,
    '--shadow-lg': shadows.lg.value,
    '--shadow-xl': shadows.xl.value,
    '--shadow-2xl': shadows['2xl'].value,
    
    // Timing
    '--timing-fast': timing.fast.value,
    '--timing-base': timing.base.value,
    '--timing-medium': timing.medium.value,
    '--timing-slow': timing.slow.value,
  }
  
  return variables
}

/**
 * Type definitions for the complete token system
 */
export type TokenSystem = typeof tokens
export type ColorPath = string
export type SpacingKey = keyof typeof spacing | string
export type TypographyPath = string
export type TextStyleKey = keyof typeof textStyles
export type ShadowKey = string
export type TransitionKey = string
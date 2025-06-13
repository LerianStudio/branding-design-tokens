/**
 * Lerian Design Tokens - Spacing
 * 
 * Consistent spacing scale for margins, padding, gaps, and layout positioning.
 * Based on 4px base unit for mathematical consistency.
 */

export const spacing = {
  // Base spacing scale (4px increments)
  0: {
    value: '0px',
    description: 'No spacing'
  },
  1: {
    value: '0.25rem',  // 4px
    description: 'Minimal spacing for tight layouts'
  },
  2: {
    value: '0.5rem',   // 8px
    description: 'Small spacing for compact elements'
  },
  3: {
    value: '0.75rem',  // 12px
    description: 'Small-medium spacing'
  },
  4: {
    value: '1rem',     // 16px
    description: 'Base spacing unit - most common'
  },
  5: {
    value: '1.25rem',  // 20px
    description: 'Medium spacing'
  },
  6: {
    value: '1.5rem',   // 24px
    description: 'Medium-large spacing'
  },
  8: {
    value: '2rem',     // 32px
    description: 'Large spacing for section separation'
  },
  10: {
    value: '2.5rem',   // 40px
    description: 'Extra large spacing'
  },
  12: {
    value: '3rem',     // 48px
    description: 'Section spacing'
  },
  16: {
    value: '4rem',     // 64px
    description: 'Large section spacing'
  },
  20: {
    value: '5rem',     // 80px
    description: 'Extra large section spacing'
  },
  24: {
    value: '6rem',     // 96px
    description: 'Massive spacing for major sections'
  },
  32: {
    value: '8rem',     // 128px
    description: 'Hero section spacing'
  }
} as const

/**
 * Semantic spacing for specific use cases
 */
export const semanticSpacing = {
  // Component internal spacing
  component: {
    'xs': spacing[1].value,     // 4px - tight component spacing
    'sm': spacing[2].value,     // 8px - small component spacing  
    'md': spacing[4].value,     // 16px - standard component spacing
    'lg': spacing[6].value,     // 24px - large component spacing
    'xl': spacing[8].value,     // 32px - extra large component spacing
  },

  // Layout spacing
  layout: {
    'xs': spacing[4].value,     // 16px - minimal layout spacing
    'sm': spacing[6].value,     // 24px - small layout spacing
    'md': spacing[8].value,     // 32px - standard layout spacing
    'lg': spacing[12].value,    // 48px - large layout spacing
    'xl': spacing[16].value,    // 64px - extra large layout spacing
    '2xl': spacing[20].value,   // 80px - huge layout spacing
    '3xl': spacing[24].value,   // 96px - massive layout spacing
  },

  // Financial application specific
  financial: {
    'card-padding': spacing[6].value,      // 24px - padding inside financial cards
    'form-gap': spacing[4].value,          // 16px - gap between form elements
    'table-cell': spacing[3].value,        // 12px - padding in table cells
    'transaction-gap': spacing[2].value,   // 8px - spacing between transaction items
    'section-divider': spacing[8].value,   // 32px - spacing between major sections
  }
} as const

/**
 * Container and max-width tokens
 */
export const containers = {
  'xs': {
    value: '20rem',    // 320px
    description: 'Extra small container for mobile'
  },
  'sm': {
    value: '24rem',    // 384px  
    description: 'Small container for mobile'
  },
  'md': {
    value: '28rem',    // 448px
    description: 'Medium container for tablet portrait'
  },
  'lg': {
    value: '32rem',    // 512px
    description: 'Large container for tablet landscape'
  },
  'xl': {
    value: '36rem',    // 576px
    description: 'Extra large container'
  },
  '2xl': {
    value: '42rem',    // 672px
    description: 'Double extra large container'
  },
  '3xl': {
    value: '48rem',    // 768px
    description: 'Triple extra large container'
  },
  '4xl': {
    value: '56rem',    // 896px
    description: 'Quadruple extra large container'
  },
  '5xl': {
    value: '64rem',    // 1024px
    description: 'Quintuple extra large container'
  },
  '6xl': {
    value: '72rem',    // 1152px
    description: 'Sextuple extra large container'
  },
  '7xl': {
    value: '80rem',    // 1280px
    description: 'Septuple extra large container - main content width'
  },
  'full': {
    value: '100%',
    description: 'Full width container'
  }
} as const

/**
 * Border radius tokens
 */
export const borderRadius = {
  none: {
    value: '0px',
    description: 'No border radius'
  },
  sm: {
    value: '0.125rem',  // 2px
    description: 'Small border radius for subtle rounding'
  },
  base: {
    value: '0.25rem',   // 4px
    description: 'Base border radius for most elements'
  },
  md: {
    value: '0.375rem',  // 6px
    description: 'Medium border radius for cards and panels'
  },
  lg: {
    value: '0.5rem',    // 8px
    description: 'Large border radius for prominent elements'
  },
  xl: {
    value: '0.75rem',   // 12px
    description: 'Extra large border radius'
  },
  '2xl': {
    value: '1rem',      // 16px
    description: 'Double extra large border radius'
  },
  '3xl': {
    value: '1.5rem',    // 24px
    description: 'Triple extra large border radius'
  },
  full: {
    value: '9999px',
    description: 'Full border radius for circular elements'
  }
} as const

/**
 * Z-index scale for layering
 */
export const zIndex = {
  auto: {
    value: 'auto',
    description: 'Automatic z-index'
  },
  0: {
    value: '0',
    description: 'Base layer'
  },
  10: {
    value: '10',
    description: 'Slightly elevated content'
  },
  20: {
    value: '20', 
    description: 'Elevated content like dropdowns'
  },
  30: {
    value: '30',
    description: 'Fixed positioned content'
  },
  40: {
    value: '40',
    description: 'Modals and overlays'
  },
  50: {
    value: '50',
    description: 'Top-level modals and popups'
  }
} as const

/**
 * Type definitions
 */
export type SpacingTokens = typeof spacing
export type SemanticSpacingTokens = typeof semanticSpacing
export type ContainerTokens = typeof containers
export type BorderRadiusTokens = typeof borderRadius
export type ZIndexTokens = typeof zIndex
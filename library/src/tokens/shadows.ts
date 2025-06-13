/**
 * Lerian Design Tokens - Shadows
 * 
 * Box shadow definitions for depth, elevation, and visual hierarchy.
 * Used for cards, modals, dropdowns, and other elevated elements.
 */

export const shadows = {
  // Basic shadows for depth
  none: {
    value: 'none',
    description: 'No shadow'
  },
  xs: {
    value: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    description: 'Extra small shadow for subtle elevation'
  },
  sm: {
    value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    description: 'Small shadow for cards and buttons'
  },
  base: {
    value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    description: 'Base shadow for most elevated elements'
  },
  md: {
    value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    description: 'Medium shadow for modals and popovers'
  },
  lg: {
    value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    description: 'Large shadow for high-elevation elements'
  },
  xl: {
    value: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    description: 'Extra large shadow for maximum elevation'
  },
  '2xl': {
    value: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    description: 'Double extra large shadow for hero elements'
  }
} as const

/**
 * Colored shadows for interactive elements
 */
export const coloredShadows = {
  // Primary brand shadows
  'lerian-yellow': {
    light: '0 4px 14px 0 rgb(244 196 48 / 0.15)',
    medium: '0 8px 25px 0 rgb(244 196 48 / 0.25)',
    strong: '0 12px 35px 0 rgb(244 196 48 / 0.35)',
    description: 'Lerian yellow shadows for primary actions'
  },
  'lerian-blue': {
    light: '0 4px 14px 0 rgb(30 64 175 / 0.15)', 
    medium: '0 8px 25px 0 rgb(30 64 175 / 0.25)',
    strong: '0 12px 35px 0 rgb(30 64 175 / 0.35)',
    description: 'Lerian blue shadows for secondary actions'
  },

  // Semantic colored shadows
  success: {
    light: '0 4px 14px 0 rgb(16 185 129 / 0.15)',
    medium: '0 8px 25px 0 rgb(16 185 129 / 0.25)',
    description: 'Success state shadows'
  },
  warning: {
    light: '0 4px 14px 0 rgb(245 158 11 / 0.15)',
    medium: '0 8px 25px 0 rgb(245 158 11 / 0.25)',
    description: 'Warning state shadows'
  },
  error: {
    light: '0 4px 14px 0 rgb(239 68 68 / 0.15)',
    medium: '0 8px 25px 0 rgb(239 68 68 / 0.25)',
    description: 'Error state shadows'
  }
} as const

/**
 * Inner shadows for inset effects
 */
export const innerShadows = {
  xs: {
    value: 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
    description: 'Extra small inner shadow'
  },
  sm: {
    value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    description: 'Small inner shadow for input fields'
  },
  base: {
    value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
    description: 'Base inner shadow for pressed states'
  }
} as const

/**
 * Financial application specific shadows
 */
export const financialShadows = {
  'transaction-card': {
    value: shadows.sm.value,
    description: 'Shadow for transaction list items'
  },
  'balance-card': {
    value: shadows.md.value,
    description: 'Shadow for account balance cards'
  },
  'modal-overlay': {
    value: shadows.xl.value,
    description: 'Shadow for financial modals and confirmations'
  },
  'floating-panel': {
    value: shadows.lg.value,
    description: 'Shadow for floating financial panels'
  }
} as const

/**
 * Type definitions
 */
export type ShadowTokens = typeof shadows
export type ColoredShadowTokens = typeof coloredShadows
export type InnerShadowTokens = typeof innerShadows
export type FinancialShadowTokens = typeof financialShadows
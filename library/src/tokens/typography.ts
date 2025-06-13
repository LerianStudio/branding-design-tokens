/**
 * Lerian Design Tokens - Typography
 * 
 * Typography scale and font definitions for Lerian branding.
 * Based on IBM Plex Serif for headings and Inter for body text.
 */

export const typography = {
  // Font Families
  fontFamily: {
    heading: {
      value: 'var(--font-heading), "IBM Plex Serif", serif',
      description: 'Primary font for headings, titles, and display text',
      fallback: 'serif',
      usage: ['h1-h6 elements', 'hero text', 'section titles', 'card titles']
    },
    body: {
      value: 'var(--font-body), "Inter", sans-serif',
      description: 'Primary font for body text, UI elements, and general content',
      fallback: 'sans-serif', 
      usage: ['paragraphs', 'buttons', 'form inputs', 'navigation', 'labels']
    },
    mono: {
      value: '"JetBrains Mono", "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
      description: 'Monospace font for code, data, and technical content',
      fallback: 'monospace',
      usage: ['account numbers', 'transaction IDs', 'code blocks', 'API responses']
    }
  },

  // Font Sizes
  fontSize: {
    xs: {
      value: '0.75rem',   // 12px
      lineHeight: '1rem', // 16px
      description: 'Extra small text for captions and fine print'
    },
    sm: {
      value: '0.875rem',  // 14px  
      lineHeight: '1.25rem', // 20px
      description: 'Small text for secondary information'
    },
    base: {
      value: '1rem',      // 16px
      lineHeight: '1.5rem', // 24px
      description: 'Base body text size'
    },
    lg: {
      value: '1.125rem',  // 18px
      lineHeight: '1.75rem', // 28px
      description: 'Large body text for emphasis'
    },
    xl: {
      value: '1.25rem',   // 20px
      lineHeight: '1.75rem', // 28px
      description: 'Extra large text for lead paragraphs'
    },
    '2xl': {
      value: '1.5rem',    // 24px
      lineHeight: '2rem', // 32px
      description: 'Small heading text'
    },
    '3xl': {
      value: '1.875rem',  // 30px
      lineHeight: '2.25rem', // 36px
      description: 'Medium heading text'
    },
    '4xl': {
      value: '2.25rem',   // 36px
      lineHeight: '2.5rem', // 40px
      description: 'Large heading text'
    },
    '5xl': {
      value: '3rem',      // 48px
      lineHeight: '1',
      description: 'Extra large heading text'
    },
    '6xl': {
      value: '3.75rem',   // 60px
      lineHeight: '1',
      description: 'Display text for hero sections'
    }
  },

  // Font Weights
  fontWeight: {
    light: {
      value: '300',
      description: 'Light weight for subtle text'
    },
    normal: {
      value: '400', 
      description: 'Normal weight for body text'
    },
    medium: {
      value: '500',
      description: 'Medium weight for emphasis'
    },
    semibold: {
      value: '600',
      description: 'Semi-bold for subheadings'
    },
    bold: {
      value: '700',
      description: 'Bold for headings and strong emphasis'
    }
  },

  // Line Heights
  lineHeight: {
    none: {
      value: '1',
      description: 'No line height for tight text'
    },
    tight: {
      value: '1.25',
      description: 'Tight line height for headings'
    },
    snug: {
      value: '1.375', 
      description: 'Snug line height for large text'
    },
    normal: {
      value: '1.5',
      description: 'Normal line height for body text'
    },
    relaxed: {
      value: '1.625',
      description: 'Relaxed line height for comfortable reading'
    },
    loose: {
      value: '2',
      description: 'Loose line height for special cases'
    }
  },

  // Letter Spacing
  letterSpacing: {
    tighter: {
      value: '-0.05em',
      description: 'Tighter letter spacing for large headings'
    },
    tight: {
      value: '-0.025em',
      description: 'Tight letter spacing for headings'
    },
    normal: {
      value: '0em',
      description: 'Normal letter spacing for body text'
    },
    wide: {
      value: '0.025em',
      description: 'Wide letter spacing for small caps'
    },
    wider: {
      value: '0.05em',
      description: 'Wider letter spacing for emphasis'
    },
    widest: {
      value: '0.1em',
      description: 'Widest letter spacing for special cases'
    }
  }
} as const

/**
 * Predefined text styles for common use cases
 */
export const textStyles = {
  // Headings
  'heading-1': {
    fontFamily: typography.fontFamily.heading.value,
    fontSize: typography.fontSize['5xl'].value,
    lineHeight: typography.fontSize['5xl'].lineHeight,
    fontWeight: typography.fontWeight.bold.value,
    letterSpacing: typography.letterSpacing.tight.value,
    description: 'Main page titles and hero headings'
  },
  'heading-2': {
    fontFamily: typography.fontFamily.heading.value,
    fontSize: typography.fontSize['4xl'].value,
    lineHeight: typography.fontSize['4xl'].lineHeight,
    fontWeight: typography.fontWeight.bold.value,
    letterSpacing: typography.letterSpacing.tight.value,
    description: 'Section headings'
  },
  'heading-3': {
    fontFamily: typography.fontFamily.heading.value,
    fontSize: typography.fontSize['3xl'].value,
    lineHeight: typography.fontSize['3xl'].lineHeight,
    fontWeight: typography.fontWeight.semibold.value,
    description: 'Subsection headings'
  },
  'heading-4': {
    fontFamily: typography.fontFamily.heading.value,
    fontSize: typography.fontSize['2xl'].value,
    lineHeight: typography.fontSize['2xl'].lineHeight,
    fontWeight: typography.fontWeight.semibold.value,
    description: 'Card titles and small headings'
  },

  // Body text
  'body-large': {
    fontFamily: typography.fontFamily.body.value,
    fontSize: typography.fontSize.lg.value,
    lineHeight: typography.fontSize.lg.lineHeight,
    fontWeight: typography.fontWeight.normal.value,
    description: 'Lead paragraphs and emphasis text'
  },
  'body-base': {
    fontFamily: typography.fontFamily.body.value,
    fontSize: typography.fontSize.base.value,
    lineHeight: typography.fontSize.base.lineHeight,
    fontWeight: typography.fontWeight.normal.value,
    description: 'Standard body text'
  },
  'body-small': {
    fontFamily: typography.fontFamily.body.value,
    fontSize: typography.fontSize.sm.value,
    lineHeight: typography.fontSize.sm.lineHeight,
    fontWeight: typography.fontWeight.normal.value,
    description: 'Secondary information and descriptions'
  },

  // UI elements
  'button-large': {
    fontFamily: typography.fontFamily.body.value,
    fontSize: typography.fontSize.base.value,
    lineHeight: typography.lineHeight.none.value,
    fontWeight: typography.fontWeight.medium.value,
    description: 'Large button text'
  },
  'button-base': {
    fontFamily: typography.fontFamily.body.value,
    fontSize: typography.fontSize.sm.value,
    lineHeight: typography.lineHeight.none.value,
    fontWeight: typography.fontWeight.medium.value,
    description: 'Standard button text'
  },
  'caption': {
    fontFamily: typography.fontFamily.body.value,
    fontSize: typography.fontSize.xs.value,
    lineHeight: typography.fontSize.xs.lineHeight,
    fontWeight: typography.fontWeight.normal.value,
    description: 'Captions, helper text, and fine print'
  },

  // Financial specific
  'financial-amount': {
    fontFamily: typography.fontFamily.mono.value,
    fontSize: typography.fontSize.lg.value,
    lineHeight: typography.lineHeight.tight.value,
    fontWeight: typography.fontWeight.semibold.value,
    description: 'Financial amounts and monetary values'
  },
  'account-number': {
    fontFamily: typography.fontFamily.mono.value,
    fontSize: typography.fontSize.sm.value,
    lineHeight: typography.lineHeight.normal.value,
    fontWeight: typography.fontWeight.normal.value,
    description: 'Account numbers, transaction IDs, and codes'
  }
} as const

/**
 * Type definitions
 */
export type TypographyTokens = typeof typography
export type TextStyles = typeof textStyles
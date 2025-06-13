/**
 * Lerian Design Tokens - Colors
 * 
 * Core color palette for Lerian branding and Midaz plugin development.
 * These tokens provide the foundation for consistent color usage across all applications.
 */

export const colors = {
  // Primary Brand Colors
  lerian: {
    yellow: {
      value: '#F4C430',
      description: 'Primary Lerian yellow - use for primary actions, highlights, and brand elements',
      usage: ['primary buttons', 'active states', 'brand accents', 'call-to-action elements']
    },
    blue: {
      value: '#1E40AF',
      description: 'Secondary Lerian blue - use for secondary actions and informational elements',
      usage: ['secondary buttons', 'links', 'informational badges', 'data visualization']
    },
    green: {
      value: '#10B981',
      description: 'Success and positive state color',
      usage: ['success messages', 'positive indicators', 'completed transactions', 'growth metrics']
    },
    red: {
      value: '#EF4444',
      description: 'Error and warning state color',
      usage: ['error messages', 'destructive actions', 'failed transactions', 'critical alerts']
    },
    black: {
      value: '#191A1B',
      description: 'Primary text and high-contrast elements',
      usage: ['primary text', 'headings', 'borders', 'icons']
    }
  },

  // Neutral Grayscale
  gray: {
    50: {
      value: '#F9FAFB',
      description: 'Lightest gray for subtle backgrounds'
    },
    100: {
      value: '#F3F4F6', 
      description: 'Light gray for card backgrounds and subtle borders'
    },
    200: {
      value: '#E5E7EB',
      description: 'Medium-light gray for borders and dividers'
    },
    300: {
      value: '#D1D5DB',
      description: 'Medium gray for disabled states and placeholders'
    },
    400: {
      value: '#9CA3AF',
      description: 'Medium-dark gray for secondary text'
    },
    500: {
      value: '#6B7280',
      description: 'Dark gray for body text'
    },
    600: {
      value: '#4B5563',
      description: 'Darker gray for headings and emphasis'
    },
    700: {
      value: '#374151',
      description: 'Very dark gray for high-contrast text'
    },
    800: {
      value: '#1F2937',
      description: 'Near-black for maximum contrast'
    },
    900: {
      value: '#111827',
      description: 'Darkest gray, alternative to pure black'
    }
  },

  // Semantic Colors
  semantic: {
    success: {
      light: '#D1FAE5',
      default: '#10B981', 
      dark: '#059669',
      description: 'Success states and positive feedback'
    },
    warning: {
      light: '#FEF3C7',
      default: '#F59E0B',
      dark: '#D97706',
      description: 'Warning states and cautionary feedback'
    },
    error: {
      light: '#FEE2E2',
      default: '#EF4444',
      dark: '#DC2626',
      description: 'Error states and destructive actions'
    },
    info: {
      light: '#DBEAFE',
      default: '#3B82F6',
      dark: '#2563EB',
      description: 'Informational content and neutral feedback'
    }
  },

  // Financial Context Colors
  financial: {
    credit: {
      value: '#10B981',
      description: 'Positive financial transactions and balances'
    },
    debit: {
      value: '#EF4444', 
      description: 'Negative financial transactions and charges'
    },
    pending: {
      value: '#F59E0B',
      description: 'Pending transactions and processing states'
    },
    account: {
      primary: '#1E40AF',
      secondary: '#6366F1',
      business: '#7C3AED',
      description: 'Different account types in financial applications'
    }
  }
} as const

/**
 * CSS Custom Properties mapping for easy integration with Tailwind and CSS
 */
export const cssVariables = {
  '--lerian-yellow': colors.lerian.yellow.value,
  '--lerian-blue': colors.lerian.blue.value,
  '--lerian-green': colors.lerian.green.value,
  '--lerian-red': colors.lerian.red.value,
  '--lerian-black': colors.lerian.black.value,
  
  '--gray-50': colors.gray[50].value,
  '--gray-100': colors.gray[100].value,
  '--gray-200': colors.gray[200].value,
  '--gray-300': colors.gray[300].value,
  '--gray-400': colors.gray[400].value,
  '--gray-500': colors.gray[500].value,
  '--gray-600': colors.gray[600].value,
  '--gray-700': colors.gray[700].value,
  '--gray-800': colors.gray[800].value,
  '--gray-900': colors.gray[900].value,
} as const

/**
 * Type definitions for TypeScript support
 */
export type LerianColors = typeof colors
export type ColorToken = {
  value: string
  description: string
  usage?: string[]
}
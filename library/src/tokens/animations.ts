/**
 * Lerian Design Tokens - Animations & Transitions
 * 
 * Consistent timing, easing, and animation definitions for smooth user experiences.
 * Used for micro-interactions, state changes, and component transitions.
 */

export const timing = {
  // Duration scale
  instant: {
    value: '0ms',
    description: 'Instant transition - no animation'
  },
  fast: {
    value: '150ms',
    description: 'Fast transitions for hover states and small changes'
  },
  base: {
    value: '200ms',
    description: 'Base transition duration for most interactions'
  },
  medium: {
    value: '300ms',
    description: 'Medium transitions for component state changes'
  },
  slow: {
    value: '500ms',
    description: 'Slow transitions for page transitions and complex animations'
  },
  slower: {
    value: '700ms',
    description: 'Slower transitions for emphasis and dramatic effect'
  }
} as const

/**
 * Easing functions for natural motion
 */
export const easing = {
  // Basic easing
  linear: {
    value: 'linear',
    description: 'Linear motion - constant speed'
  },
  ease: {
    value: 'ease',
    description: 'Default easing with slow start and end'
  },
  'ease-in': {
    value: 'ease-in',
    description: 'Slow start, faster end - for elements entering'
  },
  'ease-out': {
    value: 'ease-out',
    description: 'Fast start, slow end - for elements exiting'
  },
  'ease-in-out': {
    value: 'ease-in-out',
    description: 'Slow start and end - for smooth transitions'
  },

  // Custom cubic-bezier easing
  bounce: {
    value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    description: 'Bouncy easing for playful interactions'
  },
  smooth: {
    value: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    description: 'Smooth, natural easing'
  },
  snappy: {
    value: 'cubic-bezier(0.4, 0, 0.2, 1)',
    description: 'Sharp, responsive easing for UI interactions'
  }
} as const

/**
 * Common transition combinations
 */
export const transitions = {
  // Basic property transitions
  'fade': {
    value: `opacity ${timing.base.value} ${easing['ease-in-out'].value}`,
    description: 'Fade in/out transition'
  },
  'slide': {
    value: `transform ${timing.base.value} ${easing.smooth.value}`,
    description: 'Slide transform transition'
  },
  'scale': {
    value: `transform ${timing.fast.value} ${easing.snappy.value}`,
    description: 'Scale transform transition'
  },
  'color': {
    value: `color ${timing.base.value} ${easing['ease-in-out'].value}`,
    description: 'Color change transition'
  },
  'background': {
    value: `background-color ${timing.base.value} ${easing['ease-in-out'].value}`,
    description: 'Background color transition'
  },
  'border': {
    value: `border-color ${timing.base.value} ${easing['ease-in-out'].value}`,
    description: 'Border color transition'
  },
  'shadow': {
    value: `box-shadow ${timing.base.value} ${easing.smooth.value}`,
    description: 'Box shadow transition'
  },

  // Combined transitions
  'all-fast': {
    value: `all ${timing.fast.value} ${easing['ease-in-out'].value}`,
    description: 'Fast transition for all properties'
  },
  'all-base': {
    value: `all ${timing.base.value} ${easing['ease-in-out'].value}`,
    description: 'Base transition for all properties'
  },
  'all-smooth': {
    value: `all ${timing.medium.value} ${easing.smooth.value}`,
    description: 'Smooth transition for all properties'
  }
} as const

/**
 * Component-specific transitions
 */
export const componentTransitions = {
  // Button states
  button: {
    value: `background-color ${timing.fast.value} ${easing['ease-in-out'].value}, 
            transform ${timing.fast.value} ${easing.snappy.value}, 
            box-shadow ${timing.fast.value} ${easing.smooth.value}`,
    description: 'Button hover and active state transitions'
  },

  // Modal and overlay
  modal: {
    backdrop: `opacity ${timing.medium.value} ${easing['ease-in-out'].value}`,
    content: `transform ${timing.medium.value} ${easing.smooth.value}, opacity ${timing.medium.value} ${easing['ease-in-out'].value}`,
    description: 'Modal entrance and exit transitions'
  },

  // Dropdown and popover
  dropdown: {
    value: `opacity ${timing.fast.value} ${easing['ease-out'].value}, 
            transform ${timing.fast.value} ${easing['ease-out'].value}`,
    description: 'Dropdown show/hide transitions'
  },

  // Financial specific
  'balance-update': {
    value: `color ${timing.medium.value} ${easing['ease-in-out'].value}, 
            transform ${timing.medium.value} ${easing.bounce.value}`,
    description: 'Balance value change animation'
  },
  'transaction-row': {
    value: `background-color ${timing.fast.value} ${easing['ease-in-out'].value}, 
            transform ${timing.fast.value} ${easing.smooth.value}`,
    description: 'Transaction row hover and selection'
  }
} as const

/**
 * Keyframe animations
 */
export const keyframes = {
  // Loading animations
  spin: {
    name: 'lerian-spin',
    keyframes: `
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `,
    duration: '1s',
    timing: 'linear',
    iteration: 'infinite',
    description: 'Spinning loader animation'
  },
  pulse: {
    name: 'lerian-pulse',
    keyframes: `
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    `,
    duration: '2s',
    timing: easing['ease-in-out'].value,
    iteration: 'infinite',
    description: 'Pulsing animation for loading states'
  },
  bounce: {
    name: 'lerian-bounce',
    keyframes: `
      0%, 20%, 53%, 80%, 100% { transform: translate3d(0, 0, 0); }
      40%, 43% { transform: translate3d(0, -30px, 0); }
      70% { transform: translate3d(0, -15px, 0); }
      90% { transform: translate3d(0, -4px, 0); }
    `,
    duration: '1s',
    timing: easing['ease-in-out'].value,
    iteration: '1',
    description: 'Bounce animation for success states'
  },

  // Slide animations
  'slide-in-from-top': {
    name: 'lerian-slide-in-from-top',
    keyframes: `
      from { transform: translateY(-100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    `,
    duration: timing.medium.value,
    timing: easing.smooth.value,
    description: 'Slide in from top animation'
  },
  'slide-in-from-bottom': {
    name: 'lerian-slide-in-from-bottom',
    keyframes: `
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    `,
    duration: timing.medium.value,
    timing: easing.smooth.value,
    description: 'Slide in from bottom animation'
  },

  // Financial specific animations
  'balance-increment': {
    name: 'lerian-balance-increment',
    keyframes: `
      0% { transform: scale(1); color: inherit; }
      50% { transform: scale(1.05); color: var(--lerian-green, #10B981); }
      100% { transform: scale(1); color: var(--lerian-green, #10B981); }
    `,
    duration: timing.medium.value,
    timing: easing.bounce.value,
    description: 'Animation for positive balance changes'
  },
  'balance-decrement': {
    name: 'lerian-balance-decrement',
    keyframes: `
      0% { transform: scale(1); color: inherit; }
      50% { transform: scale(0.95); color: var(--lerian-red, #EF4444); }
      100% { transform: scale(1); color: var(--lerian-red, #EF4444); }
    `,
    duration: timing.medium.value,
    timing: easing.bounce.value,
    description: 'Animation for negative balance changes'
  }
} as const

/**
 * Type definitions
 */
export type TimingTokens = typeof timing
export type EasingTokens = typeof easing
export type TransitionTokens = typeof transitions
export type ComponentTransitionTokens = typeof componentTransitions
export type KeyframeTokens = typeof keyframes
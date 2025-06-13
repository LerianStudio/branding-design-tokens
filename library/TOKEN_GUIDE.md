# Lerian Design Tokens - Usage Guide

A comprehensive guide to using Lerian Design Tokens in your Midaz plugin development.

## 📚 What Are Design Tokens?

Design tokens are atomic design values that represent the smallest pieces of a design system. They're platform-agnostic named entities that store visual design attributes like colors, typography, spacing, and more. Think of them as the DNA of your design system.

## 🎨 Token Categories

### Colors
- **Brand Colors**: Primary Lerian yellow, blue, green, red, and black
- **Gray Scale**: 10-step neutral palette for text and backgrounds
- **Semantic Colors**: Success, warning, error, and info states
- **Financial Context**: Credit, debit, pending, and account type colors

### Typography
- **Font Families**: IBM Plex Serif (headings), Inter (body), JetBrains Mono (code)
- **Font Sizes**: xs (12px) to 6xl (60px) scale
- **Font Weights**: Light (300) to bold (700)
- **Text Styles**: Predefined combinations for common use cases

### Spacing
- **Base Scale**: 4px increments from 0 to 128px
- **Semantic Spacing**: Component, layout, and financial-specific spacing
- **Containers**: Responsive container widths
- **Border Radius**: From none to full radius scale

### Shadows
- **Base Shadows**: xs to 2xl elevation shadows
- **Colored Shadows**: Brand and semantic colored shadows
- **Financial Shadows**: Specific shadows for financial components

### Animations
- **Timing**: Duration scale from instant to slower
- **Easing**: Cubic-bezier curves for natural motion
- **Transitions**: Pre-configured transition combinations

## 🚀 Getting Started

### 1. Installation

```bash
# The tokens are included in the design system
# No additional installation required
```

### 2. Basic Import

```typescript
// Import all tokens
import { tokens } from '@/tokens'

// Import specific utilities
import { 
  getColor, 
  getSpacing, 
  getTextStyle,
  useColors,
  useTypography 
} from '@/tokens/react'
```

### 3. Setup Token Provider

Wrap your app with the TokenProvider to inject CSS variables:

```tsx
import { TokenProvider } from '@/tokens/react'

function App() {
  return (
    <TokenProvider>
      <YourAppContent />
    </TokenProvider>
  )
}
```

## 💡 Usage Examples

### Colors

```typescript
// Using hooks
const { primary, getColor } = useColors()
const yellowColor = getColor('lerian.yellow') // '#F4C430'

// Direct access
const blueColor = tokens.colors.lerian.blue.value
const gray500 = tokens.colors.gray[500].value

// CSS variables (automatically injected)
const styles = {
  color: 'var(--lerian-yellow)',
  backgroundColor: 'var(--gray-100)'
}
```

### Typography

```typescript
// Using hooks
const { getTextStyle, fontSize } = useTypography()
const headingStyle = getTextStyle('heading-1')
const largeFontSize = fontSize('lg')

// Styled Text component
<StyledText style="heading-1" color="lerian.yellow">
  Financial Dashboard
</StyledText>

// Financial amount component
<FinancialAmount 
  amount={1500.00} 
  colorScheme="positive" 
  showSign 
/>
```

### Spacing

```typescript
// Using hooks
const { space, getSpacing } = useSpacing()
const mediumSpace = space(4) // '1rem'
const cardPadding = getSpacing('md')

// Spacing Box component
<SpacingBox p={4} mx={6} mb="lg">
  <Content />
</SpacingBox>

// CSS variables
const styles = {
  padding: 'var(--spacing-4)',
  borderRadius: 'var(--radius-md)'
}
```

### Shadows

```typescript
// Using hooks
const { shadow, coloredShadow } = useShadows()
const cardShadow = shadow('md')
const primaryShadow = coloredShadow('lerian-yellow', 'medium')

// CSS styles
const cardStyles = {
  boxShadow: tokens.shadows.base.md.value
}
```

### Animations

```typescript
// Using hooks
const { timing, easing, transition } = useAnimations()
const fastTiming = timing('fast') // '150ms'
const smoothEasing = easing('smooth')
const fadeTransition = transition('fade')

// CSS transitions
const buttonStyles = {
  transition: 'all 200ms ease-in-out'
}
```

## 🎯 Best Practices

### 1. Use Semantic Values
```typescript
// ✅ Good - semantic meaning
const cardPadding = spacing.semantic.component.md

// ❌ Avoid - arbitrary values
const cardPadding = '16px'
```

### 2. Leverage Type Safety
```typescript
// ✅ TypeScript will catch errors
const textStyle = getTextStyle('heading-1')
const spacing = getSpacing(4)

// ✅ Hover for documentation
const color = colors.lerian.yellow // Shows description and usage
```

### 3. Financial Context
```typescript
// ✅ Use financial-specific tokens
const creditColor = colors.financial.credit.value
const transactionSpacing = spacing.semantic.financial['transaction-gap']

// ✅ Financial components
<FinancialAmount amount={amount} colorScheme="auto" />
<StyledText style="account-number">{accountNumber}</StyledText>
```

### 4. Responsive Design
```typescript
// ✅ Use container tokens for responsive layouts
const containerStyles = {
  maxWidth: containers['2xl'].value, // 672px
  margin: '0 auto',
  padding: spacing.semantic.layout.md
}
```

## 🎨 Theming & Customization

### CSS Variables
All tokens are available as CSS variables:

```css
/* Colors */
--lerian-yellow: #F4C430;
--lerian-blue: #1E40AF;
--gray-500: #6B7280;

/* Spacing */
--spacing-4: 1rem;
--radius-md: 0.375rem;

/* Shadows */
--shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1)...;
```

### Tailwind Integration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'lerian-yellow': 'var(--lerian-yellow)',
        'lerian-blue': 'var(--lerian-blue)',
      },
      spacing: {
        '4': 'var(--spacing-4)',
        '6': 'var(--spacing-6)',
      }
    }
  }
}
```

## 🔧 Advanced Usage

### Custom Component Creation

```typescript
// Financial card component using tokens
function FinancialCard({ children, variant = 'default' }) {
  const { shadow } = useShadows()
  const { space } = useSpacing()
  
  return (
    <div
      style={{
        padding: space(6),
        borderRadius: tokens.spacing.borderRadius.md.value,
        boxShadow: shadow('financial-card'),
        backgroundColor: variant === 'positive' 
          ? colors.semantic.success.light 
          : 'white'
      }}
    >
      {children}
    </div>
  )
}
```

### Theme Provider Integration

```typescript
// Custom theme context with tokens
const ThemeContext = createContext({
  colors: tokens.colors,
  spacing: tokens.spacing,
  typography: tokens.typography
})

function useTheme() {
  return useContext(ThemeContext)
}
```

## 🚦 Migration Guide

### From Hardcoded Values
```typescript
// Before
const styles = {
  color: '#F4C430',
  fontSize: '18px',
  padding: '16px',
  borderRadius: '6px'
}

// After
const { primary } = useColors()
const { fontSize } = useTypography()
const { space, radius } = useSpacing()

const styles = {
  color: primary,
  fontSize: fontSize('lg'),
  padding: space(4),
  borderRadius: radius('md')
}
```

### From CSS Variables
```typescript
// Before
const styles = {
  color: 'var(--primary-color)',
  padding: 'var(--spacing-medium)'
}

// After
const styles = {
  color: getColor('lerian.yellow'),
  padding: getSpacing(4)
}
```

## 📱 Component Examples

### Financial Dashboard Card
```tsx
function BalanceCard({ balance, accountType }) {
  return (
    <SpacingBox p={6} className="bg-white rounded-lg shadow-md">
      <StyledText style="body-small" color="gray.500">
        {accountType} Balance
      </StyledText>
      <FinancialAmount 
        amount={balance} 
        colorScheme="auto"
        className="mt-2"
      />
    </SpacingBox>
  )
}
```

### Transaction List Item
```tsx
function TransactionItem({ transaction }) {
  return (
    <SpacingBox 
      px={4} 
      py={3} 
      className="border-b hover:bg-gray-50 transition-colors"
    >
      <div className="flex justify-between items-center">
        <div>
          <StyledText style="body-base">
            {transaction.description}
          </StyledText>
          <StyledText style="account-number" color="gray.500">
            {transaction.id}
          </StyledText>
        </div>
        <FinancialAmount 
          amount={transaction.amount}
          colorScheme="auto"
          showSign
        />
      </div>
    </SpacingBox>
  )
}
```

## 🎯 Next Steps

1. **Explore the Token Showcase**: Visit `/design-tokens` to see all tokens in action
2. **Check Component Examples**: Browse `/blocks` for real-world usage
3. **Build Your Plugin**: Start using tokens in your Midaz plugin development
4. **Contribute**: Share feedback and improvements with the Lerian team

## 📞 Support

- **Documentation**: This guide and the live showcase at `/design-tokens`
- **GitHub**: [Issues and discussions](https://github.com/lerianstudio/branding-design-tokens)
- **Midaz Docs**: [Plugin development guides](https://github.com/lerianstudio/midaz)

---

*Built with ❤️ by Lerian Studio for the Midaz community and partners.*
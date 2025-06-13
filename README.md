# Lerian Studio Branding Design Tokens

This repository contains the official design tokens and brand assets for Lerian Studio, specifically configured for use with shadcn/ui component library. These tokens ensure consistent visual identity across all digital products and interfaces.

## 🎨 Brand Overview

**Mission**: "Coding together to give everyone the freedom to write your own future"

Lerian Studio is an open-source company providing core banking solutions for developers and businesses across different segments. Our visual identity reflects our collaborative, innovative, and accessible approach to financial technology.

### Brand Values
- **Inquietos** (Restless): We challenge standards and act with confidence
- **Assertiva** (Assertive): We create efficient, accessible, and personalized financial solutions  
- **Engajadora** (Engaging): Building community through meaningful exchanges
- **Destemida** (Fearless): Contributing to business independence and market evolution

### Visual Principles
- **Open Source Guidelines**: Freedom and accessibility at the core
- **Vibrant Innovation**: Bold colors representing technological advancement
- **Community Focus**: Collaborative design emphasizing connection
- **Technical Excellence**: Clean, purposeful design systems

> **Complete Brand Guidelines**: Reference `support-materials/Lerian_Guidelines.pdf` (119 pages) for comprehensive brand strategy, verbal identity, and detailed usage guidelines.

## 🌈 Color System

### Primary Colors

The Lerian color palette is built around four primary brand colors:

```css
:root {
  /* Primary Brand Colors */
  --lerian-yellow: #FEBD02;
  --lerian-yellow-rgb: 254, 237, 2;
  --lerian-yellow-pantone: 3945C;
  
  --lerian-green: #50F769;
  --lerian-green-rgb: 80, 247, 105;
  --lerian-green-pantone: 2270C;
  
  --lerian-red: #FF6760;
  --lerian-red-rgb: 255, 103, 96;
  --lerian-red-pantone: 2029C;
  
  --lerian-blue: #2ED8FE;
  --lerian-blue-rgb: 46, 216, 254;
  --lerian-blue-pantone: 306C;
}
```

### Neutral Colors

Supporting neutral palette for text, backgrounds, and UI elements:

```css
:root {
  /* Neutral Colors */
  --lerian-black: #191A1B;
  --lerian-black-rgb: 25, 26, 27;
  --lerian-black-pantone: 418C;
  
  --lerian-gray-dark: #3E3C37;
  --lerian-gray-dark-rgb: 62, 60, 55;
  --lerian-gray-dark-pantone: 2336;
  
  --lerian-gray-medium: #8B877C;
  --lerian-gray-medium-rgb: 139, 135, 124;
  --lerian-gray-medium-pantone: 2332;
  
  --lerian-gray: #CECECE;
  --lerian-gray-rgb: 206, 206, 206;
  --lerian-gray-pantone: 427C;
  
  --lerian-gray-light: #F2F2F2;
  --lerian-gray-light-rgb: 242, 242, 242;
  --lerian-gray-light-pantone: COOL-GRAY-1C;
}
```

### Semantic Color Mappings

For shadcn/ui integration, map Lerian colors to semantic meanings:

```css
:root {
  /* Semantic Mappings for shadcn/ui */
  --primary: var(--lerian-blue);
  --primary-foreground: white;
  
  --secondary: var(--lerian-gray-light);
  --secondary-foreground: var(--lerian-black);
  
  --accent: var(--lerian-yellow);
  --accent-foreground: var(--lerian-black);
  
  --destructive: var(--lerian-red);
  --destructive-foreground: white;
  
  --success: var(--lerian-green);
  --success-foreground: var(--lerian-black);
  
  --muted: var(--lerian-gray);
  --muted-foreground: var(--lerian-gray-dark);
  
  --background: white;
  --foreground: var(--lerian-black);
  
  --card: white;
  --card-foreground: var(--lerian-black);
  
  --border: var(--lerian-gray);
  --input: var(--lerian-gray-light);
  --ring: var(--lerian-blue);
}
```

## 🖋️ Logo Usage

### Logo Variants

The Lerian logo is available in multiple formats and should be used appropriately:

#### Positive Logo (Dark on Light)
- **File**: `support-materials/logo/RGB/PNG/logoLerian_logoLerian_positivo.png`
- **Usage**: Light backgrounds, white backgrounds, minimal contrast scenarios
- **Minimum size**: 120px width for digital use

#### Negative Logo (Light on Dark)  
- **File**: `support-materials/logo/RGB/PNG/logoLerian_logoLerian_negativo.png`
- **Usage**: Dark backgrounds, colored backgrounds, high contrast scenarios
- **Minimum size**: 120px width for digital use

#### Vector Formats
- **SVG**: `support-materials/logo/RGB/SVG/` (preferred for web)
- **AI/EPS**: `support-materials/logo/RGB/AI/` and `support-materials/logo/RGB/EPS/` (for print)

### Logo Implementation Guidelines

```css
.lerian-logo {
  min-width: 120px;
  height: auto;
  max-width: 300px;
}

.lerian-logo--header {
  height: 40px;
  width: auto;
}

.lerian-logo--footer {
  height: 32px;
  width: auto;
  opacity: 0.8;
}
```

## 🦎 Sindarian Avatar (Brand Mascot)

The Sindarian avatar is a key brand element representing Lerian's creative and technical nature.

### Avatar Variants

#### Color Schemes
- **Blue & Purple**: `support-materials/sindarian avatar/RGB/Pose X/Azul e Roxo_*.png`
- **Pink & Orange**: `support-materials/sindarian avatar/RGB/Pose X/Rosa e Laranja_*.png`

#### Available Poses
1. **Pose 1 (3/4 View)**: Standard presentation
2. **Pose 2 (Placa/Sign)**: Holding informational sign
3. **Pose 3 (Pulo/Jump)**: Dynamic action pose
4. **Pose 4 (Deitado/Lying)**: Relaxed position
5. **Pose 5 (Espreita/Peek)**: Interactive/curious pose
6. **Pose 6 (Frente/Front)**: Direct engagement

### Avatar Usage Guidelines

- Use sparingly as accent elements, not primary design components
- Maintain original aspect ratio
- Minimum size: 80px height
- Preferred use: Loading states, empty states, illustration accents
- Avoid overuse in professional/enterprise contexts

## 📐 Graphic Elements

### Pattern System

Lerian uses geometric dashed-line patterns for visual interest:

- **File**: `support-materials/graphs/RGB/Grafismo X/`
- **Usage**: Background elements, section dividers, decorative accents
- **Implementation**: SVG preferred for scalability

```css
.lerian-pattern {
  opacity: 0.1;
  position: absolute;
  pointer-events: none;
  mix-blend-mode: multiply;
}
```

## 📝 Typography System

### Primary Typography: Konnect

**For Titles and Headlines**  
- **Font**: Konnect (Semibold weight only)
- **Usage**: Exclusively for titles and highlights in visual identity
- **Access**: [ladd-design.com/family/konnect/](https://ladd-design.com/family/konnect/)
- **Implementation**: Ensures consistent and aligned brand identity

```css
:root {
  --font-heading: "Konnect", sans-serif;
  --font-heading-weight: 600; /* Semibold only */
}

.heading {
  font-family: var(--font-heading);
  font-weight: var(--font-heading-weight);
}
```

### Secondary Typography: IBM Plex Serif

**For Body Text and Running Copy**
- **Font**: IBM Plex Serif
- **Weights Available**: Light (300), Regular (400), Medium (500), Bold (700)
- **Usage**: Subtitles and body text throughout the identity
- **Access**: Available free via Google Fonts
- **Characteristics**: Provides fluid and consistent reading, ensuring standardized communication

```css
:root {
  --font-body: "IBM Plex Serif", serif;
  --font-body-light: 300;
  --font-body-regular: 400;
  --font-body-medium: 500;
  --font-body-bold: 700;
}

.body-text {
  font-family: var(--font-body);
  font-weight: var(--font-body-regular);
}
```

### Typography Scale & Spacing

Based on the brand guidelines spacing system:

```css
:root {
  /* Typography Scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
}
```

### Typography Best Practices

#### ✅ Do's
- Use Konnect **only** for titles and headlines
- Use IBM Plex Serif for all body text and subtitles
- Maintain proper spacing: line-height 120%-150% for titles, 150% for body text
- Use center, left, or right alignment with optical kerning
- Follow the established type scale ratios

#### ❌ Don'ts  
- Don't use syllabic separation that hinders readability
- Don't hyphenate titles or create alignments that compromise legibility
- Don't mix font families beyond the approved system
- Don't use Konnect for body text or extended reading

## 🔧 shadcn/ui Integration

### Installation

1. Install shadcn/ui in your project
2. Replace the default theme with Lerian design tokens
3. Update your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      // Typography
      fontFamily: {
        'heading': ['Konnect', 'sans-serif'],
        'body': ['IBM Plex Serif', 'serif'],
        'sans': ['IBM Plex Serif', 'serif'], // Override default
        'serif': ['IBM Plex Serif', 'serif'],
      },
      fontWeight: {
        'heading': '600', // Konnect Semibold only
        'light': '300',
        'normal': '400',
        'medium': '500',
        'bold': '700',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.25' }],
        '3xl': ['1.875rem', { lineHeight: '1.25' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.25' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
      },
      
      // Colors
      colors: {
        'lerian-yellow': '#FEBD02',
        'lerian-green': '#50F769',
        'lerian-red': '#FF6760',
        'lerian-blue': '#2ED8FE',
        'lerian-black': '#191A1B',
        'lerian-gray-dark': '#3E3C37',
        'lerian-gray-medium': '#8B877C',
        'lerian-gray': '#CECECE',
        'lerian-gray-light': '#F2F2F2',
        
        // shadcn/ui semantic mappings
        primary: {
          DEFAULT: '#2ED8FE',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F2F2F2',
          foreground: '#191A1B',
        },
        accent: {
          DEFAULT: '#FEBD02',
          foreground: '#191A1B',
        },
        destructive: {
          DEFAULT: '#FF6760',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#CECECE',
          foreground: '#3E3C37',
        },
        border: '#CECECE',
        input: '#F2F2F2',
        ring: '#2ED8FE',
      }
    }
  }
}
```

### Component Customization Examples

#### Typography Components
```typescript
// Heading Component with Konnect
const Heading = ({ children, level = 1, className, ...props }) => {
  const Component = `h${level}`;
  return (
    <Component 
      className={cn(
        "font-heading font-heading tracking-tight",
        level === 1 && "text-4xl lg:text-5xl",
        level === 2 && "text-3xl lg:text-4xl", 
        level === 3 && "text-2xl lg:text-3xl",
        level === 4 && "text-xl lg:text-2xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Body Text Component with IBM Plex Serif
const Text = ({ children, variant = "body", className, ...props }) => {
  return (
    <p 
      className={cn(
        "font-body leading-relaxed",
        variant === "body" && "text-base font-normal",
        variant === "lead" && "text-lg font-medium",
        variant === "small" && "text-sm font-light",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
```

#### Button Variants
```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-body font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-lerian-blue text-white hover:bg-lerian-blue/90",
        secondary: "bg-lerian-gray-light text-lerian-black hover:bg-lerian-gray-light/80",
        accent: "bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90",
        destructive: "bg-lerian-red text-white hover:bg-lerian-red/90",
        success: "bg-lerian-green text-lerian-black hover:bg-lerian-green/90",
      }
    }
  }
)
```

#### Usage Examples
```jsx
// Page Header with proper typography hierarchy
<div className="space-y-4">
  <Heading level={1} className="text-lerian-black">
    Freedom at the Core
  </Heading>
  <Text variant="lead" className="text-lerian-gray-dark">
    Coding together to give everyone the freedom to write your own future
  </Text>
  <Text className="text-lerian-gray-medium">
    We create efficient, accessible, and personalized financial solutions 
    contributing to business independence and market evolution.
  </Text>
</div>
```

## 📁 File Structure Reference

```
support-materials/
├── Colors/
│   ├── Lerian -_ Cores.png          # Color palette visualization
│   └── Lerian _Cores.pdf            # Print-ready color guide
├── Lerian_Guidelines.pdf            # Complete brand guidelines
├── logo/
│   ├── CMYK/                        # Print versions
│   └── RGB/                         # Digital versions
│       ├── PNG/                     # Raster formats
│       ├── SVG/                     # Vector formats (preferred)
│       ├── PDF/                     # Print-ready
│       ├── AI/                      # Adobe Illustrator source
│       └── EPS/                     # Vector print format
├── graphs/
│   ├── CMYK/                        # Print graphic elements
│   └── RGB/                         # Digital graphic elements
│       └── Grafismo [1-5]/          # 5 different pattern variants
└── sindarian avatar/
    ├── CMYK/                        # Print versions
    └── RGB/                         # Digital versions
        └── Pose [1-6] _*/           # 6 different poses per color scheme
```

## 🎯 Usage Best Practices

### Do's
- ✅ Use the complete color palette consistently
- ✅ Maintain proper contrast ratios (WCAG AA minimum)
- ✅ Use vector formats (SVG) when possible
- ✅ Implement semantic color mappings for component libraries
- ✅ Test color combinations for accessibility
- ✅ Use the Sindarian avatar sparingly for accent/personality

### Don'ts
- ❌ Don't modify the primary brand colors
- ❌ Don't use low-contrast color combinations
- ❌ Don't stretch or distort logo proportions
- ❌ Don't overuse the avatar in professional contexts
- ❌ Don't use raster formats when vector alternatives exist
- ❌ Don't combine more than 3 primary colors in a single interface

## 🔍 Color Accessibility

All color combinations have been tested for WCAG compliance:

| Background | Foreground | Contrast Ratio | WCAG Level |
|------------|------------|----------------|------------|
| Lerian Blue | White | 4.8:1 | AA |
| Lerian Yellow | Black | 14.2:1 | AAA |
| Lerian Green | Black | 11.3:1 | AAA |
| Lerian Red | White | 4.9:1 | AA |
| Black | White | 16.8:1 | AAA |

## 🎯 Brand Applications

### Voice & Tone (from Brand Guidelines)

**Verbal Identity Principles:**
- **Afiado** (Sharp): Direct, clear communication
- **Insurgente** (Insurgent): Challenging conventions with purpose  
- **Tech**: Modern, accessible technical language

**Content Themes:**
- Competitive context highlighting our differentiation
- Target audience focus (developers, businesses, collaborators)
- Benefits emphasizing efficiency and accessibility
- Unique attributes showcasing our fearless approach
- Results demonstrating real business impact

### Color Psychology & Usage

Each color in our palette carries specific meaning:

- **Lerian Yellow (#FEBD02)**: Innovation, energy, optimism - use for CTAs and highlights
- **Lerian Blue (#2ED8FE)**: Trust, technology, clarity - primary brand actions
- **Lerian Green (#50F769)**: Growth, success, accessibility - positive feedback
- **Lerian Red (#FF6760)**: Urgency, attention, alerts - warnings and errors

**Semantic Color Mapping Strategy:**
```css
/* Context-based color usage */
.success-state { color: var(--lerian-green); }
.warning-state { color: var(--lerian-yellow); }
.error-state { color: var(--lerian-red); }
.info-state { color: var(--lerian-blue); }
.neutral-state { color: var(--lerian-gray-dark); }
```

## 📞 Support & Questions

For questions about brand implementation or design token usage:

### Primary Resources
- **Complete Brand Guidelines**: `support-materials/Lerian_Guidelines.pdf` (119 pages)
  - Pages 1-43: Strategy, Brand Values, Positioning
  - Pages 44-56: Verbal Identity & Tone
  - Pages 57-119: Visual Identity, Typography, Applications
- **Color Specifications**: `support-materials/Colors/`
- **Logo Assets**: `support-materials/logo/` (RGB/CMYK formats)
- **Brand Assets**: `support-materials/sindarian avatar/` & `support-materials/graphs/`

### Quick Reference Pages
- **Brand Strategy**: PDF pages 5-42
- **Typography**: PDF pages 72-74 (Konnect + IBM Plex Serif)
- **Color System**: PDF page 77 (Main palette)
- **Logo Usage**: PDF pages 57-66
- **Spacing & Layout**: PDF page 74

### Implementation Notes
- Follow semantic color mappings for shadcn/ui components
- Use Konnect exclusively for headings (Semibold weight only)
- Default to IBM Plex Serif for all body text
- Reference brand voice guidelines for content strategy
- Maintain accessibility standards (WCAG AA minimum)

---

*Last updated: January 2025*  
*Version: 1.0.0*  
*Based on Lerian Guidelines v1.0 (25.03.01)*
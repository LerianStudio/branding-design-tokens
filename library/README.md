# Lerian Design System

## Overview

The official Lerian design system built with shadcn/ui, featuring components and blocks that follow our open-source branding guidelines for core banking applications.

## Features

### Complete Component Library
- **Authentication** - Login, register, password reset forms
- **Dashboard** - Analytics with Chart.js integration
- **Data Tables** - Banking transactions and account management
- **Communication** - Chat interfaces, notifications, alerts
- **E-commerce** - Banking product catalog and shopping experience
- **Marketing** - Landing pages and promotional components
- **Forms** - Comprehensive form examples with validation

### Brand Assets
- **Color Palette** - Official Lerian colors with usage guidelines
- **Typography** - Konnect + IBM Plex Serif font system
- **Logos & Graphics** - Complete brand asset library
- **Avatar System** - User, system, and business avatar components

## Development

### Prerequisites
- Node.js 18+
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

### Project Structure

```
src/
├── app/                    # Next.js 15 App Router pages
│   ├── blocks/            # Component block examples
│   │   ├── auth/          # Authentication components
│   │   ├── charts/        # Chart and analytics components
│   │   ├── communication/ # Chat and notification components
│   │   ├── dashboard/     # Dashboard layouts
│   │   ├── ecommerce/     # Banking product catalog
│   │   ├── forms/         # Form components
│   │   ├── marketing/     # Marketing and landing pages
│   │   └── tables/        # Data table components
│   ├── brand/             # Brand guidelines and assets
│   │   ├── assets/        # Logo, graphics, color palette
│   │   └── avatars/       # Avatar usage guide
│   └── components/        # Component showcase
├── components/
│   ├── layout/            # Layout components
│   └── ui/                # shadcn/ui components
└── lib/                   # Utilities
```

## Banking Focus

This design system is specifically designed for **Lerian Midaz**, our open-source core banking platform:

- **Transaction Processing** - Real-time transaction tables and status tracking
- **Account Management** - Customer account interfaces with balance displays
- **Banking Products** - Credit cards, loans, savings accounts showcase
- **Compliance** - Regulatory-compliant form designs and data handling
- **Security** - Bank-grade security indicators and authentication flows

## Branding

### Colors
- **Primary Yellow**: `#FEBD02` - Main brand color, CTAs, highlights
- **Success Green**: `#50F769` - Positive actions, success states
- **Alert Red**: `#FF6760` - Errors, warnings, destructive actions
- **Info Blue**: `#2ED8FE` - Information, secondary actions
- **Primary Black**: `#191A1B` - Text, headers, borders

### Typography
- **Headings**: Konnect (Semibold only)
- **Body Text**: IBM Plex Serif (Regular, Medium, Bold)

## Deployment

This project is configured for GitHub Pages deployment:

1. **Automatic Deployment**: Push to `main` branch triggers deployment
2. **Manual Build**: Run `npm run build` to generate static files in `out/`
3. **GitHub Pages**: Configured with proper base path and asset handling

### GitHub Pages Setup

The site will be available at: `https://[username].github.io/branding-design-tokens/`

## Usage Examples

### Basic Component Import

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading">Banking Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="bg-lerian-yellow text-lerian-black">
          Process Payment
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Chart Integration

```tsx
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{
    label: 'Revenue',
    data: [65, 59, 80],
    borderColor: '#FEBD02', // Lerian Yellow
    backgroundColor: '#FEBD0220',
  }]
}

export function RevenueChart() {
  return <Line data={data} />
}
```

## Contributing

This design system follows Lerian's brand guidelines. When contributing:

1. Use Lerian yellow (`#FEBD02`) as the primary color
2. Follow the typography system (Konnect + IBM Plex Serif)
3. Ensure WCAG AA accessibility compliance
4. Test components with banking use cases
5. Include proper TypeScript types

## License

Open source - free to use for banking and financial applications.

---

Built with ❤️ by Lerian Studio for the open-source banking community.

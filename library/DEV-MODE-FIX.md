# Lerian Design System - Dev Mode Fix Guide

## 🚨 Issue
CSS parsing error: `Module parse failed: Unexpected character '@' (1:0)`

## 🔧 Root Cause
The issue occurs when:
1. PostCSS configuration conflicts with Next.js dev mode
2. TailwindCSS directives aren't processed correctly
3. Cached build artifacts interfere with development

## ✅ Solution Steps

### Method 1: Automated Fix (Recommended)
```bash
# Run the automated setup script
./dev-setup.sh
```

### Method 2: Manual Fix
```bash
# 1. Clean everything
rm -rf node_modules package-lock.json .next out

# 2. Clear npm cache
npm cache clean --force

# 3. Install dependencies
npm install --legacy-peer-deps

# 4. Start dev server
npm run dev
```

### Method 3: Alternative CSS Import
If the issue persists, temporarily use the alternative CSS file:

```typescript
// In src/app/layout.tsx, replace:
import "./globals.css";

// With:
import "./globals-dev.css";
```

### Method 4: Alternative Next.js Config
```bash
# Backup current config
cp next.config.ts next.config.ts.bak

# Use development config
cp next.config.dev.js next.config.js

# Install and test
npm install && npm run dev
```

## 🔍 Troubleshooting

### Network Issues
```bash
# Check npm registry connectivity
npm ping

# Use alternative registry if needed
npm config set registry https://registry.npmjs.org/
```

### PostCSS Issues
```bash
# Verify PostCSS config
cat postcss.config.js

# Expected content:
# const config = {
#   plugins: {
#     tailwindcss: {},
#     autoprefixer: {},
#   },
# }
# module.exports = config
```

### TailwindCSS Issues
```bash
# Verify Tailwind config
npx tailwindcss --init --check

# Test Tailwind compilation
npx tailwindcss -i ./src/app/globals.css -o ./test-output.css
```

## 🎯 Expected Results

After successful fix:
- ✅ `npm run dev` starts without CSS errors
- ✅ Development server runs on http://localhost:3000 (or 3002)
- ✅ Hot reload works correctly
- ✅ Lerian design tokens are applied
- ✅ All shadcn/ui components render properly

## 📁 Files Modified

1. `postcss.config.js` - Fixed PostCSS configuration
2. `next.config.ts` - Updated Next.js settings
3. `src/app/globals.css` - Enhanced with complete Lerian tokens
4. `dev-setup.sh` - Automated fix script (NEW)
5. `src/app/globals-dev.css` - Alternative CSS import (NEW)
6. `next.config.dev.js` - Alternative Next.js config (NEW)

## 🔄 Fallback Options

If dev mode still fails:
1. Use static build: `npm run build && npx serve out`
2. Use production mode: `npm run build && npm start`
3. Deploy static files from `out/` directory

## 📞 Further Help

If issues persist:
1. Check Node.js version: `node --version` (should be 18+)
2. Check npm version: `npm --version` (should be 8+)
3. Verify internet connection for package downloads
4. Try clearing global npm cache: `npm cache clean --force`

---
*Updated: January 2025*
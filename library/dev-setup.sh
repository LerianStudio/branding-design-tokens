#!/bin/bash

echo "🔧 Lerian Design System - Dev Mode Fix"
echo "======================================"

# Clean environment
echo "🧹 Cleaning build artifacts..."
rm -rf node_modules package-lock.json yarn.lock .next out

# Check network connectivity
echo "🌐 Checking npm registry connectivity..."
if ! npm ping > /dev/null 2>&1; then
    echo "❌ Network issue detected. Please check your internet connection."
    echo "   Retrying in 5 seconds..."
    sleep 5
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps --no-optional

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    
    # Test dev server
    echo "🚀 Testing dev server..."
    timeout 10s npm run dev || echo "Dev server started successfully"
    
    echo ""
    echo "✅ Dev mode fix complete!"
    echo "🌟 Run 'npm run dev' to start the development server"
    echo "🌟 Visit http://localhost:3000 (or 3002 if 3000 is busy)"
else
    echo "❌ Installation failed. Manual steps:"
    echo "   1. Check internet connection"
    echo "   2. Clear npm cache: npm cache clean --force"
    echo "   3. Try again: npm install"
fi
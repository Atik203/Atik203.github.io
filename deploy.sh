#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting Portfolio Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI is not installed. Installing..."
    npm install -g vercel
    print_status "Vercel CLI installed"
fi

# Deploy API Backend
echo -e "\n📡 Deploying API Backend..."
cd api

# Check if .env exists
if [ ! -f .env ]; then
    print_warning ".env file not found. Please create one based on .env.example"
    print_warning "Make sure to set up environment variables in Vercel dashboard"
fi

# Deploy API
vercel --prod
if [ $? -eq 0 ]; then
    print_status "API deployed successfully"
    API_URL=$(vercel ls | grep api | head -1 | awk '{print $2}')
    echo "API URL: https://$API_URL"
else
    print_error "API deployment failed"
    exit 1
fi

# Go back to root
cd ..

# Update newsletter utility with new API URL
echo -e "\n🔄 Updating frontend API configuration..."
# This would need manual update or environment variable

# Deploy Frontend
echo -e "\n🎨 Deploying Frontend..."
vercel --prod
if [ $? -eq 0 ]; then
    print_status "Frontend deployed successfully"
    FRONTEND_URL=$(vercel ls | head -1 | awk '{print $2}')
    echo "Frontend URL: https://$FRONTEND_URL"
else
    print_error "Frontend deployment failed"
    exit 1
fi

echo -e "\n🎉 Deployment completed!"
echo -e "Frontend: https://$FRONTEND_URL"
echo -e "API: https://$API_URL"
echo -e "\nRemember to:"
echo -e "• Update FRONTEND_URL in API environment variables"
echo -e "• Update API_BASE_URL in newsletter.ts if needed"
echo -e "• Test all functionality in production"

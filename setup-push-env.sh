#!/bin/bash

# This script pushes environment variables from .env.local to Vercel
# Works on Linux, macOS, and Windows with Git Bash
# Make this script executable: chmod +x setup-push-env.sh

echo "🚀 Starting Vercel environment variables push..."

# Check if Node.js and npm are installed
if ! command -v npx &> /dev/null; then
    echo "❌ Node.js and npm are not installed. Please install them first."
    echo "https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js and npm are installed"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ .env.local file not found!"
    echo "Create the .env.local file with your environment variables first."
    exit 1
fi

# Check if user is logged in to Vercel CLI
if ! npx --yes vercel whoami &> /dev/null; then
    echo "🔐 You are not logged in to Vercel CLI. Please login first."
    npx --yes vercel login
    if [ $? -ne 0 ]; then
        echo "❌ Failed to login to Vercel"
        exit 1
    fi
else
    echo "✅ Already logged in to Vercel CLI"
fi

echo "📤 Pushing environment variables to Vercel..."

# Function to add environment variable to both environments
add_env_var() {
    local name=$1
    local value=$2
    
    echo "Adding $name to preview environment..."
    printf "%s" "$value" | npx vercel env add "$name" preview --force
    
    echo "Adding $name to production environment..."
    printf "%s" "$value" | npx vercel env add "$name" production --force
}

# Read .env.local and push each variable
while IFS='=' read -r name value; do
    # Skip empty lines and comments
    if [[ -n "$name" && ! "$name" =~ ^[[:space:]]*# ]]; then
        # Remove leading/trailing whitespace
        name=$(echo "$name" | xargs)
        value=$(echo "$value" | xargs)
        
        if [[ -n "$name" && -n "$value" ]]; then
            echo "📤 Pushing $name..."
            add_env_var "$name" "$value"
        fi
    fi
done < .env.local

echo ""
echo "✅ All environment variables have been added to your Vercel project!"
echo "Note: You may need to redeploy your project for the changes to take effect." 
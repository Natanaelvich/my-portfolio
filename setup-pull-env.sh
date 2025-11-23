#!/bin/bash

# This script pulls Vercel environment variables from production and creates/updates your .env.local file
# Works on Linux, macOS, and Windows with Git Bash
# Make this script executable: chmod +x setup-pull-env.sh

echo "🚀 Starting Vercel environment variables pull..."

echo "📥 Pulling Vercel environment variables from production to .env.local..."

# Backup existing .env.local if it exists
if [ -f .env.local ]; then
    echo "📦 Backing up existing .env.local to .env.local.backup..."
    cp .env.local .env.local.backup
fi

# Use Vercel CLI to pull environment variables directly
echo "⬇️  Downloading environment variables from Vercel production..."
npx --yes vercel env pull .env.local --environment=production --yes

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Environment variables have been successfully pulled from Vercel production to .env.local!"
    
    if [ -f .env.local.backup ]; then
        echo "📝 Your previous .env.local was backed up as .env.local.backup"
    fi
    
    echo ""
    echo "Contents of .env.local:"
    echo "======================"
    cat .env.local
else
    echo "❌ Failed to pull environment variables from Vercel."
    echo "Please make sure you're in the correct project directory and have the proper permissions."
    
    # Restore backup if pull failed
    if [ -f .env.local.backup ]; then
        echo "🔄 Restoring backup..."
        mv .env.local.backup .env.local
    fi
    
    exit 1
fi

echo ""
echo "✅ Completed!" 
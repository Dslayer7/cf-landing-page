# Deployment Commands

## Step 1: Push to GitHub
After creating your GitHub repository, run these commands:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cf-landing-page.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel (Easiest - Recommended)

### Option A: Using Vercel Website (No CLI needed)
1. Go to https://vercel.com/signup
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import your `cf-landing-page` repository
5. Click "Deploy" (Vercel auto-detects Next.js settings)
6. Done! Your site will be live in ~2 minutes

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project folder)
vercel

# For production deployment
vercel --prod
```

## Step 3: Deploy to Firebase (Alternative)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting

# Build your Next.js app
npm run build

# Deploy to Firebase
firebase deploy
```

## Step 4: Deploy to Netlify (Alternative)

### Using Netlify Website:
1. Go to https://app.netlify.com/start
2. Connect to GitHub
3. Select your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click "Deploy"

### Using Netlify CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Recommended: Vercel
- Zero configuration for Next.js
- Automatic HTTPS
- Global CDN
- Free tier perfect for landing pages
- Auto-deploys on every GitHub push

## Future Updates
After initial deployment, just push to GitHub:
```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically redeploy!

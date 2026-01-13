# Colección Restauración y Fe - Landing Page

A modern, conversion-optimized landing page for a faith-based self-help ebook collection, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

**Step 1: Install Dependencies**

Copy and paste this command in your terminal:

```bash
npm install
```

**What this does:** Installs all required packages including React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons.

---

**Step 2: Run Development Server**

```bash
npm run dev
```

**What this does:** Starts the Next.js development server on http://localhost:3000. The page will auto-reload when you make changes.

---

**Step 3: Build for Production**

```bash
npm run build
```

**What this does:** Creates an optimized production build in the `/out` folder, ready for Firebase Hosting.

---

## 📁 Project Structure

```
coleccion-restauracion/
├── public/                      # Static assets
│   ├── Cover01_ebook.jpg       # Book 1 cover
│   ├── Cover02_ebook.png       # Book 2 cover
│   ├── Cover03_ebook.png       # Book 3 cover
│   └── hero-image.jpg          # Hero section image (add this)
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles
│   │
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   └── Button.tsx      # Button component
│   │   │
│   │   └── sections/           # Page sections
│   │       ├── Header.tsx      # Navigation header
│   │       ├── HeroSection.tsx # Hero section
│   │       ├── EmotionalHookSection.tsx
│   │       ├── AuthorSection.tsx
│   │       ├── BooksCollectionSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── FinalCTASection.tsx
│   │       └── Footer.tsx
│   │
│   ├── lib/
│   │   └── constants.ts        # All content/text
│   │
│   └── types/
│       └── index.ts            # TypeScript types
│
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Customization Guide

### Changing Content

All text content is centralized in `src/lib/constants.ts`. Simply edit the values there:

```typescript
// Example: Change hero title
export const HERO_CONTENT = {
  title: 'Your New Title Here',
  subtitle: 'Your new subtitle',
  // ...
};
```

### Changing Colors

Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  'blue-soft': '#ADD8E6',  // Change this hex value
  'gold-accent': '#FFD700', // Change this hex value
  // ...
}
```

### Adding Images

1. Place images in the `/public` folder
2. Reference them with `/filename.jpg` in components
3. For the hero image, add `/hero-image.jpg` to the public folder

### Modifying Sections

Each section is a separate component in `src/components/sections/`. Edit the component file to change layout or behavior.

## 🔧 Development Commands

| Command | What It Does |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check code for errors |

## 🌐 Deployment to Firebase Hosting

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

**What this does:** Installs Firebase command-line tools globally.

---

### Step 2: Login to Firebase

```bash
firebase login
```

**What this does:** Opens browser to authenticate with your Google account.

---

### Step 3: Initialize Firebase

```bash
firebase init hosting
```

**What this does:** Sets up Firebase Hosting configuration. Choose these options:
- Use existing project or create new one
- Public directory: `out`
- Configure as single-page app: `No`
- Set up automatic builds: `No`

---

### Step 4: Build and Deploy

```bash
npm run build
firebase deploy
```

**What this does:** 
1. Creates production build in `/out` folder
2. Uploads to Firebase Hosting
3. Provides you with a live URL

---

## 📱 Mobile-First Design

This landing page is built mobile-first:
- **320px+**: Mobile phones
- **768px+**: Tablets
- **1024px+**: Desktops
- **1280px+**: Large desktops

All sections automatically adapt to screen size.

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Sufficient color contrast

## 🎭 Animations

Powered by Framer Motion:
- Fade-in effects on scroll
- Hover animations on buttons and cards
- Smooth page transitions
- Staggered list animations

## 📝 Content Guidelines

### Images
- **Hero Image**: 1200x1600px, professional photo, natural lighting
- **Author Photo**: 600x800px, warm and inviting
- **Book Covers**: High resolution, 3D mockups preferred

### Text
- All content in Spanish (Latin American)
- Empathetic, authentic tone
- Focus on transformation and hope
- Use testimonials for social proof

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
npx kill-port 3000
# Then run dev server again
npm run dev
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
# Reinstall dependencies
rm -rf node_modules
npm install
# Try building again
npm run build
```

### Images not loading
- Ensure images are in `/public` folder
- Check file names match exactly (case-sensitive)
- Verify image paths start with `/`

## 📞 Support

For questions or issues:
1. Check this README
2. Review code comments in components
3. Check Next.js documentation: https://nextjs.org/docs

## 📄 License

© 2025 Colección Restauración y Fe. All rights reserved.

---

**Built with ❤️ for healing souls and awakening hope**

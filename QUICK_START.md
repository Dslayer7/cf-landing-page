# 🚀 Quick Start Guide

## Step 1: Install Dependencies

**Copy and paste this command:**

```bash
npm install
```

**What it does:** Installs React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and all other required packages.

**Time:** 2-3 minutes

---

## Step 2: Move Book Cover Images

Your book covers are already in the project folder. We need to move them to the `public` folder:

**Run these commands one by one:**

```bash
move Cover01_ebook.jpg public\
```

```bash
move Cover02_ebook.png public\
```

```bash
move Cover03_ebook.png public\
```

**What it does:** Moves your book cover images to the correct location so they appear on the website.

---

## Step 3: Add Missing Images

You need to add two more images to the `public` folder:

1. **hero-image.jpg** - Main hero section image (recommended: author holding books, serene background)
2. **author-photo.jpg** - Author's professional portrait photo

**Place these images in:** `c:/D-Files/Coding/CF_LandingPage/public/`

---

## Step 4: Run Development Server

**Copy and paste this command:**

```bash
npm run dev
```

**What it does:** Starts the development server. Your website will be available at http://localhost:3000

**The page will automatically reload when you make changes!**

---

## Step 5: View Your Website

Open your browser and go to:

```
http://localhost:3000
```

You should see your landing page! 🎉

---

## 🎨 How to Customize

### Change Text Content

All text is in: `src/lib/constants.ts`

Simply edit the values there. For example:

```typescript
export const HERO_CONTENT = {
  title: 'Your New Title Here',  // ← Change this
  subtitle: 'Your new subtitle', // ← Change this
  // ...
};
```

### Change Colors

Colors are in: `tailwind.config.ts`

```typescript
colors: {
  'blue-soft': '#ADD8E6',  // ← Change this hex code
  'gold-accent': '#FFD700', // ← Change this hex code
  // ...
}
```

### Add Your Purchase Link

In `src/components/sections/FinalCTASection.tsx`, find this line:

```typescript
const handleCTAClick = () => {
  alert('Redirigiendo a la página de compra...');
};
```

Replace with:

```typescript
const handleCTAClick = () => {
  window.location.href = 'YOUR_PURCHASE_LINK_HERE';
};
```

---

## 🏗️ Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `/out` folder.

---

## 🔥 Deploy to Firebase Hosting

### First Time Setup:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

Choose:
- Public directory: `out`
- Single-page app: `No`

### Deploy:

```bash
npm run build
firebase deploy
```

---

## ❓ Troubleshooting

### Port 3000 is already in use

```bash
npx kill-port 3000
npm run dev
```

### Images not showing

- Make sure images are in the `public` folder
- Check file names match exactly (case-sensitive)
- Restart the dev server

### Errors after installing

```bash
rm -rf node_modules
npm install
npm run dev
```

---

## 📞 Need Help?

1. Check the main README.md
2. Review code comments in components
3. All components have detailed comments explaining what they do

---

**Built with ❤️ for Colección Restauración y Fe**

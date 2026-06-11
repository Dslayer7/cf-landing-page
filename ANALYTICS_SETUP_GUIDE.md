# Analytics Setup Guide for CF Landing Page

This guide will walk you through setting up tracking and analytics for your landing page.

## ✅ Already Completed

### Meta Pixel (Facebook Pixel)
- **Status**: ✅ Updated with new Pixel ID
- **Pixel ID**: `986448157195985`
- **Location**: `src/app/layout.tsx`
- **What it tracks**: Page views, conversions, user behavior for Facebook Ads

---

## 📊 Google Analytics Setup

### Why You Need It
- Track visitor behavior and traffic sources
- Measure conversion rates
- Understand user demographics
- Monitor page performance

### Setup Steps

1. **Create Google Analytics Account**
   - Go to https://analytics.google.com/
   - Click "Start measuring"
   - Create an account and property
   - Choose "Web" as the platform
   - Enter your website details

2. **Get Your Measurement ID**
   - After creating the property, you'll get a Measurement ID (format: `G-XXXXXXXXXX`)
   - Copy this ID

3. **Update Your Code**
   - Open `src/app/layout.tsx`
   - Find the two instances of `G-XXXXXXXXXX` (lines 75 and 81)
   - Replace both with your actual Measurement ID
   
   Example:
   ```typescript
   // Before
   src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
   gtag('config', 'G-XXXXXXXXXX');
   
   // After (with your actual ID)
   src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"
   gtag('config', 'G-ABC123XYZ');
   ```

4. **Verify Installation**
   - Install the "Google Analytics Debugger" Chrome extension
   - Visit your site and check the console for GA events
   - Or use Google Analytics Real-Time reports

### Key Metrics to Monitor
- **Users**: Total visitors
- **Sessions**: Number of visits
- **Bounce Rate**: % of single-page visits
- **Conversion Rate**: % of visitors who purchase
- **Traffic Sources**: Where visitors come from

---

## 🔍 Microsoft Clarity Setup

### Why You Need It (Highly Recommended for Landing Pages!)
- **FREE** heatmaps showing where users click
- Session recordings to watch user behavior
- Identify friction points in your funnel
- See where users drop off
- Mobile vs desktop behavior analysis

### Setup Steps

1. **Create Microsoft Clarity Account**
   - Go to https://clarity.microsoft.com/
   - Sign in with Microsoft account (or create one)
   - Click "Add new project"
   - Enter your website name and URL

2. **Get Your Project ID**
   - After creating the project, you'll see installation instructions
   - Copy the Project ID (format: alphanumeric string like `abc123xyz`)

3. **Update Your Code**
   - Open `src/app/layout.tsx`
   - Find `XXXXXXXXXX` on line 89
   - Replace it with your Clarity Project ID
   
   Example:
   ```typescript
   // Before
   })(window, document, "clarity", "script", "XXXXXXXXXX");
   
   // After (with your actual ID)
   })(window, document, "clarity", "script", "abc123xyz");
   ```

4. **Verify Installation**
   - Visit your Clarity dashboard
   - You should see "Tracking" status change to active
   - Recordings will start appearing within a few minutes

### What to Look For in Clarity
- **Heatmaps**: Where users click most
- **Scroll depth**: How far users scroll
- **Dead clicks**: Where users click but nothing happens
- **Rage clicks**: Repeated clicks indicating frustration
- **Session recordings**: Watch actual user sessions

---

## 🎯 Recommended Events to Track

### For Google Analytics
Add these custom events to track conversions:

```typescript
// When user clicks "Buy Collection" button
gtag('event', 'purchase_intent', {
  'event_category': 'ecommerce',
  'event_label': 'collection_bundle',
  'value': 1
});

// When user clicks individual book purchase
gtag('event', 'purchase_intent', {
  'event_category': 'ecommerce',
  'event_label': 'single_book',
  'value': 1
});

// When user scrolls to pricing section
gtag('event', 'scroll_to_pricing', {
  'event_category': 'engagement',
  'event_label': 'pricing_section',
  'value': 1
});
```

### For Meta Pixel
Track these events for better ad optimization:

```typescript
// When user views pricing
fbq('track', 'ViewContent', {
  content_name: 'Collection Bundle',
  content_category: 'Books',
  value: 29.99,
  currency: 'USD'
});

// When user clicks purchase button
fbq('track', 'InitiateCheckout', {
  content_name: 'Collection Bundle',
  value: 29.99,
  currency: 'USD'
});

// When purchase is completed (add this to Hotmart thank you page)
fbq('track', 'Purchase', {
  value: 29.99,
  currency: 'USD'
});
```

---

## 📈 Testing Your Setup

### Quick Test Checklist

1. **Meta Pixel**
   - Install "Meta Pixel Helper" Chrome extension
   - Visit your site
   - Extension should show green checkmark with your Pixel ID
   - Should show "PageView" event

2. **Google Analytics**
   - Visit your site
   - Go to GA dashboard → Real-Time → Overview
   - You should see yourself as an active user
   - Check if page views are being recorded

3. **Microsoft Clarity**
   - Visit your site and interact with it
   - Wait 5-10 minutes
   - Check Clarity dashboard for new recordings
   - Verify heatmaps are generating

---

## 🚀 Next Steps After Setup

1. **Set Up Goals in Google Analytics**
   - Create conversion goals for button clicks
   - Track form submissions
   - Monitor scroll depth

2. **Create Custom Dashboards**
   - GA: Create dashboard for key metrics
   - Clarity: Set up filters for specific user segments

3. **Set Up Alerts**
   - GA: Alert for traffic drops
   - GA: Alert for conversion rate changes

4. **Regular Monitoring**
   - Check analytics weekly
   - Review Clarity recordings monthly
   - Adjust marketing based on data

---

## 🔧 Troubleshooting

### Analytics Not Working?

**Google Analytics**
- Clear browser cache and cookies
- Check if ad blockers are interfering
- Verify Measurement ID is correct
- Wait 24-48 hours for data to appear

**Meta Pixel**
- Use Meta Pixel Helper to debug
- Check browser console for errors
- Verify Pixel ID matches Facebook Business Manager
- Test in incognito mode

**Microsoft Clarity**
- Ensure Project ID is correct
- Check if site is using HTTPS
- Wait 10-15 minutes for first recordings
- Try different browser

---

## 📞 Support Resources

- **Google Analytics**: https://support.google.com/analytics
- **Meta Pixel**: https://www.facebook.com/business/help/952192354843755
- **Microsoft Clarity**: https://docs.microsoft.com/en-us/clarity/

---

## ⚠️ Privacy & Compliance

Remember to:
- Add privacy policy to your site
- Include cookie consent banner (if targeting EU)
- Comply with GDPR/CCPA if applicable
- Update privacy policy to mention tracking tools

---

**Last Updated**: June 6, 2026
**File Location**: `src/app/layout.tsx`

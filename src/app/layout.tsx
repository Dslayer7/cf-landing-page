/**
 * Root Layout Component
 * 
 * This is the main layout wrapper for the entire application.
 * It includes:
 * - HTML structure
 * - Metadata for SEO
 * - Global styles
 * - Font loading
 * 
 * This layout wraps all pages in the application.
 */

import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

/**
 * SEO Metadata
 * This information appears in search results and social media shares
 */
export const metadata: Metadata = {
  title: 'Colección Restauración y Fe | Libros que Sanan el Alma',
  description: 'Descubre tres libros poderosos para tu sanidad emocional, física y espiritual. Testimonios reales de transformación a través del amor de Dios.',
  keywords: 'sanidad emocional, libros cristianos, ansiedad, divorcio, fe, restauración, oración, milagros',
  authors: [{ name: 'Colección Restauración y Fe' }],
  openGraph: {
    title: 'Colección Restauración y Fe',
    description: 'Libros que sanan el alma y despiertan la esperanza',
    type: 'website',
    locale: 'es_LA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Fonts are loaded via CSS @import in globals.css */}
        <link rel="stylesheet" href="https://static.hotmart.com/css/hotmart-fb.min.css" />
      </head>
      <body className="antialiased">
        {children}
        {/* Meta Pixel - noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=986448157195985&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '986448157195985');
          fbq('track', 'PageView');
        `}</Script>
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0RJCMRVF2F"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0RJCMRVF2F');
        `}</Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x2mbnf5s12");
        `}</Script>
        {/* Hotmart Checkout Widget */}
        <Script
          id="hotmart-widget"
          strategy="lazyOnload"
          src="https://static.hotmart.com/checkout/widget.min.js"
        />
      </body>
    </html>
  );
}

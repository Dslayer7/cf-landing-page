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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

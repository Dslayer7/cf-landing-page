/**
 * Main Landing Page
 * 
 * This is the main page that visitors see.
 * It assembles all sections in the correct order for optimal conversion.
 * 
 * Page Structure:
 * 1. Header (sticky navigation)
 * 2. Hero Section (first impression, main CTA)
 * 3. Emotional Hook (connect with pain points)
 * 4. Author Section (build credibility)
 * 5. Books Collection (showcase products)
 * 6. Testimonials (social proof)
 * 7. Final CTA (last conversion opportunity)
 * 8. Footer (legal links, branding)
 * 
 * All sections are lazy-loaded for performance.
 */

'use client';

import React from 'react';
import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { EmotionalHookSection } from '@/components/sections/EmotionalHookSection';
import { AuthorSection } from '@/components/sections/AuthorSection';
import { BooksCollectionSection } from '@/components/sections/BooksCollectionSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 
        Sticky Header Navigation
        Stays at the top as user scrolls
      */}
      <Header />

      {/* 
        Hero Section
        First thing visitors see - makes strong first impression
        Includes main headline, subheadline, and primary CTA
      */}
      <HeroSection />

      {/* 
        Emotional Hook Section
        Connects with audience's pain points
        Uses author's verbatim message for authenticity
      */}
      <EmotionalHookSection />

      {/* 
        Author Section
        Builds credibility and trust
        Shows author's personal journey and transformation
      */}
      <AuthorSection />

      {/* 
        Books Collection Section
        Main product showcase
        Displays all three ebooks with full details
        Includes bundle value proposition
      */}
      <BooksCollectionSection />

      {/* 
        Testimonials Section
        Social proof from real customers
        Builds trust and shows results
      */}
      <TestimonialsSection />

      {/* 
        Final CTA Section
        Last conversion opportunity
        Creates urgency and reinforces value
      */}
      <FinalCTASection />

      {/* 
        Footer
        Legal links, copyright, branding
      */}
      <Footer />
    </main>
  );
}

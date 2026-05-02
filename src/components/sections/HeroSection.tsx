/**
 * Hero Section Component
 * 
 * The first section visitors see - makes a strong first impression
 * 
 * Layout:
 * - Mobile: Stacked (image on top, content below)
 * - Desktop: Split (image left 50%, content right 50%)
 * 
 * Features:
 * - Animated entrance for all elements
 * - Responsive image with Next.js Image optimization
 * - Primary CTA button
 * - Gradient background overlay
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { HERO_CONTENT } from '@/lib/constants';

export const HeroSection: React.FC = () => {
  /**
   * Scroll to the purchase section when CTA is clicked
   */
  const handleCTAClick = () => {
    const element = document.getElementById('comprar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 -z-30 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />

      {/* Modern gradient overlay - darker for better contrast */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-brand-900/70 via-brand-800/50 to-transparent" />
      
      {/* Subtle animated gradient accent */}
      <motion.div 
        className="absolute inset-0 -z-15 bg-gradient-to-tr from-warm-600/20 via-transparent to-brand-400/20"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Content - Left side, takes more space on desktop */}
          <motion.div 
            className="lg:col-span-7 z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="max-w-2xl">

              {/* Main Heading - Larger, bolder, modern */}
              <motion.h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {HERO_CONTENT.title}
              </motion.h1>

              {/* Subheading - Clean, readable */}
              <motion.h2
                className="font-body text-xl sm:text-2xl lg:text-3xl text-white/95 mb-8 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {HERO_CONTENT.subtitle}
              </motion.h2>

              {/* Tagline - Elegant script with better contrast */}
              <motion.p
                className="font-script text-xl sm:text-2xl text-warm-200 italic mb-10 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {HERO_CONTENT.tagline}
              </motion.p>

              {/* Primary CTA Button - Modern, prominent */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleCTAClick}
                  className="text-lg px-8 py-4 shadow-2xl hover:scale-105 transition-transform"
                >
                  {HERO_CONTENT.ctaText}
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Image - Right side, modern card design */}
          <motion.div
            className="lg:col-span-5 z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="/CF_Beach4.jpg"
                alt={HERO_CONTENT.heroImageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern scroll indicator - Desktop only */}
      <motion.div 
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-semibold uppercase tracking-widest mb-2">Explora</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

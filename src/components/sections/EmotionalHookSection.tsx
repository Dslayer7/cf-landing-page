/**
 * Emotional Hook Section
 * 
 * Displays the core emotional message that connects with the audience's pain points.
 * This section uses the author's verbatim message to create empathy and trust.
 * 
 * Features:
 * - Watercolor background texture
 * - Script font for emotional appeal
 * - Fade-in animation on scroll
 * - Decorative divider
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EMOTIONAL_HOOK } from '@/lib/constants';

export const EmotionalHookSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-soft-light to-white overflow-hidden">
      {/* 
        Watercolor texture overlay
        TODO: Add watercolor-texture.png to /public/images/ for subtle background
      */}
      <div className="absolute inset-0 opacity-5 bg-cover bg-center" 
           style={{ backgroundImage: 'url(/images/watercolor-texture.png)' }} 
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          // Animate when 30% of section is visible
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            {EMOTIONAL_HOOK.heading}
          </h2>

          {/* Decorative divider */}
          <div className="divider" />

          {/* Core Message - Author's verbatim text in script font */}
          <motion.p
            className="font-script text-xl md:text-2xl lg:text-3xl text-blue-sky italic mb-8 leading-relaxed"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            &ldquo;{EMOTIONAL_HOOK.coreMessage}&rdquo;
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {EMOTIONAL_HOOK.supportingText}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

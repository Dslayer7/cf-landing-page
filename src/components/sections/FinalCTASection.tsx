/**
 * Final CTA Section
 * 
 * The last conversion opportunity before the footer.
 * Creates urgency and reinforces the value proposition.
 * 
 * Features:
 * - Powerful closing message
 * - Large prominent CTA button
 * - Trust badges/guarantees
 * - Gradient background
 * - Pulsing animations
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FINAL_CTA_CONTENT } from '@/lib/constants';

export const FinalCTASection: React.FC = () => {
  const handleCTAClick = () => {
    // TODO: Replace with actual purchase link/form
    alert('Redirigiendo a la página de compra...');
  };

  return (
    <section id="comprar" className="py-16 md:py-24 bg-gradient-to-br from-brand-50 via-warm-50/70 to-brand-100 relative overflow-hidden border-t border-brand-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-16 w-64 h-64 bg-brand-200/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-300/60 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            {FINAL_CTA_CONTENT.heading}
          </h2>

          {/* Message - Split into paragraphs */}
          <div className="space-y-4 mb-8">
            {FINAL_CTA_CONTENT.message.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg md:text-base text-text-secondary leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* CTA Button with pulse animation */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              variant="primary"
              size="large"
              onClick={handleCTAClick}
              className="w-full md:w-auto text-xl md:text-2xl px-12 py-6 animate-pulse-soft shadow-2xl"
            >
              {FINAL_CTA_CONTENT.ctaText}
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {FINAL_CTA_CONTENT.trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/85 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-warm-100"
              >
                <Check size={24} className="text-warm-500 flex-shrink-0" />
                <span className="text-text-secondary text-sm md:text-base text-left">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

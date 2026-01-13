/**
 * Testimonials Section
 * 
 * Displays customer testimonials to build trust and social proof.
 * 
 * Layout:
 * - Mobile: Single column carousel/stack
 * - Desktop: 2x2 grid
 * 
 * Features:
 * - Testimonial cards with quotes
 * - Customer names and ages
 * - Fade-in animations
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIALS_CONTENT } from '@/lib/constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-gradient-to-b from-background-primary via-warm-50/60 to-brand-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {TESTIMONIALS_CONTENT.heading}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            {TESTIMONIALS_CONTENT.subheading}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 relative shadow-soft hover:shadow-medium transition-all border border-warm-100/60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <Quote className="text-warm-500 opacity-60 mb-4" size={40} />
              
              {/* Testimonial Quote */}
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-warm-500 rounded-full flex items-center justify-center text-text-on-brand font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-light">
                    {testimonial.age} años
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

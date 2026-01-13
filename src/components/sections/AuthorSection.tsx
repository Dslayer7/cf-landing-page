/**
 * Author Section
 * 
 * Displays the author's biography and establishes credibility.
 * Shows her personal journey from pain to restoration.
 * 
 * Layout:
 * - Mobile: Stacked (photo on top, bio below)
 * - Desktop: Two-column (photo 40%, bio 60%)
 * 
 * Features:
 * - Professional author photo with gold border
 * - Multi-paragraph biography
 * - Highlighted quote box
 * - Slide-in animations
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AUTHOR_CONTENT } from '@/lib/constants';

export const AuthorSection: React.FC = () => {
  return (
    <section id="autora" className="py-16 md:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.h2
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {AUTHOR_CONTENT.heading}
        </motion.h2>

        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Author Photo - 2 columns on desktop */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-80 md:w-full md:h-96 mx-auto rounded-2xl overflow-hidden shadow-medium border-4 border-gold-accent">
              {/* 
                TODO: Add author photo to /public/author-photo.jpg
                Recommended: Professional, warm, inviting portrait
              */}
              <Image
                src="/CF_Beach1.jpg"
                alt={AUTHOR_CONTENT.photoAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 400px"
              />
            </div>
          </motion.div>

          {/* Author Bio - 3 columns on desktop */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Biography text - split into paragraphs for better readability */}
            <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed">
              {AUTHOR_CONTENT.bio.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Highlighted Quote Box */}
            <motion.div
              className="mt-8 bg-gold-light border-l-4 border-gold-accent p-6 rounded-r-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="font-script text-xl md:text-2xl text-text-primary italic">
                &ldquo;{AUTHOR_CONTENT.quote}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

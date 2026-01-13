/**
 * EbookCard Component - Tab Style with Details Below
 * 
 * Displays book cover with title and subtitle.
 * When clicked, the book tilts and glows to show it's active.
 * Details appear in a shared panel below all books.
 * 
 * Features:
 * - Click to select book
 * - 3D tilt effect when selected
 * - Glow/highlight border
 * - Smooth hover animations
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { EbookCardProps } from '@/types';

export const EbookCard: React.FC<EbookCardProps> = ({ 
  ebook, 
  index, 
  isExpanded, 
  onToggle 
}) => {
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Book Cover Card */}
      <motion.div
        className={`cursor-pointer bg-white rounded-2xl overflow-hidden transition-all duration-500 border ${
          isExpanded 
            ? 'border-brand-400 shadow-brand ring-4 ring-brand-300/60' 
            : 'border-transparent shadow-soft hover:shadow-medium hover:border-brand-200'
        }`}
        onClick={onToggle}
        whileHover={{ 
          scale: isExpanded ? 1 : 1.03,
          y: isExpanded ? 0 : -8 
        }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
      >
        {/* Cover Image */}
        <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-brand-50 to-brand-200">
          <Image
            src={ebook.coverImage}
            alt={`Portada del libro ${ebook.title}`}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Selected Badge */}
          {isExpanded && (
            <div>
              <motion.div
                className="absolute top-4 right-4 bg-brand-600 text-text-on-brand px-4 py-2 rounded-full font-semibold text-sm shadow-brand"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                ✓ Seleccionado
              </motion.div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-900/90 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 px-4">
                <h3 className="font-display text-text-on-brand text-lg font-bold text-center drop-shadow-md px-4 py-2 bg-brand-700/80 backdrop-blur-sm rounded-lg">
                  {ebook.title}
                </h3>
              </div>
            </div>
          )}
        </div>

        {/* Book Info - Fixed height container */}
        <div className="p-6 min-h-[140px] flex flex-col justify-between bg-surface-50">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-2 leading-tight line-clamp-2 min-h-[3em]">
              {ebook.title}
            </h3>
          </div>
          <p className="text-sm md:text-base text-brand-500 italic line-clamp-2">
            {ebook.subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

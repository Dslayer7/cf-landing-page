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
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
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
            <motion.div
              className="absolute top-4 right-4 bg-brand-600 text-text-on-brand px-4 py-2 rounded-full font-semibold text-sm shadow-brand"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              ✓ Seleccionado
            </motion.div>
          )}
        </div>

        {/* Book Info */}
        <div className="p-6 bg-surface-50">
          <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-2 leading-tight line-clamp-2 min-h-[3em]">
            {ebook.title}
          </h3>
          <p className="text-sm md:text-base text-brand-500 italic line-clamp-2 mb-4">
            {ebook.subtitle}
          </p>

          {/* Price + Buy Button — inside card, stopPropagation prevents toggle */}
          <div className="border-t border-brand-100 pt-4">
            <Link
              href={`/${ebook.id === 'libro-1' ? 'divorcio' : ebook.id === 'libro-2' ? 'sanidad' : 'ansiedad'}`}
              onClick={(e) => e.stopPropagation()}
              className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-soft no-underline text-sm md:text-base"
            >
              Ver Este Libro
            </Link>
            <button
              onClick={onToggle}
              className="mt-3 w-full flex items-center justify-center gap-1 text-xs text-text-light hover:text-brand-500 transition-colors"
            >
              Más información
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex"
              >
                <ChevronDown size={13} />
              </motion.span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

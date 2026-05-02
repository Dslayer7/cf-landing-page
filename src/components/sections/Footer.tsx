/**
 * Footer Component
 * 
 * Bottom section with copyright, links, and branding.
 * 
 * Features:
 * - Copyright information
 * - Legal links (Privacy, Terms, etc.)
 * - Brand tagline
 * - Responsive layout
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { FOOTER_CONTENT } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="container mx-auto px-6">
        
        {/* Mother's Day Special Banner */}
        <div className="flex justify-center mb-8">
          <Link
            href="/madre"
            className="inline-flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 hover:text-amber-200 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
          >
            <Heart size={14} fill="currentColor" />
            Edición Especial Día de las Madres — El Poder de una Madre que Ora
            <Heart size={14} fill="currentColor" />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {FOOTER_CONTENT.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center text-white/70 italic mb-4">
          {FOOTER_CONTENT.tagline}
        </p>

        {/* Copyright */}
        <p className="text-center text-white/60 text-sm">
          {FOOTER_CONTENT.copyright}
        </p>
      </div>
    </footer>
  );
};

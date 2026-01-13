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
import { FOOTER_CONTENT } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="container mx-auto px-6">
        
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

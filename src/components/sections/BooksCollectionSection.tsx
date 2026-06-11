/**
 * Books Collection Section - Interactive Accordion
 * 
 * Showcases all three ebooks with expandable details.
 * Only one book can be expanded at a time.
 * 
 * Layout:
 * - Collapsed: 3 columns on desktop, stacked on mobile
 * - Expanded: Full width with book + details panel
 * 
 * Features:
 * - Click to expand/collapse books
 * - Smooth accordion animations
 * - 3D tilt effect on expanded book
 * - Bundle value proposition below
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Gift, Target, Smartphone, Lock } from 'lucide-react';
import { EbookCard } from '@/components/ui/EbookCard';
import { Button } from '@/components/ui/Button';
import { EBOOKS, BUNDLE_CONTENT } from '@/lib/constants';

export const BooksCollectionSection: React.FC = () => {
  // Track which book is currently expanded (null = none expanded)
  const [expandedBookId, setExpandedBookId] = useState<string | null>(null);

  const handleBundleCTA = () => {
    const element = document.getElementById('comprar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Toggle book expansion
   * If clicking the same book, collapse it
   * If clicking a different book, expand that one
   */
  const handleToggleBook = (bookId: string) => {
    setExpandedBookId(expandedBookId === bookId ? null : bookId);
  };

  return (
    <section id="coleccion" className="py-16 md:py-24 bg-gradient-to-b from-background-primary to-brand-50">
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
            Descubre la Colección Completa
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Tres libros poderosos para tu sanidad emocional, física y espiritual
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {EBOOKS.map((ebook, index) => (
            <EbookCard 
              key={ebook.id} 
              ebook={ebook} 
              index={index}
              isExpanded={expandedBookId === ebook.id}
              onToggle={() => handleToggleBook(ebook.id)}
            />
          ))}
        </div>

        {/* Details Panel - Appears below when book is selected */}
        <AnimatePresence mode="wait">
          {expandedBookId && (() => {
            const selectedBook = EBOOKS.find(book => book.id === expandedBookId);
            const bookIndex = EBOOKS.findIndex(book => book.id === expandedBookId);
            
            // Calculate position based on which book is selected (0, 1, or 2)
            const positions = ['justify-start', 'justify-center', 'justify-end'];
            const positionClass = positions[bookIndex] || 'justify-center';
            
            return (
            <div className="relative w-full">
              {/* Visual connector that extends from the book */}
              <div className={`absolute left-0 right-0 top-0 h-2 flex ${positionClass} px-4`}>
                <div className="w-[calc(33%-2rem)] h-full bg-gradient-to-b from-brand-400/50 to-transparent" />
              </div>

              <motion.div
                key={expandedBookId}
                className="bg-white rounded-3xl shadow-brand p-8 md:p-12 mb-16 overflow-hidden border border-brand-100 relative"
                initial={{ 
                  opacity: 0, 
                  height: 0, 
                  scaleY: 0,
                  originY: 0,
                  marginTop: -20
                }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto', 
                  scaleY: 1,
                  marginTop: 0
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0, 
                  scaleY: 0,
                  marginTop: -20
                }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                  height: { duration: 0.7 },
                  opacity: { duration: 0.5 },
                  marginTop: { duration: 0.7 }
                }}
                style={{ transformOrigin: 'top center' }}
            >
              {/* Decorative line connecting to selected book */}
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-brand-500"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              />
              
              <motion.div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
              />
              {(() => {
                const selectedBook = EBOOKS.find(book => book.id === expandedBookId);
                if (!selectedBook) return null;

                return (
                  <>
                    {/* Title & Subtitle */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
                        {selectedBook.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-brand-500 italic leading-relaxed">
                        {selectedBook.subtitle}
                      </p>
                    </motion.div>

                    {/* Summary */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                        {selectedBook.summary}
                      </p>
                    </motion.div>

                    {/* Benefits List */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="font-semibold text-text-primary text-xl mb-6">
                        {selectedBook.benefits.length > 3 ? 'Lo que aprenderás:' : 'Incluye:'}
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-4">
                        {selectedBook.benefits.map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (idx * 0.1) }}
                          >
                            <Check size={24} className="text-brand-500 flex-shrink-0 mt-1" />
                            <span className="text-text-secondary text-base md:text-lg">
                              {benefit}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Closing Statement */}
                    <motion.div 
                      className="mb-8 bg-warm-50 border-l-4 border-warm-400/80 p-6 rounded-r-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="text-text-primary text-lg md:text-xl italic leading-relaxed">
                        {selectedBook.closingStatement}
                      </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div 
                      className="flex justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <a
                        href={selectedBook.purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hotmart-fb hotmart__button-checkout inline-flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg rounded-full shadow-brand transition-all duration-200 hover:scale-105 cursor-pointer no-underline"
                      >
                        Obtener Este Libro
                      </a>
                    </motion.div>
                  </>
                );
              })()}
              </motion.div>
              
              {/* Decorative highlight at the connection point */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-400/30 to-transparent ${positionClass} flex`}>
                <div className="w-1/3 h-full max-w-[300px] bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
              </div>
            </div>
          );})()}
        </AnimatePresence>

        {/* Special Bundle Offer Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl shadow-brand p-8 md:p-12 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            {/* Heading */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
                <span className="text-sm md:text-base font-semibold uppercase tracking-wide">
                  {BUNDLE_CONTENT.specialOffer.subheading}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {BUNDLE_CONTENT.specialOffer.heading}
              </h3>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {BUNDLE_CONTENT.specialOffer.description}
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              className="grid md:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Zap className="w-6 h-6 flex-shrink-0" />
                <p className="text-base md:text-lg font-medium">
                  Acceso inmediato a los 3 libros digitales
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Gift className="w-6 h-6 flex-shrink-0" />
                <p className="text-base md:text-lg font-medium">
                  Precio especial exclusivo del paquete completo
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Target className="w-6 h-6 flex-shrink-0" />
                <p className="text-base md:text-lg font-medium">
                  Un camino completo de sanidad y restauración
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Smartphone className="w-6 h-6 flex-shrink-0" />
                <p className="text-base md:text-lg font-medium">
                  Compatible con todos tus dispositivos
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href={BUNDLE_CONTENT.specialOffer.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hotmart-fb hotmart__button-checkout inline-flex items-center justify-center gap-2 w-full md:w-auto px-12 py-5 bg-white text-brand-600 font-bold text-lg md:text-xl rounded-full shadow-brand transition-all duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer no-underline"
              >
                {BUNDLE_CONTENT.specialOffer.ctaText}
              </a>
              <p className="mt-4 text-sm text-white/80 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Pago seguro procesado por Hotmart
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

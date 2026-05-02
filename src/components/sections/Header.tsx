/**
 * Header Component
 * 
 * Sticky navigation header with:
 * - Logo on the left
 * - Navigation links in the center (desktop)
 * - CTA button on the right (desktop)
 * - Hamburger menu for mobile
 * - Smooth scroll to sections
 * - Shadow appears on scroll
 * 
 * Mobile: Hamburger menu that expands to show navigation
 * Desktop: Horizontal navigation bar
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export const Header: React.FC = () => {
  // State for mobile menu open/closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for scroll position (to add shadow when scrolled)
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Track scroll position to add shadow to header
   * This creates a nice visual effect when user scrolls down
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Close mobile menu when window is resized to desktop size
   * Prevents menu from being stuck open when switching to desktop view
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  /**
   * Smooth scroll to section when nav link is clicked
   * Also closes mobile menu after navigation
   */
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft' : 'bg-white/95 backdrop-blur-sm'
      }`}
      // Animate header sliding down on page load
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <motion.div 
          className="text-lg md:text-2xl font-display font-semibold tracking-tight text-text-primary cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
        >
          Restauración y Fe
        </motion.div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-text-secondary hover:text-blue-sky transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          {/* Desktop CTA Button */}
          <button
            onClick={() => handleNavClick('#comprar')}
            className="bg-gold-accent text-text-primary px-6 py-2 rounded-full font-semibold hover:shadow-gold transition-all hover:scale-105"
          >
            Comprar Ahora
          </button>
        </nav>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          className="md:hidden text-text-primary p-2 hover:bg-blue-soft-light rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu - Animated dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-medium border-t border-blue-soft-light"
            // Animation for mobile menu sliding down
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 px-4 sm:px-6 py-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-text-secondary hover:text-blue-sky transition-colors text-left font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              {/* Mobile CTA Button */}
              <button
                onClick={() => handleNavClick('#comprar')}
                className="bg-gold-accent text-text-primary px-6 py-3 rounded-full font-semibold text-center hover:shadow-gold transition-all"
              >
                Comprar Ahora
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

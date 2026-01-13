/**
 * Button Component
 * 
 * A reusable, accessible button component with multiple variants and sizes.
 * Includes hover animations and focus states for better UX.
 * 
 * Usage:
 * <Button variant="primary" size="large" onClick={handleClick}>
 *   Click Me
 * </Button>
 * 
 * Props:
 * - variant: 'primary' (gold) or 'secondary' (blue)
 * - size: 'small', 'medium', or 'large'
 * - onClick: Function to call when button is clicked
 * - className: Additional CSS classes
 * - disabled: Disable the button
 * - ariaLabel: Accessibility label
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  // Base styles applied to all buttons
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-brand-500 to-brand-700 text-text-on-brand shadow-brand hover:from-brand-600 hover:to-brand-800 focus:ring-brand-200 hover:shadow-brand',
    secondary: 'bg-warm-400 text-text-on-brand shadow-warm hover:bg-warm-500 focus:ring-warm-200',
    ghost: 'bg-transparent text-text-primary border border-brand-200 hover:bg-brand-50 focus:ring-brand-200',
  } as const;
  
  // Size-specific styles with proper touch targets for mobile
  const sizeStyles = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-8 py-4 text-base md:text-lg',
    large: 'px-10 py-5 text-lg md:text-xl',
  };

  // Combine all styles
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : 'Button')}
      // Framer Motion hover animation
      whileHover={disabled ? {} : { scale: 1.05 }}
      // Framer Motion tap animation
      whileTap={disabled ? {} : { scale: 0.95 }}
      // Smooth transition
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

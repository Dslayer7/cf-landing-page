/**
 * TypeScript Type Definitions
 * 
 * This file contains all the TypeScript interfaces and types used throughout the application.
 * Centralizing types here makes it easier to maintain consistency and update data structures.
 */

/**
 * Represents a single ebook in the collection
 * Used for displaying book information in the BooksCollectionSection
 */
export interface Ebook {
  id: string;                    // Unique identifier for the book
  title: string;                 // Main book title
  subtitle: string;              // Descriptive subtitle
  summary: string;               // Full book description/summary
  benefits: string[];            // Array of key benefits readers will gain
  closingStatement: string;      // Powerful closing message
  coverImage: string;            // Path to book cover image
  ctaText: string;              // Call-to-action button text
}

/**
 * Represents a customer testimonial
 * Used in the TestimonialsSection to display social proof
 */
export interface Testimonial {
  id: string;                    // Unique identifier
  name: string;                  // Customer's name (first name + last initial)
  age: number;                   // Customer's age
  quote: string;                 // The testimonial text
  location?: string;             // Optional location information
}

/**
 * Props for the reusable Button component
 * Allows for different button styles and behaviors
 */
export interface ButtonProps {
  children: React.ReactNode;                      // Button content (text, icons, etc.)
  variant?: 'primary' | 'secondary';              // Visual style variant
  size?: 'small' | 'medium' | 'large';           // Size variant
  onClick?: () => void;                           // Click handler function
  className?: string;                             // Additional CSS classes
  type?: 'button' | 'submit' | 'reset';          // HTML button type
  disabled?: boolean;                             // Disabled state
  ariaLabel?: string;                             // Accessibility label
}

/**
 * Props for section components
 * Base props that all section components can accept
 */
export interface SectionProps {
  className?: string;            // Additional CSS classes for customization
  id?: string;                   // HTML id for anchor links
}

/**
 * Props for EbookCard component
 */
export interface EbookCardProps {
  ebook: Ebook;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

/**
 * Props for the TestimonialCard component
 * Used to display individual testimonials
 */
export interface TestimonialCardProps {
  testimonial: Testimonial;      // The testimonial data to display
  index: number;                 // Index for staggered animations
}

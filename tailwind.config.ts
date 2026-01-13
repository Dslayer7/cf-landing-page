import type { Config } from 'tailwindcss'

const config: Config = {
  // Specify which files Tailwind should scan for class names
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette aligned with the refreshed brand
      colors: {
        // Brand blues
        'brand-50': '#eef7fb',
        'brand-100': '#d7ecf6',
        'brand-200': '#b7dded',
        'brand-300': '#8bc7e1',
        'brand-400': '#5fafd3',
        'brand-500': '#2596be', // Primary brand blue
        'brand-600': '#1f7aa0',
        'brand-700': '#175d7b',
        'brand-800': '#0c3f5e', // Deep navy from the palette
        'brand-900': '#082d44',

        // Warm accents inspired by terracotta tones
        'warm-50': '#fbefe3',
        'warm-100': '#f7e1cf',
        'warm-200': '#f3cdab',
        'warm-300': '#eeb489',
        'warm-400': '#e5af83', // Main warm accent
        'warm-500': '#d79064',
        'warm-600': '#ba7147',
        'warm-700': '#923b20', // Deep accent
        'warm-800': '#752c19',
        'warm-900': '#4c1c11',

        // Neutral surfaces
        'surface-50': '#f8fafc',
        'surface-100': '#f1f5f9',
        'surface-200': '#e2e8f0',
        'surface-300': '#cbd5e1',
        'surface-400': '#94a3b8',
        'surface-500': '#64748b',
        'surface-600': '#475569',
        'surface-700': '#334155',
        'surface-800': '#1e293b',
        'surface-900': '#0f172a',

        // Text hierarchy
        'text-primary': '#132f45',
        'text-secondary': '#36546a',
        'text-muted': '#5b7185',
        'text-on-brand': '#ffffff',
        'text-on-warm': '#2b1610',

        // Background aliases
        'background-primary': '#ffffff',
        'background-subtle': '#f5f9fc',
        'background-contrast': '#0c3f5e',

        // Semantic accents
        'success': '#22c55e',
        'warning': '#facc15',
        'error': '#ef4444',
        'info': '#0ea5e9',
      },
      
      // Custom font families
      fontFamily: {
        'display': ['Playfair Display', 'serif'],      // For headings
        'body': ['Inter', 'sans-serif'],               // For body text
        'script': ['Dancing Script', 'cursive'],       // For emotional quotes
      },
      
      // Additional spacing values for precise layouts
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
      },
      
      // Custom box shadows for depth and elevation
      boxShadow: {
        'soft': '0 2px 8px rgba(12, 63, 94, 0.08)',
        'medium': '0 4px 14px rgba(12, 63, 94, 0.12)',
        'brand': '0 6px 18px rgba(37, 150, 190, 0.35)',
        'warm': '0 6px 18px rgba(146, 59, 32, 0.28)',
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      
      // Keyframes for animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

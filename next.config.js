/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    // Define image formats for optimization
    formats: ['image/webp'],
    // Allow local images
    remotePatterns: [],
  },
  
  // Output configuration for Firebase Hosting
  output: 'export',
  
  // Disable image optimization for static export
  // (Firebase Hosting doesn't support Next.js Image Optimization API)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

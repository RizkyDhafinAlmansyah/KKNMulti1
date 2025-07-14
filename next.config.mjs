/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Add trailing slash for better compatibility
  trailingSlash: true,
  
  // Base path configuration (if needed for subdirectory deployment)
  // basePath: '/your-app-name',
  
  // Asset prefix for CDN (optional)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-app-name' : '',
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  
  // Experimental features
  experimental: {
    // Enable if needed
    // appDir: true,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

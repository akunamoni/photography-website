/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#d4af37', // Gold for premium accents
        dark: '#1a1a1a',
        // Luxury color palette
        'bg-primary': '#0a0a0a', // Deep charcoal
        'bg-secondary': '#1a1a1a', // Dark gray
        'bg-accent': '#2a2a2a', // Medium gray
        'bg-luxury': '#0f0f0f', // Ultra dark
        'text-primary': '#ffffff',
        'text-muted': 'rgba(255,255,255,0.8)',
        'text-luxury': 'rgba(255,255,255,0.9)',
        'accent-gold': '#d4af37', // Rich gold
        'accent-gold-light': '#f4e087', // Bright gold
        'accent-platinum': '#e5e5e5', // Platinum
        'accent-emerald': '#047857', // Deep emerald
        'accent-burgundy': '#7c2d12', // Rich burgundy
      },
      fontFamily: {
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f4e087 50%, #d4af37 100%)',
        'gradient-premium': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
      },
      boxShadow: {
        'luxury': '0 25px 50px rgba(0,0,0,0.5)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.3)',
        'glow-platinum': '0 0 25px rgba(229, 229, 229, 0.2)',
        'deep': '0 30px 60px rgba(0,0,0,0.8)',
      },
      borderColor: {
        'luxury': 'rgba(212, 175, 55, 0.2)',
      },
    },
  },
  plugins: [],
}
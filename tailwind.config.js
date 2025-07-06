/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Monochromatic black and white theme
        dark: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Pure black and white
        pure: {
          black: '#000000',
          white: '#ffffff',
        },
        // Gray scale for contrast
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // High contrast colors
        contrast: {
          primary: '#ffffff',
          secondary: '#000000',
          accent: '#e5e5e5',
          muted: '#737373',
          border: '#404040',
          surface: '#171717',
        },
        // Surface colors for glass effects
        surface: {
          primary: 'rgba(255, 255, 255, 0.95)',
          secondary: 'rgba(255, 255, 255, 0.08)',
          tertiary: 'rgba(255, 255, 255, 0.05)',
          dark: 'rgba(0, 0, 0, 0.85)',
          glass: 'rgba(255, 255, 255, 0.1)',
          glassDark: 'rgba(0, 0, 0, 0.9)',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.8)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};

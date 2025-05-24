/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E63946',
        accent: '#2D2D2D',
        text: '#B0B0B0',
        background: '#FFFFFF',
        secondary: '#F5F5F5',
      },
      fontFamily: {
        heloveta: ['Heloveta', 'sans-serif'],
      },
      animation: {
        'warp': 'warp 20s linear infinite',
        'shine': 'shine 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'grid-scroll': 'grid-scroll 20s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite alternate',
        'float-fast': 'float 4s ease-in-out infinite alternate-reverse',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'spin-slow-reverse': 'spin 20s linear infinite reverse',
      },
      keyframes: {
        warp: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shine: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%', backgroundSize: '400% 400%' },
          '50%': { backgroundPosition: '100% 50%', backgroundSize: '200% 200%' },
        },
        'grid-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'float': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        'pulse-glow': {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.5)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.7' },
        },
        'backgroundScroll': {
          '0%': { backgroundPosition: '0 0, 25px 25px' },
          '100%': { backgroundPosition: '50px 50px, 75px 75px' },
        },
      },
    },
  },
  plugins: [],
}
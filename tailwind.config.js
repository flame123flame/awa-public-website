/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // AWA Green Theme
        'awa-primary': '#059669',      // Emerald 600
        'awa-primary-light': '#10b981', // Emerald 500
        'awa-primary-dark': '#047857',  // Emerald 700
        'awa-secondary': '#065f46',     // Emerald 800
        'awa-accent': '#6ee7b7',        // Emerald 300
        'awa-light': '#ecfdf5',         // Emerald 50
        'awa-gray': '#6b7280',          // Gray 500
        'awa-dark': '#1f2937',          // Gray 800
        'awa-success': '#22c55e',       // Green 500
        'awa-warning': '#f59e0b',       // Amber 500
        'awa-error': '#ef4444',         // Red 500
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'awa-sm': '0 1px 2px 0 rgba(5, 150, 105, 0.05)',
        'awa-md': '0 4px 6px -1px rgba(5, 150, 105, 0.1)',
        'awa-lg': '0 10px 15px -3px rgba(5, 150, 105, 0.1)',
        'awa-xl': '0 20px 25px -5px rgba(5, 150, 105, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'awa-gradient': 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
        'awa-gradient-dark': 'linear-gradient(135deg, #047857 0%, #059669 50%, #10b981 100%)',
      }
    },
  },
  plugins: [],
}
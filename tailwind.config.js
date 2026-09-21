/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        quizRed: {
          light: '#ff3b30',
          DEFAULT: '#e60000',
          dark: '#b30000',
        },
        quizBlue: {
          light: '#2563eb',
          DEFAULT: '#1d4ed8',
          dark: '#1e3a8a',
          bg: '#1442a6',
        },
        quizYellow: {
          light: '#fef08a',
          DEFAULT: '#facc15',
          dark: '#eab308',
        }
      },
      boxShadow: {
        'pill': '0 8px 16px -2px rgba(0, 0, 0, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.1), inset 0 2px 3px rgba(255, 255, 255, 0.9)',
        'pill-hover': '0 12px 20px -2px rgba(0, 0, 0, 0.35), 0 6px 10px -2px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.95)',
        'glossy-badge': '0 4px 6px rgba(0, 0, 0, 0.3), inset 0 2px 3px rgba(255, 255, 255, 0.6), inset 0 -2px 3px rgba(0, 0, 0, 0.3)',
        'card-glow': '0 20px 35px -5px rgba(0, 0, 0, 0.3), 0 0 25px rgba(59, 130, 246, 0.2)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake': 'shake 0.4s ease-in-out',
        'pop': 'pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-8px)' },
          '40%, 80%': { transform: 'translateX(8px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

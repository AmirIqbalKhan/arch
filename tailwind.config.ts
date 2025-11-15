import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        concrete: '#f5f5f5',
        steel: '#0a0a0a',
        accent: '#3b82f6',
        glass: 'rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 8rem)',
        'h1': 'clamp(2rem, 5vw, 4rem)',
        'h2': 'clamp(1.5rem, 3vw, 2.5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(0,0,0,0.05)',
        'elevation-2': '0 4px 6px rgba(0,0,0,0.1)',
        'elevation-3': '0 10px 15px rgba(0,0,0,0.15)',
      },
      animation: {
        'sunlight-sweep': 'sunlight-sweep 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'sunlight-sweep': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config


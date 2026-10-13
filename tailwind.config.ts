import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf4ff',  // Soft Light Blue Accent (#EAF4FF)
          100: '#d5e8ff',
          200: '#b0d5ff',
          300: '#7cbaff',
          400: '#4297ff',
          500: '#1e73e8',  // Royal Blue (#1E73E8)
          600: '#0a4d9c',  // Deep Spiritual Blue (#0A4D9C)
          700: '#083c7d',
          800: '#083266',
          900: '#0c2a52',
          950: '#071833',
        },
        gold: {
          400: '#f3d05b',
          500: '#d4af37',  // Elegant Gold (#D4AF37)
          600: '#b89228',
          700: '#94711d',
        },
        navy: {
          800: '#0f172a',
          900: '#090d16',
        },
        canvas: '#f8fafc',
        body: '#0f172a',
        subtext: '#475569',
        borderline: '#e2e8f0',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1.1rem' }],
        'xs': ['0.8125rem', { lineHeight: '1.25rem' }],
        'sm': ['0.925rem', { lineHeight: '1.425rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.85rem' }],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-slow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(32px)' },
        },
      },
      boxShadow: {
        'subtle': '0 2px 8px 0 rgba(10, 77, 156, 0.05)',
        'card': '0 4px 20px -2px rgba(10, 77, 156, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'hover': '0 20px 40px -4px rgba(10, 77, 156, 0.16), 0 8px 16px -2px rgba(0, 0, 0, 0.06)',
        'modal': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        'glow': '0 0 25px rgba(30, 115, 232, 0.40)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#08111F',
        navy: '#08111F',
        charcoal: '#101826',
        surface: '#101826',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C76A',
          dark: '#B8972D',
          muted: '#9A7B24',
        },
        cream: '#F8F6F2',
        ivory: '#F8F6F2',
        silver: '#A0A8B0',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '10xl': '10rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A455 0%, #E4C474 50%, #9E7B2F 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0B0D 0%, #0F1623 100%)',
        'card-gradient': 'linear-gradient(180deg, transparent 40%, rgba(10,11,13,0.95) 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'gold': '0 0 30px rgba(201, 164, 85, 0.15)',
        'gold-sm': '0 0 15px rgba(201, 164, 85, 0.1)',
        'luxury': '0 25px 60px rgba(0, 0, 0, 0.5)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'nav': '0 4px 30px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

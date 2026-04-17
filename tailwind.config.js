/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream:   { 50: '#fafaf9', 100: '#f5f4f0', 200: '#ede9e0' },
        indigo:  { 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca' },
        coral:   { 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48' },
        amber:   { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706' },
        emerald: { 400: '#34d399', 500: '#10b981' },
        ink:     { 900: '#1a1a2e', 800: '#1e293b', 700: '#374151', 500: '#6b7280', 300: '#d1d5db', 100: '#f3f4f6' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: { xs: '4px' },
      borderRadius: { '2xl': '1rem', '3xl': '1.5rem', '4xl': '2rem' },
      boxShadow: {
        glass:  '0 4px 6px -1px rgba(0,0,0,0.04), 0 20px 40px -8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
        'glass-sm': '0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)',
        'glass-hover': '0 16px 48px rgba(99,102,241,0.18)',
        stat:   '0 8px 32px rgba(0,0,0,0.06)',
      },
      animation: {
        'blob': 'blob 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

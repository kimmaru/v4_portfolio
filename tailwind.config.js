/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#64ffda',
        navy: '#0a192f',
        'dark-navy': '#020c1b',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2, 12, 27, 0.7)',
        'dark-slate': '#495670',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        'green-tint': 'rgba(100, 255, 218, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Calibre', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

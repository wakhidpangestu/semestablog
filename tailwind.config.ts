import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // blue-400
          DEFAULT: '#2563eb', // blue-600
          dark: '#1e40af', // blue-800
        },
        glass: 'rgba(255,255,255,0.10)',
        'glass-dark': 'rgba(30,41,59,0.30)',
      },
      backgroundImage: {
        'blue-glass-gradient':
          'linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(37,99,235,0.3) 50%, rgba(30,64,175,0.3) 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      },
      borderRadius: {
        glass: '1.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
};

export default config;

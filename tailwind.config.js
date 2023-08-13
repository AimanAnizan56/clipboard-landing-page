/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      fontFamily: {
        BaiJamjuree: ['Bai Jamjuree', 'sans-serif'],
      },
      colors: {
        'primary-cyan': 'hsl(var(--color-strong-cyan) / <alpha-value>)',
        'primary-blue': 'hsl(var(--color-light-blue) / <alpha-value>)',
        'neutral-dark-gray-blue': 'hsl(var(--color-dark-grayish-blue) / <alpha-value>)',
        'neutral-gray-blue': 'hsl(var(--color-grayish-blue) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};

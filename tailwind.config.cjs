module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#2AA7D3',
          navy: '#1E3A5F',
          dark: '#0F2137',
          light: '#E8F4FA',
          mist: '#F4F9FC',
        },
      },
      fontFamily: {
        sans: ['var(--font-source-sans)', '"Source Sans Pro"', '"Source Sans 3"'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fredoka One"', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        sky: {
          school: '#00C4CC',
        },
        sun: '#FFB800',
        coral: '#FF6B6B',
        mint: '#4ECDC4',
        lavender: '#A78BFA',
        cloud: '#F0FFFE',
      },
      borderRadius: {
        blob: '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
    },
  },
  plugins: [],
}

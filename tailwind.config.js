/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '1fr 2fr',
      },
      fontFamily: {
        'sans': ['Inter Tight', 'sans-serif'],
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
}


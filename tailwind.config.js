/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'GilroyUltraLight': ['Gilroy UltraLight'],
        'GilroyLight': ['Gilroy Light'],
        'GilroyThin': ['Gilroy Thin'],
        'Gilroy': ['Gilroy'],
        'GilroyMedium': ['Gilroy Medium'],
        'GilroySemiBold': ['Gilroy SemiBold'],
        'GilroyBold': ['Gilroy Bold'],
        'GilroyExtraBold': ['Gilroy ExtraBold'],
        'GilroyBlack': ['Gilroy Black'],
        'GilroyHeavy': ['Gilroy Heavy'],
      }
    },
  },
  plugins: [],
}


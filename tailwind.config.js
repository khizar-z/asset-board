/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'questrial': ['Questrial', 'sans-serif'],
        'avenirroman': ['AvenirLTStd-Roman', 'sans-serif'],
        'avenirbook': ['AvenirLTStd-Book', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/forms')]
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,scss}"],
  theme: {
    extend: {
      colors: {
        occRed: '#d90028',
        occRedLight: '#FEF5F3',
        occText: '#4a4a49',
        occTextDark: '#1A1A1A',
        occGrayBg: '#F2F2F2'
      }
    },
  },
  plugins: [],
}


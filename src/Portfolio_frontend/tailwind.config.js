/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-dark': '#051129',
      'antiquewhite': '#FAEBD7',
      'cyan' : '#00FFFF'
    },
    boxShadow: {
      antiquewhite: '0 4px 6px -1px rgba(250, 235, 215, 0.5), 0 2px 4px -1px rgba(250, 235, 215, 0.06)'
    }
  },

  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#FF0000',
          yellow: '#FFAB07',
          green: '#0EAD00',
          black: '#313131',
        },
        secondary: {
          green: {
            100: '#E2E6DA',
            200: '#A3B18A',
            300: '#7A8960',
          },
          yellow: {
            100: '#F3EDD5',
            200: '#FFCC6A',
            300: '#FFAB07',
          },
          red: {
            100: '#FFE5E5',
            200: '#FF7C7C',
            300: '#FF0000',
          },
        },
      },
    },
  },
  plugins: [],
};

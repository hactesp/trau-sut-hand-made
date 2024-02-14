const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      white: 'white',
      black: 'black',
      primary: '#426D49',
    },
    extend: {
      fontFamily: {
        pecita: ['"Pecita"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

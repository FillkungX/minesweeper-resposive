/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ["Jersey 10", "sans-serif"],
        prompt: ["Prompt", "sans-serif"]
      }
    },
    screens: {
      'sss': '375px',
      'ss': '410px',

      'sl': '560px',

      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1440px) { ... }
      'sxl': '1440px',
      'xl': '1472px',

    },
  },

  plugins: [],
};

module.exports = config;

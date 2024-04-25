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
  },

  plugins: [],
};

module.exports = config;

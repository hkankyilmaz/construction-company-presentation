/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {


      animation: {
        fade: 'fadeOut 1s ease-in-out ',
        fadeIn: 'fadeIn 1s ease-in-out ',
        scroll: 'scroll 0.5s ease-in-out ',
        scrollDown: 'scrollDown 0.5s ease-in-out ',

      },


      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },

      }),
    },
  },
  plugins: [],
};

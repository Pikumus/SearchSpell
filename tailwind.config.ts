/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./features/**/*.{js,vue,ts}",
    "./features/*/components/**/*.{js,vue,ts}",
    "./features/*/layouts/**/*.vue",
    "./features/*/pages/**/*.vue",
    "./features/*/plugins/**/*.{js,ts}",
    "./features/*/app.vue",
    "./features/*/error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

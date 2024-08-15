/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "var(--color-primary)",
      gray: {
        1: "var(--color-gray-1)",
      },
    },
    extend: {},
  },
  plugins: [],
};

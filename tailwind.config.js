/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0a192f", light: "#112240", lightest: "#233554" },
        slate: { DEFAULT: "#8892b0", light: "#a8b2d1", lightest: "#ccd6f6", white: "#e6f1ff" },
        accent: "#64ffda",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

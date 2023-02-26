/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      keyframes: {
        // scale up and down
        twinkle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

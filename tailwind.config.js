/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,css,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 100, transform: "translateY(0)" },
        },
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 100, transform: "translateX(0)" },
        },
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 100, transform: "translateX(0)" },
        },
      },
      animation: {
        fadeDown: "fadeDown 0.8s ease-in-out",
        fadeRight: "fadeRight 0.8s ease-in-out",
        fadeLeft: "fadeLeft 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};

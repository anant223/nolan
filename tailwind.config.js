/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transform: {
        "perspective-1500": "perspective(1500px)",
        "rotate-y-35": "rotateY(-35deg)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-1500": {
          transform: "perspective(1500px)",
        },
        ".rotate-y-35": {
          transform: "rotateY(-35deg)",
        },
        ".perspective-1500-rotate-y-35": {
          transform: "perspective(1500px) rotateY(-35deg)",
        },
      });
    },
  ],
};
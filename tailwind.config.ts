import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        colorize: "changeColor 15s linear infinite",
      },
      keyframes: {
        changeColor: {
          "0%": { color: "orange" },
          "10%": { color: "red" },
          "20%": { color: "yellow" },
          "30%": { color: "purple" },
          "40%": { color: "green" },
          "50%": { color: "lightblue" },
          "60%": { color: "blue" },
          "70%": { color: "darkblue" },
          "80%": { color: "yellow" },
          "90%": { color: "red" },
          "100%": { color: "orange" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

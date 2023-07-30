/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          200: "#ABABAB",
          500: "#252525",
          800: "#1C1C1C",
          900: "#161616",
        },
        darkBlue: {
          500: "#6837F2",
        },
      },
    },
  },
  plugins: [],
};

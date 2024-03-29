/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js, jsx, ts, tsx, html, css}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#16224C",
        "light-gray": "#D9D9D9",
        "dark-gray": "#818181",
        "light-yellow": "#FFF684"
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "noto-sans": ["Noto Sans Georgian", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"]
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};


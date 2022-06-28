/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ffffff",
          secondary: "#f6d860",
          accent: "#4267B2",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      
    ],
  },
  plugins: [require("daisyui")],
}

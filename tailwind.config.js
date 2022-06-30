/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF2D37",
          secondary: "#f3f4f6",
          accent: "#FFEDD5",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
          info: "#777",
          success: "#3ec65d",
          warning: "#DF7E07",
          error: "#FA5C5C",
          black: "#333333",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

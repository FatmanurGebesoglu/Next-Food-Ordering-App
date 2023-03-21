/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        screens:{
          sx:"375px",
          sm:"640px",
          md:"768px",
          lg:"1024px",
          xl:"1170px",
          "2xl":"117 0px"
        },
      },
      colors:{
        primary: "#ffbe33",
        secondary: "#222831"
      },
      fontFamily:{
        dancing: ["Dancing Script", "cursive "],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
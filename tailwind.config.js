/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "792px",
          lg: "1016px",
          xl: "1064px",
         
        },
        padding: {
          DEFAULT: "12px",
        },
      },
      fontFamily: {
        'Eudo': "EudoxusSans",
      },
      fontSize: {
        xxs: "11.8px",
        xs: "12px",
        xsm: "13px",
        sm: "22px",
        xlg: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "41px",
      },
      colors: {
        golden: "#AA832F",      
        white: "#FFFFFF",
        black: "#0A0A0B",
        "light-gray": "#E2DDCB",
      },
    },
  },
  plugins: [],
}
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
        backgroundImage: {
          'custom-gradient': 'radial-gradient(217.22% 82.21% at 50% 80%, #775407 27.96%, #BE953D 41.96%, rgba(196, 154, 66, 0.883333) 54.96%, rgba(215, 173, 80, 0.5) 71.96%, rgba(215, 173, 80, 0) 93.46%), linear-gradient(180deg, rgba(19, 17, 13, 0) 26%, #13110D 100%)',
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
      backgroundImage: {
        'custom-gradient': 'radial-gradient(217.22% 82.21% at 50% 80%, #775407 27.96%, #BE953D 41.96%, rgba(196, 154, 66, 0.883333) 54.96%, rgba(215, 173, 80, 0.5) 71.96%, rgba(215, 173, 80, 0) 93.46%), linear-gradient(180deg, rgba(19, 17, 13, 0) 26%, #13110D 100%)',
      },
    },
  },
  plugins: [],
}
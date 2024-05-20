/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#ededed",
        },
        white: "#fff",
        darkslategray: {
          "100": "#454545",
          "200": "#3a3a3a",
          "300": "#333",
        },
        black: "#000",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d8d8d8",
        },
        gray: {
          "100": "#828282",
          "200": "#242424",
          "300": "rgba(0, 0, 0, 0.5)",
          "400": "rgba(10, 10, 10, 0.2)",
          "500": "rgba(255, 255, 255, 0.7)",
        },
      },
      spacing: {},
      fontFamily: {
        "small-text": "Inter",
        futura: "Kumbh Sans",
        roboto: "Roboto",
        "noto-sans": "'Noto Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "22px",
      lgi: "19px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      xl: "20px",
      "21xl": "40px",
      "13xl": "32px",
      "17xl": "36px",
      "3xl": "21px",
      "10xl": "29px",
      "77xl": "96px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

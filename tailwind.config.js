/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      beige: "#b5b2a7",
      dark_beige: "#8f8b7e",
      shadow_beige: "#594a37",
      black: "#000000",
      white: "#ebe8ff",
      dark_green: "#82A05c",
      green: "#82C05c",
      blue: "#04001c"
    },
    cursor: {
      default: "url(/lime-green/Normal Select.cur), default",
      pointer: "url(/lime-green/Link Select.cur), pointer",
      text: "url(/lime-green/Text Select.cur), pointer"
    },
    extend: {
      fontSize: {
        paragraph: "1.5rem",
        header: "1.7rem"
      }
    }
  },
  plugins: []
};

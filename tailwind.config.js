module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class", // Keep dark mode using the 'class' strategy
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      width: {
        'fill-available': '-webkit-fill-available',
      },
      colors: {
        // Your existing color configurations...
        amber: { 700: "#ffa20c" },
        black: { 900: "#000000", "900_19": "#00000019" },
        blue_gray: { 50: "#eff1f2", 100: "#d4d4d4", 400: "#898989", 900: "#272c33" },
        cyan: { 100: "#bef7e9" },
        gray: { 100: "#f0f6ff", 300: "#dbdbdb", 500: "#909496", 700: "#5a5a5a", 800: "#4c4c4c", "300_01": "#e3e3e3" },
        green: { 900: "#008d0e" },
        light_blue: { 100: "#b2e6fd" },
        red: { a700: "#ff0c10" },
        white: { a700: "#ffffff" },
        // Add dark mode specific configurations
        dark: {
          700: "#1a1a1a", // Custom background color for dark mode
          text: "#ffffff", // White text color for dark mode
        },
      },
      textColor: {
        // Extend text color configurations for dark mode
        dark: {
          base: "#ffffff", // Set base text color to white in dark mode
        },
      },
      // Your existing configurations...
      fontFamily: { lato: "lato", lato1: "Lato" },
      backgroundImage: { gradient: "linear-gradient(90deg, #bef7e9,#b2e6fd)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

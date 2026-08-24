import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7ffe0",
          100: "#efffcc",
          400: "#d4ff00",
          500: "#c6ff00",
          600: "#b0e600",
          700: "#8fcc00",
          800: "#6b9900",
          900: "#4d6b00",
          950: "#1a2400",
        },
        lime: {
          DEFAULT: "#c6ff00",
          400: "#d4ff00",
          500: "#c6ff00",
          600: "#b0e600",
        },
        purple: {
          400: "#c084fc",
          500: "#a855f7",
        },
        primary: {
          DEFAULT: "#c6ff00",
          dark: "#b0e600",
          light: "#d4ff00",
        },
        secondary: "#a3a3a3",
        accent: "#c6ff00",
        "text-primary": "#ffffff",
        "text-secondary": "#a3a3a3",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.2)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.4)",
        brand: "0 4px 20px rgba(198, 255, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;

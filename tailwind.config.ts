import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9900",
        secondary: "#232f3e",
        "orange-amazon": "#FF9900",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "10rem",
      },
    },
  },
};
export default config;

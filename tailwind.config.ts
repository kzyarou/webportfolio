import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "retro-cream": "#F2F1E8",
        "retro-gray": "#C9C5B7",
        "retro-black": "#131311",
        "retro-dark-gray": "#656560",
        "retro-brown": "#52442D",
        "retro-light-brown": "#9D6D33",
        "retro-gold": "#AD8B5A",
      },
      fontFamily: {
        retro: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

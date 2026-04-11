import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#07111f",
        panel: "#07101d",
        line: "#183b69",
        accent: "#ffd23f",
        ink: "#ffffff",
        muted: "#c8d8f2",
        electric: "#17a8ff",
        cta: "#ff3fa4"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 210, 63, 0.24), 0 24px 70px rgba(7, 17, 31, 0.35)",
        pop: "0 18px 45px rgba(255, 63, 164, 0.35)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.11) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

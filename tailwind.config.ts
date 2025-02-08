import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // dark bgs 
        darkprimaryBg: "#242424",
        darksecondaryBg: "#2e2e2e",
        darkdeepBg: "#242424",
        // dark texts
        darkprimaryText: "#FFFFFF",
        darksecondaryText: "#D3D3D3",
        // buttons
        primaryButton: "#1971c2",
        secondaryButton: "#ffd43b",
        // light bgs
        lightprimaryBg: "#FFFFFF",
        lightsecondaryBg: "#f8f9fa",
        // light texts
        lightprimaryText: "#000000",
        lightsecondaryText: "#6c757d",
        // border color 
        darkBorderColor: "#393939",
        lightBorderColor: "#E5E5E5",
        // card borders 
        darkcardBorderColor: "#5B5B5B",
        lightcardBorderColor: "#E5E5E5",
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",  // Deep Purple
        accent: "#D8B4FE",   // Lavender
        gold: "#FACC15",     // Warm Gold
        cream: "#FAF5FF",    // Soft Cream
        dark: "#111827",     // Charcoal Black
      },
    },
  },
  plugins: [],
};

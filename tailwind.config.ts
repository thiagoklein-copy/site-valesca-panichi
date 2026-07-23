/**
 * Centralized design tokens for Valesca Panichi.
 * Colors are also mirrored in globals.css @theme for Tailwind v4.
 */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        sage: "#4A5D45",
        terracotta: "#D9814F",
        charcoal: "#2E2A26",
        cardBg: "#F1EAE0",
        mutedSage: "#8B9A7D",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

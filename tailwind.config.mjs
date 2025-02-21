export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ["Neue Montreal", "sanf-serif"],
        general: ["General", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        background2: "var(--background-2)",
        background3: "var(--background-3)",
        background4: "var(--background-4)",
        background5: "var(--background-5)",
        border: "var(--border)",
        border2: "var(--border-2)",
        color: "var(--color)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
      },
      screens: {
        mobile: "400px",
        tablet: "768px",
        laptop: "992px",
        desktop: "1280px",
      },
    },
  },
};

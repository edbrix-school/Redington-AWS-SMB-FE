export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

export const theme = {
  screens: {
    xs: "575px",
    // => @media (min-width: 575px) { ... }
    sm: "640px",
    // => @media (min-width: 640px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }
    lg: "1024px",
    // => @media (min-width: 1024px) { ... }
    xl: "1280px",
    // => @media (min-width: 1280px) { ... }
    "1366xl": "1366px",
    // => @media (min-width: 1366px) { ... }
    "1440xl": "1440px",
    // => @media (min-width: 1440px) { ... }
    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
    "3xl": "1900px",
    // => @media (min-width: 1900px) { ... }
    // This is VW screen size.
  },
  extend: {
    fontFamily: {
      inter: ["Inter", "system-ui", "sans-serif"],
      nunito: ["Nunito", "system-ui", "sans-serif"],
      opensans: ["Open Sans", "system-ui", "sans-serif"],
    },
    colors: {
      "interface-text-subtitle": "var(--Interface-Text-subtitle)",
      "interface-text-default": "var(--Interface-Text-default)",
      "interface-text-title": "var(--Interface-Text-title)",
      "brand-primary-500": "var(--Brand-Primary-500)",
      "brand-neutral-900": "var(--Brand-Neutral-900)",
      "interface-stroke-soft": "var(--Interface-Stroke-soft)",
      "catalog-bg": "#F0F4F5",
    },
    backgroundImage: {
      "catalog-search-gradient":
        "linear-gradient(90.85deg, rgba(255, 233, 67, 0.22) 5.05%, rgba(66, 219, 62, 0.22) 97.08%)",
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "slide-in-left": "slide-in-left 0.2s ease-out forwards",
      "slide-out-right": "slide-out-right 0.2s ease-in forwards",
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
};

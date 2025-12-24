/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      screens: {
        xs: '575px',
        // => @media (min-width: 575px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '1366xl': '1366px',
        // => @media (min-width: 1366px) { ... }
        '1440xl': '1440px',
        // => @media (min-width: 1440px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1900px',
        // => @media (min-width: 1900px) { ... }
        // This is VW screen size.
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
  },
 
  safelist: ["dark"],
  plugins: [],
};
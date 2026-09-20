/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans:    ["'DM Sans'", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        dark: {
          bg:      "#07090F",
          surface: "#07090F",   // unified — same as bg
          card:    "#0D1320",
          border:  "#1a2235",
        },
        light: {
          bg:      "#EEF2FF",   // indigo-50 tinted — classy
          surface: "#E8EEFF",   // slightly deeper for alternating sections
          card:    "#FFFFFF",
          border:  "#C7D7FF",   // blue-tinted border
        },
        accent: {
          DEFAULT: "#5B8CFF",
          light:   "#A5C0FF",
          dark:    "#3366DD",
          glow:    "rgba(91,140,255,0.25)",
        },
      },
      animation: {
        blink:    "blink 1s step-end infinite",
        float:    "float 6s ease-in-out infinite",
        "slide-up":"slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        blink:   { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        float:   { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
    },
  },
  plugins: [],
};

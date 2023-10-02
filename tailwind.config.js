/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter"],
        lato: ["var(--font-lato)"],
        bebas: ["var(--font-bebas)"],
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        formColor: "#1c1c1c",
        lightFormColor: "#E3FEFD",
        infinBgColor: "#ffffff",
        LoginTextColor: "#4FD3CC",
        textColor: "#ffffff",
        subTextColor: "#1c1c1c",
        dullText: "#d1d1d1",
        seperatorLine: "#D9D9D9",
        borderColor: "#2A2A29",
        latestBox: "#2A2A2A",
        c1: "#131313",
        c2: "#D1D1D1",
        c3: "#8B8D93",
        c4: "#6B8AFD",
        c5: "#2E343D",
        c6: "#1C1C1C",
        c7: "#FFFFFF",
        c8: "#22DDD2",
        c9: "#22DDD2",
        c10: "#FF00D6",
        c11: "#2E73EA",
        cardsBg: "#2B2B2B",
        sectionBg: "#0b0b0b",
        investorCardBg: "#F6F6F6",
        gray: colors.neutral,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // "h1,h2,h3,h4,h5,h6": {
            //   fontFamily: "var(--font-lato) !important",
            // },
            // color: theme("colors.gray.700"),
            // a: {
            //   color: theme("colors.primary.500"),
            //   "&:hover": {
            //     color: `${theme("colors.primary.600")} !important`,
            //   },
            //   code: { color: theme("colors.primary.400") },
            // },
            // h1: {
            //   fontWeight: "900",
            //   letterSpacing: theme("letterSpacing.tight"),
            //   color: theme("colors.gray.900"),
            // },
            // h2: {
            //   fontWeight: "700",
            //   letterSpacing: theme("letterSpacing.tight"),
            //   color: theme("colors.gray.900"),
            // },
            // h3: {
            //   fontWeight: "600",
            //   color: theme("colors.gray.900"),
            // },
            // "h4,h5,h6": {
            //   color: theme("colors.gray.900"),
            // },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },
            // blockquote: {
            //   color: theme("colors.gray.900"),
            //   borderLeftColor: theme("colors.gray.200"),
            // },
          },
        },
        dark: {
          css: {
            // color: theme("colors.gray.300"),
            // h1: {
            //   fontWeight: "700",
            //   letterSpacing: theme("letterSpacing.tight"),
            //   color: theme("colors.gray.100"),
            // },
            // h2: {
            //   fontWeight: "700",
            //   letterSpacing: theme("letterSpacing.tight"),
            //   color: theme("colors.gray.100"),
            // },
            // h3: {
            //   fontWeight: "600",
            //   color: theme("colors.gray.100"),
            // },
            // "h4,h5,h6": {
            //   color: theme("colors.gray.100"),
            // },

            hr: { borderColor: theme("colors.gray.700") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            // thead: {
            //   th: {
            //     color: theme("colors.gray.100"),
            //   },
            // },
            // tbody: {
            //   tr: {
            //     borderBottomColor: theme("colors.gray.700"),
            //   },
            // },
            // blockquote: {
            //   color: theme("colors.gray.100"),
            //   borderLeftColor: theme("colors.gray.700"),
            // },
          },
        },
      }),
    },
  },
  plugins: [],
};

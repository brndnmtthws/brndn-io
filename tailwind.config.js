/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.slate.700 / 1"),
            "--tw-prose-invert-body": theme("colors.slate.300 / 1"),
            picture: {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
      }),
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      scale: {
        0: "0",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        101: "1.01",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontSize: {
        "body-s": "var(--body-s-font-size)",
        "heading-l-bold": "var(--heading-l-bold-font-size)",
        "heading-l-regular": "var(--heading-l-regular-font-size)",
        "heading-s": "var(--heading-s-font-size)",
        "heading-m": "var(--heading-m-font-size)",
        "heading-body-m": "var(--heading-body-m-font-size)",
        "heading-body-s": "var(--heading-body-s-font-size)",
      },
      colors: {
        vibrantPurple: "#A729F5",
        darkSlate: "#313E51",
        slateBlue: "#3B4D66",
        grayishBlue: "#626C7F",
        lightBlue: "#ABC1E1",
        veryLightBlue: "#F4F6FA",
        white: "#FFFFFF",
        brightGreen: "#26D782",
        coralRed: "#EE5454",
      },
    },
  },
  plugins: [],
};

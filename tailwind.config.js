/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],

    darkMode: "class",
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {

                light: {},
                dark: {},
            }
        })
    ],
 theme: {
    extend: {
      fontFamily: {
        'tan-mon-cheri': ['TAN Mon Cheri', 'sans-serif'],
        'season-bold': ['The Season', 'sans-serif'],
        'mill-goudy': ['Mill Goudy', 'serif'],
      },
    },
  },
};

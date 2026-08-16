import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#8E2DE2",
                secondary: "#4A00E0",
                heading: "#2D1B4E",
                "dark-grey": "#333333",
                "light-grey": "#d2d2d2",
            },
            fontFamily: {
                sans: ["var(--font-montserrat)"],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "2xl": "1400px",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
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
                cream: "#FFFDF5",
                dark: "#1a1a1a",
                mustard: "#FFC107",
                teal: "#004D40",
                pink: "#F48FB1",
            },
            fontFamily: {
                serif: ["var(--font-playfair-display)"],
                sans: ["var(--font-inter)"],
            },
            boxShadow: {
                hard: "4px 4px 0px 0px rgba(0,0,0,1)",
                "hard-lg": "8px 8px 0px 0px rgba(0,0,0,1)",
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

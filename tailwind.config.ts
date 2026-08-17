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
                heading: "#222222",
                "dark-grey": "#333333",
                "light-grey": "#d2d2d2",
                "mario-red": "#E52521",
                "mario-green": "#00A800",
                "mario-blue": "#1F4FD8",
                "mario-sky": "#6AB8FF",
                "mario-yellow": "#FFD700",
                "mario-brown": "#8B5A2B",
                "mario-dark": "#1A1A1A",
            },
            fontFamily: {
                sans: ["var(--font-montserrat)"],
                pixel: ["var(--font-pixel)"],
                retro: ["var(--font-retro)"],
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
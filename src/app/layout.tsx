import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair-display",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Nasrul Aditri | Creative Developer",
    description: "Portfolio of Nasrul Aditri - Building digital experiences with code.",
};

import { NoiseOverlay } from "@/components/NoiseOverlay";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    inter.variable,
                    playfair.variable,
                    "antialiased min-h-screen flex flex-col"
                )}
            >
                <NoiseOverlay />
                {children}
            </body>
        </html>
    );
}

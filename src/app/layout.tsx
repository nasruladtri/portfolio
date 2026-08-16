import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Nasrul Aditri | Creative Developer",
    description: "Portfolio of Nasrul Aditri - Building digital experiences with code.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    montserrat.variable,
                    "antialiased min-h-screen flex flex-col"
                )}
            >
                {children}
            </body>
        </html>
    );
}
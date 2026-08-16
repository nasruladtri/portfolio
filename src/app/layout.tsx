import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

const SITE_URL = "https://www.nasruladitri.space";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Nasrul Aditri Rahmandika | Web Developer",
        template: "%s | Nasrul Aditri Rahmandika",
    },
    description:
        "Portfolio Nasrul Aditri Rahmandika - Web Developer spesialis React, Next.js, dan Laravel. Membangun website modern, cepat, dan user-friendly untuk bisnis, UMKM, hingga instansi pemerintah.",
    keywords: [
        "Nasrul Aditri Rahmandika",
        "Nasrul Aditri",
        "Web Developer Indonesia",
        "Portfolio Web Developer",
        "Jasa Pembuatan Website",
        "React Developer",
        "Next.js Developer",
        "Laravel Developer",
        "Nasrul Aditri Madiun",
    ],
    authors: [{ name: "Nasrul Aditri Rahmandika" }],
    creator: "Nasrul Aditri Rahmandika",
    openGraph: {
        type: "website",
        url: SITE_URL,
        siteName: "Nasrul Aditri Rahmandika",
        title: "Nasrul Aditri Rahmandika | Web Developer",
        description:
            "Portfolio Nasrul Aditri Rahmandika - Web Developer spesialis React, Next.js, dan Laravel.",
        locale: "id_ID",
    },
    twitter: {
        card: "summary",
        title: "Nasrul Aditri Rahmandika | Web Developer",
        description:
            "Portfolio Nasrul Aditri Rahmandika - Web Developer spesialis React, Next.js, dan Laravel.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Nasrul Aditri Rahmandika",
                            url: SITE_URL,
                            jobTitle: "Web Developer",
                            description:
                                "Web Developer spesialis React, Next.js, dan Laravel.",
                            sameAs: [
                                "https://github.com/nasruladtri",
                                "https://www.linkedin.com/in/nasruladitri",
                                "https://www.nasruladitri.space",
                            ],
                        }),
                    }}
                />
            </head>
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
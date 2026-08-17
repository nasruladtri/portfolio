import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Navbar } from "@/components/Navbar";
import { RetroBackground } from "@/components/Retro";

const pixel = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-pixel",
});

const retro = VT323({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-retro",
});

const SITE_URL = "https://www.nasruladitri.space";
const SITE_TITLE = "Nasrul Aditri Rahmandika | Web Developer";
const SITE_DESCRIPTION =
    "Portfolio Nasrul Aditri Rahmandika - Web Developer spesialis React, Next.js, dan Laravel. Membangun website modern, cepat, dan user-friendly untuk bisnis, UMKM, hingga instansi pemerintah.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: "%s | Nasrul Aditri Rahmandika",
    },
    description: SITE_DESCRIPTION,
    applicationName: "Nasrul Aditri Rahmandika",
    keywords: [
        "Nasrul Aditri Rahmandika",
        "Nasrul Aditri",
        "Nasrul Aditri Rahmandika Web Developer",
        "Web Developer Indonesia",
        "Portfolio Web Developer",
        "Jasa Pembuatan Website",
        "React Developer",
        "Next.js Developer",
        "Laravel Developer",
        "Nasrul Aditri Madiun",
    ],
    authors: [{ name: "Nasrul Aditri Rahmandika", url: SITE_URL }],
    creator: "Nasrul Aditri Rahmandika",
    icons: {
        icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico", type: "image/x-icon" }],
        apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
    openGraph: {
        type: "website",
        url: SITE_URL,
        siteName: "Nasrul Aditri Rahmandika",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        locale: "id_ID",
        images: [
            {
                url: "/logo.png",
                width: 2000,
                height: 2000,
                alt: "Logo Nasrul Aditri Rahmandika",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: ["/logo.png"],
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
    verification: {
        google: "google028f41148c4f2188",
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
                            image: `${SITE_URL}/logo.png`,
                            sameAs: [
                                "https://github.com/nasruladtri",
                                "https://www.linkedin.com/in/nasruladitri",
                                "https://www.nasruladitri.space",
                            ],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Nasrul Aditri Rahmandika",
                            alternateName: "Nasrul Aditri",
                            url: SITE_URL,
                            description: SITE_DESCRIPTION,
                            inLanguage: "id-ID",
                        }),
                    }}
                />
            </head>
            <body
                className={clsx(
                    pixel.variable,
                    retro.variable,
                    "antialiased min-h-screen flex flex-col"
                )}
            >
                <RetroBackground />
                <Navbar />
                <div className="relative z-10 flex-1">
                    {children}
                </div>
            </body>
        </html>
    );
}
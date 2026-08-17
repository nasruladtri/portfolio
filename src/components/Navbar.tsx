"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-mario-dark border-b-4 border-black">
            <nav className="container max-w-5xl px-6 py-4 flex items-center justify-between">
                <a
                    href="#top"
                    className="flex items-center gap-3"
                    aria-label="Nasrul Aditri Rahmandika"
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src="/logo.png"
                        alt="Logo Nasrul Aditri Rahmandika"
                        width={44}
                        height={44}
                        className="w-11 h-11 object-cover pixelated pixel-frame"
                    />
                    <span className="font-pixel text-sm md:text-base text-white pixel-outline">
                        NASRUL <span className="text-mario-yellow">ADITRI</span>
                    </span>
                </a>

                <ul className="hidden sm:flex items-center gap-8 font-pixel text-sm md:text-base text-white">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="pixel-outline hover:text-mario-yellow transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="sm:hidden text-white p-2 -mr-2"
                    aria-label={open ? "Tutup menu" : "Buka menu"}
                    aria-expanded={open}
                >
                    {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </nav>

            {open && (
                <div className="sm:hidden border-t-4 border-black bg-mario-dark">
                    <ul className="container max-w-5xl px-6 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block px-3 py-3 font-pixel text-base text-white pixel-outline hover:text-mario-yellow transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

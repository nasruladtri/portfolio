"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PixelLogo } from "./Retro";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "https://gallery.nasruladitri.space", external: true },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-transparent">
            <nav className="container max-w-5xl px-6 py-4 flex items-center justify-between">
                <a
                    href="#top"
                    className="flex items-center gap-3"
                    aria-label="Nasrul Aditri Rahmandika"
                    onClick={() => setOpen(false)}
                >
                    <span className="shrink-0 pixel-shadow-sm">
                        <PixelLogo size={40} />
                    </span>
                    <span className="font-pixel text-xs md:text-sm text-white pixel-outline">
                        NASRUL <span className="text-mario-yellow">ADITRI</span>
                    </span>
                </a>

                <ul className="hidden sm:flex items-center gap-8 font-pixel text-sm md:text-base text-white">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
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
                <div className="sm:hidden bg-transparent">
                    <ul className="container max-w-5xl px-6 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
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

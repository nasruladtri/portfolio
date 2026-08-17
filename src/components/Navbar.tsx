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
            <nav className="container max-w-5xl px-6 py-3 flex items-center justify-between">
                <a
                    href="#top"
                    className="flex items-center gap-3"
                    aria-label="Nasrul Aditri Rahmandika"
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src="/logo.png"
                        alt="Logo Nasrul Aditri Rahmandika"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover pixelated pixel-frame"
                    />
                    <span className="font-pixel text-[10px] md:text-xs text-white">
                        N.<span className="text-mario-yellow">ADITRI</span>
                    </span>
                </a>

                <ul className="hidden sm:flex items-center gap-6 font-pixel text-[10px] text-white">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-mario-yellow transition-colors"
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
                    {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
                                    className="block px-3 py-3 font-pixel text-[10px] text-white hover:text-mario-yellow transition-colors"
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

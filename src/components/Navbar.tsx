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
        <header className="fixed top-0 inset-x-0 z-50 bg-white/40 backdrop-blur-xl border-b border-white/60">
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
                        width={44}
                        height={44}
                        className="w-11 h-11 rounded-full object-cover"
                    />
                    <span className="font-bold text-heading">
                        Nasrul<span className="text-primary">Aditri</span>
                    </span>
                </a>

                <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-heading">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="sm:hidden text-heading p-2 -mr-2"
                    aria-label={open ? "Tutup menu" : "Buka menu"}
                    aria-expanded={open}
                >
                    {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </nav>

            {open && (
                <div className="sm:hidden border-t border-white/60 bg-white/60 backdrop-blur-xl">
                    <ul className="container max-w-5xl px-6 py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-heading hover:text-primary hover:bg-light-grey/20 rounded-lg transition-colors"
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

import Image from "next/image";

export const Navbar = () => {
    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-sm border-b border-light-grey/50">
            <nav className="container max-w-5xl px-6 py-3 flex items-center justify-between">
                <a href="#top" className="flex items-center gap-3" aria-label="Nasrul Aditri Rahmandika">
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
                    <li>
                        <a href="#about" className="hover:text-primary transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-primary transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-primary transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
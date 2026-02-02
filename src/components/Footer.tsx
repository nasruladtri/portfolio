"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-dark text-cream p-10 md:p-20 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif mb-12">
                    Let's Build Something <br />
                    <span className="text-mustard italic">Crazy Together</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
                    <a href="mailto:nasruladitri2@gmail.com" className="group flex items-center gap-2 text-2xl font-bold hover:text-mustard transition-colors">
                        <Mail className="w-6 h-6 border-2 border-cream rounded-full p-0.5 group-hover:border-mustard" />
                        nasruladitri2@gmail.com
                    </a>

                    <a href="https://fastwork.id/user/nasruladitri/web-development-43348927?source=seller-center_my-service_share-link" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-2xl font-bold hover:text-[#00B900] transition-colors">
                        <Image src="/fastwork.svg" alt="Fastwork" width={24} height={24} className="w-6 h-6" />
                        Fastwork
                    </a>
                </div>

                <p className="font-sans text-sm opacity-50">
                    © {new Date().getFullYear()} Nasrul Aditri.
                </p>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]" />
            </div>
        </footer>
    );
};

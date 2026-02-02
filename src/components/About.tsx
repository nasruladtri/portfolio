"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section className="border-b-4 border-black flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 md:p-20 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white flex items-center justify-center">
                <motion.div
                    whileHover={{ rotate: 2 }}
                    className="w-full aspect-square border-4 border-black bg-teal shadow-hard flex items-center justify-center relative overflow-hidden"
                >
                    <Image
                        src="/me.webp"
                        alt="Nasrul Aditri"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
            <div className="w-full md:w-1/2 p-10 md:p-20 bg-mustard flex flex-col justify-center">
                <h2 className="text-5xl md:text-7xl font-serif mb-8 uppercase">Who Am I?</h2>
                <p className="text-xl md:text-2xl font-sans font-medium mb-6 leading-relaxed">
                    I'm a creative developer who believes code should have <span className="underline decoration-4 decoration-black">personality</span>.
                </p>
                <p className="text-lg font-sans mb-8">
                    Specializing in React, Next.js, and breaking standard design rules to create memorable web experiences. When I'm not coding, I'm probably resizing windows to test responsiveness.
                </p>
                <button className="self-start text-xl font-bold border-b-4 border-black hover:bg-black hover:text-white transition-colors py-1">
                    READ MORE
                </button>
            </div>
        </section>
    );
};

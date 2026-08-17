"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { PixelCoin, PixelQuestionBlock } from "./Retro";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const techChips = ["React", "Next.js", "Laravel", "TypeScript", "Tailwind"];

export const Hero = () => {
    return (
        <section id="top" className="relative min-h-screen flex items-center px-6 pt-20 pb-12">
            <div className="container max-w-5xl">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="leading-tight"
                >
                    <span className="block font-pixel text-xs sm:text-sm md:text-base text-white pixel-outline mb-3">
                        HI, MY NAME IS
                    </span>
                    <span className="block font-pixel text-lg sm:text-3xl md:text-4xl text-white pixel-outline-lg mb-4">
                        NASRUL ADITRI
                        <br />
                        RAHMANDIKA
                    </span>
                    <span className="block font-pixel text-xs sm:text-sm md:text-base text-white pixel-outline mb-2">
                        I'M THE
                    </span>
                    <span className="block font-pixel text-base sm:text-2xl md:text-3xl text-mario-yellow pixel-outline-lg">
                        CREATIVE WEB
                        <br />
                        DEVELOPER
                    </span>
                </motion.h1>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ delay: 0.25 }}
                    className="mt-8 flex flex-wrap items-center gap-3"
                >
                    {techChips.map((chip) => (
                        <span
                            key={chip}
                            className="font-pixel text-[9px] md:text-[10px] text-black bg-white pixel-frame px-3 py-2 pixel-shadow-sm"
                        >
                            {chip}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ delay: 0.35 }}
                    className="mt-8 flex flex-wrap items-center gap-6"
                >
                    <CTAButton href="#about" variant="gradient">
                        Press Start
                    </CTAButton>
                    <span className="w-10 coin-anim">
                        <PixelCoin />
                    </span>
                </motion.div>
            </div>

            <div aria-hidden="true" className="absolute top-36 right-8 hidden md:block w-16">
                <PixelQuestionBlock />
            </div>
            <div aria-hidden="true" className="absolute bottom-32 left-6 hidden lg:block w-10 coin-anim">
                <PixelCoin />
            </div>
        </section>
    );
};

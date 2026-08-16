"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const Hero = () => {
    return (
        <section
            id="top"
            className="min-h-screen flex items-center bg-white text-heading px-6"
        >
            <div className="container max-w-5xl">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                >
                    Hi, my name is{" "}
                    <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                        Nasrul Aditri Rahmandika
                    </span>
                    <br />
                    I'm the{" "}
                    <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                        Creative Web Developer
                    </span>
                    .
                </motion.h1>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ delay: 0.25 }}
                    className="mt-8"
                >
                    <CTAButton href="#about">Know more</CTAButton>
                </motion.div>
            </div>
        </section>
    );
};
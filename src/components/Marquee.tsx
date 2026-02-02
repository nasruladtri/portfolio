"use client";

import { motion } from "framer-motion";

export const Marquee = () => {
    return (
        <div className="relative flex overflow-hidden border-b-4 border-black bg-mustard py-4">
            <div className="absolute inset-0 z-10 bg-mustard/0" /> {/* Spacer/Protector if needed */}
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...Array(10)].map((_, i) => (
                    <span
                        key={i}
                        className="mx-8 text-4xl font-bold uppercase tracking-widest text-dark"
                    >
                        OPEN FOR WORK •
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

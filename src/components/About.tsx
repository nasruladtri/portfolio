"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const About = () => {
    return (
        <section id="about" className="px-6 py-20">
            <div className="container max-w-6xl grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="relative flex justify-center"
                >
                    <div className="absolute -inset-3 bg-mario-yellow pixel-frame rotate-2" />
                    <div className="relative bg-white pixel-frame pixel-shadow p-2">
                        <Image
                            src="/me.png"
                            alt="Nasrul Aditri Rahmandika"
                            width={340}
                            height={340}
                            className="w-[260px] md:w-[340px] h-auto object-cover pixelated"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="bg-[#fffdf5] text-black pixel-frame pixel-shadow p-8 md:p-10"
                >
                    <h2 className="font-pixel text-sm md:text-lg text-mario-red mb-6 [text-shadow:2px_2px_0_#000]">
                        ABOUT ME
                    </h2>

                    <p className="font-retro text-xl md:text-2xl leading-snug mb-4">
                        Saya{" "}
                        <span className="font-pixel text-[10px] bg-mario-yellow pixel-frame px-2 py-1 inline-block">
                            NASRUL ADITRI RAHMANDIKA
                        </span>
                        , seorang{" "}
                        <span className="font-pixel text-[10px] bg-mario-yellow pixel-frame px-2 py-1 inline-block">
                            CREATIVE DEVELOPER
                        </span>{" "}
                        yang percaya kode harus punya kepribadian. Saya membangun
                        pengalaman web modern dan berkesan dengan React, Next.js, dan
                        Laravel.
                    </p>
                    <p className="font-retro text-xl md:text-2xl leading-snug mb-8">
                        Dari sistem informasi pemerintah hingga website bisnis, saya
                        senang mengubah masalah kompleks menjadi antarmuka yang bersih
                        dan menyenangkan. Saat tidak sedang coding, saya mungkin sedang
                        mengubah ukuran window untuk menguji responsivitas.
                    </p>

                    <CTAButton href="https://github.com/nasruladtri" variant="outline">
                        View GitHub
                    </CTAButton>
                </motion.div>
            </div>
        </section>
    );
};

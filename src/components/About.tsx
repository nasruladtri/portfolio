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
        <section
            id="about"
            className="bg-gradient-to-br from-primary to-secondary text-white py-20 lg:pb-[12%] lg:[clip-path:polygon(0_0,100%_0,100%_80%,0_100%)]"
        >
            <div className="container max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="flex justify-center"
                >
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-full bg-white/20 blur-3xl" />
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-br from-white/30 to-white/5 p-[3px]"
                        >
                            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary">
                                <Image
                                    src="/me.png"
                                    alt="Nasrul Aditri Rahmandika"
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="flex flex-col justify-center"
                >
                    <h2 className="section-title text-4xl md:text-5xl font-bold uppercase mb-12">
                        About me
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Saya{" "}
                        <span className="bg-secondary inline-block italic px-1 leading-relaxed">
                            Nasrul Aditri Rahmandika
                        </span>
                        , seorang{" "}
                        <span className="bg-secondary inline-block italic px-1 leading-relaxed">
                            creative developer
                        </span>{" "}
                        yang percaya kode harus punya kepribadian. Saya membangun
                        pengalaman web modern dan berkesan dengan React, Next.js, dan
                        Laravel.
                    </p>
                    <p className="text-lg leading-relaxed mb-8">
                        Dari sistem informasi pemerintah hingga website bisnis, saya
                        senang mengubah masalah kompleks menjadi antarmuka yang bersih
                        dan menyenangkan. Saat tidak sedang coding, saya mungkin sedang
                        mengubah ukuran window untuk menguji responsivitas.
                    </p>

                    <span className="mt-2">
                        <CTAButton
                            href="https://github.com/nasruladtri"
                            variant="outline"
                        >
                            View GitHub
                        </CTAButton>
                    </span>
                </motion.div>
            </div>
        </section>
    );
};
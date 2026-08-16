"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { CTAButton } from "./CTAButton";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const Footer = () => {
    return (
        <>
            <section
                id="contact"
                className="bg-gradient-to-br from-primary to-secondary text-white text-center px-6 py-20 lg:pt-56 lg:pb-28 lg:-mt-40 lg:[clip-path:polygon(0_15vh,100%_0,100%_100%,0_100%)]"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12">
                        Contact
                    </h2>
                    <p className="text-2xl md:text-3xl font-medium mb-10 leading-snug">
                        Let's Build Something <br />
                        Crazy Together
                    </p>
                    <CTAButton href="mailto:nasruladitri2@gmail.com" variant="outline">
                        Call to Action
                    </CTAButton>
                </motion.div>
            </section>

            <footer className="bg-dark-grey text-white py-14">
                <div className="container text-center px-6">
                    <a
                        href="#top"
                        className="inline-block text-white mb-4 transition-transform duration-200 hover:-translate-y-0.5"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-10 h-10" />
                    </a>

                    <div className="flex flex-row justify-center items-center gap-2 mb-6">
                        <a
                            href="https://github.com/nasruladtri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-white text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="GitHub"
                        >
                            <Github className="w-10 h-10" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nasruladitri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-white text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-10 h-10" />
                        </a>
                        <a
                            href="mailto:nasruladitri2@gmail.com"
                            className="flex items-center justify-center text-white text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="Email"
                        >
                            <Mail className="w-10 h-10" />
                        </a>
                        <a
                            href="https://fastwork.id/user/nasruladitri/web-development-43348927?source=seller-center_my-service_share-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-white text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="Fastwork"
                        >
                            <Image
                                src="/fastwork.svg"
                                alt="Fastwork"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                        </a>
                    </div>

                    <hr className="mx-auto border-0 w-1/2 border-t-2 border-grey my-4" />

                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} Nasrul Aditri
                    </p>
                </div>
            </footer>
        </>
    );
};
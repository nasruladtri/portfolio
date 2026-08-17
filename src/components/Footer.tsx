"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { PixelCoin } from "./Retro";

const WHATSAPP_NUMBER = "6285784699144";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const Footer = () => {
    const [form, setForm] = useState({ name: "", phone: "", message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const text = encodeURIComponent(
            `Halo, saya ${form.name}.\n${form.phone ? `No. HP: ${form.phone}\n` : ""}${form.message}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <section id="contact" className="px-6 py-20">
                <div className="container max-w-2xl bg-[#fffdf5] text-black pixel-frame pixel-shadow p-8 md:p-12 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <h2 className="font-pixel text-base md:text-xl text-mario-red mb-8 [text-shadow:2px_2px_0_#000]">
                            CONTACT
                        </h2>
                        <p className="font-pixel text-[10px] md:text-xs text-black/70 leading-relaxed mb-10">
                            LET'S BUILD SOMETHING
                            <br />
                            CRAZY TOGETHER
                        </p>
                    </motion.div>

                    <motion.form
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        onSubmit={handleSubmit}
                        className="text-left space-y-5"
                    >
                        <div>
                            <label htmlFor="contact-name" className="block font-pixel text-[9px] mb-2">
                                NAMA ANDA
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Nama lengkap"
                                className="w-full px-4 py-3 font-retro text-xl bg-white pixel-frame focus:bg-mario-yellow/20 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-phone" className="block font-pixel text-[9px] mb-2">
                                NO. WHATSAPP <span className="text-black/50">(OPSIONAL)</span>
                            </label>
                            <input
                                id="contact-phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="08xx-xxxx-xxxx"
                                className="w-full px-4 py-3 font-retro text-xl bg-white pixel-frame focus:bg-mario-yellow/20 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="block font-pixel text-[9px] mb-2">
                                PESAN
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={4}
                                required
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Ceritakan kebutuhan project Anda..."
                                className="w-full px-4 py-3 font-retro text-xl bg-white pixel-frame focus:bg-mario-yellow/20 outline-none resize-y"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full pixel-btn bg-mario-green text-white shadow-[6px_6px_0_#000]"
                        >
                            Send via WhatsApp
                        </button>
                        <p className="font-retro text-lg text-black/60 text-center">
                            Pesan akan terbuka di WhatsApp secara otomatis.
                        </p>
                    </motion.form>
                </div>
            </section>

            <footer className="bg-mario-dark border-t-4 border-black pt-14 pb-24">
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
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-white text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle className="w-10 h-10" />
                        </a>
                        <a
                            href="mailto:nasruladitri2@gmail.com"
                            className="flex items-center justify-center text-white text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="Email"
                        >
                            <Mail className="w-10 h-10" />
                        </a>
                    </div>

                    <hr className="mx-auto border-0 w-1/2 border-t-2 border-white/20 my-4" />

                    <p className="font-retro text-lg text-white/70">
                        THANKS FOR PLAYING!
                    </p>
                    <p className="font-retro text-lg text-white/50">
                        © {new Date().getFullYear()} Nasrul Aditri Rahmandika
                    </p>
                    <span className="inline-block w-8 mt-4 coin-anim">
                        <PixelCoin />
                    </span>
                </div>
            </footer>
        </>
    );
};

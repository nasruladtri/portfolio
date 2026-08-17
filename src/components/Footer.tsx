"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

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
            <section
                id="contact"
                className="bg-gradient-to-br from-primary to-secondary text-white text-center px-6 py-20 lg:pt-56 lg:pb-28 lg:-mt-24 lg:[clip-path:polygon(0_15vh,100%_0,100%_100%,0_100%)]"
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
                    <p className="text-2xl md:text-3xl font-medium mb-14 leading-snug">
                        Let's Build Something <br />
                        Crazy Together
                    </p>
                </motion.div>

                <motion.form
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    onSubmit={handleSubmit}
                    className="max-w-xl mx-auto mt-16 text-left space-y-4"
                >
                    <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5 text-left">
                            Nama Anda
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nama lengkap"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 outline-none focus:bg-white/20 focus:border-white transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium mb-1.5 text-left">
                            No. WhatsApp <span className="text-white/50">(opsional)</span>
                        </label>
                        <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="08xx-xxxx-xxxx"
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 outline-none focus:bg-white/20 focus:border-white transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5 text-left">
                            Pesan
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows={4}
                            required
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Ceritakan kebutuhan project Anda..."
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 outline-none focus:bg-white/20 focus:border-white transition-colors resize-y"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 font-bold text-lg px-8 py-3 rounded-lg bg-white text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:border-2 hover:border-white"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Kirim via WhatsApp
                    </button>
                    <p className="text-sm text-white/60 text-center">
                        Pesan akan terbuka di WhatsApp secara otomatis.
                    </p>
                </motion.form>
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

                    <hr className="mx-auto border-0 w-1/2 border-t-2 border-grey my-4" />

                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} Nasrul Aditri Rahmandika
                    </p>
                </div>
            </footer>
        </>
    );
};

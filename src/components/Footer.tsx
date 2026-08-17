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
                className="px-6 py-20"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="glass container max-w-3xl mx-auto text-center px-6 py-14 md:p-16"
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
                    className="glass container max-w-xl mx-auto mt-8 px-6 py-10 text-left space-y-4"
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
                            className="glass-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium mb-1.5 text-left">
                            No. WhatsApp <span className="text-heading/50">(opsional)</span>
                        </label>
                        <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="08xx-xxxx-xxxx"
                            className="glass-input"
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
                            className="glass-input resize-y"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 font-bold text-lg px-8 py-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-white transition-all duration-300 hover:opacity-90"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Kirim via WhatsApp
                    </button>
                    <p className="text-sm text-heading/60 text-center">
                        Pesan akan terbuka di WhatsApp secara otomatis.
                    </p>
                </motion.form>
            </section>

            <footer className="bg-white/30 backdrop-blur-xl border-t border-white/60 text-heading py-14">
                <div className="container text-center px-6">
                    <a
                        href="#top"
                        className="inline-block text-heading mb-4 transition-transform duration-200 hover:-translate-y-0.5"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-10 h-10" />
                    </a>

                    <div className="flex flex-row justify-center items-center gap-2 mb-6">
                        <a
                            href="https://github.com/nasruladtri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-heading text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="GitHub"
                        >
                            <Github className="w-10 h-10" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nasruladitri"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-heading text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-10 h-10" />
                        </a>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-heading text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle className="w-10 h-10" />
                        </a>
                        <a
                            href="mailto:nasruladitri2@gmail.com"
                            className="flex items-center justify-center text-heading text-3xl w-16 h-16 transition-transform duration-200 hover:-translate-y-0.5"
                            aria-label="Email"
                        >
                            <Mail className="w-10 h-10" />
                        </a>
                    </div>

                    <hr className="mx-auto border-0 w-1/2 border-t-2 border-white/70 my-4" />

                    <p className="text-sm text-heading/50">
                        © {new Date().getFullYear()} Nasrul Aditri Rahmandika
                    </p>
                </div>
            </footer>
        </>
    );
};

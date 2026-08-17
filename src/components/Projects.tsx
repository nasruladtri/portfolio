"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { CTAButton } from "./CTAButton";

type Project = {
    title: string;
    category: string;
    description: string;
    link: string;
    source?: string;
    image?: string;
};

const projects: Project[] = [
    {
        title: "SERDADU",
        category: "Government System",
        description:
            "Sistem informasi pemerintah untuk Kabupaten Madiun. Dibangun dengan Laravel dan PostgreSQL untuk mengelola data administrasi secara terpusat, cepat, dan aman bagi instansi pemerintahan.",
        link: "https://serdadu.madiunkab.go.id/",
        image: "/serdadu-preview.png",
    },
    {
        title: "My Portfolio",
        category: "Personal Website",
        description:
            "Website portfolio pribadi ini — dibangun dengan Next.js, TypeScript, dan Tailwind CSS. Didesain dengan gaya clean dan modern agar fokus pada pengalaman pengguna.",
        link: "/",
        source: "https://github.com/nasruladtri/portfoliovercel",
        image: "/portfolio-preview.png",
    },
    {
        title: "Warung Pecel Yu Mur",
        category: "Business Website",
        description:
            "Website bisnis untuk Warung Pecel Yu Mur — landing page modern untuk memperkenalkan menu, lokasi, dan informasi pemesanan, dikembangkan dengan React dan di-deploy ke Vercel.",
        link: "https://warung-pecel-yumur.vercel.app/",
        image: "/warung_yumur-preview.png",
    },
    {
        title: "Wedding Invitation",
        category: "Personal Website",
        description:
            "Website undangan pernikahan digital — cover interaktif, countdown menuju hari-H, detail akad & resepsi, galeri foto, form RSVP/ucapan, hingga amplop digital (DANA & QRIS). Dibangun dengan HTML, CSS, dan JavaScript murni.",
        link: "https://undangan-by-nasrul-aditri.vercel.app/",
        source: "https://github.com/nasruladtri/undangan",
        image: "/undangan-preview.png",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ProjectImage = ({ project }: { project: Project }) => {
    return (
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_6px_10px_rgba(0,0,0,0.08),0_0_6px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.02]">
            <Image
                src={project.image!}
                alt={project.title}
                fill
                className="object-cover"
            />
        </div>
    );
};

export const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-white text-heading lg:-mt-40 lg:pt-56 pt-20 px-6 pb-16 lg:pb-48"
        >
            <div className="container max-w-6xl">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-bold uppercase mb-16"
                >
                    Projects
                </motion.h2>

                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={clsx(
                                "grid md:grid-cols-12 gap-8 items-center",
                                index % 2 === 1 && "md:[&>*:first-child]:order-2"
                            )}
                        >
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                className="md:col-span-4"
                            >
                                <span className="text-sm font-bold uppercase tracking-wider text-secondary">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-2">
                                    {project.title}
                                </h3>
                                <p className="text-base leading-relaxed mb-6 text-heading/80">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-8">
                                    <CTAButton
                                        href={project.link}
                                        variant="gradient"
                                    >
                                        See Live
                                    </CTAButton>
                                    {project.source && (
                                        <CTAButton
                                            href={project.source}
                                            variant="text-link"
                                        >
                                            Source Code
                                        </CTAButton>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                transition={{ delay: 0.15 }}
                                className="md:col-span-8"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <ProjectImage project={project} />
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
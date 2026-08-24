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
        link: "https://serdadu.nasruladitri.space/",
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
        source: "https://github.com/nasruladtri/warung-pecel-yumur",
        image: "/warung_yumur-preview.png",
    },
    {
        title: "Wedding Invitation",
        category: "Personal Website",
        description:
            "Website undangan pernikahan digital — cover interaktif, countdown menuju hari-H, detail akad & resepsi, galeri foto, form RSVP/ucapan, hingga amplop digital (DANA & QRIS). Dibangun dengan HTML, CSS, dan JavaScript murni.",
        link: "https://preview-wedding-invitation.nasruladitri.space/",
        source: "https://github.com/nasruladtri/undangan",
        image: "/undangan-preview.png",
    },
    {
        title: "Gallery",
        category: "Photo Gallery",
        description:
            "Galeri karya — fotografi, hasil editan, dan desain grafis dengan filter kategori, lightbox, dan tema gelap modern. Dibangun dengan Next.js dan Tailwind CSS, di-deploy ke Vercel.",
        link: "https://gallery.nasruladitri.space",
        source: "https://github.com/nasruladtri/gallery",
        image: "/gallery-preview.png",
    },
    {
        title: "F-Smoke",
        category: "Health App",
        description:
            "Aplikasi berhenti merokok bergaya gamifikasi — level & XP check-in, streak, koin dan toko, badge, leaderboard, jurnal craving, pengingat, hingga avatar personal. Dibangun dengan Next.js, Supabase, dan Tailwind CSS, di-deploy ke Vercel.",
        link: "https://f-smoke.nasruladitri.space/",
        source: "https://github.com/nasruladtri/f-smoke",
        image: "/f-smoke-preview.png",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ProjectImage = ({ project }: { project: Project }) => {
    return (
        <div className="relative aspect-video overflow-hidden pixel-frame pixel-shadow-sm bg-black">
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
        <section id="projects" className="px-6 py-20">
            <div className="container max-w-6xl">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="font-pixel text-base md:text-xl text-white mb-4 pixel-outline"
                >
                    PROJECTS
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="font-retro text-2xl text-white/90 mb-8"
                >
                    +100 pts — level completed!
                </motion.p>

                <div className="space-y-16 md:space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={fadeUp}
                            className={clsx(
                                "bg-[#fffdf5] text-black pixel-frame pixel-shadow p-6 md:p-10 grid md:grid-cols-12 gap-8 items-center",
                                index % 2 === 1 && "md:[&>*:first-child]:order-2"
                            )}
                        >
                            <motion.div className="md:col-span-4">
                                <span className="inline-block font-pixel text-[8px] md:text-[9px] bg-mario-green text-white pixel-frame px-2 py-1.5 mb-4">
                                    {project.category.toUpperCase()}
                                </span>
                                <h3 className="font-pixel text-sm md:text-base text-mario-red mb-4 mt-3 [text-shadow:2px_2px_0_#000]">
                                    {project.title}
                                </h3>
                                <p className="font-retro text-xl leading-snug mb-6 text-black/80">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <CTAButton href={project.link} variant="gradient">
                                        See Live
                                    </CTAButton>
                                    {project.source && (
                                        <CTAButton href={project.source} variant="text-link">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

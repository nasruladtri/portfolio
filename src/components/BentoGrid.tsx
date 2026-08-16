"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const projects = [
    {
        id: 1,
        title: "SERDADU",
        category: "Government System",
        color: "bg-teal text-cream",
        className: "md:col-span-2 md:row-span-1",
        link: "https://serdadu.madiunkab.go.id/",
        image: "/serdadu-preview.png",
    },
    {
        id: 2,
        title: "My Portfolio",
        category: "Personal Website",
        color: "bg-mustard",
        className: "md:col-span-2 md:row-span-1",
        link: "/",
        image: "/portfolio-preview.png",
    },
];

export const BentoGrid = () => {
    return (
        <section id="projects" className="py-20 px-6 border-b-4 border-black bg-cream">
            <h2 className="text-5xl md:text-7xl font-serif mb-12 uppercase text-center md:text-left">
                My Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto auto-rows-[300px]">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                            "block relative group",
                            project.className
                        )}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={clsx(
                                "h-full w-full border-4 border-black shadow-hard rounded-none p-6 flex flex-col justify-between transition-all overflow-hidden relative",
                                project.color
                            )}
                        >
                            {/* Background Image */}
                            {project.image && (
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 transition-opacity" />
                                </div>
                            )}

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="font-sans font-bold border-2 border-black px-3 py-1 bg-white text-dark text-sm uppercase">
                                    {project.category}
                                </span>
                                <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold font-serif mb-2">{project.title}</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-sans font-medium">
                                    View Case Study
                                </p>
                            </div>

                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity z-20" />
                        </motion.div>
                    </a>
                ))}
            </div>
        </section>
    );
};

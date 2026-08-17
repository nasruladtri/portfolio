"use client";

import { motion } from "framer-motion";
import { Code2, Database, PenTool, Wrench } from "lucide-react";

type SkillGroup = {
    icon: React.ReactNode;
    title: string;
    skills: string[];
};

const skillGroups: SkillGroup[] = [
    {
        icon: <Code2 className="w-6 h-6" />,
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "Backend",
        skills: ["Laravel", "Node.js", "PostgreSQL", "MySQL", "REST API"],
    },
    {
        icon: <Wrench className="w-6 h-6" />,
        title: "Tools & Workflow",
        skills: ["Git & GitHub", "Vercel", "Figma", "Postman"],
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Design",
        skills: ["UI/UX Design", "Responsive Design", "Web Design", "Branding"],
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export const Skills = () => {
    return (
        <section id="skills" className="bg-white text-heading px-6 py-20 lg:pt-32">
            <div className="container max-w-6xl">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-bold uppercase mb-4"
                >
                    Skills
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="text-lg text-heading/70 mb-16 max-w-2xl"
                >
                    Teknologi dan tools yang saya gunakan untuk membangun
                    pengalaman web modern dan berkesan.
                </motion.p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl border border-light-grey/60 bg-gradient-to-br from-white to-light-grey/20 shadow-[0_6px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_24px_rgba(142,45,226,0.15)] transition-shadow"
                        >
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white mb-5">
                                {group.icon}
                            </span>
                            <h3 className="text-lg font-bold mb-4">{group.title}</h3>
                            <ul className="space-y-2.5">
                                {group.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="flex items-center gap-2 text-sm text-heading/75"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

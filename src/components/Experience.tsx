"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Data Scientist",
        company: "Micron Semiconductor Asia",
        period: "Jul 2023 – Present",
        description: "Lead a team of 6 on a $50M video analytics project for photolithography. Leveraged Gemini LLM for code generation and enterprise automation. Directed predictive maintenance initiatives resulting in $5M cost savings.",
        skills: ["Python", "LLMs", "Computer Vision", "GCP", "Stakeholder Mgmt"]
    },
    {
        role: "Software Engineer",
        company: "Angsana Technology",
        period: "Aug 2022 – Jul 2023",
        description: "Built digitalization solutions for MPA Singapore specifications. Spearheaded CI/CD implementation with GitHub Actions, automating testing and ensuring seamless deployment cycles.",
        skills: ["TypeScript", "DevOps", "GitHub Actions", "Full Stack"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Journey</h2>
                    <p className="text-gray-400">
                        Building the technical foundation for solving real business problems.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Hidden on mobile for cleaner look or adapted) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent -translate-x-1/2" />

                            <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-[50%] top-8 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] -translate-x-1/2 hidden md:block" />

                                {/* Date/Period (Desktop) */}
                                <div className="hidden md:block w-1/2 text-center md:text-left px-4">
                                    <div className={`flex items-center gap-2 text-blue-400 font-mono text-sm ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors backdrop-blur-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <div className="md:hidden text-xs text-blue-400 font-mono">{exp.period}</div>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                            <Briefcase className="w-4 h-4" />
                                            {exp.company}
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map(skill => (
                                                <span key={skill} className="px-2 py-0.5 rounded text-xs bg-blue-500/10 text-blue-300 border border-blue-500/10">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

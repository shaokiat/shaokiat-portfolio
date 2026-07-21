"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Data Scientist II",
        company: "Micron Semiconductor Asia",
        period: "Jul 2023 – Present",
        groups: [
            {
                label: "Predictive Maintenance Platform",
                bullets: [
                    "Built a model that tells engineers when a part is about to fail. Then spent two months earning the right for anyone to actually trust it. Now projected at ~$2M/year in savings, validated by the global SPARES team.",
                ]
            },
            {
                label: "Computer Vision Defect Detection",
                bullets: [
                    "Led a 6-person team across 4 countries to catch photolithography defects automatically, including generating our own training data for defects too rare to have enough real examples of.",
                ]
            },
            {
                label: "Self-Serve Labeling Platform",
                bullets: [
                    "Built a 2-week prototype to unblock engineers from waiting on a data scientist for every label. It worked so well it became the production system, unplanned.",
                ]
            },
            {
                label: "IIoT Edge Systems",
                bullets: [
                    "Architected the sensor pipeline from scratch: air-gapped edge devices, real-time ingestion, zero prior infrastructure to build on.",
                ]
            }
        ],
        skills: ["Python", "GKE", "GCP", "BigQuery", "SQL", "Computer Vision", "IIoT / Edge", "Solution Architecture", "Stakeholder Mgmt"]
    },
    {
        role: "Software Engineer",
        company: "Angsana Technology",
        period: "Aug 2022 – Jul 2023",
        groups: [
            {
                label: "Client Delivery",
                bullets: [
                    "Built a production digitalization platform from MPA Singapore's client specifications, handling the project from requirements through deployment.",
                    "Set up CI/CD with GitHub Actions, automating testing and deployments for the team.",
                ]
            }
        ],
        skills: ["TypeScript", "DevOps", "GitHub Actions", "Full Stack", "Client Delivery"]
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
                    <p className="text-gray-400">
                        Where I&apos;ve worked and what I shipped.
                    </p>
                </motion.div>

                <div className="relative space-y-10">
                    {/* Vertical timeline line */}
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="pl-8 relative"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] -translate-x-1/2" />

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors backdrop-blur-sm">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <div className="flex items-center gap-1.5 text-blue-400 font-mono text-xs">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {exp.period}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                                    <Briefcase className="w-4 h-4" />
                                    {exp.company}
                                </div>

                                {/* Grouped bullet points */}
                                <div className="space-y-5">
                                    {exp.groups.map((group, gIdx) => (
                                        <div key={gIdx}>
                                            {group.label && (
                                                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                                                    {group.label}
                                                </p>
                                            )}
                                            <ul className="space-y-2">
                                                {group.bullets.map((bullet, bIdx) => (
                                                    <li key={bIdx} className="flex gap-2 text-sm text-gray-300 leading-relaxed">
                                                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-blue-400" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* Skill tags */}
                                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="px-2 py-0.5 rounded text-xs bg-blue-500/10 text-blue-300 border border-blue-500/10">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

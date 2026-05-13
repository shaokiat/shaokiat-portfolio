"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Data Scientist II",
        company: "Micron Semiconductor Asia",
        period: "Jul 2022 – Present",
        groups: [
            {
                label: "Solution Architecture & Delivery",
                bullets: [
                    "Led a 6-member cross-functional team to architect and ship a production computer vision platform for photolithography defect detection on GKE — end-to-end from problem framing and system design to stakeholder alignment and rollout.",
                ]
            },
            {
                label: "ML Engineering",
                bullets: [
                    "Designed a time-series predictive maintenance pipeline on GCP Cloud Run — model predicts 10%+ consumable lifetime extension, equivalent to ~$2M annual savings at full rollout.",
                    "Designed BigQuery schemas and SQL pipelines for ML feature engineering and cross-team self-service analytics.",
                ]
            },
            {
                label: "POC & Tooling",
                bullets: [
                    "Built a self-serve defect annotation platform (Streamlit + Label Studio), eliminating data scientist dependency from retraining cycles.",
                ]
            }
        ],
        skills: ["Python", "GKE", "GCP", "BigQuery", "SQL", "Computer Vision", "Solution Architecture", "Stakeholder Mgmt"]
    },
    {
        role: "Software Engineer",
        company: "Angsana Technology",
        period: "Aug 2021 – Jul 2022",
        groups: [
            {
                label: "Client Delivery",
                bullets: [
                    "Translated MPA Singapore client specifications into a production digitalization platform, owning the full delivery lifecycle from requirements through deployment.",
                    "Spearheaded CI/CD implementation with GitHub Actions, automating testing pipelines and ensuring seamless deployment cycles.",
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Journey</h2>
                    <p className="text-gray-400">
                        Building the technical foundation for solving real business problems.
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

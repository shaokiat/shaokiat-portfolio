"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock } from "lucide-react";

const skills = [
    {
        category: "LLM & Agent Engineering",
        items: ["Anthropic API", "OpenAI / Gemini", "RAG", "DSPy", "Agentic Workflows", "Tool Use", "Prompt Optimization"]
    },
    {
        category: "ML & Data Science",
        items: ["Python", "PyTorch", "TensorFlow", "Computer Vision (OpenCV, Ultralytics)", "Time-Series Forecasting", "SQL"]
    },
    {
        category: "Cloud & Infrastructure",
        items: ["GCP (Vertex AI, BigQuery, Cloud Run, GKE, GCS)", "Docker", "FastAPI", "CI/CD", "REST APIs", "System Design"]
    },
    {
        category: "Customer-Facing",
        items: ["Technical Discovery", "Solution Architecture", "POC Design", "Stakeholder Management", "Requirement Gathering", "Cross-functional Leadership"]
    }
];

const certifications = [
    {
        name: "Google Cloud Professional Cloud Architect",
        issuer: "Google Cloud",
        status: "in-progress" as const,
        date: "Jun 2026",
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Credentials</h2>
                    <p className="text-gray-400 max-w-xl">
                        The stack I work with day to day.
                    </p>
                </motion.div>

                {/* Certifications strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Certifications</span>
                        <div className="flex-1 h-px bg-white/5" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border-l-4 border-blue-500 bg-blue-500/5 border border-white/5"
                            >
                                <div>
                                    <p className="text-sm font-semibold text-white">{cert.name}</p>
                                    <p className="text-xs text-blue-400 mt-0.5">{cert.issuer}</p>
                                </div>
                                {cert.status === "in-progress" ? (
                                    <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300">
                                        <Clock className="w-3 h-3" />
                                        Expected {cert.date}
                                    </span>
                                ) : (
                                    <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-green-500/10 border border-green-500/20 text-green-300">
                                        <BadgeCheck className="w-3 h-3" />
                                        {cert.date}
                                    </span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skill cards */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Technical Skills</span>
                    <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <h3 className="text-xs font-semibold mb-3 text-gray-300 uppercase tracking-wider">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="px-3 py-1 text-sm rounded-full bg-black/40 border border-white/5 text-gray-300">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

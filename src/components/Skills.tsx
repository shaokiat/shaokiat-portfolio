"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "AI & Data Science",
        items: ["Python", "TensorFlow", "PyTorch", "GCP (VertexAI, BigQuery)", "OpenCV", "Ultralytics", "LLMs (Gemini, OpenAI)", "RAG"]
    },
    {
        category: "Engineering & Web",
        items: ["GCP (Cloud Run, GCS)", "Docker", "FastAPI", "Next.js", "TypeScript", "SQL", "Git", "REST APIs"]
    },
    {
        category: "Strategic & Client-Facing",
        items: ["Stakeholder Management", "Solution Design", "Requirement Gathering", "Project Leadership"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
                    <p className="text-gray-400 max-w-xl">
                        A hybrid skillset designed for the modern AI landscape.
                        Capable of building the solution and selling the vision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-4 text-white">{skillGroup.category}</h3>
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

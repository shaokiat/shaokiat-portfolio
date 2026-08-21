"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const skillGroups = [
    {
        category: "Technical",
        items: [
            "Python", "PyTorch / TensorFlow", "Computer Vision", "Time-Series Forecasting",
            "SQL", "GCP (Vertex AI, BigQuery, GKE / Kubernetes)", "RAG & Agentic Workflows", "Solution Architecture"
        ],
        label: "text-blue-400",
        tag: "bg-blue-500/10 border-blue-500/20 text-blue-100",
    },
    {
        category: "Languages",
        items: ["English", "Chinese"],
        label: "text-purple-400",
        tag: "bg-purple-500/10 border-purple-500/20 text-purple-100",
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
                    className="mb-10 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Credentials</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        The stack I work with day to day.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-6"
                >
                    {skillGroups.map((group) => (
                        <div key={group.category}>
                            <p className={`text-xs font-semibold uppercase tracking-widest ${group.label} mb-2.5 text-center`}>
                                {group.category}
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {group.items.map((item) => (
                                    <span key={item} className={`px-3 py-1.5 text-sm rounded-full border ${group.tag}`}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-2.5 text-center">
                            Certifications
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-green-500/10 border border-green-500/20 text-green-100">
                                <BadgeCheck className="w-3.5 h-3.5 text-green-400" />
                                GCP Professional Cloud Architect
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock } from "lucide-react";

const certifications = [
    {
        name: "Google Cloud Professional Cloud Architect",
        issuer: "Google Cloud",
        status: "in-progress",
        date: "Jun 2026",
        description: "Designs, develops, and manages robust, secure, scalable, and dynamic solutions on GCP.",
        color: "blue"
    }
];

const colorMap: Record<string, { border: string; bg: string; badge: string; text: string }> = {
    blue: {
        border: "border-blue-500",
        bg: "bg-blue-500/5",
        badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
        text: "text-blue-400"
    }
};

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications</h2>
                    <p className="text-gray-400">
                        Validating cloud architecture expertise through industry credentials.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, idx) => {
                        const c = colorMap[cert.color];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-6 rounded-2xl border-l-4 ${c.border} ${c.bg} border border-white/5 hover:border-white/10 transition-colors`}
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div>
                                        <h3 className="text-lg font-bold text-white leading-snug">{cert.name}</h3>
                                        <p className={`text-sm mt-1 ${c.text}`}>{cert.issuer}</p>
                                    </div>
                                    {cert.status === "in-progress" ? (
                                        <span className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border ${c.badge}`}>
                                            <Clock className="w-3 h-3" />
                                            In Progress
                                        </span>
                                    ) : (
                                        <span className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border ${c.badge}`}>
                                            <BadgeCheck className="w-3 h-3" />
                                            Certified
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-400 mb-3">{cert.description}</p>
                                <p className={`text-xs font-mono ${c.text}`}>
                                    {cert.status === "in-progress" ? `Expected ${cert.date}` : cert.date}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

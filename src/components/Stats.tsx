"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "~$2M", label: "annual savings from one ML pipeline", color: "text-blue-400" },
    { value: "6", label: "engineers led to production", color: "text-purple-400" },
    { value: "3 yrs", label: "shipping ML on GCP", color: "text-green-400" },
];

export default function Stats() {
    return (
        <section className="pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-14"
                >
                    {stats.map((stat) => (
                        <div key={stat.value} className="flex flex-col items-center gap-1 max-w-[220px] mx-auto sm:mx-0">
                            <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                            <span className="text-xs text-gray-500 leading-snug">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

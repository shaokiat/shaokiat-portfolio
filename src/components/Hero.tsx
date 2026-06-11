"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Cloud } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const stats = [
    { value: "~$2M", label: "annual savings from one ML pipeline", color: "text-blue-400" },
    { value: "6", label: "engineers led to production", color: "text-purple-400" },
    { value: "3 yrs", label: "shipping ML on GCP", color: "text-green-400" },
];

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block mb-6"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
                    <Image
                        src={`${basePath}/profile.jpg`}
                        alt="Shao Kiat"
                        width={112}
                        height={112}
                        className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm">
                        <Cloud className="w-3 h-3 text-blue-400" />
                        Forward Deployed Engineer · AI
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 mb-5 tracking-tight">
                        I build AI that makes it <br className="hidden md:block" />
                        to{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            production.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-7 max-w-xl mx-auto leading-relaxed">
                        I&apos;m Shao Kiat. I take AI projects from the first discovery
                        call to deployment. My models run inside Micron&apos;s fabs.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="#work"
                            className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 group"
                        >
                            See how I work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href={`${basePath}/ShaoKiat_Resume.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2"
                        >
                            <FileText className="w-4 h-4" />
                            Resume
                        </a>
                    </div>
                </motion.div>

                {/* Proof stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-8 sm:gap-14"
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

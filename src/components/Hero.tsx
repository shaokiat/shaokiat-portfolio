"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Database, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block mb-8"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
                    <Image
                        src="/profile.jpg"
                        alt="Shao Kiat"
                        width={160}
                        height={160}
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <Sparkles className="w-3 h-3 text-blue-400" />
                        </span>
                        AI Engineer / Data Scientist
                    </div> */}

                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60 mb-6 tracking-tight">
                        Engineering Impact <br className="hidden md:block" />
                        with Generative AI
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Data Scientist turned AI Engineer. I build scalable intelligent systems that transform how businesses operate.
                        Turning state-of-the-art LLMs into real-world value.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Tech Stack Floating Icons (Visual Flair) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 flex justify-center gap-8 text-gray-500"
                >
                    <div className="flex flex-col items-center gap-2">
                        <Database className="w-6 h-6" />
                        <span className="text-xs">Data Science</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Bot className="w-6 h-6" />
                        <span className="text-xs">AI / ML</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Sparkles className="w-6 h-6" />
                        <span className="text-xs">Solutions</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

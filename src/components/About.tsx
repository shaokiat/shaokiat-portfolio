"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-black/20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
                        Architecting Intelligence
                    </h2>

                    <div className="prose prose-invert prose-lg text-gray-400">
                        <p>
                            My background is in <strong>Data Science</strong>, but my vision is set on the future of <strong>AI Engineering</strong>.
                            I've moved beyond just training models to architecting end-to-end intelligent systems that solve real business problems.
                        </p>
                        <p>
                            I believe the true power of AI isn't just in the algorithms, but in how they are integrated into scalable, user-centric applications.
                        </p>
                        <p>
                            Focusing on <strong>Generative AI and Large Language Models</strong>, I build solutions that don't just process data—they generate value.
                            From optimizing RAG pipelines to automating complex workflows, I bridge the gap between research and production.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-8">
                        <div className="p-4 border-l-2 border-blue-500 bg-blue-500/5">
                            <h4 className="font-bold text-white mb-1">AI Engineering</h4>
                            <p className="text-sm text-gray-500">Scalable System Architecture</p>
                        </div>
                        <div className="p-4 border-l-2 border-purple-500 bg-purple-500/5">
                            <h4 className="font-bold text-white mb-1">Generative AI</h4>
                            <p className="text-sm text-gray-500">LLMs & Agentic Workflows</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

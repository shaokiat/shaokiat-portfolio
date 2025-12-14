"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
                        <MessageSquare className="w-4 h-4" />
                        Let's Talk Business
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Collaborate</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        I combine the technical depth of a Data Scientist with the strategic mindset of a Sales Engineer to deliver impactful AI solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:shaokiat@gmail.com"
                            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group"
                        >
                            Connect
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shaokiat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
                        >
                            View LinkedIn Profile
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

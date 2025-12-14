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
                        From Models to Markets
                    </h2>

                    <div className="prose prose-invert prose-lg text-gray-400">
                        <p>
                            My journey is rooted in the depths of Data Science, training models and cleaning datasets.
                            While I love the technical challenge, my true passion lies not just in building the technology,
                            but in <strong>articulating its value</strong> to the world.
                        </p>
                        <p>
                            I bridge the gap where powerful AI solutions often gather dust because the connection between
                            technical capability and business opportunity is missing.
                        </p>
                        <p>
                            I specialize in <strong>Sales Engineering and AI Engineering</strong>.
                            I bring the technical depth to build and debug complex AI systems, coupled with the
                            strategic communication skills to demonstrate their ROI to stakeholders.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-8">
                        <div className="p-4 border-l-2 border-blue-500 bg-blue-500/5">
                            <h4 className="font-bold text-white mb-1">Data Scientist</h4>
                            <p className="text-sm text-gray-500">Deep Technical Foundation</p>
                        </div>
                        <div className="p-4 border-l-2 border-green-500 bg-green-500/5">
                            <h4 className="font-bold text-white mb-1">Sales Engineer</h4>
                            <p className="text-sm text-gray-500">Strategic Business Impact</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

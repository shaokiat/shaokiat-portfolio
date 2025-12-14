"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart3, Brain, BookOpen } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "N8N Options Strategy Assistant",
        description: "Automated workflow using N8N to query real-time price and volatility indices. Analyzes market conditions to generate optimal options strategies based on user-defined directional bias.",
        tags: ["N8N", "Automation", "Finance API", "No-Code"],
        links: { demo: "#", github: "#" },
        icon: <BarChart3 className="w-10 h-10 text-blue-400" />
    },
    {
        title: "Financial Report RAG Analyst",
        description: "Building a RAG pipeline to ingest and analyze quarterly earnings reports (10-K). Allows natural language querying of financial metrics and strategic insights from unstructured PDF data.",
        tags: ["LangChain", "Vector DB", "OpenAI", "Python"],
        links: { demo: "#", github: "#" },
        icon: <Brain className="w-10 h-10 text-purple-400" />
    },
    {
        title: "Technical Blog",
        description: "A collection of technical articles and tutorials on Data Science, AI, and Software Engineering. Sharing knowledge and insights from real-world projects and experiments.",
        tags: ["Technical Writing", "Data Science", "AI", "Tutorials"],
        links: { demo: "https://shaokiat.github.io/shaokiat-blog/blog/", github: "#" },
        icon: <BookOpen className="w-10 h-10 text-green-400" />
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="absolute inset-0 bg-blue-900/5 -skew-y-3 -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Showcasing simple, scalable solutions to complex problems.
                        Demonstrating the bridge between raw data and business outcomes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors backdrop-blur-sm"
                        >
                            <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                {project.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                {project.links.github && project.links.github !== "#" && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                )}
                                {project.links.demo && project.links.demo !== "#" && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

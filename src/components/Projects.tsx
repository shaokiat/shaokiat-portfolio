"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight, BarChart3, Brain, BookOpen } from "lucide-react";

interface Project {
    title: string;
    problem: string;
    built: string;
    tags: string[];
    icon: React.ReactNode;
    accent: string;
    cta?: {
        label: string;
        link: string;
        type: "blog" | "github";
    };
}

const projects: Project[] = [
    {
        title: "Configent",
        problem:
            "Every RAG agent I'd built was single-purpose. New client meant new code. That doesn't scale past one demo.",
        built:
            "A config-driven multi-tenant RAG platform: FastAPI, pgvector, SSE streaming, Next.js. Persona, knowledge base and retrieval settings are all config, not code. Built end-to-end, AI-assisted, in about a week.",
        tags: ["FastAPI", "pgvector", "RAG", "SSE Streaming", "Next.js", "Multi-tenant Architecture"],
        icon: <Brain className="w-10 h-10 text-purple-400" />,
        accent: "text-purple-400",
        cta: {
            label: "View Live",
            link: "https://shaokiat.github.io/configent/",
            type: "github",
        },
    },
    {
        title: "agentic-cookbook",
        problem:
            "Every agent I built started as a one-off script with its own harness. I wanted one place to iterate on agent patterns instead of rebuilding it each time.",
        built:
            "A collection of agents built directly on raw tool-use APIs, not framework abstractions. Includes theta-agent, an autonomous options research agent with live market data via yfinance and persistent memory across sessions. Each new agent tests a different pattern before I decide what's worth production-hardening.",
        tags: ["Anthropic API", "Tool Use", "AI Agents", "Python", "Options Greeks"],
        icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
        accent: "text-blue-400",
        cta: {
            label: "View Code",
            link: "https://github.com/shaokiat/agentic-cookbook",
            type: "github",
        },
    },
    {
        title: "Technical Blog",
        problem:
            "Solutions engineering is half communication: explaining systems clearly to people who didn't build them.",
        built:
            "Write-ups on data science, AI and software engineering, based on my own projects and experiments.",
        tags: ["Technical Writing", "AI", "Data Science"],
        icon: <BookOpen className="w-10 h-10 text-green-400" />,
        accent: "text-green-400",
        cta: {
            label: "Read Articles",
            link: "https://shaokiat.github.io/shaokiat-blog/",
            type: "blog",
        },
    },
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
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Side projects, each one starting from a real problem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors backdrop-blur-sm"
                        >
                            <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                                {project.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <div className="space-y-4 mb-6 flex-grow">
                                <div>
                                    <p className={`text-xs font-semibold uppercase tracking-widest ${project.accent} mb-1.5`}>
                                        Problem
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <p className={`text-xs font-semibold uppercase tracking-widest ${project.accent} mb-1.5`}>
                                        Built
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">{project.built}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.cta && (
                                <a
                                    href={project.cta.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 px-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn ${project.cta.type === "blog"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20"
                                        : "bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20"
                                        }`}
                                >
                                    {project.cta.type === "github" && <Github className="w-4 h-4" />}
                                    {project.cta.label}
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

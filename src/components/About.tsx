"use client";

import { motion } from "framer-motion";
import { Search, Zap, Rocket, Users } from "lucide-react";

const steps = [
    {
        icon: <Search className="w-5 h-5 text-blue-400" />,
        title: "Discover",
        summary: "I start by talking to the people who'll use the system.",
        receipt:
            "Maintenance ran on a fixed 3-month schedule regardless of actual wear. Sensor data on real usage told a more accurate story, and it uncovered a 20% underutilization gap. Shared that with engineers before building anything, they agreed the problem was real first.",
        border: "border-blue-500",
        bg: "bg-blue-500/5",
    },
    {
        icon: <Zap className="w-5 h-5 text-purple-400" />,
        title: "Prototype",
        summary: "I get a working version in front of stakeholders early.",
        receipt:
            "Built a simple model that predicts wear from actual usage instead of the calendar, one engineers could question. They needed to see why a prediction was made, not just get an alert to blindly trust.",
        border: "border-purple-500",
        bg: "bg-purple-500/5",
    },
    {
        icon: <Rocket className="w-5 h-5 text-green-400" />,
        title: "Productionize",
        summary: "Then I ship it on proper infrastructure.",
        receipt:
            "Spent 2 months validating against real failures before replacing the fixed schedule with the model. Runs on GCP with automated pipelines and scheduled jobs, no manual babysitting required.",
        border: "border-green-500",
        bg: "bg-green-500/5",
    },
    {
        icon: <Users className="w-5 h-5 text-orange-400" />,
        title: "Enable",
        summary: "I hand off systems that don't need me around.",
        receipt:
            "Now live across 3 workstations, parts replaced based on real usage instead of a fixed calendar, engineers acting on alerts without me in the loop. About $2M a year in savings, confirmed by our own SPARES team.",
        border: "border-orange-500",
        bg: "bg-orange-500/5",
    },
];

export default function About() {
    return (
        <section id="work" className="py-20 bg-black/20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
                        How I Work
                    </h2>

                    <div className="prose prose-invert prose-lg text-gray-400">
                        <p>
                            Most of the work in shipping AI happens outside the model.
                            Here&apos;s how I usually go about it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className={`p-5 border-l-2 ${step.border} ${step.bg}`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    {step.icon}
                                    <h4 className="font-bold text-white">{step.title}</h4>
                                </div>
                                <p className="text-sm text-gray-300 mb-2">{step.summary}</p>
                                <p className="text-sm text-gray-500 leading-relaxed">{step.receipt}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

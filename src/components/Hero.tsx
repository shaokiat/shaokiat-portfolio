"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Cloud } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-6 z-10 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative mx-auto md:mx-0 shrink-0 order-1 md:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
                        <Image
                            src={`${basePath}/profile.jpg`}
                            alt="Shao Kiat"
                            width={288}
                            height={288}
                            className="relative w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center md:text-left order-2 md:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 mb-4 backdrop-blur-sm">
                            <Cloud className="w-3 h-3 text-blue-400" />
                            Forward Deployed Engineer · AI
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                            I build AI people <br className="hidden md:block" />
                            actually{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                use.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-5 max-w-xl mx-auto md:mx-0 leading-relaxed">
                            I&apos;m{" "}
                            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                Shao Kiat
                            </span>
                            . My predictive maintenance model runs inside Micron&apos;s
                            fabs. Getting it built was the easy part. Getting engineers to
                            trust it over their own instincts took longer.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 text-sm text-gray-400 mb-2">
                            <span>🏂 Snowboarding</span>
                            <span className="text-gray-600">·</span>
                            <span>🏍️ Motorcycling</span>
                            <span className="text-gray-600">·</span>
                            <span>🎾 Tennis</span>
                            <span className="text-gray-600">·</span>
                            <span>🤿 Diving</span>
                            <span className="text-gray-600">·</span>
                            <span>📱 Photography</span>
                        </div>

                        <p className="text-sm text-gray-400 mb-6 max-w-xl mx-auto md:mx-0">
                            By day I build systems people can trust. By weekend I&apos;m on
                            two wheels or underwater, actively testing how much I trust
                            myself.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
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
                </div>
            </div>
        </section>
    );
}

"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-white/5">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 hover:to-white transition-all"
                >
                    Shao Kiat
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
                    <Link href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">Experience</Link>
                    <Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</Link>
                    <Link href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</Link>
                    <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/shaokiat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/shaokiat/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:shaokiat@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

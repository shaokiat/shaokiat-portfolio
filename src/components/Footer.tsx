export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="container mx-auto px-6 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Shao Kiat. All rights reserved.</p>
                <div className="mt-4 flex flex-col items-center gap-2">
                    <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                        Crafted with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">Antigravity AI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

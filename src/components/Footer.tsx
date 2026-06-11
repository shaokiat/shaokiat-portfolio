export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="container mx-auto px-6 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Shao Kiat. All rights reserved.</p>
                <p className="mt-4">Built with Next.js, Tailwind CSS &amp; Framer Motion</p>
            </div>
        </footer>
    );
}
